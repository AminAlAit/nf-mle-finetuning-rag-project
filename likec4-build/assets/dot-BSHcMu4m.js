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
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Shared Dense Retriever</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">SentenceTransformers</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Embeds questions (all-MiniLM-L6-v2) and<BR/>fetches top-k chunks &gt;= 0.30</FONT></TD></TR></TABLE>>,
            likec4_id="northstar.retriever",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        kb [group=northstar,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Policy Sources</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">Markdown files</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">6 approved Markdown policies (truth layer)</FONT></TD></TR></TABLE>>,
            likec4_id="northstar.kb",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        lora_weights [group=northstar,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">LoRA Adapter</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">PEFT</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Trained low-rank matrices on q_proj &amp; v_proj<BR/>(0.34% params)</FONT></TD></TR></TABLE>>,
            likec4_id="northstar.lora_weights",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        prompt_builder [group=northstar,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Prompt Formatter</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">HuggingFace Tokenizer</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Uniform chat prompt with system instruction,<BR/>[source-id] evidence, and query</FONT></TD></TR></TABLE>>,
            likec4_id="northstar.prompt_builder",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        qdrant [group=northstar,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Vector Index</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">Qdrant (Local In-Memory)</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Stores dense chunk embeddings with metadata</FONT></TD></TR></TABLE>>,
            likec4_id="northstar.qdrant",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        base_model [group=northstar,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SmolLM2-135M Base</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">PyTorch / Transformers</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Frozen 135M parameter causal language model</FONT></TD></TR></TABLE>>,
            likec4_id="northstar.base_model",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        guardrail [group=northstar,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Citation &amp; Abstention Guard</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">Deterministic Rules</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Enforces [source-id] citations; rejects<BR/>hallucinations; triggers fallback</FONT></TD></TR></TABLE>>,
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
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Submits question</FONT></TD></TR></TABLE>>,
        likec4_id="7fsmav",
        style=dashed];
    support_evaluator [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Benchmark Suite</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Runs 14 held-out evaluation cases against all<BR/>pipelines</FONT></TD></TR></TABLE>>,
        likec4_id=support_evaluator,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    support_evaluator -> retriever [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Executes benchmark questions</FONT></TD></TR></TABLE>>,
        likec4_id="1j3973k",
        minlen=1,
        style=dashed];
    retriever -> prompt_builder [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Supplies accepted evidence chunks</FONT></TD></TR></TABLE>>,
        likec4_id=xlgtrg,
        style=dashed,
        weight=2];
    retriever -> qdrant [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Cosine similarity search (top-3,<BR/>min_score=0.30)</FONT></TD></TR></TABLE>>,
        likec4_id="1qmiw16",
        style=dashed,
        weight=2];
    kb -> qdrant [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Paragraph chunking + embedding</FONT></TD></TR></TABLE>>,
        likec4_id="1nq36an",
        minlen=1,
        style=dashed];
    lora_weights -> base_model [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Adapts query &amp; value attention weights</FONT></TD></TR></TABLE>>,
        likec4_id="1xhf30z",
        minlen=1,
        style=dashed];
    prompt_builder -> base_model [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Inference prompt</FONT></TD></TR></TABLE>>,
        likec4_id="60thth",
        style=dashed];
    base_model -> guardrail [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Greedy token generation (max 80 tokens)</FONT></TD></TR></TABLE>>,
        likec4_id=usvd4s,
        style=dashed,
        weight=2];
    guardrail -> customer [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Final verified answer or escalation</FONT></TD></TR></TABLE>>,
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
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Policy Sources</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">Markdown files</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">6 approved Markdown policies (truth layer)</FONT></TD></TR></TABLE>>,
            likec4_id="northstar.kb",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        retriever [group=northstar,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Shared Dense Retriever</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">SentenceTransformers</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Embeds questions (all-MiniLM-L6-v2) and<BR/>fetches top-k chunks &gt;= 0.30</FONT></TD></TR></TABLE>>,
            likec4_id="northstar.retriever",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        qdrant [group=northstar,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Vector Index</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">Qdrant (Local In-Memory)</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Stores dense chunk embeddings with metadata</FONT></TD></TR></TABLE>>,
            likec4_id="northstar.qdrant",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        prompt_builder [group=northstar,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Prompt Formatter</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">HuggingFace Tokenizer</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Uniform chat prompt with system instruction,<BR/>[source-id] evidence, and query</FONT></TD></TR></TABLE>>,
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
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Submits question</FONT></TD></TR></TABLE>>,
        likec4_id="7fsmav",
        minlen=1,
        style=dashed];
    kb -> qdrant [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Paragraph chunking + embedding</FONT></TD></TR></TABLE>>,
        likec4_id="1nq36an",
        minlen=1,
        style=dashed];
    retriever -> qdrant [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Cosine similarity search (top-3,<BR/>min_score=0.30)</FONT></TD></TR></TABLE>>,
        likec4_id="1qmiw16",
        style=dashed,
        weight=2];
    retriever -> prompt_builder [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Supplies accepted evidence chunks</FONT></TD></TR></TABLE>>,
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
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Prompt Formatter</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">HuggingFace Tokenizer</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Uniform chat prompt with system instruction,<BR/>[source-id] evidence, and query</FONT></TD></TR></TABLE>>,
            likec4_id="northstar.prompt_builder",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        lora_weights [group=northstar,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">LoRA Adapter</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">PEFT</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Trained low-rank matrices on q_proj &amp; v_proj<BR/>(0.34% params)</FONT></TD></TR></TABLE>>,
            likec4_id="northstar.lora_weights",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        base_model [group=northstar,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SmolLM2-135M Base</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">PyTorch / Transformers</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Frozen 135M parameter causal language model</FONT></TD></TR></TABLE>>,
            likec4_id="northstar.base_model",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        guardrail [group=northstar,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Citation &amp; Abstention Guard</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">Deterministic Rules</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Enforces [source-id] citations; rejects<BR/>hallucinations; triggers fallback</FONT></TD></TR></TABLE>>,
            likec4_id="northstar.guardrail",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    prompt_builder -> base_model [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Inference prompt</FONT></TD></TR></TABLE>>,
        likec4_id="60thth",
        minlen=1,
        style=dashed];
    lora_weights -> base_model [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Adapts query &amp; value attention weights</FONT></TD></TR></TABLE>>,
        likec4_id="1xhf30z",
        minlen=1,
        style=dashed];
    base_model -> guardrail [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Greedy token generation (max 80 tokens)</FONT></TD></TR></TABLE>>,
        likec4_id=usvd4s,
        style=dashed,
        weight=2];
    customer [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Customer</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Submits support questions (refunds, shipping,<BR/>subscriptions, incidents)</FONT></TD></TR></TABLE>>,
        likec4_id=customer,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    guardrail -> customer [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Final verified answer or escalation</FONT></TD></TR></TABLE>>,
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
<svg width="1686pt" height="1850pt"
 viewBox="0.00 0.00 1686.00 1850.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1835.05)">
<g id="clust1" class="cluster">
<title>cluster_northstar</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-282.8 8,-1549.2 1478,-1549.2 1478,-282.8 8,-282.8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-1536.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">NORTHSTAR SUPPORT AI</text>
</g>
<!-- retriever -->
<g id="node1" class="node">
<title>retriever</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1369.02,-1488 1048.98,-1488 1048.98,-1308 1369.02,-1308 1369.02,-1488"/>
<text xml:space="preserve" text-anchor="start" x="1101.72" y="-1419.8" font-family="Arial" font-size="20.00" fill="#eff6ff">Shared Dense Retriever</text>
<text xml:space="preserve" text-anchor="start" x="1142.89" y="-1398.8" font-family="Arial" font-size="13.00" fill="#bfdbfe">SentenceTransformers</text>
<text xml:space="preserve" text-anchor="start" x="1070.19" y="-1377.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">Embeds questions (all&#45;MiniLM&#45;L6&#45;v2) and</text>
<text xml:space="preserve" text-anchor="start" x="1112.69" y="-1359.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">fetches top&#45;k chunks &gt;= 0.30</text>
</g>
<!-- kb -->
<g id="node2" class="node">
<title>kb</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="819.79,-1488 496.21,-1488 496.21,-1308 819.79,-1308 819.79,-1488"/>
<text xml:space="preserve" text-anchor="start" x="591.86" y="-1410.8" font-family="Arial" font-size="20.00" fill="#eff6ff">Policy Sources</text>
<text xml:space="preserve" text-anchor="start" x="614.65" y="-1389.8" font-family="Arial" font-size="13.00" fill="#bfdbfe">Markdown files</text>
<text xml:space="preserve" text-anchor="start" x="516.27" y="-1368.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">6 approved Markdown policies (truth layer)</text>
</g>
<!-- lora_weights -->
<g id="node3" class="node">
<title>lora_weights</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="386.29,-1488 47.71,-1488 47.71,-1308 386.29,-1308 386.29,-1488"/>
<text xml:space="preserve" text-anchor="start" x="154.18" y="-1419.8" font-family="Arial" font-size="20.00" fill="#eff6ff">LoRA Adapter</text>
<text xml:space="preserve" text-anchor="start" x="200.39" y="-1398.8" font-family="Arial" font-size="13.00" fill="#bfdbfe">PEFT</text>
<text xml:space="preserve" text-anchor="start" x="67.77" y="-1377.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">Trained low&#45;rank matrices on q_proj &amp; v_proj</text>
<text xml:space="preserve" text-anchor="start" x="163.65" y="-1359.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">(0.34% params)</text>
</g>
<!-- prompt_builder -->
<g id="node4" class="node">
<title>prompt_builder</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1376.6,-1148.4 1041.4,-1148.4 1041.4,-968.4 1376.6,-968.4 1376.6,-1148.4"/>
<text xml:space="preserve" text-anchor="start" x="1130.65" y="-1080.2" font-family="Arial" font-size="20.00" fill="#eff6ff">Prompt Formatter</text>
<text xml:space="preserve" text-anchor="start" x="1139.99" y="-1059.2" font-family="Arial" font-size="13.00" fill="#bfdbfe">HuggingFace Tokenizer</text>
<text xml:space="preserve" text-anchor="start" x="1061.45" y="-1037.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">Uniform chat prompt with system instruction,</text>
<text xml:space="preserve" text-anchor="start" x="1104.36" y="-1019.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">[source&#45;id] evidence, and query</text>
</g>
<!-- qdrant -->
<g id="node5" class="node">
<title>qdrant</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="931.07,-1148.4 574.93,-1148.4 574.93,-968.4 931.07,-968.4 931.07,-1148.4"/>
<text xml:space="preserve" text-anchor="start" x="696.86" y="-1071.2" font-family="Arial" font-size="20.00" fill="#eff6ff">Vector Index</text>
<text xml:space="preserve" text-anchor="start" x="678.59" y="-1050.2" font-family="Arial" font-size="13.00" fill="#bfdbfe">Qdrant (Local In&#45;Memory)</text>
<text xml:space="preserve" text-anchor="start" x="594.99" y="-1028.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">Stores dense chunk embeddings with metadata</text>
</g>
<!-- base_model -->
<g id="node6" class="node">
<title>base_model</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1322.73,-825.6 963.27,-825.6 963.27,-645.6 1322.73,-645.6 1322.73,-825.6"/>
<text xml:space="preserve" text-anchor="start" x="1046.85" y="-748.4" font-family="Arial" font-size="20.00" fill="#eff6ff">SmolLM2&#45;135M Base</text>
<text xml:space="preserve" text-anchor="start" x="1074.74" y="-727.4" font-family="Arial" font-size="13.00" fill="#bfdbfe">PyTorch / Transformers</text>
<text xml:space="preserve" text-anchor="start" x="983.32" y="-705.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">Frozen 135M parameter causal language model</text>
</g>
<!-- guardrail -->
<g id="node7" class="node">
<title>guardrail</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1303.02,-502.8 982.98,-502.8 982.98,-322.8 1303.02,-322.8 1303.02,-502.8"/>
<text xml:space="preserve" text-anchor="start" x="1019.04" y="-434.6" font-family="Arial" font-size="20.00" fill="#eff6ff">Citation &amp; Abstention Guard</text>
<text xml:space="preserve" text-anchor="start" x="1087.01" y="-413.6" font-family="Arial" font-size="13.00" fill="#bfdbfe">Deterministic Rules</text>
<text xml:space="preserve" text-anchor="start" x="1020.45" y="-392" font-family="Arial" font-size="15.00" fill="#bfdbfe">Enforces [source&#45;id] citations; rejects</text>
<text xml:space="preserve" text-anchor="start" x="1040.86" y="-374" font-family="Arial" font-size="15.00" fill="#bfdbfe">hallucinations; triggers fallback</text>
</g>
<!-- customer -->
<g id="node8" class="node">
<title>customer</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1515.22,-180 1170.78,-180 1170.78,0 1515.22,0 1515.22,-180"/>
<text xml:space="preserve" text-anchor="start" x="1299.66" y="-102" font-family="Arial" font-size="20.00" fill="#eff6ff">Customer</text>
<text xml:space="preserve" text-anchor="start" x="1190.83" y="-79" font-family="Arial" font-size="15.00" fill="#bfdbfe">Submits support questions (refunds, shipping,</text>
<text xml:space="preserve" text-anchor="start" x="1262.96" y="-61" font-family="Arial" font-size="15.00" fill="#bfdbfe">subscriptions, incidents)</text>
</g>
<!-- support_evaluator -->
<g id="node9" class="node">
<title>support_evaluator</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1379.99,-1820 1038.01,-1820 1038.01,-1640 1379.99,-1640 1379.99,-1820"/>
<text xml:space="preserve" text-anchor="start" x="1132.85" y="-1742" font-family="Arial" font-size="20.00" fill="#eff6ff">Benchmark Suite</text>
<text xml:space="preserve" text-anchor="start" x="1058.07" y="-1719" font-family="Arial" font-size="15.00" fill="#bfdbfe">Runs 14 held&#45;out evaluation cases against all</text>
<text xml:space="preserve" text-anchor="start" x="1179.4" y="-1701" font-family="Arial" font-size="15.00" fill="#bfdbfe">pipelines</text>
</g>
<!-- retriever&#45;&gt;prompt_builder -->
<g id="edge3" class="edge">
<title>retriever&#45;&gt;prompt_builder</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1209,-1308.3C1209,-1262.34 1209,-1206.07 1209,-1158.67"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1211.63,-1158.91 1209,-1151.41 1206.38,-1158.91 1211.63,-1158.91"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1209,-1216.8 1209,-1239.6 1437.59,-1239.6 1437.59,-1216.8 1209,-1216.8"/>
<text xml:space="preserve" text-anchor="start" x="1212" y="-1222.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">Supplies accepted evidence chunks</text>
</g>
<!-- retriever&#45;&gt;qdrant -->
<g id="edge4" class="edge">
<title>retriever&#45;&gt;qdrant</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1069.96,-1308.15C1041.12,-1288.84 1011.19,-1268.15 983.83,-1248 944.25,-1218.85 902.26,-1185.36 865.1,-1154.77"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="867.03,-1152.97 859.58,-1150.22 863.69,-1157.02 867.03,-1152.97"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="983.83,-1208.4 983.83,-1248 1182,-1248 1182,-1208.4 983.83,-1208.4"/>
<text xml:space="preserve" text-anchor="start" x="986.83" y="-1231" font-family="Arial" font-size="14.00" fill="#c9c9c9">Cosine similarity search (top&#45;3,</text>
<text xml:space="preserve" text-anchor="start" x="986.83" y="-1214.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">min_score=0.30)</text>
</g>
<!-- kb&#45;&gt;qdrant -->
<g id="edge5" class="edge">
<title>kb&#45;&gt;qdrant</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M560.53,-1308.35C538.05,-1277.29 525.17,-1241.82 542.46,-1208.4 552.68,-1188.65 566.85,-1170.96 583.06,-1155.27"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="584.73,-1157.3 588.43,-1150.27 581.15,-1153.46 584.73,-1157.3"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="542.46,-1216.8 542.46,-1239.6 759,-1239.6 759,-1216.8 542.46,-1216.8"/>
<text xml:space="preserve" text-anchor="start" x="545.46" y="-1222.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">Paragraph chunking + embedding</text>
</g>
<!-- lora_weights&#45;&gt;base_model -->
<g id="edge6" class="edge">
<title>lora_weights&#45;&gt;base_model</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M201.99,-1308.33C191.16,-1212.66 190.42,-1061.53 271.96,-968.4 360.83,-866.89 725.18,-796.96 953.57,-762.12"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="953.65,-764.77 960.67,-761.05 952.86,-759.58 953.65,-764.77"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="271.96,-1047 271.96,-1069.8 520,-1069.8 520,-1047 271.96,-1047"/>
<text xml:space="preserve" text-anchor="start" x="274.96" y="-1052.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">Adapts query &amp; value attention weights</text>
</g>
<!-- prompt_builder&#45;&gt;base_model -->
<g id="edge7" class="edge">
<title>prompt_builder&#45;&gt;base_model</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1190.7,-968.47C1182.21,-927.18 1172.08,-877.95 1163.35,-835.5"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1165.97,-835.21 1161.89,-828.39 1160.83,-836.27 1165.97,-835.21"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1177.98,-885.6 1177.98,-908.4 1289.81,-908.4 1289.81,-885.6 1177.98,-885.6"/>
<text xml:space="preserve" text-anchor="start" x="1180.98" y="-891.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">Inference prompt</text>
</g>
<!-- base_model&#45;&gt;guardrail -->
<g id="edge8" class="edge">
<title>base_model&#45;&gt;guardrail</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1143,-645.67C1143,-604.47 1143,-555.36 1143,-512.97"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1145.63,-513.16 1143,-505.66 1140.38,-513.16 1145.63,-513.16"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1143,-562.8 1143,-585.6 1407.36,-585.6 1407.36,-562.8 1143,-562.8"/>
<text xml:space="preserve" text-anchor="start" x="1146" y="-568.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">Greedy token generation (max 80 tokens)</text>
</g>
<!-- guardrail&#45;&gt;customer -->
<g id="edge9" class="edge">
<title>guardrail&#45;&gt;customer</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1192.88,-322.81C1208.35,-295.97 1225.71,-266.58 1242.35,-240 1252.95,-223.06 1264.54,-205.27 1275.97,-188.12"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1277.89,-189.97 1279.88,-182.28 1273.53,-187.05 1277.89,-189.97"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1242.35,-240 1242.35,-262.8 1460,-262.8 1460,-240 1242.35,-240"/>
<text xml:space="preserve" text-anchor="start" x="1245.35" y="-245.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">Final verified answer or escalation</text>
</g>
<!-- customer&#45;&gt;retriever -->
<g id="edge1" class="edge">
<title>customer&#45;&gt;retriever</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1437.64,-179.84C1454.28,-198.58 1470.3,-219.06 1483,-240 1524.94,-309.16 1543,-330.92 1543,-411.8 1543,-1059.4 1543,-1059.4 1543,-1059.4 1543,-1150.11 1524.67,-1179.68 1465,-1248 1440.55,-1276 1409.49,-1300.07 1377.51,-1320.19"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1376.5,-1317.73 1371.49,-1323.9 1379.25,-1322.2 1376.5,-1317.73"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1543,-724.2 1543,-747 1656.39,-747 1656.39,-724.2 1543,-724.2"/>
<text xml:space="preserve" text-anchor="start" x="1546" y="-730" font-family="Arial" font-size="14.00" fill="#c9c9c9">Submits question</text>
</g>
<!-- support_evaluator&#45;&gt;retriever -->
<g id="edge2" class="edge">
<title>support_evaluator&#45;&gt;retriever</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1209,-1640.13C1209,-1596.3 1209,-1543.28 1209,-1498.14"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1211.63,-1498.27 1209,-1490.77 1206.38,-1498.27 1211.63,-1498.27"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1209,-1557.2 1209,-1580 1409.55,-1580 1409.55,-1557.2 1209,-1557.2"/>
<text xml:space="preserve" text-anchor="start" x="1212" y="-1563" font-family="Arial" font-size="14.00" fill="#c9c9c9">Executes benchmark questions</text>
</g>
</g>
</svg>
`;case`retrieval_pipeline`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 16.1.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="1110pt" height="930pt"
 viewBox="0.00 0.00 1110.00 930.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 914.65)">
<g id="clust1" class="cluster">
<title>cluster_northstar</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-628.8 1072,-628.8 1072,-8 8,-8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-615.9" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">NORTHSTAR SUPPORT AI</text>
</g>
<!-- kb -->
<g id="node1" class="node">
<title>kb</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="371.79,-567.6 48.21,-567.6 48.21,-387.6 371.79,-387.6 371.79,-567.6"/>
<text xml:space="preserve" text-anchor="start" x="143.86" y="-490.4" font-family="Arial" font-size="20.00" fill="#eff6ff">Policy Sources</text>
<text xml:space="preserve" text-anchor="start" x="166.65" y="-469.4" font-family="Arial" font-size="13.00" fill="#bfdbfe">Markdown files</text>
<text xml:space="preserve" text-anchor="start" x="68.27" y="-447.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">6 approved Markdown policies (truth layer)</text>
</g>
<!-- retriever -->
<g id="node2" class="node">
<title>retriever</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="882.02,-567.6 561.98,-567.6 561.98,-387.6 882.02,-387.6 882.02,-567.6"/>
<text xml:space="preserve" text-anchor="start" x="614.72" y="-499.4" font-family="Arial" font-size="20.00" fill="#eff6ff">Shared Dense Retriever</text>
<text xml:space="preserve" text-anchor="start" x="655.89" y="-478.4" font-family="Arial" font-size="13.00" fill="#bfdbfe">SentenceTransformers</text>
<text xml:space="preserve" text-anchor="start" x="583.19" y="-456.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">Embeds questions (all&#45;MiniLM&#45;L6&#45;v2) and</text>
<text xml:space="preserve" text-anchor="start" x="625.69" y="-438.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">fetches top&#45;k chunks &gt;= 0.30</text>
</g>
<!-- qdrant -->
<g id="node3" class="node">
<title>qdrant</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="525.07,-228 168.93,-228 168.93,-48 525.07,-48 525.07,-228"/>
<text xml:space="preserve" text-anchor="start" x="290.86" y="-150.8" font-family="Arial" font-size="20.00" fill="#eff6ff">Vector Index</text>
<text xml:space="preserve" text-anchor="start" x="272.59" y="-129.8" font-family="Arial" font-size="13.00" fill="#bfdbfe">Qdrant (Local In&#45;Memory)</text>
<text xml:space="preserve" text-anchor="start" x="188.99" y="-108.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">Stores dense chunk embeddings with metadata</text>
</g>
<!-- prompt_builder -->
<g id="node4" class="node">
<title>prompt_builder</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="970.6,-228 635.4,-228 635.4,-48 970.6,-48 970.6,-228"/>
<text xml:space="preserve" text-anchor="start" x="724.65" y="-159.8" font-family="Arial" font-size="20.00" fill="#eff6ff">Prompt Formatter</text>
<text xml:space="preserve" text-anchor="start" x="733.99" y="-138.8" font-family="Arial" font-size="13.00" fill="#bfdbfe">HuggingFace Tokenizer</text>
<text xml:space="preserve" text-anchor="start" x="655.45" y="-117.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">Uniform chat prompt with system instruction,</text>
<text xml:space="preserve" text-anchor="start" x="698.36" y="-99.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">[source&#45;id] evidence, and query</text>
</g>
<!-- customer -->
<g id="node5" class="node">
<title>customer</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="894.22,-899.6 549.78,-899.6 549.78,-719.6 894.22,-719.6 894.22,-899.6"/>
<text xml:space="preserve" text-anchor="start" x="678.66" y="-821.6" font-family="Arial" font-size="20.00" fill="#eff6ff">Customer</text>
<text xml:space="preserve" text-anchor="start" x="569.83" y="-798.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">Submits support questions (refunds, shipping,</text>
<text xml:space="preserve" text-anchor="start" x="641.96" y="-780.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">subscriptions, incidents)</text>
</g>
<!-- kb&#45;&gt;qdrant -->
<g id="edge2" class="edge">
<title>kb&#45;&gt;qdrant</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M144.06,-388.05C128.23,-355.89 120.07,-319.68 136.46,-288 146.68,-268.25 160.85,-250.56 177.06,-234.87"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="178.73,-236.9 182.43,-229.87 175.15,-233.06 178.73,-236.9"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="136.46,-296.4 136.46,-319.2 353,-319.2 353,-296.4 136.46,-296.4"/>
<text xml:space="preserve" text-anchor="start" x="139.46" y="-302.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">Paragraph chunking + embedding</text>
</g>
<!-- retriever&#45;&gt;qdrant -->
<g id="edge3" class="edge">
<title>retriever&#45;&gt;qdrant</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M605.95,-387.63C582.01,-368.33 557.27,-347.68 534.83,-327.6 502.47,-298.65 468.56,-265.54 438.59,-235.22"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="440.73,-233.65 433.59,-230.15 436.99,-237.33 440.73,-233.65"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="534.83,-288 534.83,-327.6 733,-327.6 733,-288 534.83,-288"/>
<text xml:space="preserve" text-anchor="start" x="537.83" y="-310.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">Cosine similarity search (top&#45;3,</text>
<text xml:space="preserve" text-anchor="start" x="537.83" y="-293.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">min_score=0.30)</text>
</g>
<!-- retriever&#45;&gt;prompt_builder -->
<g id="edge4" class="edge">
<title>retriever&#45;&gt;prompt_builder</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M743.28,-387.9C754.33,-341.85 767.87,-285.44 779.25,-237.97"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="781.75,-238.84 780.94,-230.93 776.64,-237.61 781.75,-238.84"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="764.93,-296.4 764.93,-319.2 993.52,-319.2 993.52,-296.4 764.93,-296.4"/>
<text xml:space="preserve" text-anchor="start" x="767.93" y="-302.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">Supplies accepted evidence chunks</text>
</g>
<!-- customer&#45;&gt;retriever -->
<g id="edge1" class="edge">
<title>customer&#45;&gt;retriever</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M722,-719.73C722,-675.9 722,-622.88 722,-577.74"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="724.63,-577.87 722,-570.37 719.38,-577.87 724.63,-577.87"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="722,-636.8 722,-659.6 835.39,-659.6 835.39,-636.8 722,-636.8"/>
<text xml:space="preserve" text-anchor="start" x="725" y="-642.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">Submits question</text>
</g>
</g>
</svg>
`;case`hybrid_generation`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 16.1.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="910pt" height="1248pt"
 viewBox="0.00 0.00 910.00 1248.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1232.65)">
<g id="clust1" class="cluster">
<title>cluster_northstar</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-282.8 8,-1209.6 872,-1209.6 872,-282.8 8,-282.8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-1196.7" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">NORTHSTAR SUPPORT AI</text>
</g>
<!-- prompt_builder -->
<g id="node1" class="node">
<title>prompt_builder</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="383.6,-1148.4 48.4,-1148.4 48.4,-968.4 383.6,-968.4 383.6,-1148.4"/>
<text xml:space="preserve" text-anchor="start" x="137.65" y="-1080.2" font-family="Arial" font-size="20.00" fill="#eff6ff">Prompt Formatter</text>
<text xml:space="preserve" text-anchor="start" x="146.99" y="-1059.2" font-family="Arial" font-size="13.00" fill="#bfdbfe">HuggingFace Tokenizer</text>
<text xml:space="preserve" text-anchor="start" x="68.45" y="-1037.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">Uniform chat prompt with system instruction,</text>
<text xml:space="preserve" text-anchor="start" x="111.36" y="-1019.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">[source&#45;id] evidence, and query</text>
</g>
<!-- lora_weights -->
<g id="node2" class="node">
<title>lora_weights</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="832.29,-1148.4 493.71,-1148.4 493.71,-968.4 832.29,-968.4 832.29,-1148.4"/>
<text xml:space="preserve" text-anchor="start" x="600.18" y="-1080.2" font-family="Arial" font-size="20.00" fill="#eff6ff">LoRA Adapter</text>
<text xml:space="preserve" text-anchor="start" x="646.39" y="-1059.2" font-family="Arial" font-size="13.00" fill="#bfdbfe">PEFT</text>
<text xml:space="preserve" text-anchor="start" x="513.77" y="-1037.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">Trained low&#45;rank matrices on q_proj &amp; v_proj</text>
<text xml:space="preserve" text-anchor="start" x="609.65" y="-1019.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">(0.34% params)</text>
</g>
<!-- base_model -->
<g id="node3" class="node">
<title>base_model</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="549.73,-825.6 190.27,-825.6 190.27,-645.6 549.73,-645.6 549.73,-825.6"/>
<text xml:space="preserve" text-anchor="start" x="273.85" y="-748.4" font-family="Arial" font-size="20.00" fill="#eff6ff">SmolLM2&#45;135M Base</text>
<text xml:space="preserve" text-anchor="start" x="301.74" y="-727.4" font-family="Arial" font-size="13.00" fill="#bfdbfe">PyTorch / Transformers</text>
<text xml:space="preserve" text-anchor="start" x="210.32" y="-705.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">Frozen 135M parameter causal language model</text>
</g>
<!-- guardrail -->
<g id="node4" class="node">
<title>guardrail</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="530.02,-502.8 209.98,-502.8 209.98,-322.8 530.02,-322.8 530.02,-502.8"/>
<text xml:space="preserve" text-anchor="start" x="246.04" y="-434.6" font-family="Arial" font-size="20.00" fill="#eff6ff">Citation &amp; Abstention Guard</text>
<text xml:space="preserve" text-anchor="start" x="314.01" y="-413.6" font-family="Arial" font-size="13.00" fill="#bfdbfe">Deterministic Rules</text>
<text xml:space="preserve" text-anchor="start" x="247.45" y="-392" font-family="Arial" font-size="15.00" fill="#bfdbfe">Enforces [source&#45;id] citations; rejects</text>
<text xml:space="preserve" text-anchor="start" x="267.86" y="-374" font-family="Arial" font-size="15.00" fill="#bfdbfe">hallucinations; triggers fallback</text>
</g>
<!-- customer -->
<g id="node5" class="node">
<title>customer</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="542.22,-180 197.78,-180 197.78,0 542.22,0 542.22,-180"/>
<text xml:space="preserve" text-anchor="start" x="326.66" y="-102" font-family="Arial" font-size="20.00" fill="#eff6ff">Customer</text>
<text xml:space="preserve" text-anchor="start" x="217.83" y="-79" font-family="Arial" font-size="15.00" fill="#bfdbfe">Submits support questions (refunds, shipping,</text>
<text xml:space="preserve" text-anchor="start" x="289.96" y="-61" font-family="Arial" font-size="15.00" fill="#bfdbfe">subscriptions, incidents)</text>
</g>
<!-- prompt_builder&#45;&gt;base_model -->
<g id="edge1" class="edge">
<title>prompt_builder&#45;&gt;base_model</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M258.69,-968.47C278.64,-926.92 302.44,-877.33 322.91,-834.7"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="325.17,-836.06 326.05,-828.16 320.44,-833.78 325.17,-836.06"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="297.62,-885.6 297.62,-908.4 409.45,-908.4 409.45,-885.6 297.62,-885.6"/>
<text xml:space="preserve" text-anchor="start" x="300.62" y="-891.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">Inference prompt</text>
</g>
<!-- lora_weights&#45;&gt;base_model -->
<g id="edge2" class="edge">
<title>lora_weights&#45;&gt;base_model</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M581.77,-968.47C543.35,-926.4 497.39,-876.08 458.13,-833.09"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="460.17,-831.43 453.17,-827.66 456.29,-834.97 460.17,-831.43"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="525.29,-885.6 525.29,-908.4 773.33,-908.4 773.33,-885.6 525.29,-885.6"/>
<text xml:space="preserve" text-anchor="start" x="528.29" y="-891.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">Adapts query &amp; value attention weights</text>
</g>
<!-- base_model&#45;&gt;guardrail -->
<g id="edge3" class="edge">
<title>base_model&#45;&gt;guardrail</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M370,-645.67C370,-604.47 370,-555.36 370,-512.97"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="372.63,-513.16 370,-505.66 367.38,-513.16 372.63,-513.16"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="370,-562.8 370,-585.6 634.36,-585.6 634.36,-562.8 370,-562.8"/>
<text xml:space="preserve" text-anchor="start" x="373" y="-568.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">Greedy token generation (max 80 tokens)</text>
</g>
<!-- guardrail&#45;&gt;customer -->
<g id="edge4" class="edge">
<title>guardrail&#45;&gt;customer</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M370,-322.87C370,-281.67 370,-232.56 370,-190.17"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="372.63,-190.36 370,-182.86 367.38,-190.36 372.63,-190.36"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="370,-240 370,-262.8 587.65,-262.8 587.65,-240 370,-240"/>
<text xml:space="preserve" text-anchor="start" x="373" y="-245.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">Final verified answer or escalation</text>
</g>
</g>
</svg>
`;default:throw Error(`Unknown viewId: `+e)}};export{e as dotSource,t as svgSource};