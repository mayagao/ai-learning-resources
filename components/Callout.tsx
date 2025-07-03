import React from "react";
import {
  InfoIcon,
  AlertIcon,
  CheckCircleIcon,
  XCircleIcon,
} from "@primer/octicons-react";

interface CalloutProps {
  type?: "info" | "warning" | "error" | "tip";
  title?: string;
  children: React.ReactNode;
}

const calloutStyles = {
  info: {
    containerClass:
      "bg-github-bg-tertiary border-github-link border-l-github-link",
    icon: InfoIcon,
    iconClass: "text-github-link",
    titleClass: "text-github-link",
  },
  warning: {
    containerClass: "bg-yellow-50 border-yellow-400 border-l-yellow-400",
    icon: AlertIcon,
    iconClass: "text-yellow-500",
    titleClass: "text-yellow-600",
  },
  error: {
    containerClass: "bg-red-50 border-red-500 border-l-red-500",
    icon: XCircleIcon,
    iconClass: "text-red-600",
    titleClass: "text-red-700",
  },
  tip: {
    containerClass: "bg-green-50 border-green-500 border-l-green-500",
    icon: CheckCircleIcon,
    iconClass: "text-green-600",
    titleClass: "text-green-700",
  },
};

export function Callout({ type = "info", title, children }: CalloutProps) {
  const style = calloutStyles[type] || calloutStyles.info; // Fallback to info if type is not found
  const IconComponent = style.icon;

  return (
    <div
      className={`border border-l-4 rounded-md p-4 my-4 flex gap-3 ${style.containerClass}`}
    >
      <div className={`flex-shrink-0 mt-0.5 ${style.iconClass}`}>
        <IconComponent size={16} />
      </div>
      <div className="flex-1">
        {title && (
          <div className={`font-semibold mb-2 ${style.titleClass}`}>
            {title}
          </div>
        )}
        <div className="text-github-text-secondary">{children}</div>
      </div>
    </div>
  );
}
