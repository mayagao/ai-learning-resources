---
title: Terminologies
description: Essential concepts and terms for understanding AI systems
icon: book
order: 1
section: main
---

# Terminologies

This guide provides a concise overview of the fundamental concepts, drawing from practical experience and design perspectives to help you navigate the complexities of modern AI.

## Models

AI models are trained on vast datasets to generate human-like responses. Large Language Models (LLMs) use **weights** (what they learn) and **architecture** (how they process) to predict outputs based on context. Their inner workings are mostly opaque, making them unpredictable and challenging to control. Most models are proprietary, though some open models exist. _Andrej Karpathy_ compared the future of LLM systems to a kernel in an emerging OS, using memory and computational tools to solve problems.

{% link
   source="youtube"
   url="https://www.youtube.com/watch?v=zjkBMFhNj_g"
   length="1 hr video"
   title="Andrej Karpathy: Intro to Large Language Models"
/%}

{% link
   source="youtube"
   url="https://www.youtube.com/watch?v=LCEmiRjPEtQ"
   length="40 min video"
   title="Andrej Karpathy: Software Is Changing (Again)"
/%}

## Contexts

Professional tasks require rich context, but LLMs can only process a limited amount at once. Their **context window** restricts input size, and they have minimal long-term memory. People use strategies like larger context windows, embeddings, and helper systems to provide relevant information. Collecting context is complex, as LLMs can't directly interact with files or the web. Tools/MCP servers help gather and deliver the right context, but even with these, LLMs can skip steps or hallucinate, making efficient data flow and interface design crucial.

{% table %}
| Model | Provider | Context Window | Input $/1M tokens | Output $/1M tokens |
|-------------------------|----------|---------------|-------------------|--------------------|
| Gemini 2.0 Flash | Google | 1M | $0.10 | $0.40 |
| GPT-4o | OpenAI | 128K | $2.50 | $10.00 |
| GPT-4o-mini | OpenAI | 128K | $0.15 | $0.60 |
| 3.7 Sonnet | Anthropic| 200K | $3.00 | $15.00 |
{% /table %}

## Tool Calls

Tool calls let AI models interact with external resources, overcoming their built-in limitations. Through tool calls, models can access real-time data, run code, manipulate files, connect to APIs, and query databases. For example, a model can fetch weather data by calling an API and presenting the result conversationally. These interactions are managed through standardized protocols, ensuring security, modularity, and scalability, and are essential for building flexible, powerful AI systems.

{% link
   source="openai"
   url="https://platform.openai.com/docs/guides/function-calling"
   length="20 min read"
   title="Function Calling"
/%}

## MCP Servers

Model Context Protocol (MCP) servers act as intermediaries, giving AI models secure, modular access to files, databases, web APIs, and cloud services. MCP servers standardize how models connect to external tools, making it easier to add new capabilities and build complex workflows. This approach supports scalability and adaptability, allowing AI systems to leverage a wide range of resources as requirements evolve.

{% link
   source="anthropic"
   url="https://www.youtube.com/watch?v=CQywdSdi5iA"
   length="40 min"
   title="The Model Context Protocol (MCP)"
/%}

## Agents

Agents are AI systems that can make decisions, use tools, and complete multi-step tasks autonomously. They receive a goal, plan actions, use tools, and iterate based on feedback until the task is done. Agents can plan, remember, reason, and refine their approach. Types include reactive agents (respond to inputs), planning agents (develop strategies), learning agents (improve over time), and collaborative agents (work together on tasks).

{% link
   source="anthropic"
   url="https://www.youtube.com/watch?v=CQywdSdi5iA"
   length="40 min video"
   title="The Model Context Protocol (MCP)"
/%}
{% link
   source="anthropic"
   url="https://www.anthropic.com/engineering/building-effective-agents"
   length="20 min read"
   title="Building effective agents"
/%}
{% link
   source="openai"
   url="https://platform.openai.com/docs/guides/agents"
   length="15 min read"
   title="Building Agents"
/%}

## Prompting

Prompting is about crafting instructions to get the best results from AI models. Effective prompts are specific, define roles, clarify objectives, and provide examples, similar to giving clear instructions to a person. Prompting styles vary: creative tasks may need open-ended prompts, while consistent outputs require detailed examples. Techniques like chain-of-thought prompting and few-shot learning help guide model responses. Each model behaves differently, so experimentation is key.

{% link
   source="anthropic"
   url="https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview"
   length="1 hr read"
   title="Prompt Engineering Overview"
/%}
