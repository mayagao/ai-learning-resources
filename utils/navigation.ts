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
          href: "/terminologies",
          order: 1,
        },
        {
          title: "AI Fundamentals",
          href: "/ai-fundamentals",
          order: 2,
        },
        {
          title: "Design Tools",
          href: "/design-tools",
          order: 3,
        },
      ],
    },
    {
      title: "Examples",
      order: 2,
      items: [
        {
          title: "Prompt Engineering",
          href: "/examples/prompt-engineering",
          icon: PaintbrushIcon,
          order: 1,
        },
        {
          title: "Image Generation",
          href: "/examples/image-generation",
          icon: BeakerIcon,
          order: 2,
        },
        {
          title: "Workflow Automation",
          href: "/examples/workflow-automation",
          icon: GearIcon,
          order: 3,
        },
      ],
    },
  ];
};
