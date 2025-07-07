import React, { useEffect, useRef, useState } from "react";

interface DiagramProps {
  type?: "mermaid" | "flowchart" | "concept" | "chart" | "process";
  children?: React.ReactNode;
  content?: string;
  title?: string;
  theme?: "light" | "dark";
}

interface DiagramRendererProps {
  content: string;
  title?: string;
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

// HTML/React based diagram renderers
function ConceptDiagram({ content, title }: DiagramRendererProps) {
  const lines = content.split('\n').filter(line => line.trim());
  const concepts = lines.map(line => {
    const parts = line.split('->').map(part => part.trim());
    return parts;
  });

  // Check if this is a hub-and-spoke pattern (multiple items pointing to same target)
  const targets = concepts.filter(c => c.length === 2).map(c => c[1]);
  const isHubPattern = targets.length > 1 && targets.every(t => t === targets[0]);
  const hubTarget = isHubPattern ? targets[0] : null;

  if (isHubPattern && hubTarget) {
    const sources = concepts.filter(c => c.length === 2).map(c => c[0]);
    
    return (
      <div className="concept-diagram">
        {title && <h3 className="text-lg font-semibold text-center mb-8">{title}</h3>}
        <div className="relative flex items-center justify-center" style={{ minHeight: '300px' }}>
          {/* Central target node */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 bg-green-100 border-2 border-green-400 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-green-800 font-semibold text-lg">{hubTarget}</span>
            </div>
          </div>
          
          {/* Source nodes arranged in a circle */}
          {sources.map((source, index) => {
            const angle = (index * 360) / sources.length - 90; // Start from top
            const radius = 120;
            const x = Math.cos((angle * Math.PI) / 180) * radius;
            const y = Math.sin((angle * Math.PI) / 180) * radius;
            
            return (
              <div key={index} className="absolute flex flex-col items-center">
                <div
                  className="w-20 h-20 bg-blue-100 border-2 border-blue-400 rounded-full flex items-center justify-center shadow-md"
                  style={{
                    transform: `translate(${x}px, ${y}px)`,
                  }}
                >
                  <span className="text-blue-800 font-medium text-sm text-center px-2">{source}</span>
                </div>
                
                {/* Arrow pointing to center */}
                <div
                  className="absolute w-16 h-0.5 bg-gray-400"
                  style={{
                    transform: `translate(${x * 0.6}px, ${y * 0.6}px) rotate(${angle + 90}deg)`,
                    transformOrigin: 'left center',
                  }}
                >
                  <div className="absolute right-0 top-0 w-2 h-2 bg-gray-400 transform rotate-45 -translate-y-0.5 translate-x-1"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // Fallback to original linear layout for non-hub patterns
  return (
    <div className="concept-diagram">
      {title && <h3 className="text-lg font-semibold text-center mb-6">{title}</h3>}
      <div className="flex flex-col space-y-6">
        {concepts.map((concept, index) => (
          <div key={index} className="flex items-center justify-center">
            {concept.length === 1 ? (
              <div className="bg-blue-100 border-2 border-blue-300 rounded-lg px-6 py-4 text-center max-w-xs">
                <span className="text-blue-800 font-medium">{concept[0]}</span>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 border-2 border-blue-300 rounded-lg px-4 py-3 text-center">
                  <span className="text-blue-800 font-medium">{concept[0]}</span>
                </div>
                <div className="flex items-center">
                  <div className="h-0.5 w-8 bg-gray-400"></div>
                  <div className="w-3 h-3 bg-gray-400 transform rotate-45 ml-1"></div>
                </div>
                <div className="bg-green-100 border-2 border-green-300 rounded-lg px-4 py-3 text-center">
                  <span className="text-green-800 font-medium">{concept[1]}</span>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function FlowchartDiagram({ content, title }: { content: string; title?: string }) {
  const lines = content.split('\n').filter(line => line.trim());
  const steps = lines.map((line, index) => {
    const cleanLine = line.replace(/^\d+\.\s*/, '').trim();
    return { id: index, text: cleanLine };
  });

  return (
    <div className="flowchart-diagram">
      {title && <h3 className="text-lg font-semibold text-center mb-6">{title}</h3>}
      <div className="flex flex-col items-center space-y-4">
        {steps.map((step, index) => (
          <div key={step.id} className="flex flex-col items-center">
            <div className="bg-indigo-100 border-2 border-indigo-300 rounded-lg px-6 py-4 text-center max-w-md">
              <span className="text-indigo-800 font-medium">{step.text}</span>
            </div>
            {index < steps.length - 1 && (
              <div className="flex flex-col items-center mt-2 mb-2">
                <div className="w-0.5 h-6 bg-gray-400"></div>
                <div className="w-3 h-3 bg-gray-400 transform rotate-45 -mt-1"></div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function ProcessDiagram({ content, title }: { content: string; title?: string }) {
  const lines = content.split('\n').filter(line => line.trim());
  const processes = lines.map(line => {
    const [input, output] = line.split('|').map(part => part.trim());
    return { input, output };
  });

  return (
    <div className="process-diagram">
      {title && <h3 className="text-lg font-semibold text-center mb-6">{title}</h3>}
      <div className="grid grid-cols-3 gap-4 items-center">
        {processes.map((process, index) => (
          <React.Fragment key={index}>
            <div className="bg-yellow-100 border-2 border-yellow-300 rounded-lg px-4 py-3 text-center">
              <span className="text-yellow-800 font-medium">{process.input}</span>
            </div>
            <div className="flex justify-center">
              <div className="bg-purple-100 border-2 border-purple-300 rounded-full px-3 py-2">
                <span className="text-purple-800 text-sm">Process</span>
              </div>
            </div>
            <div className="bg-green-100 border-2 border-green-300 rounded-lg px-4 py-3 text-center">
              <span className="text-green-800 font-medium">{process.output}</span>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

function ChartDiagram({ content, title }: { content: string; title?: string }) {
  const lines = content.split('\n').filter(line => line.trim());
  const data = lines.map(line => {
    const [label, value] = line.split(':').map(part => part.trim());
    return { label, value: parseFloat(value) || 0 };
  });

  const maxValue = Math.max(...data.map(d => d.value));

  return (
    <div className="chart-diagram">
      {title && <h3 className="text-lg font-semibold text-center mb-6">{title}</h3>}
      <div className="space-y-4">
        {data.map((item, index) => (
          <div key={index} className="flex items-center space-x-4">
            <div className="w-24 text-sm font-medium text-gray-700">
              {item.label}
            </div>
            <div className="flex-1 bg-gray-200 rounded-full h-4 relative">
              <div
                className="bg-blue-500 h-4 rounded-full transition-all duration-500"
                style={{ width: `${(item.value / maxValue) * 100}%` }}
              ></div>
            </div>
            <div className="w-12 text-sm font-medium text-gray-600">
              {item.value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Diagram({ type = "mermaid", children, content: contentProp, title, theme = "light" }: DiagramProps) {
  const diagramRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Use content prop if available, otherwise extract from children
  const content = contentProp || extractTextContent(children).trim();

  // Clear any previous error state

  useEffect(() => {
    if (!content) {
      setError("No diagram content provided");
      setIsLoading(false);
      return;
    }

    setError(null);

    if (type === "mermaid" && diagramRef.current) {
      setIsLoading(true);

      // Load Mermaid dynamically
      import("mermaid" as any)
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
    } else {
      // For HTML/React diagrams, no loading is needed
      setIsLoading(false);
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
      <div className="p-6 rounded-lg bg-gray-50 border border-gray-200">
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
        
        {/* Mermaid diagrams */}
        {type === "mermaid" && (
          <div
            ref={diagramRef}
            className={`text-center ${isLoading ? "hidden" : ""}`}
          />
        )}
        
        {/* HTML/React diagrams */}
        {type === "concept" && !isLoading && (
          <ConceptDiagram content={content} title={title} />
        )}
        
        {type === "flowchart" && !isLoading && (
          <FlowchartDiagram content={content} title={title} />
        )}
        
        {type === "process" && !isLoading && (
          <ProcessDiagram content={content} title={title} />
        )}
        
        {type === "chart" && !isLoading && (
          <ChartDiagram content={content} title={title} />
        )}
      </div>
    </div>
  );
}
