import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// @ts-ignore
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
    <div className="my-4">
      <div className="flex border-b border-github-border mb-0">
        {examples.map((example, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`px-4 py-2 border-none cursor-pointer text-sm font-inherit duration-200 ease-in-out border-b-2 ${
              activeTab === index
                ? "bg-github-bg-tertiary text-github-link border-b-github-link"
                : "bg-transparent text-github-text-secondary border-b-transparent hover:text-github-text"
            }`}
          >
            {example.label || example.language}
          </button>
        ))}
      </div>

      <div className="relative">
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
