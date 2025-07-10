import React from "react";
import {
  BookIcon,
  LinkExternalIcon,
  VideoIcon,
  UnmuteIcon,
  CodeIcon,
  ToolsIcon,
  DownloadIcon,
  PlayIcon,
} from "@primer/octicons-react";

// Mapping octicon keys to their React components
export const octiconComponents = {
  "octicon-book": BookIcon,
  "octicon-link-external": LinkExternalIcon,
  "octicon-video": VideoIcon,
  "octicon-unmute": UnmuteIcon,
  "octicon-code": CodeIcon,
  "octicon-tools": ToolsIcon,
  "octicon-download": DownloadIcon,
  "octicon-play": PlayIcon,
} as const;

export type OcticonKey = keyof typeof octiconComponents;

// Helper function to render an octicon component
export const renderOcticon = (
  octiconKey: string,
  props: {
    size?: number;
    className?: string;
    style?: React.CSSProperties;
  } = {}
) => {
  const IconComponent = octiconComponents[octiconKey as OcticonKey];

  if (!IconComponent) {
    return null;
  }

  // If we have custom styles, wrap in a div
  if (props.style) {
    return (
      <div className={props.className} style={props.style}>
        <IconComponent size={props.size || 16} />
      </div>
    );
  }

  return <IconComponent size={props.size || 16} className={props.className} />;
};
