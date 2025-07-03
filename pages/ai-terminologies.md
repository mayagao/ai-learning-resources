---
title: AI Terminologies
description: Essential concepts and terms for understanding AI systems
icon: book
order: 1
section: main
---

# AI Terminologies

Understanding key AI terminology is crucial for working effectively with AI systems. This guide explains the fundamental concepts you'll encounter.

## 1. Models

**Models** are the core AI systems trained on vast amounts of data to understand and generate human-like responses.

### Types of Models:

- **Large Language Models (LLMs)** - Text understanding and generation (GPT-4, Claude, Gemini)
- **Vision Models** - Image analysis and generation (DALL-E, Midjourney, Stable Diffusion)
- **Multimodal Models** - Handle text, images, audio, and video together

{% diagram type="mermaid" %}
graph TB
A[Input Data] --> B[AI Model]
B --> C[Processing]
C --> D[Output]

E[Training Data] --> F[Model Training]
F --> G[Trained Model]
G --> B
{% /diagram %}

### Key Characteristics:

- **Parameters** - The "size" of the model (billions of parameters)
- **Context Window** - How much information it can remember at once
- **Training Cutoff** - When the model's knowledge ends

## 2. Tool Calls

**Tool calls** enable AI models to interact with external systems and perform actions beyond text generation.

{% diagram type="mermaid" %}
sequenceDiagram
participant U as User
participant M as AI Model
participant T as Tool/API

U->>M: What's the weather in NYC?
M->>T: get_weather(city='NYC')
T->>M: temp: 72°F, condition: sunny
M->>U: It's 72°F and sunny in NYC
{% /diagram %}

### Common Tool Types:

- **Web Search** - Access real-time information
- **Code Execution** - Run calculations or scripts
- **File Operations** - Read, write, or modify files
- **API Integrations** - Connect to external services
- **Database Queries** - Retrieve specific data

{% codetabs examples=[
  {
    "language": "json",
    "label": "Tool Call Example",
    "code": "{\n  \"tool_name\": \"web_search\",\n  \"parameters\": {\n    \"query\": \"latest AI news 2024\",\n    \"max_results\": 5\n  }\n}"
  },
  {
    "language": "json",
    "label": "Tool Response",
    "code": "{\n  \"results\": [\n    {\n      \"title\": \"AI Breakthrough in 2024\",\n      \"url\": \"https://example.com/ai-news\",\n      \"snippet\": \"Latest developments...\"\n    }\n  ]\n}"
  }
] /%}

## 3. MCP Servers

**Model Context Protocol (MCP) Servers** provide a standardized way for AI models to connect to external resources and tools.

{% diagram type="mermaid" %}
graph TB
A[AI Model] --> B[MCP Client]
B --> C[MCP Server 1<br/>File System]
B --> D[MCP Server 2<br/>Database]
B --> E[MCP Server 3<br/>Web APIs]

C --> F[Local Files]
D --> G[SQL Database]
E --> H[REST APIs]
{% /diagram %}

### MCP Benefits:

- **Standardization** - Consistent interface across different tools
- **Security** - Controlled access to external resources
- **Modularity** - Easy to add/remove capabilities
- **Scalability** - Support for complex workflows

### Popular MCP Servers:

- **File System** - Access local files and directories
- **Database** - Query SQL databases
- **Web Scraping** - Extract data from websites
- **Cloud Services** - Integrate with AWS, Google Cloud, etc.

## 4. Agents

**Agents** are AI systems that can autonomously make decisions, use tools, and complete multi-step tasks.

{% diagram type="mermaid" %}
graph TD
A[Goal/Task] --> B[Agent]
B --> C{Planning}
C --> D[Action 1]
C --> E[Action 2]
C --> F[Action 3]

D --> G[Tool Call]
E --> H[Tool Call]
F --> I[Tool Call]

G --> J[Evaluate Results]
H --> J
I --> J

J --> K{Goal Achieved?}
K -->|No| C
K -->|Yes| L[Complete Task]
{% /diagram %}

### Agent Capabilities:

- **Planning** - Break down complex tasks into steps
- **Tool Usage** - Select and use appropriate tools
- **Memory** - Remember previous actions and results
- **Reasoning** - Make decisions based on context
- **Iteration** - Refine approach based on feedback

### Agent Types:

- **Reactive Agents** - Respond to immediate inputs
- **Planning Agents** - Create multi-step strategies
- **Learning Agents** - Improve over time
- **Collaborative Agents** - Work together on tasks

## 5. Prompting

**Prompting** is the art and science of communicating effectively with AI models to get desired outputs.

### Prompt Components:

{% codetabs examples=[
  {
    "language": "text",
    "label": "Basic Prompt",
    "code": "Write a summary of artificial intelligence."
  },
  {
    "language": "text",
    "label": "Structured Prompt",
    "code": "ROLE: You are an expert AI researcher\n\nTASK: Write a summary of artificial intelligence\n\nFORMAT: \n- 3 paragraphs\n- Include key applications\n- Use simple language\n\nCONTEXT: This is for a general audience blog post"
  }
] /%}

### Prompting Techniques:

**Chain of Thought** - Ask the model to think step by step

```text
Solve this math problem step by step:
What is 15% of 240?

Step 1: Convert percentage to decimal
Step 2: Multiply by the number
Step 3: Show the final answer
```

**Few-Shot Learning** - Provide examples

```text
Classify the sentiment of these reviews:

"Amazing product!" → Positive
"Terrible quality" → Negative
"It's okay, nothing special" → Neutral

"Best purchase ever!" → ?
```

{% diagram type="mermaid" %}
graph LR
A[Clear Instructions] --> B[Good Prompt]
C[Specific Context] --> B
D[Examples] --> B
E[Format Requirements] --> B

B --> F[Better AI Output]
{% /diagram %}

## Putting It All Together

Modern AI systems combine all these concepts:

{% diagram type="mermaid" %}
graph TB
A[User Input] --> B[Agent]
B --> C[Model Processing]
C --> D{Need Tools?}

D -->|Yes| E[Tool Calls]
E --> F[MCP Servers]
F --> G[External Resources]
G --> H[Tool Results]
H --> C

D -->|No| I[Direct Response]
I --> J[User Output]
C --> J
{% /diagram %}

{% callout type="tip" title="Best Practice" %}
Understanding these terminologies will help you communicate more effectively with AI systems and choose the right approach for your specific needs.
{% /callout %}

## Next Steps

1. **Experiment** with different prompting techniques
2. **Explore** available tools and MCP servers
3. **Build** simple agents for specific tasks
4. **Learn** about different model capabilities
5. **Practice** combining these concepts in real projects
