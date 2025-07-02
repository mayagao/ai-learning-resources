# AI Learning Resources for Designers

A comprehensive documentation site built with Next.js and Markdoc to help designers understand and leverage AI tools in their workflow.

## Features

- 📚 **Comprehensive Documentation** - Three main sections covering getting started, AI fundamentals, and design tools
- 🎨 **Minimal Design** - Clean interface with Apple monospace font and GitHub-inspired styling
- 📱 **Responsive Layout** - Collapsible sidebar that adapts to mobile screens
- 🎯 **Code Examples** - Syntax highlighting with multi-language tabs
- 📊 **Diagrams** - Mermaid diagram support for visualizing concepts
- 🔍 **Practical Examples** - Real-world examples including prompt engineering, image generation, and workflow automation
- ⚡ **Fast & Modern** - Built with Next.js 14 and powered by Markdoc

## Quick Start

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Run development server:**

   ```bash
   npm run dev
   ```

3. **Open your browser:**
   ```
   http://localhost:3000
   ```

## Project Structure

```
├── components/          # React components
│   ├── Layout.tsx      # Main layout with sidebar
│   ├── Sidebar.tsx     # Navigation sidebar
│   ├── CodeTabs.tsx    # Multi-language code examples
│   ├── Callout.tsx     # Information callouts
│   ├── Diagram.tsx     # Mermaid diagram renderer
│   └── CodeBlock.tsx   # Syntax highlighting
├── examples/           # Practical examples
│   ├── prompt-engineering/
│   ├── image-generation/
│   └── workflow-automation/
├── pages/              # Documentation pages
│   ├── index.tsx       # Home page
│   ├── getting-started.md
│   ├── ai-fundamentals.md
│   └── design-tools.md
├── styles/
│   └── globals.css     # Global styles with Apple monospace
└── markdoc.config.js   # Markdoc configuration
```

## Writing Documentation

### Markdoc Features

Use custom tags for enhanced content:

```markdown
{% callout type="info" title="Pro Tip" %}
Your helpful information here
{% /callout %}

{% codetabs examples=[
  {
    "language": "javascript",
    "label": "React",
    "code": "const component = () => <div>Hello</div>;"
  }
] %}
{% /codetabs %}

{% diagram type="mermaid" content="
graph TD
    A[Start] --> B[Process]
    B --> C[End]
" %}
```

### Callout Types

- `info` - General information
- `warning` - Important warnings
- `success` - Success messages

## Customization

### Styling

- Primary font: SF Mono (Apple monospace)
- Color scheme: GitHub-inspired neutrals
- Responsive breakpoint: 768px

### Components

All components are modular and can be easily customized in the `components/` directory.

## Deployment

This project is optimized for Vercel deployment:

1. Connect your GitHub repository to Vercel
2. Deploy automatically on push to main branch
3. Environment variables (if needed) can be set in Vercel dashboard

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Update documentation if needed
5. Submit a pull request

## Tech Stack

- **Framework:** Next.js 14
- **Content:** Markdoc
- **Styling:** CSS with custom properties
- **Icons:** Primer Octicons
- **Syntax Highlighting:** react-syntax-highlighter
- **Diagrams:** Mermaid
- **Deployment:** Vercel-ready

## License

MIT License - feel free to use this for your own documentation projects!
