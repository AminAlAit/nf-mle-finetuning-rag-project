var e=e=>{switch(e){case`index`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=index,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    subgraph cluster_northstar {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>NORTHSTAR SUPPORT AI</B></FONT>>,
            likec4_depth=1,
            likec4_id=northstar,
            likec4_level=0,
            margin=40,
            style=filled
        ];
        retriever [group=northstar,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">1. Shared Dense Retriever</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">SentenceTransformers</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">retrieval.py: Embeds question<BR/>(all-MiniLM-L6-v2) &amp; retrieves top-k chunks<BR/>&gt;= 0.30</FONT></TD></TR></TABLE>>,
            likec4_id="northstar.retriever",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        kb [group=northstar,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Policy Sources</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">Markdown files</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">6 approved Markdown policies<BR/>(knowledge_base/*.md)</FONT></TD></TR></TABLE>>,
            likec4_id="northstar.kb",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        prompt_builder [group=northstar,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">2. Prompt Formatter</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">HuggingFace Tokenizer</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">prompts.py: Combines system instruction,<BR/>[source-id] evidence, and question</FONT></TD></TR></TABLE>>,
            likec4_id="northstar.prompt_builder",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        qdrant [group=northstar,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Vector Index</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">Qdrant (Local In-Memory)</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Stores dense chunk embeddings with metadata<BR/>(store.py)</FONT></TD></TR></TABLE>>,
            likec4_id="northstar.qdrant",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        generator [group=northstar,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">3. Generation Engine</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">PyTorch + PEFT</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">generation.py: Executes base-only, rag-base,<BR/>or rag-lora (SmolLM2-135M)</FONT></TD></TR></TABLE>>,
            likec4_id="northstar.generator",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        guardrail [group=northstar,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">4. Citation &amp; Safety Guardrail</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">Deterministic Rules</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">pipeline.py: Validates [source-id] citations<BR/>against evidence; triggers human fallback if<BR/>invalid</FONT></TD></TR></TABLE>>,
            likec4_id="northstar.guardrail",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    customer [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Customer</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Submits support questions (refunds, shipping,<BR/>subscriptions, incidents)</FONT></TD></TR></TABLE>>,
        likec4_id=customer,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    customer -> retriever [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Submits support question</FONT></TD></TR></TABLE>>,
        likec4_id="7fsmav",
        style=dashed];
    support_evaluator [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Benchmark Suite</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Runs 14 held-out evaluation cases against all<BR/>pipelines</FONT></TD></TR></TABLE>>,
        likec4_id=support_evaluator,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    support_evaluator -> retriever [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Executes evaluation benchmark</FONT></TD></TR></TABLE>>,
        likec4_id="1j3973k",
        minlen=1,
        style=dashed];
    retriever -> prompt_builder [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Passes accepted evidence chunks</FONT></TD></TR></TABLE>>,
        likec4_id=xlgtrg,
        style=dashed,
        weight=2];
    retriever -> qdrant [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Cosine similarity search (top-k=3,<BR/>min_score=0.30)</FONT></TD></TR></TABLE>>,
        likec4_id="1qmiw16",
        style=dashed,
        weight=2];
    kb -> qdrant [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Ingests policy chunks and embeddings</FONT></TD></TR></TABLE>>,
        likec4_id="1nq36an",
        minlen=1,
        style=dashed];
    prompt_builder -> generator [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Feeds formatted prompt to model</FONT></TD></TR></TABLE>>,
        likec4_id=lvx7z7,
        style=dashed];
    generator -> guardrail [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Streams greedy generated tokens</FONT></TD></TR></TABLE>>,
        likec4_id=peppca,
        style=dashed,
        weight=2];
    guardrail -> customer [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Delivers verified answer or escalates</FONT></TD></TR></TABLE>>,
        likec4_id="1y5xtu0",
        style=dashed];
}
`;case`system_walkthrough`:return`digraph {
  likec4_viewId = "system_walkthrough";
  bgcolor = "transparent";
  layout = "dot";
  compound = true;
  rankdir = "LR";
  splines = "spline";
  outputorder = "nodesfirst";
  nodesep = 1.528;
  ranksep = 1.667;
  pad = 0.209;
  fontname = "Arial";
  ordering = "in";
  graph [
    fontsize = 20;
    labeljust = "l";
    labelloc = "t";
  ];
  edge [
    arrowsize = 0.75;
    fontname = "Arial";
    fontsize = 14;
    penwidth = 2;
    color = "#8D8D8D";
    fontcolor = "#C9C9C9";
    style = "dashed";
  ];
  node [
    fontname = "Arial";
    shape = "rect";
    fillcolor = "#3b82f6";
    fontcolor = "#eff6ff";
    color = "#2563eb";
    style = "filled";
    penwidth = 0;
  ];
  "customer" [
    likec4_id = "customer";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Customer</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Submits support questions (refunds, shipping,<BR/>subscriptions, incidents)</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "retriever" [
    likec4_id = "northstar.retriever";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">1. Shared Dense Retriever</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">SentenceTransformers</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">retrieval.py: Embeds question<BR/>(all-MiniLM-L6-v2) &amp; retrieves top-k chunks<BR/>&gt;= 0.30</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "qdrant" [
    likec4_id = "northstar.qdrant";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Vector Index</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">Qdrant (Local In-Memory)</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Stores dense chunk embeddings with metadata<BR/>(store.py)</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "prompt_builder" [
    likec4_id = "northstar.prompt_builder";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">2. Prompt Formatter</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">HuggingFace Tokenizer</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">prompts.py: Combines system instruction,<BR/>[source-id] evidence, and question</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "generator" [
    likec4_id = "northstar.generator";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">3. Generation Engine</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">PyTorch + PEFT</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">generation.py: Executes base-only, rag-base,<BR/>or rag-lora (SmolLM2-135M)</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "guardrail" [
    likec4_id = "northstar.guardrail";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">4. Citation &amp; Safety Guardrail</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">Deterministic Rules</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">pipeline.py: Validates [source-id] citations<BR/>against evidence; triggers human fallback if<BR/>invalid</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "customer" -> "retriever" [
    likec4_id = "step-01";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>0</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">Step 1: Customer submits question</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "retriever" -> "qdrant" [
    likec4_id = "step-02";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>1</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">Step 2: Embeds query &amp; searches cosine<BR/>similarity</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "retriever" -> "prompt_builder" [
    likec4_id = "step-03";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>2</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">Step 3: Passes accepted policy chunks</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "prompt_builder" -> "generator" [
    likec4_id = "step-04";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>3</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">Step 4: Formats chat prompt with system<BR/>instruction</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "generator" -> "guardrail" [
    likec4_id = "step-05";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>4</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">Step 5: Streams tokens into citation<BR/>guard</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "customer" -> "guardrail" [
    likec4_id = "step-06";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>5</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">Step 6: Delivers verified answer or<BR/>human escalation</FONT></TD></TR></TABLE>>;
    arrowtail = "normal";
    dir = "back";
  ];
}`;case`retrieval_pipeline`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=retrieval_pipeline,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    subgraph cluster_northstar {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>NORTHSTAR SUPPORT AI</B></FONT>>,
            likec4_depth=1,
            likec4_id=northstar,
            likec4_level=0,
            margin=40,
            style=filled
        ];
        kb [group=northstar,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Policy Sources</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">Markdown files</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">6 approved Markdown policies<BR/>(knowledge_base/*.md)</FONT></TD></TR></TABLE>>,
            likec4_id="northstar.kb",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        retriever [group=northstar,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">1. Shared Dense Retriever</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">SentenceTransformers</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">retrieval.py: Embeds question<BR/>(all-MiniLM-L6-v2) &amp; retrieves top-k chunks<BR/>&gt;= 0.30</FONT></TD></TR></TABLE>>,
            likec4_id="northstar.retriever",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        qdrant [group=northstar,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Vector Index</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">Qdrant (Local In-Memory)</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Stores dense chunk embeddings with metadata<BR/>(store.py)</FONT></TD></TR></TABLE>>,
            likec4_id="northstar.qdrant",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        prompt_builder [group=northstar,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">2. Prompt Formatter</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">HuggingFace Tokenizer</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">prompts.py: Combines system instruction,<BR/>[source-id] evidence, and question</FONT></TD></TR></TABLE>>,
            likec4_id="northstar.prompt_builder",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    customer [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Customer</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Submits support questions (refunds, shipping,<BR/>subscriptions, incidents)</FONT></TD></TR></TABLE>>,
        likec4_id=customer,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    customer -> retriever [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Submits support question</FONT></TD></TR></TABLE>>,
        likec4_id="7fsmav",
        minlen=1,
        style=dashed];
    kb -> qdrant [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Ingests policy chunks and embeddings</FONT></TD></TR></TABLE>>,
        likec4_id="1nq36an",
        minlen=1,
        style=dashed];
    retriever -> qdrant [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Cosine similarity search (top-k=3,<BR/>min_score=0.30)</FONT></TD></TR></TABLE>>,
        likec4_id="1qmiw16",
        style=dashed,
        weight=2];
    retriever -> prompt_builder [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Passes accepted evidence chunks</FONT></TD></TR></TABLE>>,
        likec4_id=xlgtrg,
        minlen=1,
        style=dashed,
        weight=2];
}
`;case`hybrid_generation`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=hybrid_generation,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    subgraph cluster_northstar {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>NORTHSTAR SUPPORT AI</B></FONT>>,
            likec4_depth=1,
            likec4_id=northstar,
            likec4_level=0,
            margin=40,
            style=filled
        ];
        prompt_builder [group=northstar,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">2. Prompt Formatter</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">HuggingFace Tokenizer</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">prompts.py: Combines system instruction,<BR/>[source-id] evidence, and question</FONT></TD></TR></TABLE>>,
            likec4_id="northstar.prompt_builder",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        generator [group=northstar,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">3. Generation Engine</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">PyTorch + PEFT</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">generation.py: Executes base-only, rag-base,<BR/>or rag-lora (SmolLM2-135M)</FONT></TD></TR></TABLE>>,
            likec4_id="northstar.generator",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        guardrail [group=northstar,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">4. Citation &amp; Safety Guardrail</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">Deterministic Rules</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">pipeline.py: Validates [source-id] citations<BR/>against evidence; triggers human fallback if<BR/>invalid</FONT></TD></TR></TABLE>>,
            likec4_id="northstar.guardrail",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    prompt_builder -> generator [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Feeds formatted prompt to model</FONT></TD></TR></TABLE>>,
        likec4_id=lvx7z7,
        minlen=1,
        style=dashed];
    generator -> guardrail [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Streams greedy generated tokens</FONT></TD></TR></TABLE>>,
        likec4_id=peppca,
        style=dashed,
        weight=2];
    customer [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Customer</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Submits support questions (refunds, shipping,<BR/>subscriptions, incidents)</FONT></TD></TR></TABLE>>,
        likec4_id=customer,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    guardrail -> customer [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Delivers verified answer or escalates</FONT></TD></TR></TABLE>>,
        likec4_id="1y5xtu0",
        minlen=1,
        style=dashed];
}
`;case`generation_walkthrough`:return`digraph {
  likec4_viewId = "generation_walkthrough";
  bgcolor = "transparent";
  layout = "dot";
  compound = true;
  rankdir = "LR";
  splines = "spline";
  outputorder = "nodesfirst";
  nodesep = 1.528;
  ranksep = 1.667;
  pad = 0.209;
  fontname = "Arial";
  ordering = "in";
  graph [
    fontsize = 20;
    labeljust = "l";
    labelloc = "t";
  ];
  edge [
    arrowsize = 0.75;
    fontname = "Arial";
    fontsize = 14;
    penwidth = 2;
    color = "#8D8D8D";
    fontcolor = "#C9C9C9";
    style = "dashed";
  ];
  node [
    fontname = "Arial";
    shape = "rect";
    fillcolor = "#3b82f6";
    fontcolor = "#eff6ff";
    color = "#2563eb";
    style = "filled";
    penwidth = 0;
  ];
  "prompt_builder" [
    likec4_id = "northstar.prompt_builder";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">2. Prompt Formatter</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">HuggingFace Tokenizer</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">prompts.py: Combines system instruction,<BR/>[source-id] evidence, and question</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "generator" [
    likec4_id = "northstar.generator";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">3. Generation Engine</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">PyTorch + PEFT</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">generation.py: Executes base-only, rag-base,<BR/>or rag-lora (SmolLM2-135M)</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "guardrail" [
    likec4_id = "northstar.guardrail";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">4. Citation &amp; Safety Guardrail</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">Deterministic Rules</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">pipeline.py: Validates [source-id] citations<BR/>against evidence; triggers human fallback if<BR/>invalid</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "customer" [
    likec4_id = "customer";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Customer</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Submits support questions (refunds, shipping,<BR/>subscriptions, incidents)</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "prompt_builder" -> "generator" [
    likec4_id = "step-01";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>0</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">Step 1: Injects prompt with [source-id]<BR/>evidence</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "generator" -> "guardrail" [
    likec4_id = "step-02";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>1</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">Step 2: SmolLM2 + LoRA outputs answer<BR/>with candidate [source-id]</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "guardrail" -> "customer" [
    likec4_id = "step-03";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>2</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">Step 3: Validates citations against<BR/>retrieved hits; rejects if missing</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
}`;default:throw Error(`Unknown viewId: `+e)}},t=e=>{switch(e){case`index`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 16.1.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="1432pt" height="1850pt"
 viewBox="0.00 0.00 1432.00 1850.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1835.05)">
<g id="clust1" class="cluster">
<title>cluster_northstar</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-282.8 8,-1549.2 1108,-1549.2 1108,-282.8 8,-282.8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-1536.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">NORTHSTAR SUPPORT AI</text>
</g>
<!-- retriever -->
<g id="node1" class="node">
<title>retriever</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1010.01,-1488 683.99,-1488 683.99,-1308 1010.01,-1308 1010.01,-1488"/>
<text xml:space="preserve" text-anchor="start" x="728.61" y="-1428.8" font-family="Arial" font-size="20.00" fill="#eff6ff">1. Shared Dense Retriever</text>
<text xml:space="preserve" text-anchor="start" x="780.89" y="-1407.8" font-family="Arial" font-size="13.00" fill="#bfdbfe">SentenceTransformers</text>
<text xml:space="preserve" text-anchor="start" x="748.2" y="-1386.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">retrieval.py: Embeds question</text>
<text xml:space="preserve" text-anchor="start" x="704.04" y="-1368.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">(all&#45;MiniLM&#45;L6&#45;v2) &amp; retrieves top&#45;k chunks</text>
<text xml:space="preserve" text-anchor="start" x="821.56" y="-1350.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">&gt;= 0.30</text>
</g>
<!-- kb -->
<g id="node2" class="node">
<title>kb</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.02,-1488 47.98,-1488 47.98,-1308 368.02,-1308 368.02,-1488"/>
<text xml:space="preserve" text-anchor="start" x="141.86" y="-1419.8" font-family="Arial" font-size="20.00" fill="#eff6ff">Policy Sources</text>
<text xml:space="preserve" text-anchor="start" x="164.65" y="-1398.8" font-family="Arial" font-size="13.00" fill="#bfdbfe">Markdown files</text>
<text xml:space="preserve" text-anchor="start" x="106.7" y="-1377.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">6 approved Markdown policies</text>
<text xml:space="preserve" text-anchor="start" x="129.21" y="-1359.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">(knowledge_base/*.md)</text>
</g>
<!-- prompt_builder -->
<g id="node3" class="node">
<title>prompt_builder</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1007.02,-1148.4 686.98,-1148.4 686.98,-968.4 1007.02,-968.4 1007.02,-1148.4"/>
<text xml:space="preserve" text-anchor="start" x="757.53" y="-1080.2" font-family="Arial" font-size="20.00" fill="#eff6ff">2. Prompt Formatter</text>
<text xml:space="preserve" text-anchor="start" x="777.99" y="-1059.2" font-family="Arial" font-size="13.00" fill="#bfdbfe">HuggingFace Tokenizer</text>
<text xml:space="preserve" text-anchor="start" x="707.78" y="-1037.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">prompts.py: Combines system instruction,</text>
<text xml:space="preserve" text-anchor="start" x="732.76" y="-1019.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">[source&#45;id] evidence, and question</text>
</g>
<!-- qdrant -->
<g id="node4" class="node">
<title>qdrant</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="577.07,-1148.4 220.93,-1148.4 220.93,-968.4 577.07,-968.4 577.07,-1148.4"/>
<text xml:space="preserve" text-anchor="start" x="342.86" y="-1080.2" font-family="Arial" font-size="20.00" fill="#eff6ff">Vector Index</text>
<text xml:space="preserve" text-anchor="start" x="324.59" y="-1059.2" font-family="Arial" font-size="13.00" fill="#bfdbfe">Qdrant (Local In&#45;Memory)</text>
<text xml:space="preserve" text-anchor="start" x="240.99" y="-1037.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">Stores dense chunk embeddings with metadata</text>
<text xml:space="preserve" text-anchor="start" x="367.33" y="-1019.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">(store.py)</text>
</g>
<!-- generator -->
<g id="node5" class="node">
<title>generator</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1017.98,-825.6 676.02,-825.6 676.02,-645.6 1017.98,-645.6 1017.98,-825.6"/>
<text xml:space="preserve" text-anchor="start" x="752.49" y="-757.4" font-family="Arial" font-size="20.00" fill="#eff6ff">3. Generation Engine</text>
<text xml:space="preserve" text-anchor="start" x="798.78" y="-736.4" font-family="Arial" font-size="13.00" fill="#bfdbfe">PyTorch + PEFT</text>
<text xml:space="preserve" text-anchor="start" x="696.08" y="-714.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">generation.py: Executes base&#45;only, rag&#45;base,</text>
<text xml:space="preserve" text-anchor="start" x="752.39" y="-696.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">or rag&#45;lora (SmolLM2&#45;135M)</text>
</g>
<!-- guardrail -->
<g id="node6" class="node">
<title>guardrail</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1010.89,-502.8 683.11,-502.8 683.11,-322.8 1010.89,-322.8 1010.89,-502.8"/>
<text xml:space="preserve" text-anchor="start" x="717.49" y="-443.6" font-family="Arial" font-size="20.00" fill="#eff6ff">4. Citation &amp; Safety Guardrail</text>
<text xml:space="preserve" text-anchor="start" x="791.01" y="-422.6" font-family="Arial" font-size="13.00" fill="#bfdbfe">Deterministic Rules</text>
<text xml:space="preserve" text-anchor="start" x="709.43" y="-401" font-family="Arial" font-size="15.00" fill="#bfdbfe">pipeline.py: Validates [source&#45;id] citations</text>
<text xml:space="preserve" text-anchor="start" x="703.17" y="-383" font-family="Arial" font-size="15.00" fill="#bfdbfe">against evidence; triggers human fallback if</text>
<text xml:space="preserve" text-anchor="start" x="825.74" y="-365" font-family="Arial" font-size="15.00" fill="#bfdbfe">invalid</text>
</g>
<!-- customer -->
<g id="node7" class="node">
<title>customer</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1214.22,-180 869.78,-180 869.78,0 1214.22,0 1214.22,-180"/>
<text xml:space="preserve" text-anchor="start" x="998.66" y="-102" font-family="Arial" font-size="20.00" fill="#eff6ff">Customer</text>
<text xml:space="preserve" text-anchor="start" x="889.83" y="-79" font-family="Arial" font-size="15.00" fill="#bfdbfe">Submits support questions (refunds, shipping,</text>
<text xml:space="preserve" text-anchor="start" x="961.96" y="-61" font-family="Arial" font-size="15.00" fill="#bfdbfe">subscriptions, incidents)</text>
</g>
<!-- support_evaluator -->
<g id="node8" class="node">
<title>support_evaluator</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1017.99,-1820 676.01,-1820 676.01,-1640 1017.99,-1640 1017.99,-1820"/>
<text xml:space="preserve" text-anchor="start" x="770.85" y="-1742" font-family="Arial" font-size="20.00" fill="#eff6ff">Benchmark Suite</text>
<text xml:space="preserve" text-anchor="start" x="696.07" y="-1719" font-family="Arial" font-size="15.00" fill="#bfdbfe">Runs 14 held&#45;out evaluation cases against all</text>
<text xml:space="preserve" text-anchor="start" x="817.4" y="-1701" font-family="Arial" font-size="15.00" fill="#bfdbfe">pipelines</text>
</g>
<!-- retriever&#45;&gt;prompt_builder -->
<g id="edge3" class="edge">
<title>retriever&#45;&gt;prompt_builder</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M847,-1308.3C847,-1262.34 847,-1206.07 847,-1158.67"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="849.63,-1158.91 847,-1151.41 844.38,-1158.91 849.63,-1158.91"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="847,-1216.8 847,-1239.6 1067.8,-1239.6 1067.8,-1216.8 847,-1216.8"/>
<text xml:space="preserve" text-anchor="start" x="850" y="-1222.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">Passes accepted evidence chunks</text>
</g>
<!-- retriever&#45;&gt;qdrant -->
<g id="edge4" class="edge">
<title>retriever&#45;&gt;qdrant</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M694.19,-1308.1C664.49,-1289.21 634.09,-1268.69 606.65,-1248 569.33,-1219.85 530.8,-1186.3 497.22,-1155.35"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="499.19,-1153.6 491.91,-1150.43 495.63,-1157.45 499.19,-1153.6"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="606.65,-1208.4 606.65,-1248 820,-1248 820,-1208.4 606.65,-1208.4"/>
<text xml:space="preserve" text-anchor="start" x="609.65" y="-1231" font-family="Arial" font-size="14.00" fill="#c9c9c9">Cosine similarity search (top&#45;k=3,</text>
<text xml:space="preserve" text-anchor="start" x="609.65" y="-1214.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">min_score=0.30)</text>
</g>
<!-- kb&#45;&gt;qdrant -->
<g id="edge5" class="edge">
<title>kb&#45;&gt;qdrant</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M141.53,-1308.39C125.41,-1275.88 117.4,-1239.46 135.52,-1208.4 153.91,-1176.87 181.73,-1151.47 212.49,-1131.21"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="213.78,-1133.51 218.69,-1127.26 210.96,-1129.08 213.78,-1133.51"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="135.52,-1216.8 135.52,-1239.6 382,-1239.6 382,-1216.8 135.52,-1216.8"/>
<text xml:space="preserve" text-anchor="start" x="138.52" y="-1222.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">Ingests policy chunks and embeddings</text>
</g>
<!-- prompt_builder&#45;&gt;generator -->
<g id="edge6" class="edge">
<title>prompt_builder&#45;&gt;generator</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M847,-968.47C847,-927.27 847,-878.16 847,-835.77"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="849.63,-835.96 847,-828.46 844.38,-835.96 849.63,-835.96"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="847,-885.6 847,-908.4 1059.99,-908.4 1059.99,-885.6 847,-885.6"/>
<text xml:space="preserve" text-anchor="start" x="850" y="-891.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">Feeds formatted prompt to model</text>
</g>
<!-- generator&#45;&gt;guardrail -->
<g id="edge7" class="edge">
<title>generator&#45;&gt;guardrail</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M847,-645.67C847,-604.47 847,-555.36 847,-512.97"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="849.63,-513.16 847,-505.66 844.38,-513.16 849.63,-513.16"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="847,-562.8 847,-585.6 1063.9,-585.6 1063.9,-562.8 847,-562.8"/>
<text xml:space="preserve" text-anchor="start" x="850" y="-568.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">Streams greedy generated tokens</text>
</g>
<!-- guardrail&#45;&gt;customer -->
<g id="edge8" class="edge">
<title>guardrail&#45;&gt;customer</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M879.79,-322.97C891.33,-295.58 905.38,-265.84 921.02,-240 931.63,-222.49 944.11,-204.79 956.96,-188.02"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="958.91,-189.79 961.43,-182.26 954.76,-186.57 958.91,-189.79"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="921.02,-240 921.02,-262.8 1155,-262.8 1155,-240 921.02,-240"/>
<text xml:space="preserve" text-anchor="start" x="924.02" y="-245.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">Delivers verified answer or escalates</text>
</g>
<!-- customer&#45;&gt;retriever -->
<g id="edge1" class="edge">
<title>customer&#45;&gt;retriever</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1132.54,-179.87C1183.9,-239.92 1238,-324.02 1238,-411.8 1238,-1059.4 1238,-1059.4 1238,-1059.4 1238,-1183.36 1124.02,-1271.88 1019.13,-1327.09"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1018.12,-1324.66 1012.68,-1330.44 1020.54,-1329.32 1018.12,-1324.66"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1238,-724.2 1238,-747 1401.98,-747 1401.98,-724.2 1238,-724.2"/>
<text xml:space="preserve" text-anchor="start" x="1241" y="-730" font-family="Arial" font-size="14.00" fill="#c9c9c9">Submits support question</text>
</g>
<!-- support_evaluator&#45;&gt;retriever -->
<g id="edge2" class="edge">
<title>support_evaluator&#45;&gt;retriever</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M847,-1640.13C847,-1596.3 847,-1543.28 847,-1498.14"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="849.63,-1498.27 847,-1490.77 844.38,-1498.27 849.63,-1498.27"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="847,-1557.2 847,-1580 1051.45,-1580 1051.45,-1557.2 847,-1557.2"/>
<text xml:space="preserve" text-anchor="start" x="850" y="-1563" font-family="Arial" font-size="14.00" fill="#c9c9c9">Executes evaluation benchmark</text>
</g>
</g>
</svg>
`;case`system_walkthrough`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 16.1.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="3312pt" height="671pt"
 viewBox="0.00 0.00 3312.00 671.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 656.05)">
<!-- customer -->
<g id="node1" class="node">
<title>customer</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="344.45,-180 0,-180 0,0 344.45,0 344.45,-180"/>
<text xml:space="preserve" text-anchor="start" x="128.88" y="-102" font-family="Arial" font-size="20.00" fill="#eff6ff">Customer</text>
<text xml:space="preserve" text-anchor="start" x="20.06" y="-79" font-family="Arial" font-size="15.00" fill="#bfdbfe">Submits support questions (refunds, shipping,</text>
<text xml:space="preserve" text-anchor="start" x="92.19" y="-61" font-family="Arial" font-size="15.00" fill="#bfdbfe">subscriptions, incidents)</text>
</g>
<!-- retriever -->
<g id="node2" class="node">
<title>retriever</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1047.36,-351 721.33,-351 721.33,-171 1047.36,-171 1047.36,-351"/>
<text xml:space="preserve" text-anchor="start" x="765.95" y="-291.8" font-family="Arial" font-size="20.00" fill="#eff6ff">1. Shared Dense Retriever</text>
<text xml:space="preserve" text-anchor="start" x="818.23" y="-270.8" font-family="Arial" font-size="13.00" fill="#bfdbfe">SentenceTransformers</text>
<text xml:space="preserve" text-anchor="start" x="785.54" y="-249.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">retrieval.py: Embeds question</text>
<text xml:space="preserve" text-anchor="start" x="741.39" y="-231.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">(all&#45;MiniLM&#45;L6&#45;v2) &amp; retrieves top&#45;k chunks</text>
<text xml:space="preserve" text-anchor="start" x="858.9" y="-213.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">&gt;= 0.30</text>
</g>
<!-- qdrant -->
<g id="node3" class="node">
<title>qdrant</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1819.3,-641 1463.16,-641 1463.16,-461 1819.3,-461 1819.3,-641"/>
<text xml:space="preserve" text-anchor="start" x="1585.09" y="-572.8" font-family="Arial" font-size="20.00" fill="#eff6ff">Vector Index</text>
<text xml:space="preserve" text-anchor="start" x="1566.82" y="-551.8" font-family="Arial" font-size="13.00" fill="#bfdbfe">Qdrant (Local In&#45;Memory)</text>
<text xml:space="preserve" text-anchor="start" x="1483.22" y="-530.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">Stores dense chunk embeddings with metadata</text>
<text xml:space="preserve" text-anchor="start" x="1609.56" y="-512.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">(store.py)</text>
</g>
<!-- prompt_builder -->
<g id="node4" class="node">
<title>prompt_builder</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1801.25,-351 1481.21,-351 1481.21,-171 1801.25,-171 1801.25,-351"/>
<text xml:space="preserve" text-anchor="start" x="1551.76" y="-282.8" font-family="Arial" font-size="20.00" fill="#eff6ff">2. Prompt Formatter</text>
<text xml:space="preserve" text-anchor="start" x="1572.22" y="-261.8" font-family="Arial" font-size="13.00" fill="#bfdbfe">HuggingFace Tokenizer</text>
<text xml:space="preserve" text-anchor="start" x="1502.02" y="-240.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">prompts.py: Combines system instruction,</text>
<text xml:space="preserve" text-anchor="start" x="1526.99" y="-222.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">[source&#45;id] evidence, and question</text>
</g>
<!-- generator -->
<g id="node5" class="node">
<title>generator</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2574.68,-351 2232.72,-351 2232.72,-171 2574.68,-171 2574.68,-351"/>
<text xml:space="preserve" text-anchor="start" x="2309.19" y="-282.8" font-family="Arial" font-size="20.00" fill="#eff6ff">3. Generation Engine</text>
<text xml:space="preserve" text-anchor="start" x="2355.48" y="-261.8" font-family="Arial" font-size="13.00" fill="#bfdbfe">PyTorch + PEFT</text>
<text xml:space="preserve" text-anchor="start" x="2252.78" y="-240.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">generation.py: Executes base&#45;only, rag&#45;base,</text>
<text xml:space="preserve" text-anchor="start" x="2309.09" y="-222.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">or rag&#45;lora (SmolLM2&#45;135M)</text>
</g>
<!-- guardrail -->
<g id="node6" class="node">
<title>guardrail</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="3281.68,-180 2953.9,-180 2953.9,0 3281.68,0 3281.68,-180"/>
<text xml:space="preserve" text-anchor="start" x="2988.28" y="-120.8" font-family="Arial" font-size="20.00" fill="#eff6ff">4. Citation &amp; Safety Guardrail</text>
<text xml:space="preserve" text-anchor="start" x="3061.8" y="-99.8" font-family="Arial" font-size="13.00" fill="#bfdbfe">Deterministic Rules</text>
<text xml:space="preserve" text-anchor="start" x="2980.22" y="-78.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">pipeline.py: Validates [source&#45;id] citations</text>
<text xml:space="preserve" text-anchor="start" x="2973.96" y="-60.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">against evidence; triggers human fallback if</text>
<text xml:space="preserve" text-anchor="start" x="3096.53" y="-42.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">invalid</text>
</g>
<!-- customer&#45;&gt;retriever -->
<g id="edge1" class="edge">
<title>customer&#45;&gt;retriever</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M344.22,-131.18C455.47,-157.96 600.03,-192.78 711.46,-219.61"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="710.6,-222.1 718.51,-221.31 711.83,-217 710.6,-222.1"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="407.45,-208.69 407.45,-241.49 431.45,-241.49 431.45,-208.69 407.45,-208.69"/>
<text xml:space="preserve" text-anchor="start" x="415.55" y="-221.89" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">0</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="434.45,-208.69 434.45,-241.49 658.33,-241.49 658.33,-208.69 434.45,-208.69"/>
<text xml:space="preserve" text-anchor="start" x="437.45" y="-219.49" font-family="Arial" font-size="14.00" fill="#c9c9c9">Step 1: Customer submits question</text>
</g>
<!-- customer&#45;&gt;guardrail -->
<g id="edge6" class="edge">
<title>customer&#45;&gt;guardrail</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M354.56,-56.22C497.63,-32.51 702.52,-5 883.34,-5 883.34,-5 883.34,-5 2404.7,-5 2594.26,-5 2810.21,-35.06 2954.12,-59.43"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="354.32,-53.6 347.35,-57.43 355.18,-58.78 354.32,-53.6"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1518.13,-8 1518.13,-47.6 1542.13,-47.6 1542.13,-8 1518.13,-8"/>
<text xml:space="preserve" text-anchor="start" x="1526.24" y="-24.6" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">5</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1545.13,-8 1545.13,-47.6 1764.33,-47.6 1764.33,-8 1545.13,-8"/>
<text xml:space="preserve" text-anchor="start" x="1548.13" y="-30.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">Step 6: Delivers verified answer or</text>
<text xml:space="preserve" text-anchor="start" x="1599.86" y="-13.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">human escalation</text>
</g>
<!-- retriever&#45;&gt;qdrant -->
<g id="edge2" class="edge">
<title>retriever&#45;&gt;qdrant</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1047.29,-323.21C1166.56,-369.03 1329.02,-431.45 1453.73,-479.35"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1452.63,-481.74 1460.57,-481.98 1454.51,-476.84 1452.63,-481.74"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1110.36,-460.2 1110.36,-499.8 1134.36,-499.8 1134.36,-460.2 1110.36,-460.2"/>
<text xml:space="preserve" text-anchor="start" x="1118.46" y="-476.8" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">1</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1137.36,-460.2 1137.36,-499.8 1400.16,-499.8 1400.16,-460.2 1137.36,-460.2"/>
<text xml:space="preserve" text-anchor="start" x="1140.36" y="-482.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">Step 2: Embeds query &amp; searches cosine</text>
<text xml:space="preserve" text-anchor="start" x="1241.54" y="-466" font-family="Arial" font-size="14.00" fill="#c9c9c9">similarity</text>
</g>
<!-- retriever&#45;&gt;prompt_builder -->
<g id="edge3" class="edge">
<title>retriever&#45;&gt;prompt_builder</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1047.29,-261C1172.24,-261 1344.59,-261 1471.28,-261"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1470.94,-263.63 1478.44,-261 1470.94,-258.38 1470.94,-263.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1117.36,-264 1117.36,-296.8 1141.36,-296.8 1141.36,-264 1117.36,-264"/>
<text xml:space="preserve" text-anchor="start" x="1125.46" y="-277.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">2</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1144.36,-264 1144.36,-296.8 1393.16,-296.8 1393.16,-264 1144.36,-264"/>
<text xml:space="preserve" text-anchor="start" x="1147.36" y="-274.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">Step 3: Passes accepted policy chunks</text>
</g>
<!-- prompt_builder&#45;&gt;generator -->
<g id="edge4" class="edge">
<title>prompt_builder&#45;&gt;generator</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1801.19,-261C1924.13,-261 2094.4,-261 2222.42,-261"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2222.2,-263.63 2229.7,-261 2222.2,-258.38 2222.2,-263.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1882.3,-264 1882.3,-303.6 1906.3,-303.6 1906.3,-264 1882.3,-264"/>
<text xml:space="preserve" text-anchor="start" x="1890.41" y="-280.6" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">3</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1909.3,-264 1909.3,-303.6 2169.72,-303.6 2169.72,-264 1909.3,-264"/>
<text xml:space="preserve" text-anchor="start" x="1912.3" y="-286.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">Step 4: Formats chat prompt with system</text>
<text xml:space="preserve" text-anchor="start" x="2007.61" y="-269.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">instruction</text>
</g>
<!-- generator&#45;&gt;guardrail -->
<g id="edge5" class="edge">
<title>generator&#45;&gt;guardrail</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2574.36,-220.26C2685.97,-193.46 2831.61,-158.48 2943.87,-131.52"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2944.32,-134.12 2951,-129.81 2943.09,-129.01 2944.32,-134.12"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2637.68,-208.69 2637.68,-248.29 2661.68,-248.29 2661.68,-208.69 2637.68,-208.69"/>
<text xml:space="preserve" text-anchor="start" x="2645.78" y="-225.29" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">4</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2664.68,-208.69 2664.68,-248.29 2890.9,-248.29 2890.9,-208.69 2664.68,-208.69"/>
<text xml:space="preserve" text-anchor="start" x="2667.68" y="-231.29" font-family="Arial" font-size="14.00" fill="#c9c9c9">Step 5: Streams tokens into citation</text>
<text xml:space="preserve" text-anchor="start" x="2759.89" y="-214.49" font-family="Arial" font-size="14.00" fill="#c9c9c9">guard</text>
</g>
</g>
</svg>
`;case`retrieval_pipeline`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 16.1.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="1146pt" height="930pt"
 viewBox="0.00 0.00 1146.00 930.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 914.65)">
<g id="clust1" class="cluster">
<title>cluster_northstar</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-628.8 1108,-628.8 1108,-8 8,-8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-615.9" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">NORTHSTAR SUPPORT AI</text>
</g>
<!-- kb -->
<g id="node1" class="node">
<title>kb</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.02,-567.6 47.98,-567.6 47.98,-387.6 368.02,-387.6 368.02,-567.6"/>
<text xml:space="preserve" text-anchor="start" x="141.86" y="-499.4" font-family="Arial" font-size="20.00" fill="#eff6ff">Policy Sources</text>
<text xml:space="preserve" text-anchor="start" x="164.65" y="-478.4" font-family="Arial" font-size="13.00" fill="#bfdbfe">Markdown files</text>
<text xml:space="preserve" text-anchor="start" x="106.7" y="-456.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">6 approved Markdown policies</text>
<text xml:space="preserve" text-anchor="start" x="129.21" y="-438.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">(knowledge_base/*.md)</text>
</g>
<!-- retriever -->
<g id="node2" class="node">
<title>retriever</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="907.01,-567.6 580.99,-567.6 580.99,-387.6 907.01,-387.6 907.01,-567.6"/>
<text xml:space="preserve" text-anchor="start" x="625.61" y="-508.4" font-family="Arial" font-size="20.00" fill="#eff6ff">1. Shared Dense Retriever</text>
<text xml:space="preserve" text-anchor="start" x="677.89" y="-487.4" font-family="Arial" font-size="13.00" fill="#bfdbfe">SentenceTransformers</text>
<text xml:space="preserve" text-anchor="start" x="645.2" y="-465.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">retrieval.py: Embeds question</text>
<text xml:space="preserve" text-anchor="start" x="601.04" y="-447.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">(all&#45;MiniLM&#45;L6&#45;v2) &amp; retrieves top&#45;k chunks</text>
<text xml:space="preserve" text-anchor="start" x="718.56" y="-429.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">&gt;= 0.30</text>
</g>
<!-- qdrant -->
<g id="node3" class="node">
<title>qdrant</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="577.07,-228 220.93,-228 220.93,-48 577.07,-48 577.07,-228"/>
<text xml:space="preserve" text-anchor="start" x="342.86" y="-159.8" font-family="Arial" font-size="20.00" fill="#eff6ff">Vector Index</text>
<text xml:space="preserve" text-anchor="start" x="324.59" y="-138.8" font-family="Arial" font-size="13.00" fill="#bfdbfe">Qdrant (Local In&#45;Memory)</text>
<text xml:space="preserve" text-anchor="start" x="240.99" y="-117.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">Stores dense chunk embeddings with metadata</text>
<text xml:space="preserve" text-anchor="start" x="367.33" y="-99.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">(store.py)</text>
</g>
<!-- prompt_builder -->
<g id="node4" class="node">
<title>prompt_builder</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1007.02,-228 686.98,-228 686.98,-48 1007.02,-48 1007.02,-228"/>
<text xml:space="preserve" text-anchor="start" x="757.53" y="-159.8" font-family="Arial" font-size="20.00" fill="#eff6ff">2. Prompt Formatter</text>
<text xml:space="preserve" text-anchor="start" x="777.99" y="-138.8" font-family="Arial" font-size="13.00" fill="#bfdbfe">HuggingFace Tokenizer</text>
<text xml:space="preserve" text-anchor="start" x="707.78" y="-117.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">prompts.py: Combines system instruction,</text>
<text xml:space="preserve" text-anchor="start" x="732.76" y="-99.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">[source&#45;id] evidence, and question</text>
</g>
<!-- customer -->
<g id="node5" class="node">
<title>customer</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="916.22,-899.6 571.78,-899.6 571.78,-719.6 916.22,-719.6 916.22,-899.6"/>
<text xml:space="preserve" text-anchor="start" x="700.66" y="-821.6" font-family="Arial" font-size="20.00" fill="#eff6ff">Customer</text>
<text xml:space="preserve" text-anchor="start" x="591.83" y="-798.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">Submits support questions (refunds, shipping,</text>
<text xml:space="preserve" text-anchor="start" x="663.96" y="-780.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">subscriptions, incidents)</text>
</g>
<!-- kb&#45;&gt;qdrant -->
<g id="edge2" class="edge">
<title>kb&#45;&gt;qdrant</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M141.53,-387.99C125.41,-355.48 117.4,-319.06 135.52,-288 153.91,-256.47 181.73,-231.07 212.49,-210.81"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="213.78,-213.11 218.69,-206.86 210.96,-208.68 213.78,-213.11"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="135.52,-296.4 135.52,-319.2 382,-319.2 382,-296.4 135.52,-296.4"/>
<text xml:space="preserve" text-anchor="start" x="138.52" y="-302.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">Ingests policy chunks and embeddings</text>
</g>
<!-- retriever&#45;&gt;qdrant -->
<g id="edge3" class="edge">
<title>retriever&#45;&gt;qdrant</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M620.4,-387.69C596.74,-368.8 572.78,-348.28 551.65,-327.6 523.05,-299.6 494.65,-266.41 470.25,-235.73"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="472.39,-234.21 465.68,-229.95 468.27,-237.46 472.39,-234.21"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="551.65,-288 551.65,-327.6 765,-327.6 765,-288 551.65,-288"/>
<text xml:space="preserve" text-anchor="start" x="554.65" y="-310.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">Cosine similarity search (top&#45;k=3,</text>
<text xml:space="preserve" text-anchor="start" x="554.65" y="-293.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">min_score=0.30)</text>
</g>
<!-- retriever&#45;&gt;prompt_builder -->
<g id="edge4" class="edge">
<title>retriever&#45;&gt;prompt_builder</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M771.06,-387.9C785.11,-341.85 802.32,-285.44 816.8,-237.97"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="819.29,-238.82 818.97,-230.88 814.27,-237.29 819.29,-238.82"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="798.59,-296.4 798.59,-319.2 1019.39,-319.2 1019.39,-296.4 798.59,-296.4"/>
<text xml:space="preserve" text-anchor="start" x="801.59" y="-302.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">Passes accepted evidence chunks</text>
</g>
<!-- customer&#45;&gt;retriever -->
<g id="edge1" class="edge">
<title>customer&#45;&gt;retriever</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M744,-719.73C744,-675.9 744,-622.88 744,-577.74"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="746.63,-577.87 744,-570.37 741.38,-577.87 746.63,-577.87"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="744,-636.8 744,-659.6 907.98,-659.6 907.98,-636.8 744,-636.8"/>
<text xml:space="preserve" text-anchor="start" x="747" y="-642.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">Submits support question</text>
</g>
</g>
</svg>
`;case`hybrid_generation`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 16.1.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="514pt" height="1248pt"
 viewBox="0.00 0.00 514.00 1248.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1232.65)">
<g id="clust1" class="cluster">
<title>cluster_northstar</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-282.8 8,-1209.6 476,-1209.6 476,-282.8 8,-282.8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-1196.7" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">NORTHSTAR SUPPORT AI</text>
</g>
<!-- prompt_builder -->
<g id="node1" class="node">
<title>prompt_builder</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="379.02,-1148.4 58.98,-1148.4 58.98,-968.4 379.02,-968.4 379.02,-1148.4"/>
<text xml:space="preserve" text-anchor="start" x="129.53" y="-1080.2" font-family="Arial" font-size="20.00" fill="#eff6ff">2. Prompt Formatter</text>
<text xml:space="preserve" text-anchor="start" x="149.99" y="-1059.2" font-family="Arial" font-size="13.00" fill="#bfdbfe">HuggingFace Tokenizer</text>
<text xml:space="preserve" text-anchor="start" x="79.78" y="-1037.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">prompts.py: Combines system instruction,</text>
<text xml:space="preserve" text-anchor="start" x="104.76" y="-1019.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">[source&#45;id] evidence, and question</text>
</g>
<!-- generator -->
<g id="node2" class="node">
<title>generator</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="389.98,-825.6 48.02,-825.6 48.02,-645.6 389.98,-645.6 389.98,-825.6"/>
<text xml:space="preserve" text-anchor="start" x="124.49" y="-757.4" font-family="Arial" font-size="20.00" fill="#eff6ff">3. Generation Engine</text>
<text xml:space="preserve" text-anchor="start" x="170.78" y="-736.4" font-family="Arial" font-size="13.00" fill="#bfdbfe">PyTorch + PEFT</text>
<text xml:space="preserve" text-anchor="start" x="68.08" y="-714.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">generation.py: Executes base&#45;only, rag&#45;base,</text>
<text xml:space="preserve" text-anchor="start" x="124.39" y="-696.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">or rag&#45;lora (SmolLM2&#45;135M)</text>
</g>
<!-- guardrail -->
<g id="node3" class="node">
<title>guardrail</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="382.89,-502.8 55.11,-502.8 55.11,-322.8 382.89,-322.8 382.89,-502.8"/>
<text xml:space="preserve" text-anchor="start" x="89.49" y="-443.6" font-family="Arial" font-size="20.00" fill="#eff6ff">4. Citation &amp; Safety Guardrail</text>
<text xml:space="preserve" text-anchor="start" x="163.01" y="-422.6" font-family="Arial" font-size="13.00" fill="#bfdbfe">Deterministic Rules</text>
<text xml:space="preserve" text-anchor="start" x="81.43" y="-401" font-family="Arial" font-size="15.00" fill="#bfdbfe">pipeline.py: Validates [source&#45;id] citations</text>
<text xml:space="preserve" text-anchor="start" x="75.17" y="-383" font-family="Arial" font-size="15.00" fill="#bfdbfe">against evidence; triggers human fallback if</text>
<text xml:space="preserve" text-anchor="start" x="197.74" y="-365" font-family="Arial" font-size="15.00" fill="#bfdbfe">invalid</text>
</g>
<!-- customer -->
<g id="node4" class="node">
<title>customer</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="391.22,-180 46.78,-180 46.78,0 391.22,0 391.22,-180"/>
<text xml:space="preserve" text-anchor="start" x="175.66" y="-102" font-family="Arial" font-size="20.00" fill="#eff6ff">Customer</text>
<text xml:space="preserve" text-anchor="start" x="66.83" y="-79" font-family="Arial" font-size="15.00" fill="#bfdbfe">Submits support questions (refunds, shipping,</text>
<text xml:space="preserve" text-anchor="start" x="138.96" y="-61" font-family="Arial" font-size="15.00" fill="#bfdbfe">subscriptions, incidents)</text>
</g>
<!-- prompt_builder&#45;&gt;generator -->
<g id="edge1" class="edge">
<title>prompt_builder&#45;&gt;generator</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M219,-968.47C219,-927.27 219,-878.16 219,-835.77"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="221.63,-835.96 219,-828.46 216.38,-835.96 221.63,-835.96"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="219,-885.6 219,-908.4 431.99,-908.4 431.99,-885.6 219,-885.6"/>
<text xml:space="preserve" text-anchor="start" x="222" y="-891.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">Feeds formatted prompt to model</text>
</g>
<!-- generator&#45;&gt;guardrail -->
<g id="edge2" class="edge">
<title>generator&#45;&gt;guardrail</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M219,-645.67C219,-604.47 219,-555.36 219,-512.97"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="221.63,-513.16 219,-505.66 216.38,-513.16 221.63,-513.16"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="219,-562.8 219,-585.6 435.9,-585.6 435.9,-562.8 219,-562.8"/>
<text xml:space="preserve" text-anchor="start" x="222" y="-568.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">Streams greedy generated tokens</text>
</g>
<!-- guardrail&#45;&gt;customer -->
<g id="edge3" class="edge">
<title>guardrail&#45;&gt;customer</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M219,-322.87C219,-281.67 219,-232.56 219,-190.17"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="221.63,-190.36 219,-182.86 216.38,-190.36 221.63,-190.36"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="219,-240 219,-262.8 452.98,-262.8 452.98,-240 219,-240"/>
<text xml:space="preserve" text-anchor="start" x="222" y="-245.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">Delivers verified answer or escalates</text>
</g>
</g>
</svg>
`;case`generation_walkthrough`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 16.1.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="2543pt" height="210pt"
 viewBox="0.00 0.00 2543.00 210.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 195.05)">
<!-- prompt_builder -->
<g id="node1" class="node">
<title>prompt_builder</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="320.04,-180 0,-180 0,0 320.04,0 320.04,-180"/>
<text xml:space="preserve" text-anchor="start" x="70.55" y="-111.8" font-family="Arial" font-size="20.00" fill="#eff6ff">2. Prompt Formatter</text>
<text xml:space="preserve" text-anchor="start" x="91.01" y="-90.8" font-family="Arial" font-size="13.00" fill="#bfdbfe">HuggingFace Tokenizer</text>
<text xml:space="preserve" text-anchor="start" x="20.8" y="-69.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">prompts.py: Combines system instruction,</text>
<text xml:space="preserve" text-anchor="start" x="45.78" y="-51.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">[source&#45;id] evidence, and question</text>
</g>
<!-- generator -->
<g id="node2" class="node">
<title>generator</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1055.21,-180 713.25,-180 713.25,0 1055.21,0 1055.21,-180"/>
<text xml:space="preserve" text-anchor="start" x="789.72" y="-111.8" font-family="Arial" font-size="20.00" fill="#eff6ff">3. Generation Engine</text>
<text xml:space="preserve" text-anchor="start" x="836.01" y="-90.8" font-family="Arial" font-size="13.00" fill="#bfdbfe">PyTorch + PEFT</text>
<text xml:space="preserve" text-anchor="start" x="733.31" y="-69.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">generation.py: Executes base&#45;only, rag&#45;base,</text>
<text xml:space="preserve" text-anchor="start" x="789.62" y="-51.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">or rag&#45;lora (SmolLM2&#45;135M)</text>
</g>
<!-- guardrail -->
<g id="node3" class="node">
<title>guardrail</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1799.18,-180 1471.41,-180 1471.41,0 1799.18,0 1799.18,-180"/>
<text xml:space="preserve" text-anchor="start" x="1505.78" y="-120.8" font-family="Arial" font-size="20.00" fill="#eff6ff">4. Citation &amp; Safety Guardrail</text>
<text xml:space="preserve" text-anchor="start" x="1579.3" y="-99.8" font-family="Arial" font-size="13.00" fill="#bfdbfe">Deterministic Rules</text>
<text xml:space="preserve" text-anchor="start" x="1497.72" y="-78.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">pipeline.py: Validates [source&#45;id] citations</text>
<text xml:space="preserve" text-anchor="start" x="1491.46" y="-60.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">against evidence; triggers human fallback if</text>
<text xml:space="preserve" text-anchor="start" x="1614.03" y="-42.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">invalid</text>
</g>
<!-- customer -->
<g id="node4" class="node">
<title>customer</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2512.75,-180 2168.31,-180 2168.31,0 2512.75,0 2512.75,-180"/>
<text xml:space="preserve" text-anchor="start" x="2297.19" y="-102" font-family="Arial" font-size="20.00" fill="#eff6ff">Customer</text>
<text xml:space="preserve" text-anchor="start" x="2188.36" y="-79" font-family="Arial" font-size="15.00" fill="#bfdbfe">Submits support questions (refunds, shipping,</text>
<text xml:space="preserve" text-anchor="start" x="2260.5" y="-61" font-family="Arial" font-size="15.00" fill="#bfdbfe">subscriptions, incidents)</text>
</g>
<!-- prompt_builder&#45;&gt;generator -->
<g id="edge1" class="edge">
<title>prompt_builder&#45;&gt;generator</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M319.96,-90C433.16,-90 585.46,-90 703.15,-90"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="702.82,-92.63 710.32,-90 702.82,-87.38 702.82,-92.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="383.04,-93 383.04,-132.6 407.04,-132.6 407.04,-93 383.04,-93"/>
<text xml:space="preserve" text-anchor="start" x="391.15" y="-109.6" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">0</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="410.04,-93 410.04,-132.6 650.25,-132.6 650.25,-93 410.04,-93"/>
<text xml:space="preserve" text-anchor="start" x="413.04" y="-115.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">Step 1: Injects prompt with [source&#45;id]</text>
<text xml:space="preserve" text-anchor="start" x="502.13" y="-98.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">evidence</text>
</g>
<!-- generator&#45;&gt;guardrail -->
<g id="edge2" class="edge">
<title>generator&#45;&gt;guardrail</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1055.2,-90C1176.54,-90 1339.19,-90 1461.22,-90"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1460.89,-92.63 1468.39,-90 1460.89,-87.38 1460.89,-92.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1118.21,-93 1118.21,-132.6 1142.21,-132.6 1142.21,-93 1118.21,-93"/>
<text xml:space="preserve" text-anchor="start" x="1126.32" y="-109.6" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">1</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1145.21,-93 1145.21,-132.6 1408.41,-132.6 1408.41,-93 1145.21,-93"/>
<text xml:space="preserve" text-anchor="start" x="1148.21" y="-115.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">Step 2: SmolLM2 + LoRA outputs answer</text>
<text xml:space="preserve" text-anchor="start" x="1197.43" y="-98.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">with candidate [source&#45;id]</text>
</g>
<!-- guardrail&#45;&gt;customer -->
<g id="edge3" class="edge">
<title>guardrail&#45;&gt;customer</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1798.95,-90C1906.35,-90 2047.21,-90 2158.22,-90"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2158,-92.63 2165.5,-90 2158,-87.38 2158,-92.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1862.18,-93 1862.18,-132.6 1886.18,-132.6 1886.18,-93 1862.18,-93"/>
<text xml:space="preserve" text-anchor="start" x="1870.28" y="-109.6" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">2</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1889.18,-93 1889.18,-132.6 2105.31,-132.6 2105.31,-93 1889.18,-93"/>
<text xml:space="preserve" text-anchor="start" x="1892.18" y="-115.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">Step 3: Validates citations against</text>
<text xml:space="preserve" text-anchor="start" x="1901.55" y="-98.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">retrieved hits; rejects if missing</text>
</g>
</g>
</svg>
`;default:throw Error(`Unknown viewId: `+e)}};export{e as dotSource,t as svgSource};