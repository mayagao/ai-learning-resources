import React from "react";

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

interface CustomDiagramProps {
  content?: string;
  width?: string;
  height?: string;
  children?: React.ReactNode;
  showIcons?: boolean;
}

interface DiagramNode {
  id: string;
  title: string;
  description?: string;
  icon?: string;
  x: number;
  y: number;
  width: number;
  height: number;
  outlineType?: "solid" | "dashed";
  backgroundColor?: string;
  shape?: "rect" | "circle";
}

interface DiagramConnection {
  from: string;
  to: string;
  style?: "solid" | "dashed";
  label?: string;
}

function parseCustomDiagram(content: string): {
  nodes: DiagramNode[];
  connections: DiagramConnection[];
} {
  const lines = content
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line);
  const nodes: DiagramNode[] = [];
  const connections: DiagramConnection[] = [];

  for (const line of lines) {
    // Parse nodes: node id "title" "description" x y [icon] [outline] [bgcolor] [shape]
    const nodeMatch = line.match(
      /^node\s+(\w+)\s+"([^"]+)"\s+"([^"]*)"\s+(\d+)\s+(\d+)(?:\s+([^\s]+))?(?:\s+(solid|dashed))?(?:\s+([^\s]+))?(?:\s+(rect|circle))?$/
    );
    if (nodeMatch) {
      const [, id, title, description, x, y, icon, outline, bgcolor, shape] =
        nodeMatch;
      const isCircle = shape === "circle";
      // Fixed consistent sizing for all nodes
      const nodeWidth = isCircle ? 120 : 160;
      const nodeHeight = isCircle ? 120 : 80;

      nodes.push({
        id,
        title,
        description:
          description && description.trim() ? description : undefined,
        icon: icon || undefined,
        x: parseInt(x),
        y: parseInt(y),
        width: nodeWidth,
        height: nodeHeight,
        outlineType: (outline as DiagramNode["outlineType"]) || "solid",
        backgroundColor:
          bgcolor && bgcolor !== "transparent" ? bgcolor : undefined,
        shape: (shape as DiagramNode["shape"]) || "rect",
      });
      continue;
    }

    // Parse connections: connect fromId -> toId [style] ["label"]
    const connectionMatch = line.match(
      /^connect\s+(\w+)\s+->\s+(\w+)(?:\s+(solid|dashed))?(?:\s+"([^"]+)")?$/
    );
    if (connectionMatch) {
      const [, from, to, style, label] = connectionMatch;
      connections.push({
        from,
        to,
        style: (style as DiagramConnection["style"]) || "dashed",
        label,
      });
      continue;
    }
  }

  return { nodes, connections };
}

function getNodeStyle(node: DiagramNode) {
  return {
    fill: node.backgroundColor || "transparent",
    stroke: "#d1d5db",
    textColor: "#374151",
    strokeDasharray: node.outlineType === "dashed" ? "5,5" : "none",
  };
}

// Truncate text to fit within node width
function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength - 1) + "…";
}

// Calculate the best connection points between two nodes
function getConnectionPoints(fromNode: DiagramNode, toNode: DiagramNode) {
  const fromCenterX = fromNode.x + fromNode.width / 2;
  const fromCenterY = fromNode.y + fromNode.height / 2;
  const toCenterX = toNode.x + toNode.width / 2;
  const toCenterY = toNode.y + toNode.height / 2;

  // Calculate angle between nodes
  const dx = toCenterX - fromCenterX;
  const dy = toCenterY - fromCenterY;
  const angle = Math.atan2(dy, dx);

  // Calculate connection points on node edges
  const fromRadius = fromNode.shape === "circle" ? fromNode.width / 2 : 0;
  const toRadius = toNode.shape === "circle" ? toNode.width / 2 : 0;

  let fromX, fromY, toX, toY;

  if (fromNode.shape === "circle") {
    fromX = fromCenterX + Math.cos(angle) * fromRadius;
    fromY = fromCenterY + Math.sin(angle) * fromRadius;
  } else {
    // Rectangle: choose edge based on angle
    if (Math.abs(dx) > Math.abs(dy)) {
      // Horizontal connection
      fromX = dx > 0 ? fromNode.x + fromNode.width : fromNode.x;
      fromY = fromCenterY;
    } else {
      // Vertical connection
      fromX = fromCenterX;
      fromY = dy > 0 ? fromNode.y + fromNode.height : fromNode.y;
    }
  }

  if (toNode.shape === "circle") {
    toX = toCenterX - Math.cos(angle) * toRadius;
    toY = toCenterY - Math.sin(angle) * toRadius;
  } else {
    // Rectangle: choose edge based on angle
    if (Math.abs(dx) > Math.abs(dy)) {
      // Horizontal connection
      toX = dx > 0 ? toNode.x : toNode.x + toNode.width;
      toY = toCenterY;
    } else {
      // Vertical connection
      toX = toCenterX;
      toY = dy > 0 ? toNode.y : toNode.y + toNode.height;
    }
  }

  return { fromX, fromY, toX, toY };
}

export function CustomDiagram({
  content,
  width = "800",
  height = "400",
  children,
  showIcons = false,
}: CustomDiagramProps) {
  // Use children content if available, otherwise fall back to content attribute
  const diagramContent = children
    ? extractTextContent(children).trim()
    : content || "";
  const { nodes, connections } = parseCustomDiagram(diagramContent);

  if (nodes.length === 0) {
    return (
      <div className="my-6 p-4 border border-red-300 rounded-lg bg-red-50">
        <div className="text-red-800">
          <h3 className="text-sm font-medium">Invalid diagram content</h3>
          <p className="mt-1 text-sm">
            Please provide valid nodes and connections.
          </p>
          <details className="mt-2">
            <summary className="text-sm cursor-pointer">
              Example format:
            </summary>
            <pre className="mt-2 p-2 text-xs bg-red-100 rounded border">
              {`node start "Start Process" "" 50 50 🚀 solid #e3f2fd
node process "Process Data" "Transform info" 200 50 ⚙️ dashed transparent
node end "Complete" "" 350 50 ✅ solid #e8f5e8 circle
connect start -> process solid
connect process -> end dashed "result"

// To show icons, add showIcons="true" to the diagram tag
// Icons are hidden by default`}
            </pre>
          </details>
        </div>
      </div>
    );
  }

  return (
    <div className="my-6">
      <div className="p-6 rounded-lg bg-zinc-50 overflow-x-auto">
        <svg width={width} height={height} className="border rounded">
          {/* Render connections first (so they appear behind nodes) */}
          {connections.map((connection, index) => {
            const fromNode = nodes.find((n) => n.id === connection.from);
            const toNode = nodes.find((n) => n.id === connection.to);

            if (!fromNode || !toNode) return null;

            const { fromX, fromY, toX, toY } = getConnectionPoints(
              fromNode,
              toNode
            );
            const midX = (fromX + toX) / 2;
            const midY = (fromY + toY) / 2;

            return (
              <g key={`connection-${index}`}>
                {/* Arrow line */}
                <line
                  x1={fromX}
                  y1={fromY}
                  x2={toX}
                  y2={toY}
                  stroke="#9ca3af"
                  strokeWidth="1"
                  strokeDasharray={
                    connection.style === "dashed" ? "5,5" : "none"
                  }
                  markerEnd="url(#arrowhead)"
                />
                {/* Connection label */}
                {connection.label && (
                  <text
                    x={midX}
                    y={midY - 5}
                    textAnchor="middle"
                    className="text-xs fill-gray-600"
                    fontSize="12"
                  >
                    {connection.label}
                  </text>
                )}
              </g>
            );
          })}

          {/* Render nodes */}
          {nodes.map((node) => {
            const style = getNodeStyle(node);
            const centerX = node.x + node.width / 2;
            const centerY = node.y + node.height / 2;

            // Determine if icon should be displayed
            const hasIcon = showIcons && node.icon;

            // Calculate vertical positioning based on content
            const titleY = hasIcon
              ? centerY - 2
              : node.description
              ? centerY - 8
              : centerY + 2;
            const descriptionY = hasIcon ? centerY + 14 : centerY + 8;

            return (
              <g key={node.id}>
                {node.shape === "circle" ? (
                  <circle
                    cx={centerX}
                    cy={centerY}
                    r={node.width / 2}
                    fill={style.fill}
                    stroke={style.stroke}
                    strokeWidth="1"
                    strokeDasharray={style.strokeDasharray}
                  />
                ) : (
                  <rect
                    x={node.x}
                    y={node.y}
                    width={node.width}
                    height={node.height}
                    fill={style.fill}
                    stroke={style.stroke}
                    strokeWidth="1"
                    strokeDasharray={style.strokeDasharray}
                    rx="8"
                  />
                )}
                {/* Icon - only render if explicitly enabled and defined */}
                {hasIcon && (
                  <text
                    x={centerX}
                    y={centerY - 12}
                    textAnchor="middle"
                    className="text-lg"
                    fill={style.textColor}
                    fontSize="18"
                  >
                    {node.icon}
                  </text>
                )}
                {/* Title */}
                <text
                  x={centerX}
                  y={titleY}
                  textAnchor="middle"
                  className="text-sm font-medium"
                  fill={style.textColor}
                  fontSize="14"
                >
                  {truncateText(node.title, 18)}
                </text>
                {/* Description */}
                {node.description && (
                  <text
                    x={centerX}
                    y={descriptionY}
                    textAnchor="middle"
                    className="text-xs"
                    fill={style.textColor}
                    fontSize="11"
                  >
                    {truncateText(node.description, 22)}
                  </text>
                )}
              </g>
            );
          })}

          {/* Arrow marker definition */}
          <defs>
            <marker
              id="arrowhead"
              markerWidth="6"
              markerHeight="8"
              refX="5"
              refY="4"
              orient="auto"
              markerUnits="strokeWidth"
            >
              <path
                d="M0,0 L4,4 L0,8"
                stroke="#9ca3af"
                strokeWidth="1"
                fill="none"
              />
            </marker>
          </defs>
        </svg>
      </div>
    </div>
  );
}
