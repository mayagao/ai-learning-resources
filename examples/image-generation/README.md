---
title: Image Generation
description: Create stunning visuals with AI image generation tools
icon: beaker
order: 2
section: examples
---

# AI Image Generation for Design

Complete workflow and examples for using AI image generation tools in professional design projects.

## Tool Comparison

| Tool             | Best For          | Strengths                      | Limitations                     |
| ---------------- | ----------------- | ------------------------------ | ------------------------------- |
| Midjourney       | Artistic concepts | Creative freedom, high quality | Less control, Discord interface |
| DALL-E 3         | Precise requests  | Follows instructions well      | More expensive per image        |
| Stable Diffusion | Custom models     | Free, customizable             | Technical setup required        |
| Adobe Firefly    | Commercial use    | Copyright-safe training data   | Limited style variety           |

## Professional Workflow

### 1. Concept Development

Start with rough ideas before detailed prompts:

```text
# Initial concept
"Modern office space with natural elements"

# Refined concept
"Contemporary open office with living wall,
natural wood accents, soft lighting"

# Production prompt
"Contemporary open-plan office interior, living green wall as focal point,
natural white oak desks and furniture, soft ambient lighting,
floor-to-ceiling windows, minimal clutter, Scandinavian design influence,
architectural photography style, shot with wide-angle lens --ar 16:9"
```

### 2. Style Reference Library

Build a collection of style modifiers:

```javascript
const styleLibrary = {
  photography: [
    "architectural photography",
    "lifestyle photography",
    "product photography",
    "documentary style",
  ],
  artistic: [
    "watercolor illustration",
    "vector art style",
    "isometric design",
    "hand-drawn sketch",
  ],
  mood: [
    "warm and inviting",
    "clean and minimal",
    "bold and energetic",
    "sophisticated and luxury",
  ],
};
```

## Real Project Examples

### Example 1: Website Hero Images

**Project:** SaaS landing page for project management tool

**Prompt Evolution:**

```text
V1: "People working on laptops in office"

V2: "Modern office team collaboration,
laptops and whiteboards, natural lighting"

V3: "Diverse team of 4 professionals collaborating
in modern office space, laptops open showing charts and graphs,
whiteboard with project timeline in background,
natural lighting from large windows,
clean minimal aesthetic, shot with Canon 5D Mark IV,
professional corporate photography style --ar 16:9"
```

**Result:** Used as hero background with text overlay

### Example 2: Mobile App Screenshots

**Project:** Meditation app store assets

```text
"iPhone 14 Pro mockup showing meditation app interface,
clean UI with soft gradients from blue to purple,
breathing exercise animation on screen,
realistic hands holding phone,
neutral background with soft shadows,
professional product photography lighting --ar 9:16"
```

**Post-processing:**

- Remove background in Photoshop
- Add to app store template
- Adjust colors to match brand

### Example 3: Social Media Content

**Project:** Design agency Instagram posts

**Template:**

```text
"[Design concept] in the style of [reference style],
modern and professional aesthetic,
suitable for Instagram post,
clean composition with negative space for text overlay,
[brand colors] color palette --ar 1:1"
```

**Examples:**

- "Workspace setup in the style of kinfolk magazine"
- "Design thinking process in the style of flat illustration"
- "Creative brainstorming in the style of documentary photography"

## Technical Specifications

### Aspect Ratios for Different Uses

```text
Social Media:
- Instagram post: --ar 1:1
- Instagram story: --ar 9:16
- Twitter header: --ar 3:1
- LinkedIn post: --ar 1.91:1

Web Design:
- Hero section: --ar 16:9 or --ar 21:9
- Blog featured image: --ar 16:9
- Product showcase: --ar 4:3

Print:
- A4 portrait: --ar 3:4
- A4 landscape: --ar 4:3
- Business card: --ar 1.75:1
```

### Quality Parameters

```text
Midjourney:
--v 6 (latest version)
--q 2 (high quality)
--stylize 100 (moderate stylization)

DALL-E 3:
Use "high detail" and "photorealistic" keywords
Specify resolution needs upfront
```

## Advanced Techniques

### Style Transfer

Combine reference images with new concepts:

```text
"Create an image in the style of [reference description]:
Modern office interior designed like a Wes Anderson film scene,
perfectly symmetrical composition, pastel color palette,
geometric patterns, vintage furniture with contemporary elements"
```

### Iterative Refinement

```text
Base prompt: "Minimalist product packaging design"

Iteration 1: + "for eco-friendly skincare brand"
Iteration 2: + "kraft paper texture, sans serif typography"
Iteration 3: + "featuring botanical line drawings"
Iteration 4: + "photographed in natural sunlight with soft shadows"
```

### Negative Prompts

What to avoid (Stable Diffusion):

```text
Negative prompt: "blurry, low quality, distorted,
extra limbs, text, watermark, signature,
oversaturated colors, cartoon, anime"
```

## Legal & Ethical Considerations

### Commercial Use Checklist

- [ ] Check tool's commercial use policy
- [ ] Verify training data sources
- [ ] Consider copyright implications
- [ ] Document AI usage for client projects
- [ ] Have backup non-AI alternatives

### Best Practices

- Always disclose AI usage to clients
- Don't use AI for sensitive or controversial content
- Test for cultural sensitivity and bias
- Keep human creativity in the creative process

## Integration with Design Tools

### Figma Workflow

1. Generate concepts in AI tool
2. Import to Figma as background layer
3. Add UI elements and text overlays
4. Use as style reference for custom designs

### Photoshop Processing

```javascript
// Common post-processing steps
const aiImageWorkflow = [
  "Remove artifacts and inconsistencies",
  "Color correction and brand alignment",
  "Background removal/replacement",
  "Combine with other design elements",
  "Final quality check and export",
];
```

## Prompt Database

### Website Imagery

```text
Hero sections: "Modern [industry] workspace, professional team collaboration"
About pages: "Authentic candid photos of diverse team members"
Service pages: "Clean product photography showcasing [service/product]"
```

### App Store Assets

```text
Screenshots: "iPhone mockup showing [app function], realistic usage scenario"
Icons: "Minimal app icon design for [app purpose], iOS style guidelines"
```

### Marketing Materials

```text
Social proof: "Happy customers using [product], lifestyle photography"
Features: "Split-screen comparison showing before/after, clean layout"
```

## Quality Control

### Review Checklist

- [ ] Image resolution meets requirements
- [ ] No obvious AI artifacts or distortions
- [ ] Colors align with brand guidelines
- [ ] Composition supports intended text/UI elements
- [ ] Cultural sensitivity reviewed
- [ ] Legal considerations addressed

### Common Issues & Solutions

**Problem:** Hands look distorted
**Solution:** Crop out hands or use "hands hidden" in prompt

**Problem:** Text in image is gibberish  
**Solution:** Add text separately in design tool

**Problem:** Inconsistent style across images
**Solution:** Save successful prompts as templates

## Measurement & Optimization

Track what works:

- Prompt success rate
- Time saved vs. stock photography
- Client satisfaction with AI-generated content
- Conversion rates for marketing materials

**ROI Calculation:**

```
AI Tool Cost: $20/month
Stock Photos Saved: 50 images × $10 = $500
Time Saved: 20 hours × $50/hour = $1000
Monthly ROI: $1480 saved - $20 cost = $1460
```
