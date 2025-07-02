import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { github } from "react-syntax-highlighter/dist/cjs/styles/prism";

interface CodeExample {
  language: string;
  code: string;
  label?: string;
}

interface CodeTabsProps {
  examples: CodeExample[];
}

export function CodeTabs({ examples }: CodeTabsProps) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div style={{ margin: "16px 0" }}>
      <div
        style={{
          display: "flex",
          borderBottom: "1px solid #e1e4e8",
          marginBottom: "0",
        }}
      >
        {examples.map((example, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            style={{
              padding: "8px 16px",
              border: "none",
              background: activeTab === index ? "#f6f8fa" : "transparent",
              borderBottom:
                activeTab === index
                  ? "2px solid #0366d6"
                  : "2px solid transparent",
              cursor: "pointer",
              fontSize: "14px",
              fontFamily: "inherit",
              color: activeTab === index ? "#0366d6" : "#586069",
              transition: "all 0.2s ease",
            }}
          >
            {example.label || example.language}
          </button>
        ))}
      </div>

      <div style={{ position: "relative" }}>
        <SyntaxHighlighter
          language={examples[activeTab].language}
          style={github}
          customStyle={{
            margin: 0,
            borderRadius: "0 0 6px 6px",
            fontSize: "13px",
            lineHeight: "1.4",
          }}
        >
          {examples[activeTab].code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}
