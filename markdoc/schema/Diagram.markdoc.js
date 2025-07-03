export const diagram = {
  render: "Diagram",
  children: [],
  attributes: {
    type: {
      type: String,
      default: "mermaid",
      matches: ["mermaid"],
      errorLevel: "critical",
    },
    content: {
      type: String,
      required: true,
      errorLevel: "critical",
    },
  },
};
