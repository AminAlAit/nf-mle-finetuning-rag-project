var e=e=>{switch(e){case`index`:return`@startuml
title "1. System Landscape: Northstar Hybrid RAG + LoRA"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<Customer>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Support_evaluator>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<NorthstarRetriever>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<NorthstarKb>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<NorthstarLora_weights>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<NorthstarPrompt_builder>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<NorthstarQdrant>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<NorthstarBase_model>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<NorthstarGuardrail>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "==Customer\\n\\nSubmits support questions (refunds, shipping, subscriptions, incidents)" <<Customer>> as Customer
rectangle "==Benchmark Suite\\n\\nRuns 14 held-out evaluation cases against all pipelines" <<Support_evaluator>> as Support_evaluator
rectangle "Northstar Support AI" <<Northstar>> as Northstar {
  skinparam RectangleBorderColor<<Northstar>> #3b82f6
  skinparam RectangleFontColor<<Northstar>> #3b82f6
  skinparam RectangleBorderStyle<<Northstar>> dashed

  rectangle "==Shared Dense Retriever\\n<size:10>[SentenceTransformers]</size>\\n\\nEmbeds questions (all-MiniLM-L6-v2) and fetches top-k chunks >= 0.30" <<NorthstarRetriever>> as NorthstarRetriever
  rectangle "==Policy Sources\\n<size:10>[Markdown files]</size>\\n\\n6 approved Markdown policies (truth layer)" <<NorthstarKb>> as NorthstarKb
  rectangle "==LoRA Adapter\\n<size:10>[PEFT]</size>\\n\\nTrained low-rank matrices on q_proj & v_proj (0.34% params)" <<NorthstarLora_weights>> as NorthstarLora_weights
  rectangle "==Prompt Formatter\\n<size:10>[HuggingFace Tokenizer]</size>\\n\\nUniform chat prompt with system instruction, [source-id] evidence, and query" <<NorthstarPrompt_builder>> as NorthstarPrompt_builder
  rectangle "==Vector Index\\n<size:10>[Qdrant (Local In-Memory)]</size>\\n\\nStores dense chunk embeddings with metadata" <<NorthstarQdrant>> as NorthstarQdrant
  rectangle "==SmolLM2-135M Base\\n<size:10>[PyTorch / Transformers]</size>\\n\\nFrozen 135M parameter causal language model" <<NorthstarBase_model>> as NorthstarBase_model
  rectangle "==Citation & Abstention Guard\\n<size:10>[Deterministic Rules]</size>\\n\\nEnforces [source-id] citations; rejects hallucinations; triggers fallback" <<NorthstarGuardrail>> as NorthstarGuardrail
}

Customer .[#8D8D8D,thickness=2].> NorthstarRetriever : <color:#8D8D8D>Submits question
Support_evaluator .[#8D8D8D,thickness=2].> NorthstarRetriever : <color:#8D8D8D>Executes benchmark questions
NorthstarKb .[#8D8D8D,thickness=2].> NorthstarQdrant : <color:#8D8D8D>Paragraph chunking + embedding
NorthstarRetriever .[#8D8D8D,thickness=2].> NorthstarQdrant : <color:#8D8D8D>Cosine similarity search (top-3, min_score=0.30)
NorthstarRetriever .[#8D8D8D,thickness=2].> NorthstarPrompt_builder : <color:#8D8D8D>Supplies accepted evidence chunks
NorthstarPrompt_builder .[#8D8D8D,thickness=2].> NorthstarBase_model : <color:#8D8D8D>Inference prompt
NorthstarBase_model .[#8D8D8D,thickness=2].> NorthstarGuardrail : <color:#8D8D8D>Greedy token generation (max 80 tokens)
NorthstarLora_weights .[#8D8D8D,thickness=2].> NorthstarBase_model : <color:#8D8D8D>Adapts query & value attention weights
NorthstarGuardrail .[#8D8D8D,thickness=2].> Customer : <color:#8D8D8D>Final verified answer or escalation
@enduml
`;case`retrieval_pipeline`:return`@startuml
title "2. Policy Ingestion & Dense Retrieval Pipeline"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<Customer>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<NorthstarKb>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<NorthstarRetriever>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<NorthstarQdrant>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<NorthstarPrompt_builder>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "==Customer\\n\\nSubmits support questions (refunds, shipping, subscriptions, incidents)" <<Customer>> as Customer
rectangle "Northstar Support AI" <<Northstar>> as Northstar {
  skinparam RectangleBorderColor<<Northstar>> #3b82f6
  skinparam RectangleFontColor<<Northstar>> #3b82f6
  skinparam RectangleBorderStyle<<Northstar>> dashed

  rectangle "==Policy Sources\\n<size:10>[Markdown files]</size>\\n\\n6 approved Markdown policies (truth layer)" <<NorthstarKb>> as NorthstarKb
  rectangle "==Shared Dense Retriever\\n<size:10>[SentenceTransformers]</size>\\n\\nEmbeds questions (all-MiniLM-L6-v2) and fetches top-k chunks >= 0.30" <<NorthstarRetriever>> as NorthstarRetriever
  rectangle "==Vector Index\\n<size:10>[Qdrant (Local In-Memory)]</size>\\n\\nStores dense chunk embeddings with metadata" <<NorthstarQdrant>> as NorthstarQdrant
  rectangle "==Prompt Formatter\\n<size:10>[HuggingFace Tokenizer]</size>\\n\\nUniform chat prompt with system instruction, [source-id] evidence, and query" <<NorthstarPrompt_builder>> as NorthstarPrompt_builder
}

NorthstarKb .[#8D8D8D,thickness=2].> NorthstarQdrant : <color:#8D8D8D>Paragraph chunking + embedding
Customer .[#8D8D8D,thickness=2].> NorthstarRetriever : <color:#8D8D8D>Submits question
NorthstarRetriever .[#8D8D8D,thickness=2].> NorthstarQdrant : <color:#8D8D8D>Cosine similarity search (top-3, min_score=0.30)
NorthstarRetriever .[#8D8D8D,thickness=2].> NorthstarPrompt_builder : <color:#8D8D8D>Supplies accepted evidence chunks
@enduml
`;case`hybrid_generation`:return`@startuml
title "3. Hybrid LoRA Generation & Citation Guardrail"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<NorthstarPrompt_builder>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<NorthstarLora_weights>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<NorthstarBase_model>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<NorthstarGuardrail>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Customer>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "Northstar Support AI" <<Northstar>> as Northstar {
  skinparam RectangleBorderColor<<Northstar>> #3b82f6
  skinparam RectangleFontColor<<Northstar>> #3b82f6
  skinparam RectangleBorderStyle<<Northstar>> dashed

  rectangle "==Prompt Formatter\\n<size:10>[HuggingFace Tokenizer]</size>\\n\\nUniform chat prompt with system instruction, [source-id] evidence, and query" <<NorthstarPrompt_builder>> as NorthstarPrompt_builder
  rectangle "==LoRA Adapter\\n<size:10>[PEFT]</size>\\n\\nTrained low-rank matrices on q_proj & v_proj (0.34% params)" <<NorthstarLora_weights>> as NorthstarLora_weights
  rectangle "==SmolLM2-135M Base\\n<size:10>[PyTorch / Transformers]</size>\\n\\nFrozen 135M parameter causal language model" <<NorthstarBase_model>> as NorthstarBase_model
  rectangle "==Citation & Abstention Guard\\n<size:10>[Deterministic Rules]</size>\\n\\nEnforces [source-id] citations; rejects hallucinations; triggers fallback" <<NorthstarGuardrail>> as NorthstarGuardrail
}
rectangle "==Customer\\n\\nSubmits support questions (refunds, shipping, subscriptions, incidents)" <<Customer>> as Customer

NorthstarPrompt_builder .[#8D8D8D,thickness=2].> NorthstarBase_model : <color:#8D8D8D>Inference prompt
NorthstarLora_weights .[#8D8D8D,thickness=2].> NorthstarBase_model : <color:#8D8D8D>Adapts query & value attention weights
NorthstarBase_model .[#8D8D8D,thickness=2].> NorthstarGuardrail : <color:#8D8D8D>Greedy token generation (max 80 tokens)
NorthstarGuardrail .[#8D8D8D,thickness=2].> Customer : <color:#8D8D8D>Final verified answer or escalation
@enduml
`;default:throw Error(`Unknown viewId: `+e)}};export{e as pumlSource};