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
    label: "1. Shared Dense Retriever"
  }
  Kb: {
    label: "Policy Sources"
  }
  Prompt_builder: {
    label: "2. Prompt Formatter"
  }
  Qdrant: {
    label: "Vector Index"
  }
  Generator: {
    label: "3. Generation Engine"
  }
  Guardrail: {
    label: "4. Citation & Safety Guardrail"
  }
}

Customer -> Northstar.Retriever: "Submits support question"
Support_evaluator -> Northstar.Retriever: "Executes evaluation benchmark"
Northstar.Kb -> Northstar.Qdrant: "Ingests policy chunks and embeddings"
Northstar.Retriever -> Northstar.Qdrant: "Cosine similarity search (top-k=3, min_score=0.30)"
Northstar.Retriever -> Northstar.Prompt_builder: "Passes accepted evidence chunks"
Northstar.Prompt_builder -> Northstar.Generator: "Feeds formatted prompt to model"
Northstar.Generator -> Northstar.Guardrail: "Streams greedy generated tokens"
Northstar.Guardrail -> Customer: "Delivers verified answer or escalates"
`;case`system_walkthrough`:return`direction: right

Customer: {
  label: "Customer"
}
NorthstarRetriever: {
  label: "1. Shared Dense Retriever"
}
NorthstarQdrant: {
  label: "Vector Index"
}
NorthstarPrompt_builder: {
  label: "2. Prompt Formatter"
}
NorthstarGenerator: {
  label: "3. Generation Engine"
}
NorthstarGuardrail: {
  label: "4. Citation & Safety Guardrail"
}

Customer -> NorthstarRetriever: "Step 1: Customer submits question"
NorthstarRetriever -> NorthstarQdrant: "Step 2: Embeds query & searches cosine similarity"
NorthstarRetriever -> NorthstarPrompt_builder: "Step 3: Passes accepted policy chunks"
NorthstarPrompt_builder -> NorthstarGenerator: "Step 4: Formats chat prompt with system instruction"
NorthstarGenerator -> NorthstarGuardrail: "Step 5: Streams tokens into citation guard"
NorthstarGuardrail -> Customer: "Step 6: Delivers verified answer or human escalation"
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
    label: "1. Shared Dense Retriever"
  }
  Qdrant: {
    label: "Vector Index"
  }
  Prompt_builder: {
    label: "2. Prompt Formatter"
  }
}

Northstar.Kb -> Northstar.Qdrant: "Ingests policy chunks and embeddings"
Customer -> Northstar.Retriever: "Submits support question"
Northstar.Retriever -> Northstar.Qdrant: "Cosine similarity search (top-k=3, min_score=0.30)"
Northstar.Retriever -> Northstar.Prompt_builder: "Passes accepted evidence chunks"
`;case`hybrid_generation`:return`direction: down

Northstar: {
  label: "Northstar Support AI"

  Prompt_builder: {
    label: "2. Prompt Formatter"
  }
  Generator: {
    label: "3. Generation Engine"
  }
  Guardrail: {
    label: "4. Citation & Safety Guardrail"
  }
}
Customer: {
  label: "Customer"
}

Northstar.Prompt_builder -> Northstar.Generator: "Feeds formatted prompt to model"
Northstar.Generator -> Northstar.Guardrail: "Streams greedy generated tokens"
Northstar.Guardrail -> Customer: "Delivers verified answer or escalates"
`;case`generation_walkthrough`:return`direction: right

NorthstarPrompt_builder: {
  label: "2. Prompt Formatter"
}
NorthstarGenerator: {
  label: "3. Generation Engine"
}
NorthstarGuardrail: {
  label: "4. Citation & Safety Guardrail"
}
Customer: {
  label: "Customer"
}

NorthstarPrompt_builder -> NorthstarGenerator: "Step 1: Injects prompt with [source-id] evidence"
NorthstarGenerator -> NorthstarGuardrail: "Step 2: SmolLM2 + LoRA outputs answer with candidate [source-id]"
NorthstarGuardrail -> Customer: "Step 3: Validates citations against retrieved hits; rejects if missing"
`;default:throw Error(`Unknown viewId: `+e)}};export{e as d2Source};