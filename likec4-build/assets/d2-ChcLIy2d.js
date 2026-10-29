var e=e=>{switch(e){case`index`:return`direction: down

Customer: {
  label: "Customer"
}
Support_evaluator: {
  label: "Benchmark Suite"
}
Northstar: {
  label: "Northstar Support AI"

  Retriever: {
    label: "Shared Dense Retriever"
  }
  Kb: {
    label: "Policy Sources"
  }
  Lora_weights: {
    label: "LoRA Adapter"
  }
  Prompt_builder: {
    label: "Prompt Formatter"
  }
  Qdrant: {
    label: "Vector Index"
  }
  Base_model: {
    label: "SmolLM2-135M Base"
  }
  Guardrail: {
    label: "Citation & Abstention Guard"
  }
}

Customer -> Northstar.Retriever: "Submits question"
Support_evaluator -> Northstar.Retriever: "Executes benchmark questions"
Northstar.Kb -> Northstar.Qdrant: "Paragraph chunking + embedding"
Northstar.Retriever -> Northstar.Qdrant: "Cosine similarity search (top-3, min_score=0.30)"
Northstar.Retriever -> Northstar.Prompt_builder: "Supplies accepted evidence chunks"
Northstar.Prompt_builder -> Northstar.Base_model: "Inference prompt"
Northstar.Base_model -> Northstar.Guardrail: "Greedy token generation (max 80 tokens)"
Northstar.Lora_weights -> Northstar.Base_model: "Adapts query & value attention weights"
Northstar.Guardrail -> Customer: "Final verified answer or escalation"
`;case`retrieval_pipeline`:return`direction: down

Customer: {
  label: "Customer"
}
Northstar: {
  label: "Northstar Support AI"

  Kb: {
    label: "Policy Sources"
  }
  Retriever: {
    label: "Shared Dense Retriever"
  }
  Qdrant: {
    label: "Vector Index"
  }
  Prompt_builder: {
    label: "Prompt Formatter"
  }
}

Northstar.Kb -> Northstar.Qdrant: "Paragraph chunking + embedding"
Customer -> Northstar.Retriever: "Submits question"
Northstar.Retriever -> Northstar.Qdrant: "Cosine similarity search (top-3, min_score=0.30)"
Northstar.Retriever -> Northstar.Prompt_builder: "Supplies accepted evidence chunks"
`;case`hybrid_generation`:return`direction: down

Northstar: {
  label: "Northstar Support AI"

  Prompt_builder: {
    label: "Prompt Formatter"
  }
  Lora_weights: {
    label: "LoRA Adapter"
  }
  Base_model: {
    label: "SmolLM2-135M Base"
  }
  Guardrail: {
    label: "Citation & Abstention Guard"
  }
}
Customer: {
  label: "Customer"
}

Northstar.Prompt_builder -> Northstar.Base_model: "Inference prompt"
Northstar.Lora_weights -> Northstar.Base_model: "Adapts query & value attention weights"
Northstar.Base_model -> Northstar.Guardrail: "Greedy token generation (max 80 tokens)"
Northstar.Guardrail -> Customer: "Final verified answer or escalation"
`;default:throw Error(`Unknown viewId: `+e)}};export{e as d2Source};