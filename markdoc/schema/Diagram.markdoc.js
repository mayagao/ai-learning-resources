export const diagram = {
  render: "Diagram",
  children: [],
  attributes: {
    type: {
      type: String,
      default: "mermaid",
      matches: ["mermaid", "flowchart", "concept", "chart", "process"],
      errorLevel: "critical",
    },
    title: {
      type: String,
      required: false,
    },
    theme: {
      type: String,
      default: "light",
      matches: ["light", "dark"],
      required: false,
    },
    content: {
      type: String,
      required: true,
      errorLevel: "critical",
    },
  },
};
