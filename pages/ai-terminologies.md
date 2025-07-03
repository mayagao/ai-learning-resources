---
title: Terminologies
description: Essential concepts and terms for understanding AI systems
icon: book
order: 1
section: main
---

{% diagram type="mermaid" %}
graph LR
%% Styling
classDef main fill:#f9f9f9,stroke:#343434,stroke-width:1px,border-radius:6px
classDef optional fill:#f9f9f9,stroke:#666,stroke-width:1px,stroke-dasharray:5 5,border-radius:6px

    %% Nodes
    User(["🧑 User"])
    Prompt(["Prompt"])
    Agent(["Agent"])
    Model(["Model"])
    Search(["Search Docs"]):::optional
    DB(["Query DB"]):::optional
    Output(["Output"])

    %% Flow
    User --> |"debug"| Prompt
    Prompt --> Agent
    Agent --> Model
    Model -.-> Search & DB
    Search & DB -.-> Model
    Model --> Output
    Output --> |"solution"| User

    %% Styles
    linkStyle default stroke-width:1px,arrowheadSize:9
    class User,Prompt,Agent,Model,Output main;

{% /diagram %}

# Terminologies

Understanding the language of artificial intelligence is essential for anyone working with or designing AI systems. This guide provides a concise overview of the fundamental concepts, drawing from practical experience and design perspectives to help you navigate the complexities of modern AI.

## Models

AI models are trained on vast datasets to generate human-like responses. Large Language Models (LLMs) use weights (what they learn) and architecture (how they process) to predict outputs based on context. Their inner workings are mostly opaque, making them unpredictable and challenging to control. Most models are proprietary, though some open models exist. Andrej Karpathy compared the future of LLM systems to a kernel in an emerging OS, using memory and computational tools to solve problems.

## Contexts

Professional tasks require rich context, but LLMs can only process a limited amount at once. Their context window restricts input size, and they have minimal long-term memory. Designers use strategies like larger context windows, embeddings, and helper systems to provide relevant information. Collecting context is complex, as LLMs can't directly interact with files or the web. Tools, MCP servers, and orchestrators help gather and deliver the right context, but even with these, LLMs can skip steps or hallucinate, making efficient data flow and interface design crucial.

## Tool Calls

Tool calls let AI models interact with external resources, overcoming their built-in limitations. Through tool calls, models can access real-time data, run code, manipulate files, connect to APIs, and query databases. For example, a model can fetch weather data by calling an API and presenting the result conversationally. These interactions are managed through standardized protocols, ensuring security, modularity, and scalability, and are essential for building flexible, powerful AI systems.

## MCP Servers

Model Context Protocol (MCP) servers act as intermediaries, giving AI models secure, modular access to files, databases, web APIs, and cloud services. MCP servers standardize how models connect to external tools, making it easier to add new capabilities and build complex workflows. This approach supports scalability and adaptability, allowing AI systems to leverage a wide range of resources as requirements evolve.

## Agents

Agents are AI systems that can make decisions, use tools, and complete multi-step tasks autonomously. They receive a goal, plan actions, use tools, and iterate based on feedback until the task is done. Agents can plan, remember, reason, and refine their approach. Types include reactive agents (respond to inputs), planning agents (develop strategies), learning agents (improve over time), and collaborative agents (work together on tasks).

## Prompting

Prompting is about crafting instructions to get the best results from AI models. Effective prompts are specific, define roles, clarify objectives, and provide examples, similar to giving clear instructions to a person. Prompting styles vary: creative tasks may need open-ended prompts, while consistent outputs require detailed examples. Techniques like chain-of-thought prompting and few-shot learning help guide model responses. Each model behaves differently, so experimentation is key.
