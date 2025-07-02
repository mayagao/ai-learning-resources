import React, { useEffect, useRef } from "react";

interface DiagramProps {
  type: "mermaid";
  content: string;
}

export function Diagram({ type, content }: DiagramProps) {
  const diagramRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (type === "mermaid" && diagramRef.current) {
      // Load Mermaid dynamically
      import("mermaid").then((mermaid) => {
        mermaid.default.initialize({
          startOnLoad: false,
          theme: "neutral",
          themeVariables: {
            primaryColor: "#f6f8fa",
            primaryTextColor: "#24292e",
            primaryBorderColor: "#e1e4e8",
            lineColor: "#586069",
            secondaryColor: "#ffffff",
            tertiaryColor: "#f6f8fa",
          },
        });

        const element = diagramRef.current;
        if (element) {
          element.innerHTML = content;
          mermaid.default.init(undefined, element);
        }
      });
    }
  }, [type, content]);

  return (
    <div
      style={{
        margin: "16px 0",
        padding: "16px",
        backgroundColor: "#f6f8fa",
        border: "1px solid #e1e4e8",
        borderRadius: "6px",
        textAlign: "center",
      }}
    >
      <div ref={diagramRef} />
    </div>
  );
}
