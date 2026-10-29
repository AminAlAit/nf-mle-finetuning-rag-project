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
  Customer -. "\`Step 1: Submits question\`" .-> Northstar.Retriever
  Support_evaluator -. "\`Executes evaluation benchmark\`" .-> Northstar.Retriever
  Northstar.Kb -. "\`Ingests policy chunks and embeddings\`" .-> Northstar.Qdrant
  Northstar.Retriever -. "\`Step 2: Cosine similarity search (top-k=3, min_score=0.30)\`" .-> Northstar.Qdrant
  Northstar.Retriever -. "\`Step 3: Passes accepted evidence chunks\`" .-> Northstar.Prompt_builder
  Northstar.Prompt_builder -. "\`Step 4: Feeds formatted prompt to model\`" .-> Northstar.Generator
  Northstar.Generator -. "\`Step 5: Streams greedy generated tokens\`" .-> Northstar.Guardrail
  Northstar.Guardrail -. "\`Step 6: Delivers verified answer or escalates\`" .-> Customer
`;case`code_walkthrough`:return`---
title: "2. Onboarding Walkthrough: End-to-End Code Execution"
---
graph TB
  Customer@{ shape: rectangle, label: "Customer" }
  subgraph Northstar["\`Northstar Support AI\`"]
    Northstar.Kb@{ shape: rectangle, label: "Policy Sources" }
    Northstar.Retriever@{ shape: rectangle, label: "1. Shared Dense Retriever" }
    Northstar.Qdrant@{ shape: rectangle, label: "Vector Index" }
    Northstar.Prompt_builder@{ shape: rectangle, label: "2. Prompt Formatter" }
    Northstar.Generator@{ shape: rectangle, label: "3. Generation Engine" }
    Northstar.Guardrail@{ shape: rectangle, label: "4. Citation & Safety Guardrail" }
  end
  Northstar.Kb -. "\`Ingests policy chunks and embeddings\`" .-> Northstar.Qdrant
  Customer -. "\`Step 1: Submits question\`" .-> Northstar.Retriever
  Northstar.Retriever -. "\`Step 2: Cosine similarity search (top-k=3, min_score=0.30)\`" .-> Northstar.Qdrant
  Northstar.Retriever -. "\`Step 3: Passes accepted evidence chunks\`" .-> Northstar.Prompt_builder
  Northstar.Prompt_builder -. "\`Step 4: Feeds formatted prompt to model\`" .-> Northstar.Generator
  Northstar.Generator -. "\`Step 5: Streams greedy generated tokens\`" .-> Northstar.Guardrail
  Northstar.Guardrail -. "\`Step 6: Delivers verified answer or escalates\`" .-> Customer
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
  Customer -. "\`Step 1: Submits question\`" .-> Northstar.Retriever
  Northstar.Retriever -. "\`Step 2: Cosine similarity search (top-k=3, min_score=0.30)\`" .-> Northstar.Qdrant
  Northstar.Retriever -. "\`Step 3: Passes accepted evidence chunks\`" .-> Northstar.Prompt_builder
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
  Northstar.Prompt_builder -. "\`Step 4: Feeds formatted prompt to model\`" .-> Northstar.Generator
  Northstar.Generator -. "\`Step 5: Streams greedy generated tokens\`" .-> Northstar.Guardrail
  Northstar.Guardrail -. "\`Step 6: Delivers verified answer or escalates\`" .-> Customer
`;default:throw Error(`Unknown viewId: `+e)}};export{e as mmdSource};