import React, { useEffect, useRef, useState } from "react";

interface DiagramProps {
  type?: "mermaid";
  children: React.ReactNode;
}

// Helper function to extract text content from React children
function extractTextContent(children: React.ReactNode): string {
  if (typeof children === "string") {
    return children;
  }

  if (typeof children === "number") {
    return String(children);
  }

  if (Array.isArray(children)) {
    return children.map(extractTextContent).join("\n");
  }

  if (React.isValidElement(children)) {
    return extractTextContent(children.props.children);
  }

  if (children && typeof children === "object" && "props" in children) {
    return extractTextContent((children as any).props?.children);
  }

  return String(children || "").trim();
}

export function Diagram({ type = "mermaid", children }: DiagramProps) {
  const diagramRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Convert children to string content
  const content = extractTextContent(children).trim();

  // Debug logging
  console.log("Diagram children:", children);
  console.log("Extracted content:", content);
  console.log("Content length:", content.length);

  useEffect(() => {
    if (!content) {
      setError("No diagram content provided");
      setIsLoading(false);
      return;
    }

    if (type === "mermaid" && diagramRef.current) {
      setIsLoading(true);
      setError(null);

      // Load Mermaid dynamically
      import("mermaid")
        .then(async (mermaid) => {
          try {
            // Initialize Mermaid with better theme configuration
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
              fontFamily: "ui-sans-serif, system-ui, sans-serif",
              fontSize: 14,
            });

            const element = diagramRef.current;
            if (element) {
              // Generate unique ID for this diagram instance
              const diagramId = `diagram-${Date.now()}-${Math.random()
                .toString(36)
                .substr(2, 9)}`;

              // Use the modern render API
              const { svg } = await mermaid.default.render(diagramId, content);
              element.innerHTML = svg;
            }
            setIsLoading(false);
          } catch (err) {
            console.error("Mermaid rendering error:", err);
            setError(
              err instanceof Error ? err.message : "Failed to render diagram"
            );
            setIsLoading(false);
          }
        })
        .catch((err) => {
          console.error("Mermaid import error:", err);
          setError("Failed to load diagram library");
          setIsLoading(false);
        });
    }
  }, [type, content]);

  if (error) {
    return (
      <div className="my-6 p-4 border border-red-300 rounded-lg bg-red-50">
        <div className="flex items-start space-x-3">
          <div className="flex-shrink-0">
            <svg
              className="h-5 w-5 text-red-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="flex-1">
            <h3 className="text-sm font-medium text-red-800">
              Error rendering diagram
            </h3>
            <p className="mt-1 text-sm text-red-700">{error}</p>
            <details className="mt-3">
              <summary className="text-sm text-red-600 cursor-pointer hover:text-red-800">
                Show diagram source
              </summary>
              <pre className="mt-2 p-2 text-xs bg-red-100 rounded border overflow-x-auto text-red-800">
                {content}
              </pre>
            </details>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="my-6">
      <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
        {isLoading && (
          <div className="flex items-center justify-center py-8">
            <div className="flex items-center space-x-2 text-gray-500">
              <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              <span className="text-sm">Loading diagram...</span>
            </div>
          </div>
        )}
        <div
          ref={diagramRef}
          className={`text-center ${isLoading ? "hidden" : ""}`}
        />
      </div>
    </div>
  );
}
