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

## Adding New Pages

### Step 1: Create the Markdown File

Create a new `.md` file in the appropriate directory:

- **Documentation pages**: `pages/your-page-name.md`
- **Example pages**: `examples/your-example/README.md`

### Step 2: Add Frontmatter

Add frontmatter at the top of your markdown file:

```markdown
---
title: Your Page Title
description: Brief description of your page
icon: book
order: 1
section: main
---

# Your Page Title

Your content here...
```

**Frontmatter Options:**

- `title` - Display name in navigation (required)
- `description` - Page description for SEO
- `icon` - Icon name from available icons (optional)
- `order` - Sort order in navigation (optional)
- `section` - Group pages into sections (optional)

### Step 3: Update Navigation

Add your page to the navigation in `utils/navigation.ts`:

```typescript
// For documentation pages
{
  title: 'Your Page Title',
  href: '/your-page-name',
  icon: BookIcon,
  order: 4,
}

// For example pages
{
  title: 'Your Example',
  href: '/examples/your-example',
  icon: BeakerIcon,
  order: 4,
}
```

### Step 4: Choose an Icon

Available icons from Primer Octicons:

- `BookIcon` - Documentation, guides
- `CodeIcon` - Tools, development
- `GraphIcon` - Analytics, data
- `BeakerIcon` - Experiments, examples
- `PaintbrushIcon` - Design, creative
- `RocketIcon` - Getting started, launch
- `GearIcon` - Settings, automation

### Example: Adding a "Best Practices" Page

1. **Create file**: `pages/best-practices.md`

```markdown
---
title: Best Practices
description: Essential guidelines for AI-powered design
icon: gear
order: 4
section: main
---

# Best Practices for AI Design

Essential guidelines and recommendations...
```

2. **Update navigation** in `utils/navigation.ts`:

```typescript
{
  title: 'Best Practices',
  href: '/best-practices',
  icon: GearIcon,
  order: 4,
}
```

3. **Test**: Run `npm run dev` and check the sidebar

### Navigation Sections

Pages are organized into sections:

- **Documentation** (`section: main`): Core documentation
- **Examples** (`section: examples`): Practical examples
- **Custom sections**: Create new sections by using different section names

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
├── utils/
│   └── navigation.ts   # Navigation configuration
├── styles/
│   └── globals.css     # Global styles with Apple monospace
└── markdoc/           # Markdoc schema
    ├── tags.js        # Custom tags
    └── nodes.js       # Custom nodes
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
