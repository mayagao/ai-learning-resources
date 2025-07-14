import {
  BookIcon,
  CodeIcon,
  GraphIcon,
  BeakerIcon,
  PaintbrushIcon,
  GearIcon,
} from "@primer/octicons-react";

export interface NavigationItem {
  title: string;
  href: string;
  icon?: any;
  order?: number;
  section?: string;
  children?: NavigationItem[];
}

export interface NavigationSection {
  title: string;
  items: NavigationItem[];
  order?: number;
}

// Static navigation configuration - easy to maintain
export const getNavigationSections = (): NavigationSection[] => {
  return [
    {
      title: "Get Started",
      order: 1,
      items: [
        {
          title: "Terminologies",
          href: "/1.1.terminologies",
          order: 1,
        },
        {
          title: "Challenges & Principles",
          href: "/1.2.challenges-and-principles",
          order: 2,
        },
        {
          title: "Design with AI Tools",
          href: "/1.3.design-tools",
          order: 3,
        },
        {
          title: "Prototype with AI",
          href: "/1.4.prototype-with-ai",
          order: 4,
        },
      ],
    },
    {
      title: "Examples",
      order: 2,
      items: [
        {
          title: "A Basic Chatbot",
          href: "/2.1.a-basic-chatbot",
          icon: PaintbrushIcon,
          order: 1,
        },
        {
          title: "Structured Outputs",
          href: "/2.2.structured-outputs",
          icon: PaintbrushIcon,
          order: 2,
        },
        {
          title: "Connect to MCP",
          href: "/2.3.connect-to-mcp",
          icon: BeakerIcon,
          order: 3,
        },
        {
          title: "Computer Use",
          href: "/2.4.computer-use",
          icon: GearIcon,
          order: 4,
        },
      ],
    },
  ];
};
