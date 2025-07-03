import { CodeTabs } from "../components/CodeTabs";
import { Callout } from "../components/Callout";
import { Diagram } from "../components/Diagram";
import { Link } from "../components/Link";
import { diagram } from "./schema/Diagram.markdoc.js";

export const codetabs = {
  render: CodeTabs,
  attributes: {
    examples: { type: Array },
  },
};

// Import diagram definition from schema file and add component reference
export const diagram_tag = {
  ...diagram,
  render: Diagram,
};

export const callout = {
  render: Callout,
  children: ["paragraph", "tag", "list"],
  attributes: {
    type: {
      type: String,
      default: "info",
      matches: ["info", "warning", "error", "tip"],
      errorLevel: "critical",
    },
    title: { type: String },
  },
};

export const link = {
  render: Link,
  attributes: {
    source: {
      type: String,
      required: false,
    },
    url: {
      type: String,
      required: true,
      errorLevel: "critical",
    },
    length: {
      type: String,
      required: false,
    },
    title: {
      type: String,
      required: true,
      errorLevel: "critical",
    },
  },
};

// Export with the correct name for Markdoc
export { diagram_tag as diagram };
