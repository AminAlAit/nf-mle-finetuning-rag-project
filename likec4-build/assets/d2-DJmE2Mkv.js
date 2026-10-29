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

Customer -> Northstar.Retriever: "Step 1: Submits question"
Support_evaluator -> Northstar.Retriever: "Executes evaluation benchmark"
Northstar.Kb -> Northstar.Qdrant: "Ingests policy chunks and embeddings"
Northstar.Retriever -> Northstar.Qdrant: "Step 2: Cosine similarity search (top-k=3, min_score=0.30)"
Northstar.Retriever -> Northstar.Prompt_builder: "Step 3: Passes accepted evidence chunks"
Northstar.Prompt_builder -> Northstar.Generator: "Step 4: Feeds formatted prompt to model"
Northstar.Generator -> Northstar.Guardrail: "Step 5: Streams greedy generated tokens"
Northstar.Guardrail -> Customer: "Step 6: Delivers verified answer or escalates"
`;case`code_walkthrough`:return`direction: down

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
  Generator: {
    label: "3. Generation Engine"
  }
  Guardrail: {
    label: "4. Citation & Safety Guardrail"
  }
}

Northstar.Kb -> Northstar.Qdrant: "Ingests policy chunks and embeddings"
Customer -> Northstar.Retriever: "Step 1: Submits question"
Northstar.Retriever -> Northstar.Qdrant: "Step 2: Cosine similarity search (top-k=3, min_score=0.30)"
Northstar.Retriever -> Northstar.Prompt_builder: "Step 3: Passes accepted evidence chunks"
Northstar.Prompt_builder -> Northstar.Generator: "Step 4: Feeds formatted prompt to model"
Northstar.Generator -> Northstar.Guardrail: "Step 5: Streams greedy generated tokens"
Northstar.Guardrail -> Customer: "Step 6: Delivers verified answer or escalates"
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
Customer -> Northstar.Retriever: "Step 1: Submits question"
Northstar.Retriever -> Northstar.Qdrant: "Step 2: Cosine similarity search (top-k=3, min_score=0.30)"
Northstar.Retriever -> Northstar.Prompt_builder: "Step 3: Passes accepted evidence chunks"
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

Northstar.Prompt_builder -> Northstar.Generator: "Step 4: Feeds formatted prompt to model"
Northstar.Generator -> Northstar.Guardrail: "Step 5: Streams greedy generated tokens"
Northstar.Guardrail -> Customer: "Step 6: Delivers verified answer or escalates"
`;default:throw Error(`Unknown viewId: `+e)}};export{e as d2Source};