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
skinparam rectangle<<NorthstarGenerator>>{
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

  rectangle "==1. Shared Dense Retriever\\n<size:10>[SentenceTransformers]</size>\\n\\nretrieval.py: Embeds question (all-MiniLM-L6-v2) & retrieves top-k chunks >= 0.30" <<NorthstarRetriever>> as NorthstarRetriever
  rectangle "==Policy Sources\\n<size:10>[Markdown files]</size>\\n\\n6 approved Markdown policies (knowledge_base/*.md)" <<NorthstarKb>> as NorthstarKb
  rectangle "==2. Prompt Formatter\\n<size:10>[HuggingFace Tokenizer]</size>\\n\\nprompts.py: Combines system instruction, [source-id] evidence, and question" <<NorthstarPrompt_builder>> as NorthstarPrompt_builder
  rectangle "==Vector Index\\n<size:10>[Qdrant (Local In-Memory)]</size>\\n\\nStores dense chunk embeddings with metadata (store.py)" <<NorthstarQdrant>> as NorthstarQdrant
  rectangle "==3. Generation Engine\\n<size:10>[PyTorch + PEFT]</size>\\n\\ngeneration.py: Executes base-only, rag-base, or rag-lora (SmolLM2-135M)" <<NorthstarGenerator>> as NorthstarGenerator
  rectangle "==4. Citation & Safety Guardrail\\n<size:10>[Deterministic Rules]</size>\\n\\npipeline.py: Validates [source-id] citations against evidence; triggers human fallback if invalid" <<NorthstarGuardrail>> as NorthstarGuardrail
}

Customer .[#8D8D8D,thickness=2].> NorthstarRetriever : <color:#8D8D8D>Submits support question
Support_evaluator .[#8D8D8D,thickness=2].> NorthstarRetriever : <color:#8D8D8D>Executes evaluation benchmark
NorthstarKb .[#8D8D8D,thickness=2].> NorthstarQdrant : <color:#8D8D8D>Ingests policy chunks and embeddings
NorthstarRetriever .[#8D8D8D,thickness=2].> NorthstarQdrant : <color:#8D8D8D>Cosine similarity search (top-k=3, min_score=0.30)
NorthstarRetriever .[#8D8D8D,thickness=2].> NorthstarPrompt_builder : <color:#8D8D8D>Passes accepted evidence chunks
NorthstarPrompt_builder .[#8D8D8D,thickness=2].> NorthstarGenerator : <color:#8D8D8D>Feeds formatted prompt to model
NorthstarGenerator .[#8D8D8D,thickness=2].> NorthstarGuardrail : <color:#8D8D8D>Streams greedy generated tokens
NorthstarGuardrail .[#8D8D8D,thickness=2].> Customer : <color:#8D8D8D>Delivers verified answer or escalates
@enduml
`;case`system_walkthrough`:return`@startuml
title "1. System Walkthrough: Step-by-Step Flow"
left to right direction

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
skinparam rectangle<<NorthstarGenerator>>{
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
rectangle "==1. Shared Dense Retriever\\n<size:10>[SentenceTransformers]</size>\\n\\nretrieval.py: Embeds question (all-MiniLM-L6-v2) & retrieves top-k chunks >= 0.30" <<NorthstarRetriever>> as NorthstarRetriever
rectangle "==Vector Index\\n<size:10>[Qdrant (Local In-Memory)]</size>\\n\\nStores dense chunk embeddings with metadata (store.py)" <<NorthstarQdrant>> as NorthstarQdrant
rectangle "==2. Prompt Formatter\\n<size:10>[HuggingFace Tokenizer]</size>\\n\\nprompts.py: Combines system instruction, [source-id] evidence, and question" <<NorthstarPrompt_builder>> as NorthstarPrompt_builder
rectangle "==3. Generation Engine\\n<size:10>[PyTorch + PEFT]</size>\\n\\ngeneration.py: Executes base-only, rag-base, or rag-lora (SmolLM2-135M)" <<NorthstarGenerator>> as NorthstarGenerator
rectangle "==4. Citation & Safety Guardrail\\n<size:10>[Deterministic Rules]</size>\\n\\npipeline.py: Validates [source-id] citations against evidence; triggers human fallback if invalid" <<NorthstarGuardrail>> as NorthstarGuardrail

Customer .[#8D8D8D,thickness=2].> NorthstarRetriever : <color:#8D8D8D>Step 1: Customer submits question
NorthstarRetriever .[#8D8D8D,thickness=2].> NorthstarQdrant : <color:#8D8D8D>Step 2: Embeds query & searches cosine similarity
NorthstarRetriever .[#8D8D8D,thickness=2].> NorthstarPrompt_builder : <color:#8D8D8D>Step 3: Passes accepted policy chunks
NorthstarPrompt_builder .[#8D8D8D,thickness=2].> NorthstarGenerator : <color:#8D8D8D>Step 4: Formats chat prompt with system instruction
NorthstarGenerator .[#8D8D8D,thickness=2].> NorthstarGuardrail : <color:#8D8D8D>Step 5: Streams tokens into citation guard
NorthstarGuardrail .[#8D8D8D,thickness=2].> Customer : <color:#8D8D8D>Step 6: Delivers verified answer or human escalation
@enduml
`;case`retrieval_pipeline`:return`@startuml
title "3. Policy Ingestion & Dense Retrieval"
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

  rectangle "==Policy Sources\\n<size:10>[Markdown files]</size>\\n\\n6 approved Markdown policies (knowledge_base/*.md)" <<NorthstarKb>> as NorthstarKb
  rectangle "==1. Shared Dense Retriever\\n<size:10>[SentenceTransformers]</size>\\n\\nretrieval.py: Embeds question (all-MiniLM-L6-v2) & retrieves top-k chunks >= 0.30" <<NorthstarRetriever>> as NorthstarRetriever
  rectangle "==Vector Index\\n<size:10>[Qdrant (Local In-Memory)]</size>\\n\\nStores dense chunk embeddings with metadata (store.py)" <<NorthstarQdrant>> as NorthstarQdrant
  rectangle "==2. Prompt Formatter\\n<size:10>[HuggingFace Tokenizer]</size>\\n\\nprompts.py: Combines system instruction, [source-id] evidence, and question" <<NorthstarPrompt_builder>> as NorthstarPrompt_builder
}

NorthstarKb .[#8D8D8D,thickness=2].> NorthstarQdrant : <color:#8D8D8D>Ingests policy chunks and embeddings
Customer .[#8D8D8D,thickness=2].> NorthstarRetriever : <color:#8D8D8D>Submits support question
NorthstarRetriever .[#8D8D8D,thickness=2].> NorthstarQdrant : <color:#8D8D8D>Cosine similarity search (top-k=3, min_score=0.30)
NorthstarRetriever .[#8D8D8D,thickness=2].> NorthstarPrompt_builder : <color:#8D8D8D>Passes accepted evidence chunks
@enduml
`;case`hybrid_generation`:return`@startuml
title "4. Generation Engine & Citation Guardrail"
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
skinparam rectangle<<NorthstarGenerator>>{
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

  rectangle "==2. Prompt Formatter\\n<size:10>[HuggingFace Tokenizer]</size>\\n\\nprompts.py: Combines system instruction, [source-id] evidence, and question" <<NorthstarPrompt_builder>> as NorthstarPrompt_builder
  rectangle "==3. Generation Engine\\n<size:10>[PyTorch + PEFT]</size>\\n\\ngeneration.py: Executes base-only, rag-base, or rag-lora (SmolLM2-135M)" <<NorthstarGenerator>> as NorthstarGenerator
  rectangle "==4. Citation & Safety Guardrail\\n<size:10>[Deterministic Rules]</size>\\n\\npipeline.py: Validates [source-id] citations against evidence; triggers human fallback if invalid" <<NorthstarGuardrail>> as NorthstarGuardrail
}
rectangle "==Customer\\n\\nSubmits support questions (refunds, shipping, subscriptions, incidents)" <<Customer>> as Customer

NorthstarPrompt_builder .[#8D8D8D,thickness=2].> NorthstarGenerator : <color:#8D8D8D>Feeds formatted prompt to model
NorthstarGenerator .[#8D8D8D,thickness=2].> NorthstarGuardrail : <color:#8D8D8D>Streams greedy generated tokens
NorthstarGuardrail .[#8D8D8D,thickness=2].> Customer : <color:#8D8D8D>Delivers verified answer or escalates
@enduml
`;case`generation_walkthrough`:return`@startuml
title "4. Generation Walkthrough: Step-by-Step Guardrail"
left to right direction

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
skinparam rectangle<<NorthstarGenerator>>{
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
rectangle "==2. Prompt Formatter\\n<size:10>[HuggingFace Tokenizer]</size>\\n\\nprompts.py: Combines system instruction, [source-id] evidence, and question" <<NorthstarPrompt_builder>> as NorthstarPrompt_builder
rectangle "==3. Generation Engine\\n<size:10>[PyTorch + PEFT]</size>\\n\\ngeneration.py: Executes base-only, rag-base, or rag-lora (SmolLM2-135M)" <<NorthstarGenerator>> as NorthstarGenerator
rectangle "==4. Citation & Safety Guardrail\\n<size:10>[Deterministic Rules]</size>\\n\\npipeline.py: Validates [source-id] citations against evidence; triggers human fallback if invalid" <<NorthstarGuardrail>> as NorthstarGuardrail
rectangle "==Customer\\n\\nSubmits support questions (refunds, shipping, subscriptions, incidents)" <<Customer>> as Customer

NorthstarPrompt_builder .[#8D8D8D,thickness=2].> NorthstarGenerator : <color:#8D8D8D>Step 1: Injects prompt with [source-id] evidence
NorthstarGenerator .[#8D8D8D,thickness=2].> NorthstarGuardrail : <color:#8D8D8D>Step 2: SmolLM2 + LoRA outputs answer with candidate [source-id]
NorthstarGuardrail .[#8D8D8D,thickness=2].> Customer : <color:#8D8D8D>Step 3: Validates citations against retrieved hits; rejects if missing
@enduml
`;default:throw Error(`Unknown viewId: `+e)}};export{e as pumlSource};