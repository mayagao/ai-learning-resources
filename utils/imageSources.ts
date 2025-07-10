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
  // Octicon keys (will be handled by imported components)
  book: "octicon-book",
  link: "octicon-link-external",
  video: "octicon-video",
  audio: "octicon-unmute",
  code: "octicon-code",
  tool: "octicon-tools",
  download: "octicon-download",
  play: "octicon-play",
} as const;

export const iconColors = {
  anthropic: "#141413",
  youtube: "#FF0000",
  github: "#181717",
  openai: "#000000",
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
  // Colors for octicons - using GitHub's colors and neutral grays
  book: "#656D76",
  link: "#656D76",
  video: "#656D76",
  audio: "#656D76",
  code: "#656D76",
  tool: "#656D76",
  download: "#656D76",
  play: "#656D76",
} as const;

// Helper function to check if a source is an octicon
export const isOcticon = (source: string): boolean => {
  return source.startsWith("octicon-");
};

export type ImageSourceKey = keyof typeof imageSources;
