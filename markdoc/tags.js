import { CodeTabs } from "../components/CodeTabs";
import { Callout } from "../components/Callout";
import { Diagram } from "../components/Diagram";

export const codetabs = {
  render: CodeTabs,
  attributes: {
    examples: { type: Array },
  },
};

export const diagram = {
  render: Diagram,
  attributes: {
    type: { type: String },
    content: { type: String },
  },
};

export const callout = {
  render: Callout,
  attributes: {
    type: { type: String, default: "info" },
    title: { type: String },
  },
};
