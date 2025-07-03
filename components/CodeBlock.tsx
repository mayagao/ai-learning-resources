import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vs } from "react-syntax-highlighter/dist/cjs/styles/prism";

interface CodeBlockProps {
  children: string;
  language?: string;
}

export function CodeBlock({ children, language = "text" }: CodeBlockProps) {
  return (
    <div className="bg-github-bg-tertiary border border-github-border rounded-md p-4 my-4">
      <SyntaxHighlighter
        language={language}
        style={vs}
        customStyle={{
          backgroundColor: "transparent",
          border: "none",
          borderRadius: "0",
          padding: "0",
          margin: "0",
          fontSize: "13px",
          lineHeight: "1.4",
          fontFamily: "SF Mono, Monaco, Inconsolata, Roboto Mono, monospace",
        }}
      >
        {children}
      </SyntaxHighlighter>
    </div>
  );
}
