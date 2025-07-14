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
          title: "Prototype with AI",
          href: "/1.3.prototype-with-ai",
          order: 3,
        },
        {
          title: "Design Tools",
          href: "/1.4.design-tools",
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
          href: "/examples/prompt-engineering",
          icon: PaintbrushIcon,
          order: 1,
        },
        {
          title: "Structured Outputs",
          href: "/examples/prompt-engineering",
          icon: PaintbrushIcon,
          order: 1,
        },
        {
          title: "Connect to MCP",
          href: "/examples/image-generation",
          icon: BeakerIcon,
          order: 2,
        },
        {
          title: "Computer Use",
          href: "/examples/workflow-automation",
          icon: GearIcon,
          order: 3,
        },
      ],
    },
  ];
};
