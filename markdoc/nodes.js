import { CodeBlock } from "../components/CodeBlock";

export const fence = {
  render: CodeBlock,
  attributes: {
    language: { type: String },
  },
};
