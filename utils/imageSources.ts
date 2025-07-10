export const imageSources = {
  anthropic:
    "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/anthropic.svg",
  youtube:
    "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/youtube.svg",
  github:
    "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/github.svg",
  openai:
    "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/openai.svg",
  figma:
    "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/figma.svg",
  notion:
    "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/notion.svg",
  slack:
    "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/slack.svg",
  discord:
    "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/discord.svg",
  twitter:
    "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/twitter.svg",
  linkedin:
    "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg",
  medium:
    "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/medium.svg",
  substack:
    "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/substack.svg",
  google:
    "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/google.svg",
  microsoft:
    "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/microsoft.svg",
  apple:
    "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/apple.svg",
  adobe:
    "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/adobe.svg",
  canva:
    "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/canva.svg",
  framer:
    "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/framer.svg",
  webflow:
    "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/webflow.svg",
  wordpress:
    "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/wordpress.svg",
  shopify:
    "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/shopify.svg",
  stripe:
    "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/stripe.svg",
  vercel:
    "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/vercel.svg",
  netlify:
    "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/netlify.svg",
  aws: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/amazonaws.svg",
  gcp: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/googlecloud.svg",
  azure:
    "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/microsoftazure.svg",
  huggingface:
    "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/huggingface.svg",
  replicate:
    "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/replicate.svg",
  midjourney:
    "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/midjourney.svg",
  stability:
    "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/stability.svg",
  book: "https://cdn.jsdelivr.net/gh/feathericons/feather/icons/book.svg",
  link: "https://cdn.jsdelivr.net/gh/feathericons/feather/icons/external-link.svg",
  video: "https://cdn.jsdelivr.net/gh/feathericons/feather/icons/video.svg",
  audio:
    "https://cdn.jsdelivr.net/gh/feathericons/feather/icons/headphones.svg",
  code: "https://cdn.jsdelivr.net/gh/feathericons/feather/icons/code.svg",
  tool: "https://cdn.jsdelivr.net/gh/feathericons/feather/icons/tool.svg",
  download:
    "https://cdn.jsdelivr.net/gh/feathericons/feather/icons/download.svg",
  play: "https://cdn.jsdelivr.net/gh/feathericons/feather/icons/play.svg",
} as const;

export const iconColors = {
  anthropic: "#D4A574",
  youtube: "#FF0000",
  github: "#181717",
  openai: "#412991",
  figma: "#F24E1E",
  notion: "#000000",
  slack: "#4A154B",
  discord: "#5865F2",
  twitter: "#1DA1F2",
  linkedin: "#0A66C2",
  medium: "#12100E",
  substack: "#FF6719",
  google: "#4285F4",
  microsoft: "#5E5E5E",
  apple: "#000000",
  adobe: "#FF0000",
  canva: "#00C4CC",
  framer: "#0055FF",
  webflow: "#4353FF",
  wordpress: "#21759B",
  shopify: "#7AB55C",
  stripe: "#635BFF",
  vercel: "#000000",
  netlify: "#00C7B7",
  aws: "#FF9900",
  gcp: "#4285F4",
  azure: "#0078D4",
  huggingface: "#FFD21E",
  replicate: "#000000",
  midjourney: "#000000",
  stability: "#000000",
  book: "#6B7280",
  link: "#6B7280",
  video: "#6B7280",
  audio: "#6B7280",
  code: "#6B7280",
  tool: "#6B7280",
  download: "#6B7280",
  play: "#6B7280",
} as const;

export type ImageSourceKey = keyof typeof imageSources;
