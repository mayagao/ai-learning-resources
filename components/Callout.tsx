import React from "react";
import { InfoIcon, AlertIcon, CheckCircleIcon } from "@primer/octicons-react";

interface CalloutProps {
  type?: "info" | "warning" | "success";
  title?: string;
  children: React.ReactNode;
}

const calloutStyles = {
  info: {
    backgroundColor: "#f6f8fa",
    borderColor: "#0366d6",
    icon: InfoIcon,
    iconColor: "#0366d6",
  },
  warning: {
    backgroundColor: "#fffdf7",
    borderColor: "#ffd33d",
    icon: AlertIcon,
    iconColor: "#ffd33d",
  },
  success: {
    backgroundColor: "#f0fff4",
    borderColor: "#28a745",
    icon: CheckCircleIcon,
    iconColor: "#28a745",
  },
};

export function Callout({ type = "info", title, children }: CalloutProps) {
  const style = calloutStyles[type];
  const IconComponent = style.icon;

  return (
    <div
      style={{
        backgroundColor: style.backgroundColor,
        border: `1px solid ${style.borderColor}`,
        borderLeft: `4px solid ${style.borderColor}`,
        borderRadius: "6px",
        padding: "16px",
        margin: "16px 0",
        display: "flex",
        gap: "12px",
      }}
    >
      <div style={{ color: style.iconColor, flexShrink: 0, marginTop: "2px" }}>
        <IconComponent size={16} />
      </div>
      <div style={{ flex: 1 }}>
        {title && (
          <div
            style={{
              fontWeight: "600",
              marginBottom: "8px",
              color: style.iconColor,
            }}
          >
            {title}
          </div>
        )}
        <div style={{ color: "#586069" }}>{children}</div>
      </div>
    </div>
  );
}
