var e=e=>{switch(e){case`index`:return`---
title: "1. System Landscape: Northstar Hybrid RAG + LoRA"
---
graph TB
  Customer@{ shape: rectangle, label: "Customer" }
  Support_evaluator@{ shape: rectangle, label: "Benchmark Suite" }
  subgraph Northstar["\`Northstar Support AI\`"]
    Northstar.Retriever@{ shape: rectangle, label: "Shared Dense Retriever" }
    Northstar.Kb@{ shape: rectangle, label: "Policy Sources" }
    Northstar.Lora_weights@{ shape: rectangle, label: "LoRA Adapter" }
    Northstar.Prompt_builder@{ shape: rectangle, label: "Prompt Formatter" }
    Northstar.Qdrant@{ shape: rectangle, label: "Vector Index" }
    Northstar.Base_model@{ shape: rectangle, label: "SmolLM2-135M Base" }
    Northstar.Guardrail@{ shape: rectangle, label: "Citation & Abstention Guard" }
  end
  Customer -. "\`Submits question\`" .-> Northstar.Retriever
  Support_evaluator -. "\`Executes benchmark questions\`" .-> Northstar.Retriever
  Northstar.Kb -. "\`Paragraph chunking + embedding\`" .-> Northstar.Qdrant
  Northstar.Retriever -. "\`Cosine similarity search (top-3, min_score=0.30)\`" .-> Northstar.Qdrant
  Northstar.Retriever -. "\`Supplies accepted evidence chunks\`" .-> Northstar.Prompt_builder
  Northstar.Prompt_builder -. "\`Inference prompt\`" .-> Northstar.Base_model
  Northstar.Base_model -. "\`Greedy token generation (max 80 tokens)\`" .-> Northstar.Guardrail
  Northstar.Lora_weights -. "\`Adapts query & value attention weights\`" .-> Northstar.Base_model
  Northstar.Guardrail -. "\`Final verified answer or escalation\`" .-> Customer
`;case`retrieval_pipeline`:return`---
title: "2. Policy Ingestion & Dense Retrieval Pipeline"
---
graph TB
  Customer@{ shape: rectangle, label: "Customer" }
  subgraph Northstar["\`Northstar Support AI\`"]
    Northstar.Kb@{ shape: rectangle, label: "Policy Sources" }
    Northstar.Retriever@{ shape: rectangle, label: "Shared Dense Retriever" }
    Northstar.Qdrant@{ shape: rectangle, label: "Vector Index" }
    Northstar.Prompt_builder@{ shape: rectangle, label: "Prompt Formatter" }
  end
  Northstar.Kb -. "\`Paragraph chunking + embedding\`" .-> Northstar.Qdrant
  Customer -. "\`Submits question\`" .-> Northstar.Retriever
  Northstar.Retriever -. "\`Cosine similarity search (top-3, min_score=0.30)\`" .-> Northstar.Qdrant
  Northstar.Retriever -. "\`Supplies accepted evidence chunks\`" .-> Northstar.Prompt_builder
`;case`hybrid_generation`:return`---
title: "3. Hybrid LoRA Generation & Citation Guardrail"
---
graph TB
  subgraph Northstar["\`Northstar Support AI\`"]
    Northstar.Prompt_builder@{ shape: rectangle, label: "Prompt Formatter" }
    Northstar.Lora_weights@{ shape: rectangle, label: "LoRA Adapter" }
    Northstar.Base_model@{ shape: rectangle, label: "SmolLM2-135M Base" }
    Northstar.Guardrail@{ shape: rectangle, label: "Citation & Abstention Guard" }
  end
  Customer@{ shape: rectangle, label: "Customer" }
  Northstar.Prompt_builder -. "\`Inference prompt\`" .-> Northstar.Base_model
  Northstar.Lora_weights -. "\`Adapts query & value attention weights\`" .-> Northstar.Base_model
  Northstar.Base_model -. "\`Greedy token generation (max 80 tokens)\`" .-> Northstar.Guardrail
  Northstar.Guardrail -. "\`Final verified answer or escalation\`" .-> Customer
`;default:throw Error(`Unknown viewId: `+e)}};export{e as mmdSource};