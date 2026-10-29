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
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Step 1: Submits question</FONT></TD></TR></TABLE>>,
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
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Step 3: Passes accepted evidence chunks</FONT></TD></TR></TABLE>>,
        likec4_id=xlgtrg,
        style=dashed,
        weight=2];
    retriever -> qdrant [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Step 2: Cosine similarity search<BR/>(top-k=3, min_score=0.30)</FONT></TD></TR></TABLE>>,
        likec4_id="1qmiw16",
        style=dashed,
        weight=2];
    kb -> qdrant [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Ingests policy chunks and embeddings</FONT></TD></TR></TABLE>>,
        likec4_id="1nq36an",
        minlen=1,
        style=dashed];
    prompt_builder -> generator [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Step 4: Feeds formatted prompt to model</FONT></TD></TR></TABLE>>,
        likec4_id=lvx7z7,
        style=dashed];
    generator -> guardrail [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Step 5: Streams greedy generated tokens</FONT></TD></TR></TABLE>>,
        likec4_id=peppca,
        style=dashed,
        weight=2];
    guardrail -> customer [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Step 6: Delivers verified answer or<BR/>escalates</FONT></TD></TR></TABLE>>,
        likec4_id="1y5xtu0",
        style=dashed];
}
`;case`code_walkthrough`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=code_walkthrough,
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
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Step 1: Submits question</FONT></TD></TR></TABLE>>,
        likec4_id="7fsmav",
        style=dashed];
    kb -> qdrant [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Ingests policy chunks and embeddings</FONT></TD></TR></TABLE>>,
        likec4_id="1nq36an",
        minlen=1,
        style=dashed];
    retriever -> qdrant [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Step 2: Cosine similarity search<BR/>(top-k=3, min_score=0.30)</FONT></TD></TR></TABLE>>,
        likec4_id="1qmiw16",
        style=dashed,
        weight=2];
    retriever -> prompt_builder [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Step 3: Passes accepted evidence chunks</FONT></TD></TR></TABLE>>,
        likec4_id=xlgtrg,
        style=dashed,
        weight=2];
    prompt_builder -> generator [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Step 4: Feeds formatted prompt to model</FONT></TD></TR></TABLE>>,
        likec4_id=lvx7z7,
        style=dashed];
    generator -> guardrail [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Step 5: Streams greedy generated tokens</FONT></TD></TR></TABLE>>,
        likec4_id=peppca,
        style=dashed,
        weight=2];
    guardrail -> customer [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Step 6: Delivers verified answer or<BR/>escalates</FONT></TD></TR></TABLE>>,
        likec4_id="1y5xtu0",
        style=dashed];
}
`;case`retrieval_pipeline`:return`digraph {
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
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Step 1: Submits question</FONT></TD></TR></TABLE>>,
        likec4_id="7fsmav",
        minlen=1,
        style=dashed];
    kb -> qdrant [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Ingests policy chunks and embeddings</FONT></TD></TR></TABLE>>,
        likec4_id="1nq36an",
        minlen=1,
        style=dashed];
    retriever -> qdrant [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Step 2: Cosine similarity search<BR/>(top-k=3, min_score=0.30)</FONT></TD></TR></TABLE>>,
        likec4_id="1qmiw16",
        style=dashed,
        weight=2];
    retriever -> prompt_builder [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Step 3: Passes accepted evidence chunks</FONT></TD></TR></TABLE>>,
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
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Step 4: Feeds formatted prompt to model</FONT></TD></TR></TABLE>>,
        likec4_id=lvx7z7,
        minlen=1,
        style=dashed];
    generator -> guardrail [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Step 5: Streams greedy generated tokens</FONT></TD></TR></TABLE>>,
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
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Step 6: Delivers verified answer or<BR/>escalates</FONT></TD></TR></TABLE>>,
        likec4_id="1y5xtu0",
        minlen=1,
        style=dashed];
}
`;default:throw Error(`Unknown viewId: `+e)}},t=e=>{switch(e){case`index`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 16.1.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="1419pt" height="1867pt"
 viewBox="0.00 0.00 1419.00 1867.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1851.85)">
<g id="clust1" class="cluster">
<title>cluster_northstar</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-299.6 8,-1566 1145,-1566 1145,-299.6 8,-299.6"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-1553.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">NORTHSTAR SUPPORT AI</text>
</g>
<!-- retriever -->
<g id="node1" class="node">
<title>retriever</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="999.01,-1504.8 672.99,-1504.8 672.99,-1324.8 999.01,-1324.8 999.01,-1504.8"/>
<text xml:space="preserve" text-anchor="start" x="717.61" y="-1445.6" font-family="Arial" font-size="20.00" fill="#eff6ff">1. Shared Dense Retriever</text>
<text xml:space="preserve" text-anchor="start" x="769.89" y="-1424.6" font-family="Arial" font-size="13.00" fill="#bfdbfe">SentenceTransformers</text>
<text xml:space="preserve" text-anchor="start" x="737.2" y="-1403" font-family="Arial" font-size="15.00" fill="#bfdbfe">retrieval.py: Embeds question</text>
<text xml:space="preserve" text-anchor="start" x="693.04" y="-1385" font-family="Arial" font-size="15.00" fill="#bfdbfe">(all&#45;MiniLM&#45;L6&#45;v2) &amp; retrieves top&#45;k chunks</text>
<text xml:space="preserve" text-anchor="start" x="810.56" y="-1367" font-family="Arial" font-size="15.00" fill="#bfdbfe">&gt;= 0.30</text>
</g>
<!-- kb -->
<g id="node2" class="node">
<title>kb</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.02,-1504.8 47.98,-1504.8 47.98,-1324.8 368.02,-1324.8 368.02,-1504.8"/>
<text xml:space="preserve" text-anchor="start" x="141.86" y="-1436.6" font-family="Arial" font-size="20.00" fill="#eff6ff">Policy Sources</text>
<text xml:space="preserve" text-anchor="start" x="164.65" y="-1415.6" font-family="Arial" font-size="13.00" fill="#bfdbfe">Markdown files</text>
<text xml:space="preserve" text-anchor="start" x="106.7" y="-1394" font-family="Arial" font-size="15.00" fill="#bfdbfe">6 approved Markdown policies</text>
<text xml:space="preserve" text-anchor="start" x="129.21" y="-1376" font-family="Arial" font-size="15.00" fill="#bfdbfe">(knowledge_base/*.md)</text>
</g>
<!-- prompt_builder -->
<g id="node3" class="node">
<title>prompt_builder</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="996.02,-1165.2 675.98,-1165.2 675.98,-985.2 996.02,-985.2 996.02,-1165.2"/>
<text xml:space="preserve" text-anchor="start" x="746.53" y="-1097" font-family="Arial" font-size="20.00" fill="#eff6ff">2. Prompt Formatter</text>
<text xml:space="preserve" text-anchor="start" x="766.99" y="-1076" font-family="Arial" font-size="13.00" fill="#bfdbfe">HuggingFace Tokenizer</text>
<text xml:space="preserve" text-anchor="start" x="696.78" y="-1054.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">prompts.py: Combines system instruction,</text>
<text xml:space="preserve" text-anchor="start" x="721.76" y="-1036.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">[source&#45;id] evidence, and question</text>
</g>
<!-- qdrant -->
<g id="node4" class="node">
<title>qdrant</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="566.07,-1165.2 209.93,-1165.2 209.93,-985.2 566.07,-985.2 566.07,-1165.2"/>
<text xml:space="preserve" text-anchor="start" x="331.86" y="-1097" font-family="Arial" font-size="20.00" fill="#eff6ff">Vector Index</text>
<text xml:space="preserve" text-anchor="start" x="313.59" y="-1076" font-family="Arial" font-size="13.00" fill="#bfdbfe">Qdrant (Local In&#45;Memory)</text>
<text xml:space="preserve" text-anchor="start" x="229.99" y="-1054.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">Stores dense chunk embeddings with metadata</text>
<text xml:space="preserve" text-anchor="start" x="356.33" y="-1036.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">(store.py)</text>
</g>
<!-- generator -->
<g id="node5" class="node">
<title>generator</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1006.98,-842.4 665.02,-842.4 665.02,-662.4 1006.98,-662.4 1006.98,-842.4"/>
<text xml:space="preserve" text-anchor="start" x="741.49" y="-774.2" font-family="Arial" font-size="20.00" fill="#eff6ff">3. Generation Engine</text>
<text xml:space="preserve" text-anchor="start" x="787.78" y="-753.2" font-family="Arial" font-size="13.00" fill="#bfdbfe">PyTorch + PEFT</text>
<text xml:space="preserve" text-anchor="start" x="685.08" y="-731.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">generation.py: Executes base&#45;only, rag&#45;base,</text>
<text xml:space="preserve" text-anchor="start" x="741.39" y="-713.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">or rag&#45;lora (SmolLM2&#45;135M)</text>
</g>
<!-- guardrail -->
<g id="node6" class="node">
<title>guardrail</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="999.89,-519.6 672.11,-519.6 672.11,-339.6 999.89,-339.6 999.89,-519.6"/>
<text xml:space="preserve" text-anchor="start" x="706.49" y="-460.4" font-family="Arial" font-size="20.00" fill="#eff6ff">4. Citation &amp; Safety Guardrail</text>
<text xml:space="preserve" text-anchor="start" x="780.01" y="-439.4" font-family="Arial" font-size="13.00" fill="#bfdbfe">Deterministic Rules</text>
<text xml:space="preserve" text-anchor="start" x="698.43" y="-417.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">pipeline.py: Validates [source&#45;id] citations</text>
<text xml:space="preserve" text-anchor="start" x="692.17" y="-399.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">against evidence; triggers human fallback if</text>
<text xml:space="preserve" text-anchor="start" x="814.74" y="-381.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">invalid</text>
</g>
<!-- customer -->
<g id="node7" class="node">
<title>customer</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1204.22,-180 859.78,-180 859.78,0 1204.22,0 1204.22,-180"/>
<text xml:space="preserve" text-anchor="start" x="988.66" y="-102" font-family="Arial" font-size="20.00" fill="#eff6ff">Customer</text>
<text xml:space="preserve" text-anchor="start" x="879.83" y="-79" font-family="Arial" font-size="15.00" fill="#bfdbfe">Submits support questions (refunds, shipping,</text>
<text xml:space="preserve" text-anchor="start" x="951.96" y="-61" font-family="Arial" font-size="15.00" fill="#bfdbfe">subscriptions, incidents)</text>
</g>
<!-- support_evaluator -->
<g id="node8" class="node">
<title>support_evaluator</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1006.99,-1836.8 665.01,-1836.8 665.01,-1656.8 1006.99,-1656.8 1006.99,-1836.8"/>
<text xml:space="preserve" text-anchor="start" x="759.85" y="-1758.8" font-family="Arial" font-size="20.00" fill="#eff6ff">Benchmark Suite</text>
<text xml:space="preserve" text-anchor="start" x="685.07" y="-1735.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">Runs 14 held&#45;out evaluation cases against all</text>
<text xml:space="preserve" text-anchor="start" x="806.4" y="-1717.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">pipelines</text>
</g>
<!-- retriever&#45;&gt;prompt_builder -->
<g id="edge3" class="edge">
<title>retriever&#45;&gt;prompt_builder</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M836,-1325.1C836,-1279.14 836,-1222.87 836,-1175.47"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="838.63,-1175.71 836,-1168.21 833.38,-1175.71 838.63,-1175.71"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="836,-1233.6 836,-1256.4 1105.05,-1256.4 1105.05,-1233.6 836,-1233.6"/>
<text xml:space="preserve" text-anchor="start" x="839" y="-1239.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">Step 3: Passes accepted evidence chunks</text>
</g>
<!-- retriever&#45;&gt;qdrant -->
<g id="edge4" class="edge">
<title>retriever&#45;&gt;qdrant</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M692.82,-1324.91C663.9,-1305.78 634.05,-1285.16 606.92,-1264.8 568.69,-1236.1 528.59,-1202.64 493.3,-1171.93"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="495.04,-1169.96 487.66,-1167 491.59,-1173.91 495.04,-1169.96"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="606.92,-1225.2 606.92,-1264.8 809,-1264.8 809,-1225.2 606.92,-1225.2"/>
<text xml:space="preserve" text-anchor="start" x="609.92" y="-1247.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">Step 2: Cosine similarity search</text>
<text xml:space="preserve" text-anchor="start" x="609.92" y="-1231" font-family="Arial" font-size="14.00" fill="#c9c9c9">(top&#45;k=3, min_score=0.30)</text>
</g>
<!-- kb&#45;&gt;qdrant -->
<g id="edge5" class="edge">
<title>kb&#45;&gt;qdrant</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M141.61,-1324.89C125.68,-1292.52 117.78,-1256.27 135.52,-1225.2 151.59,-1197.06 175.28,-1173.7 201.81,-1154.49"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="203.01,-1156.85 207.65,-1150.39 200,-1152.55 203.01,-1156.85"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="135.52,-1233.6 135.52,-1256.4 382,-1256.4 382,-1233.6 135.52,-1233.6"/>
<text xml:space="preserve" text-anchor="start" x="138.52" y="-1239.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">Ingests policy chunks and embeddings</text>
</g>
<!-- prompt_builder&#45;&gt;generator -->
<g id="edge6" class="edge">
<title>prompt_builder&#45;&gt;generator</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M836,-985.27C836,-944.07 836,-894.96 836,-852.57"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="838.63,-852.76 836,-845.26 833.38,-852.76 838.63,-852.76"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="836,-902.4 836,-925.2 1097.24,-925.2 1097.24,-902.4 836,-902.4"/>
<text xml:space="preserve" text-anchor="start" x="839" y="-908.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">Step 4: Feeds formatted prompt to model</text>
</g>
<!-- generator&#45;&gt;guardrail -->
<g id="edge7" class="edge">
<title>generator&#45;&gt;guardrail</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M836,-662.47C836,-621.27 836,-572.16 836,-529.77"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="838.63,-529.96 836,-522.46 833.38,-529.96 838.63,-529.96"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="836,-579.6 836,-602.4 1101.16,-602.4 1101.16,-579.6 836,-579.6"/>
<text xml:space="preserve" text-anchor="start" x="839" y="-585.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">Step 5: Streams greedy generated tokens</text>
</g>
<!-- guardrail&#45;&gt;customer -->
<g id="edge8" class="edge">
<title>guardrail&#45;&gt;customer</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M873.64,-340.03C888.36,-307.86 906.17,-271.66 924.8,-240 934.94,-222.77 946.55,-205.04 958.29,-188.08"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="960.18,-189.96 962.33,-182.31 955.88,-186.95 960.18,-189.96"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="924.8,-240 924.8,-279.6 1144,-279.6 1144,-240 924.8,-240"/>
<text xml:space="preserve" text-anchor="start" x="927.8" y="-262.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">Step 6: Delivers verified answer or</text>
<text xml:space="preserve" text-anchor="start" x="927.8" y="-245.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">escalates</text>
</g>
<!-- customer&#45;&gt;retriever -->
<g id="edge1" class="edge">
<title>customer&#45;&gt;retriever</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1123.64,-179.94C1139.65,-198.68 1154.99,-219.12 1167,-240 1210.86,-316.24 1227,-340.64 1227,-428.6 1227,-1076.2 1227,-1076.2 1227,-1076.2 1227,-1170.06 1198.37,-1198.44 1132,-1264.8 1097.05,-1299.74 1052.24,-1328 1008.11,-1350.14"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1006.99,-1347.77 1001.42,-1353.44 1009.31,-1352.48 1006.99,-1347.77"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1227,-741 1227,-763.8 1388.65,-763.8 1388.65,-741 1227,-741"/>
<text xml:space="preserve" text-anchor="start" x="1230" y="-746.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">Step 1: Submits question</text>
</g>
<!-- support_evaluator&#45;&gt;retriever -->
<g id="edge2" class="edge">
<title>support_evaluator&#45;&gt;retriever</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M836,-1656.93C836,-1613.1 836,-1560.08 836,-1514.94"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="838.63,-1515.07 836,-1507.57 833.38,-1515.07 838.63,-1515.07"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="836,-1574 836,-1596.8 1040.45,-1596.8 1040.45,-1574 836,-1574"/>
<text xml:space="preserve" text-anchor="start" x="839" y="-1579.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">Executes evaluation benchmark</text>
</g>
</g>
</svg>
`;case`code_walkthrough`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 16.1.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="1419pt" height="1604pt"
 viewBox="0.00 0.00 1419.00 1604.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1589.05)">
<g id="clust1" class="cluster">
<title>cluster_northstar</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-299.6 8,-1566 1145,-1566 1145,-299.6 8,-299.6"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-1553.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">NORTHSTAR SUPPORT AI</text>
</g>
<!-- kb -->
<g id="node1" class="node">
<title>kb</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.02,-1504.8 47.98,-1504.8 47.98,-1324.8 368.02,-1324.8 368.02,-1504.8"/>
<text xml:space="preserve" text-anchor="start" x="141.86" y="-1436.6" font-family="Arial" font-size="20.00" fill="#eff6ff">Policy Sources</text>
<text xml:space="preserve" text-anchor="start" x="164.65" y="-1415.6" font-family="Arial" font-size="13.00" fill="#bfdbfe">Markdown files</text>
<text xml:space="preserve" text-anchor="start" x="106.7" y="-1394" font-family="Arial" font-size="15.00" fill="#bfdbfe">6 approved Markdown policies</text>
<text xml:space="preserve" text-anchor="start" x="129.21" y="-1376" font-family="Arial" font-size="15.00" fill="#bfdbfe">(knowledge_base/*.md)</text>
</g>
<!-- retriever -->
<g id="node2" class="node">
<title>retriever</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="999.01,-1504.8 672.99,-1504.8 672.99,-1324.8 999.01,-1324.8 999.01,-1504.8"/>
<text xml:space="preserve" text-anchor="start" x="717.61" y="-1445.6" font-family="Arial" font-size="20.00" fill="#eff6ff">1. Shared Dense Retriever</text>
<text xml:space="preserve" text-anchor="start" x="769.89" y="-1424.6" font-family="Arial" font-size="13.00" fill="#bfdbfe">SentenceTransformers</text>
<text xml:space="preserve" text-anchor="start" x="737.2" y="-1403" font-family="Arial" font-size="15.00" fill="#bfdbfe">retrieval.py: Embeds question</text>
<text xml:space="preserve" text-anchor="start" x="693.04" y="-1385" font-family="Arial" font-size="15.00" fill="#bfdbfe">(all&#45;MiniLM&#45;L6&#45;v2) &amp; retrieves top&#45;k chunks</text>
<text xml:space="preserve" text-anchor="start" x="810.56" y="-1367" font-family="Arial" font-size="15.00" fill="#bfdbfe">&gt;= 0.30</text>
</g>
<!-- qdrant -->
<g id="node3" class="node">
<title>qdrant</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="566.07,-1165.2 209.93,-1165.2 209.93,-985.2 566.07,-985.2 566.07,-1165.2"/>
<text xml:space="preserve" text-anchor="start" x="331.86" y="-1097" font-family="Arial" font-size="20.00" fill="#eff6ff">Vector Index</text>
<text xml:space="preserve" text-anchor="start" x="313.59" y="-1076" font-family="Arial" font-size="13.00" fill="#bfdbfe">Qdrant (Local In&#45;Memory)</text>
<text xml:space="preserve" text-anchor="start" x="229.99" y="-1054.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">Stores dense chunk embeddings with metadata</text>
<text xml:space="preserve" text-anchor="start" x="356.33" y="-1036.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">(store.py)</text>
</g>
<!-- prompt_builder -->
<g id="node4" class="node">
<title>prompt_builder</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="996.02,-1165.2 675.98,-1165.2 675.98,-985.2 996.02,-985.2 996.02,-1165.2"/>
<text xml:space="preserve" text-anchor="start" x="746.53" y="-1097" font-family="Arial" font-size="20.00" fill="#eff6ff">2. Prompt Formatter</text>
<text xml:space="preserve" text-anchor="start" x="766.99" y="-1076" font-family="Arial" font-size="13.00" fill="#bfdbfe">HuggingFace Tokenizer</text>
<text xml:space="preserve" text-anchor="start" x="696.78" y="-1054.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">prompts.py: Combines system instruction,</text>
<text xml:space="preserve" text-anchor="start" x="721.76" y="-1036.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">[source&#45;id] evidence, and question</text>
</g>
<!-- generator -->
<g id="node5" class="node">
<title>generator</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1006.98,-842.4 665.02,-842.4 665.02,-662.4 1006.98,-662.4 1006.98,-842.4"/>
<text xml:space="preserve" text-anchor="start" x="741.49" y="-774.2" font-family="Arial" font-size="20.00" fill="#eff6ff">3. Generation Engine</text>
<text xml:space="preserve" text-anchor="start" x="787.78" y="-753.2" font-family="Arial" font-size="13.00" fill="#bfdbfe">PyTorch + PEFT</text>
<text xml:space="preserve" text-anchor="start" x="685.08" y="-731.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">generation.py: Executes base&#45;only, rag&#45;base,</text>
<text xml:space="preserve" text-anchor="start" x="741.39" y="-713.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">or rag&#45;lora (SmolLM2&#45;135M)</text>
</g>
<!-- guardrail -->
<g id="node6" class="node">
<title>guardrail</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="999.89,-519.6 672.11,-519.6 672.11,-339.6 999.89,-339.6 999.89,-519.6"/>
<text xml:space="preserve" text-anchor="start" x="706.49" y="-460.4" font-family="Arial" font-size="20.00" fill="#eff6ff">4. Citation &amp; Safety Guardrail</text>
<text xml:space="preserve" text-anchor="start" x="780.01" y="-439.4" font-family="Arial" font-size="13.00" fill="#bfdbfe">Deterministic Rules</text>
<text xml:space="preserve" text-anchor="start" x="698.43" y="-417.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">pipeline.py: Validates [source&#45;id] citations</text>
<text xml:space="preserve" text-anchor="start" x="692.17" y="-399.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">against evidence; triggers human fallback if</text>
<text xml:space="preserve" text-anchor="start" x="814.74" y="-381.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">invalid</text>
</g>
<!-- customer -->
<g id="node7" class="node">
<title>customer</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1204.22,-180 859.78,-180 859.78,0 1204.22,0 1204.22,-180"/>
<text xml:space="preserve" text-anchor="start" x="988.66" y="-102" font-family="Arial" font-size="20.00" fill="#eff6ff">Customer</text>
<text xml:space="preserve" text-anchor="start" x="879.83" y="-79" font-family="Arial" font-size="15.00" fill="#bfdbfe">Submits support questions (refunds, shipping,</text>
<text xml:space="preserve" text-anchor="start" x="951.96" y="-61" font-family="Arial" font-size="15.00" fill="#bfdbfe">subscriptions, incidents)</text>
</g>
<!-- kb&#45;&gt;qdrant -->
<g id="edge2" class="edge">
<title>kb&#45;&gt;qdrant</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M141.61,-1324.89C125.68,-1292.52 117.78,-1256.27 135.52,-1225.2 151.59,-1197.06 175.28,-1173.7 201.81,-1154.49"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="203.01,-1156.85 207.65,-1150.39 200,-1152.55 203.01,-1156.85"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="135.52,-1233.6 135.52,-1256.4 382,-1256.4 382,-1233.6 135.52,-1233.6"/>
<text xml:space="preserve" text-anchor="start" x="138.52" y="-1239.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">Ingests policy chunks and embeddings</text>
</g>
<!-- retriever&#45;&gt;qdrant -->
<g id="edge3" class="edge">
<title>retriever&#45;&gt;qdrant</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M692.82,-1324.91C663.9,-1305.78 634.05,-1285.16 606.92,-1264.8 568.69,-1236.1 528.59,-1202.64 493.3,-1171.93"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="495.04,-1169.96 487.66,-1167 491.59,-1173.91 495.04,-1169.96"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="606.92,-1225.2 606.92,-1264.8 809,-1264.8 809,-1225.2 606.92,-1225.2"/>
<text xml:space="preserve" text-anchor="start" x="609.92" y="-1247.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">Step 2: Cosine similarity search</text>
<text xml:space="preserve" text-anchor="start" x="609.92" y="-1231" font-family="Arial" font-size="14.00" fill="#c9c9c9">(top&#45;k=3, min_score=0.30)</text>
</g>
<!-- retriever&#45;&gt;prompt_builder -->
<g id="edge4" class="edge">
<title>retriever&#45;&gt;prompt_builder</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M836,-1325.1C836,-1279.14 836,-1222.87 836,-1175.47"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="838.63,-1175.71 836,-1168.21 833.38,-1175.71 838.63,-1175.71"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="836,-1233.6 836,-1256.4 1105.05,-1256.4 1105.05,-1233.6 836,-1233.6"/>
<text xml:space="preserve" text-anchor="start" x="839" y="-1239.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">Step 3: Passes accepted evidence chunks</text>
</g>
<!-- prompt_builder&#45;&gt;generator -->
<g id="edge5" class="edge">
<title>prompt_builder&#45;&gt;generator</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M836,-985.27C836,-944.07 836,-894.96 836,-852.57"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="838.63,-852.76 836,-845.26 833.38,-852.76 838.63,-852.76"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="836,-902.4 836,-925.2 1097.24,-925.2 1097.24,-902.4 836,-902.4"/>
<text xml:space="preserve" text-anchor="start" x="839" y="-908.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">Step 4: Feeds formatted prompt to model</text>
</g>
<!-- generator&#45;&gt;guardrail -->
<g id="edge6" class="edge">
<title>generator&#45;&gt;guardrail</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M836,-662.47C836,-621.27 836,-572.16 836,-529.77"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="838.63,-529.96 836,-522.46 833.38,-529.96 838.63,-529.96"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="836,-579.6 836,-602.4 1101.16,-602.4 1101.16,-579.6 836,-579.6"/>
<text xml:space="preserve" text-anchor="start" x="839" y="-585.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">Step 5: Streams greedy generated tokens</text>
</g>
<!-- guardrail&#45;&gt;customer -->
<g id="edge7" class="edge">
<title>guardrail&#45;&gt;customer</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M873.64,-340.03C888.36,-307.86 906.17,-271.66 924.8,-240 934.94,-222.77 946.55,-205.04 958.29,-188.08"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="960.18,-189.96 962.33,-182.31 955.88,-186.95 960.18,-189.96"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="924.8,-240 924.8,-279.6 1144,-279.6 1144,-240 924.8,-240"/>
<text xml:space="preserve" text-anchor="start" x="927.8" y="-262.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">Step 6: Delivers verified answer or</text>
<text xml:space="preserve" text-anchor="start" x="927.8" y="-245.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">escalates</text>
</g>
<!-- customer&#45;&gt;retriever -->
<g id="edge1" class="edge">
<title>customer&#45;&gt;retriever</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1123.64,-179.94C1139.65,-198.68 1154.99,-219.12 1167,-240 1210.86,-316.24 1227,-340.64 1227,-428.6 1227,-1076.2 1227,-1076.2 1227,-1076.2 1227,-1170.06 1198.37,-1198.44 1132,-1264.8 1097.05,-1299.74 1052.24,-1328 1008.11,-1350.14"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1006.99,-1347.77 1001.42,-1353.44 1009.31,-1352.48 1006.99,-1347.77"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1227,-741 1227,-763.8 1388.65,-763.8 1388.65,-741 1227,-741"/>
<text xml:space="preserve" text-anchor="start" x="1230" y="-746.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">Step 1: Submits question</text>
</g>
</g>
</svg>
`;case`retrieval_pipeline`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 16.1.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="1183pt" height="930pt"
 viewBox="0.00 0.00 1183.00 930.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 914.65)">
<g id="clust1" class="cluster">
<title>cluster_northstar</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-628.8 1145,-628.8 1145,-8 8,-8"/>
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
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="901.01,-567.6 574.99,-567.6 574.99,-387.6 901.01,-387.6 901.01,-567.6"/>
<text xml:space="preserve" text-anchor="start" x="619.61" y="-508.4" font-family="Arial" font-size="20.00" fill="#eff6ff">1. Shared Dense Retriever</text>
<text xml:space="preserve" text-anchor="start" x="671.89" y="-487.4" font-family="Arial" font-size="13.00" fill="#bfdbfe">SentenceTransformers</text>
<text xml:space="preserve" text-anchor="start" x="639.2" y="-465.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">retrieval.py: Embeds question</text>
<text xml:space="preserve" text-anchor="start" x="595.04" y="-447.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">(all&#45;MiniLM&#45;L6&#45;v2) &amp; retrieves top&#45;k chunks</text>
<text xml:space="preserve" text-anchor="start" x="712.56" y="-429.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">&gt;= 0.30</text>
</g>
<!-- qdrant -->
<g id="node3" class="node">
<title>qdrant</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="566.07,-228 209.93,-228 209.93,-48 566.07,-48 566.07,-228"/>
<text xml:space="preserve" text-anchor="start" x="331.86" y="-159.8" font-family="Arial" font-size="20.00" fill="#eff6ff">Vector Index</text>
<text xml:space="preserve" text-anchor="start" x="313.59" y="-138.8" font-family="Arial" font-size="13.00" fill="#bfdbfe">Qdrant (Local In&#45;Memory)</text>
<text xml:space="preserve" text-anchor="start" x="229.99" y="-117.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">Stores dense chunk embeddings with metadata</text>
<text xml:space="preserve" text-anchor="start" x="356.33" y="-99.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">(store.py)</text>
</g>
<!-- prompt_builder -->
<g id="node4" class="node">
<title>prompt_builder</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="996.02,-228 675.98,-228 675.98,-48 996.02,-48 996.02,-228"/>
<text xml:space="preserve" text-anchor="start" x="746.53" y="-159.8" font-family="Arial" font-size="20.00" fill="#eff6ff">2. Prompt Formatter</text>
<text xml:space="preserve" text-anchor="start" x="766.99" y="-138.8" font-family="Arial" font-size="13.00" fill="#bfdbfe">HuggingFace Tokenizer</text>
<text xml:space="preserve" text-anchor="start" x="696.78" y="-117.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">prompts.py: Combines system instruction,</text>
<text xml:space="preserve" text-anchor="start" x="721.76" y="-99.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">[source&#45;id] evidence, and question</text>
</g>
<!-- customer -->
<g id="node5" class="node">
<title>customer</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="910.22,-899.6 565.78,-899.6 565.78,-719.6 910.22,-719.6 910.22,-899.6"/>
<text xml:space="preserve" text-anchor="start" x="694.66" y="-821.6" font-family="Arial" font-size="20.00" fill="#eff6ff">Customer</text>
<text xml:space="preserve" text-anchor="start" x="585.83" y="-798.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">Submits support questions (refunds, shipping,</text>
<text xml:space="preserve" text-anchor="start" x="657.96" y="-780.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">subscriptions, incidents)</text>
</g>
<!-- kb&#45;&gt;qdrant -->
<g id="edge2" class="edge">
<title>kb&#45;&gt;qdrant</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M141.61,-387.69C125.68,-355.32 117.78,-319.07 135.52,-288 151.59,-259.86 175.28,-236.5 201.81,-217.29"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="203.01,-219.65 207.65,-213.19 200,-215.35 203.01,-219.65"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="135.52,-296.4 135.52,-319.2 382,-319.2 382,-296.4 135.52,-296.4"/>
<text xml:space="preserve" text-anchor="start" x="138.52" y="-302.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">Ingests policy chunks and embeddings</text>
</g>
<!-- retriever&#45;&gt;qdrant -->
<g id="edge3" class="edge">
<title>retriever&#45;&gt;qdrant</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M623.22,-387.99C600.01,-368.75 576.22,-348.03 554.92,-327.6 525.11,-298.99 494.56,-265.81 467.89,-235.33"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="470.08,-233.85 463.18,-229.92 466.13,-237.3 470.08,-233.85"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="554.92,-288 554.92,-327.6 757,-327.6 757,-288 554.92,-288"/>
<text xml:space="preserve" text-anchor="start" x="557.92" y="-310.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">Step 2: Cosine similarity search</text>
<text xml:space="preserve" text-anchor="start" x="557.92" y="-293.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">(top&#45;k=3, min_score=0.30)</text>
</g>
<!-- retriever&#45;&gt;prompt_builder -->
<g id="edge4" class="edge">
<title>retriever&#45;&gt;prompt_builder</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M763.75,-387.9C777.12,-341.85 793.49,-285.44 807.27,-237.97"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="809.75,-238.83 809.32,-230.89 804.71,-237.36 809.75,-238.83"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="789.94,-296.4 789.94,-319.2 1058.99,-319.2 1058.99,-296.4 789.94,-296.4"/>
<text xml:space="preserve" text-anchor="start" x="792.94" y="-302.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">Step 3: Passes accepted evidence chunks</text>
</g>
<!-- customer&#45;&gt;retriever -->
<g id="edge1" class="edge">
<title>customer&#45;&gt;retriever</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M738,-719.73C738,-675.9 738,-622.88 738,-577.74"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="740.63,-577.87 738,-570.37 735.38,-577.87 740.63,-577.87"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="738,-636.8 738,-659.6 899.65,-659.6 899.65,-636.8 738,-636.8"/>
<text xml:space="preserve" text-anchor="start" x="741" y="-642.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">Step 1: Submits question</text>
</g>
</g>
</svg>
`;case`hybrid_generation`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 16.1.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="562pt" height="1264pt"
 viewBox="0.00 0.00 562.00 1264.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1249.45)">
<g id="clust1" class="cluster">
<title>cluster_northstar</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-299.6 8,-1226.4 524,-1226.4 524,-299.6 8,-299.6"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-1213.5" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">NORTHSTAR SUPPORT AI</text>
</g>
<!-- prompt_builder -->
<g id="node1" class="node">
<title>prompt_builder</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="379.02,-1165.2 58.98,-1165.2 58.98,-985.2 379.02,-985.2 379.02,-1165.2"/>
<text xml:space="preserve" text-anchor="start" x="129.53" y="-1097" font-family="Arial" font-size="20.00" fill="#eff6ff">2. Prompt Formatter</text>
<text xml:space="preserve" text-anchor="start" x="149.99" y="-1076" font-family="Arial" font-size="13.00" fill="#bfdbfe">HuggingFace Tokenizer</text>
<text xml:space="preserve" text-anchor="start" x="79.78" y="-1054.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">prompts.py: Combines system instruction,</text>
<text xml:space="preserve" text-anchor="start" x="104.76" y="-1036.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">[source&#45;id] evidence, and question</text>
</g>
<!-- generator -->
<g id="node2" class="node">
<title>generator</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="389.98,-842.4 48.02,-842.4 48.02,-662.4 389.98,-662.4 389.98,-842.4"/>
<text xml:space="preserve" text-anchor="start" x="124.49" y="-774.2" font-family="Arial" font-size="20.00" fill="#eff6ff">3. Generation Engine</text>
<text xml:space="preserve" text-anchor="start" x="170.78" y="-753.2" font-family="Arial" font-size="13.00" fill="#bfdbfe">PyTorch + PEFT</text>
<text xml:space="preserve" text-anchor="start" x="68.08" y="-731.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">generation.py: Executes base&#45;only, rag&#45;base,</text>
<text xml:space="preserve" text-anchor="start" x="124.39" y="-713.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">or rag&#45;lora (SmolLM2&#45;135M)</text>
</g>
<!-- guardrail -->
<g id="node3" class="node">
<title>guardrail</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="382.89,-519.6 55.11,-519.6 55.11,-339.6 382.89,-339.6 382.89,-519.6"/>
<text xml:space="preserve" text-anchor="start" x="89.49" y="-460.4" font-family="Arial" font-size="20.00" fill="#eff6ff">4. Citation &amp; Safety Guardrail</text>
<text xml:space="preserve" text-anchor="start" x="163.01" y="-439.4" font-family="Arial" font-size="13.00" fill="#bfdbfe">Deterministic Rules</text>
<text xml:space="preserve" text-anchor="start" x="81.43" y="-417.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">pipeline.py: Validates [source&#45;id] citations</text>
<text xml:space="preserve" text-anchor="start" x="75.17" y="-399.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">against evidence; triggers human fallback if</text>
<text xml:space="preserve" text-anchor="start" x="197.74" y="-381.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">invalid</text>
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
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M219,-985.27C219,-944.07 219,-894.96 219,-852.57"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="221.63,-852.76 219,-845.26 216.38,-852.76 221.63,-852.76"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="219,-902.4 219,-925.2 480.24,-925.2 480.24,-902.4 219,-902.4"/>
<text xml:space="preserve" text-anchor="start" x="222" y="-908.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">Step 4: Feeds formatted prompt to model</text>
</g>
<!-- generator&#45;&gt;guardrail -->
<g id="edge2" class="edge">
<title>generator&#45;&gt;guardrail</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M219,-662.47C219,-621.27 219,-572.16 219,-529.77"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="221.63,-529.96 219,-522.46 216.38,-529.96 221.63,-529.96"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="219,-579.6 219,-602.4 484.16,-602.4 484.16,-579.6 219,-579.6"/>
<text xml:space="preserve" text-anchor="start" x="222" y="-585.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">Step 5: Streams greedy generated tokens</text>
</g>
<!-- guardrail&#45;&gt;customer -->
<g id="edge3" class="edge">
<title>guardrail&#45;&gt;customer</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M219,-339.9C219,-293.94 219,-237.67 219,-190.27"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="221.63,-190.51 219,-183.01 216.38,-190.51 221.63,-190.51"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="219,-240 219,-279.6 438.2,-279.6 438.2,-240 219,-240"/>
<text xml:space="preserve" text-anchor="start" x="222" y="-262.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">Step 6: Delivers verified answer or</text>
<text xml:space="preserve" text-anchor="start" x="222" y="-245.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">escalates</text>
</g>
</g>
</svg>
`;default:throw Error(`Unknown viewId: `+e)}};export{e as dotSource,t as svgSource};