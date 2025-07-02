---
title: Prompt Engineering
description: Master the art of crafting effective AI prompts for design
icon: paintbrush
order: 1
section: examples
---

# Prompt Engineering for Designers

A comprehensive example of how to craft effective prompts for AI tools, with templates and real-world applications.

## The Framework

### Basic Structure

```
[Context] + [Task] + [Style] + [Format] + [Constraints]
```

### Advanced Structure

```
Role: You are [persona]
Context: [situation/project]
Task: [specific request]
Style: [aesthetic/approach]
Output: [format requirements]
Constraints: [limitations/requirements]
Examples: [reference styles]
```

## Example Templates

### UI Design Prompts

**Mobile App Screen**

```text
Role: You are a senior UX/UI designer
Context: Designing a meditation app for busy professionals
Task: Create a daily check-in screen that tracks mood and stress levels
Style: Calm, minimalist interface inspired by Headspace and Calm
Output: High-fidelity mobile mockup, iOS design system
Constraints: Single screen, max 3 interactive elements, accessibility compliant
```

**Website Hero Section**

```text
Create a hero section for a sustainable fashion e-commerce site.
Style: Earth tones, clean typography, authentic photography
Elements: Headline, subtext, CTA button, background image
Message: "Fashion that doesn't cost the earth"
Layout: Left-aligned text, right-side product showcase
```

## Real Project Example

### Project: Food Delivery App Redesign

**Challenge:** Create more engaging empty states

**Prompt 1 - Exploration:**

```text
Generate 5 creative empty state designs for a food delivery app
when user's cart is empty.

Style: Playful but not childish, warm colors, food-themed illustrations
Tone: Encouraging, not guilt-inducing
Goal: Guide users to browse restaurants
Reference: Uber Eats' friendly approach but more unique
```

**Prompt 2 - Refinement:**

```text
Refine the "friendly chef" empty state concept:
- Chef character waving with a gentle smile
- Speech bubble: "Let's find your next favorite meal!"
- Subtle food icons floating around
- Primary CTA: "Explore Restaurants"
- Secondary action: "Surprise Me" (random restaurant)
- Color palette: Warm orange (#FF6B35), cream (#FFF8F0), dark green (#2D5016)
```

## Code Generation Prompts

### CSS Components

```text
Create a CSS card component for a design portfolio:
- Clean, minimal aesthetic
- Hover effects with subtle animation
- Image area, title, description, tags
- Mobile-responsive
- CSS Grid layout
- Variables for easy theming
```

### React Components

```text
Build a React notification component:
- Support for success, warning, error, info types
- Auto-dismiss after 5 seconds
- Slide-in animation from top
- Close button with icon
- TypeScript interfaces
- Styled with CSS modules
```

## Image Generation

### Midjourney Prompts

```text
/imagine modern workspace setup for UX designer,
dual monitors displaying Figma wireframes,
natural lighting, minimal desk setup,
plants, coffee cup, notebook with sketches,
clean aesthetic, shot with Canon R5,
professional photography --ar 16:9 --v 6
```

### DALL-E Prompts

```text
A mobile app icon for a habit tracking app called "Momentum":
- Minimal, circular design
- Upward arrow or growth metaphor
- Gradient from blue to green
- iOS style, ready for app store
- Clean, recognizable at small sizes
```

## Iteration Strategy

### Version Control Your Prompts

```markdown
## Prompt v1.0

Basic request with minimal context

## Prompt v1.1

- Added style references
- Specified format requirements

## Prompt v1.2

- Refined tone and mood
- Added technical constraints
- Included examples
```

### A/B Testing Prompts

Test different approaches:

- Formal vs. conversational tone
- Specific vs. general style references
- Technical vs. creative language

## Prompt Library Template

Create a shared library for your team:

```javascript
const promptLibrary = {
  uiComponents: {
    button: "Create a [style] button component...",
    card: "Design a card layout for...",
    navigation: "Build a navigation system...",
  },
  copywriting: {
    headlines: "Write a compelling headline for...",
    descriptions: "Create product descriptions that...",
    cta: "Generate call-to-action text...",
  },
  images: {
    lifestyle: "Lifestyle photo showing...",
    product: "Product photography of...",
    illustration: "Custom illustration depicting...",
  },
};
```

## Measuring Success

Track what works:

- Response relevance (1-10)
- Iterations needed to get desired output
- Time saved vs. manual creation
- Quality of final result

## Common Pitfalls

❌ **Too vague:** "Make it look good"
✅ **Specific:** "Apply Material Design principles with 8dp spacing"

❌ **Too complex:** 500-word prompt with 20 requirements
✅ **Focused:** Clear, single objective with key constraints

❌ **No examples:** Pure text description
✅ **Referenced:** "Similar to Stripe's checkout but for mobile"
