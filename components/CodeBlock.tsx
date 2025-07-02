import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { github } from "react-syntax-highlighter/dist/cjs/styles/prism";

interface CodeBlockProps {
  children: string;
  language?: string;
}

export function CodeBlock({ children, language = "text" }: CodeBlockProps) {
  return (
    <SyntaxHighlighter
      language={language}
      style={github}
      customStyle={{
        backgroundColor: "#f6f8fa",
        border: "1px solid #e1e4e8",
        borderRadius: "6px",
        padding: "16px",
        margin: "16px 0",
        fontSize: "13px",
        lineHeight: "1.4",
        fontFamily:
          "'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', monospace",
      }}
    >
      {children}
    </SyntaxHighlighter>
  );
}
