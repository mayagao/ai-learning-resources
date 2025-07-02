import { Config } from "@markdoc/markdoc";

const config = {
  tags: {
    codetabs: {
      render: "CodeTabs",
      attributes: {
        examples: { type: "Array" },
      },
    },
    diagram: {
      render: "Diagram",
      attributes: {
        type: { type: "String" },
        content: { type: "String" },
      },
    },
    callout: {
      render: "Callout",
      attributes: {
        type: { type: "String", default: "info" },
        title: { type: "String" },
      },
    },
  },
  nodes: {
    fence: {
      render: "CodeBlock",
      attributes: {
        language: { type: "String" },
      },
    },
  },
};

export default config;
