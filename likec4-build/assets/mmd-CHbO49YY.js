var e=e=>{switch(e){case`index`:return`---
title: "1. System Landscape: Northstar Hybrid RAG + LoRA"
---
graph TB
  Customer@{ shape: rectangle, label: "Customer" }
  Support_evaluator@{ shape: rectangle, label: "Benchmark Suite" }
  subgraph Northstar["\`Northstar Support AI\`"]
    Northstar.Retriever@{ shape: rectangle, label: "1. Shared Dense Retriever" }
    Northstar.Kb@{ shape: rectangle, label: "Policy Sources" }
    Northstar.Prompt_builder@{ shape: rectangle, label: "2. Prompt Formatter" }
    Northstar.Qdrant@{ shape: rectangle, label: "Vector Index" }
    Northstar.Generator@{ shape: rectangle, label: "3. Generation Engine" }
    Northstar.Guardrail@{ shape: rectangle, label: "4. Citation & Safety Guardrail" }
  end
  Customer -. "\`Submits support question\`" .-> Northstar.Retriever
  Support_evaluator -. "\`Executes evaluation benchmark\`" .-> Northstar.Retriever
  Northstar.Kb -. "\`Ingests policy chunks and embeddings\`" .-> Northstar.Qdrant
  Northstar.Retriever -. "\`Cosine similarity search (top-k=3, min_score=0.30)\`" .-> Northstar.Qdrant
  Northstar.Retriever -. "\`Passes accepted evidence chunks\`" .-> Northstar.Prompt_builder
  Northstar.Prompt_builder -. "\`Feeds formatted prompt to model\`" .-> Northstar.Generator
  Northstar.Generator -. "\`Streams greedy generated tokens\`" .-> Northstar.Guardrail
  Northstar.Guardrail -. "\`Delivers verified answer or escalates\`" .-> Customer
`;case`system_walkthrough`:return`---
title: "1. System Walkthrough: Step-by-Step Flow"
---
graph LR
  Customer@{ shape: rectangle, label: "Customer" }
  NorthstarRetriever@{ shape: rectangle, label: "1. Shared Dense Retriever" }
  NorthstarQdrant@{ shape: rectangle, label: "Vector Index" }
  NorthstarPrompt_builder@{ shape: rectangle, label: "2. Prompt Formatter" }
  NorthstarGenerator@{ shape: rectangle, label: "3. Generation Engine" }
  NorthstarGuardrail@{ shape: rectangle, label: "4. Citation & Safety Guardrail" }
  Customer -. "\`Step 1: Customer submits question\`" .-> NorthstarRetriever
  NorthstarRetriever -. "\`Step 2: Embeds query & searches cosine similarity\`" .-> NorthstarQdrant
  NorthstarRetriever -. "\`Step 3: Passes accepted policy chunks\`" .-> NorthstarPrompt_builder
  NorthstarPrompt_builder -. "\`Step 4: Formats chat prompt with system instruction\`" .-> NorthstarGenerator
  NorthstarGenerator -. "\`Step 5: Streams tokens into citation guard\`" .-> NorthstarGuardrail
  NorthstarGuardrail -. "\`Step 6: Delivers verified answer or human escalation\`" .-> Customer
`;case`retrieval_pipeline`:return`---
title: "3. Policy Ingestion & Dense Retrieval"
---
graph TB
  Customer@{ shape: rectangle, label: "Customer" }
  subgraph Northstar["\`Northstar Support AI\`"]
    Northstar.Kb@{ shape: rectangle, label: "Policy Sources" }
    Northstar.Retriever@{ shape: rectangle, label: "1. Shared Dense Retriever" }
    Northstar.Qdrant@{ shape: rectangle, label: "Vector Index" }
    Northstar.Prompt_builder@{ shape: rectangle, label: "2. Prompt Formatter" }
  end
  Northstar.Kb -. "\`Ingests policy chunks and embeddings\`" .-> Northstar.Qdrant
  Customer -. "\`Submits support question\`" .-> Northstar.Retriever
  Northstar.Retriever -. "\`Cosine similarity search (top-k=3, min_score=0.30)\`" .-> Northstar.Qdrant
  Northstar.Retriever -. "\`Passes accepted evidence chunks\`" .-> Northstar.Prompt_builder
`;case`hybrid_generation`:return`---
title: "4. Generation Engine & Citation Guardrail"
---
graph TB
  subgraph Northstar["\`Northstar Support AI\`"]
    Northstar.Prompt_builder@{ shape: rectangle, label: "2. Prompt Formatter" }
    Northstar.Generator@{ shape: rectangle, label: "3. Generation Engine" }
    Northstar.Guardrail@{ shape: rectangle, label: "4. Citation & Safety Guardrail" }
  end
  Customer@{ shape: rectangle, label: "Customer" }
  Northstar.Prompt_builder -. "\`Feeds formatted prompt to model\`" .-> Northstar.Generator
  Northstar.Generator -. "\`Streams greedy generated tokens\`" .-> Northstar.Guardrail
  Northstar.Guardrail -. "\`Delivers verified answer or escalates\`" .-> Customer
`;case`generation_walkthrough`:return`---
title: "4. Generation Walkthrough: Step-by-Step Guardrail"
---
graph LR
  NorthstarPrompt_builder@{ shape: rectangle, label: "2. Prompt Formatter" }
  NorthstarGenerator@{ shape: rectangle, label: "3. Generation Engine" }
  NorthstarGuardrail@{ shape: rectangle, label: "4. Citation & Safety Guardrail" }
  Customer@{ shape: rectangle, label: "Customer" }
  NorthstarPrompt_builder -. "\`Step 1: Injects prompt with [source-id] evidence\`" .-> NorthstarGenerator
  NorthstarGenerator -. "\`Step 2: SmolLM2 + LoRA outputs answer with candidate [source-id]\`" .-> NorthstarGuardrail
  NorthstarGuardrail -. "\`Step 3: Validates citations against retrieved hits; rejects if missing\`" .-> Customer
`;default:throw Error(`Unknown viewId: `+e)}};export{e as mmdSource};