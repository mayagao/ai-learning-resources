export const customDiagram = {
  render: "CustomDiagram",
  children: ["paragraph", "text"],
  attributes: {
    content: {
      type: String,
      required: false,
    },
    width: {
      type: String,
      default: "800",
    },
    height: {
      type: String,
      default: "400",
    },
    showIcons: {
      type: Boolean,
      default: false,
    },
  },
};
