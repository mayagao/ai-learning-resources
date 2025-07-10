import React from "react";
import {
  imageSources,
  iconColors,
  isOcticon,
  ImageSourceKey,
} from "../utils/imageSources";
import { renderOcticon } from "../utils/octiconMappings";

interface LinkProps {
  source?: string;
  url: string;
  length?: string;
  title: string;
}

export function Link({ source, url, length, title }: LinkProps) {
  // Determine if source is a key or direct URL
  const getImageSrc = (source: string): string => {
    // Check if source is a key in imageSources
    if (source in imageSources) {
      return imageSources[source as ImageSourceKey];
    }
    // Otherwise, treat as direct URL
    return source;
  };

  const imageSrc = source ? getImageSrc(source) : undefined;
  const iconColor =
    source && source in iconColors
      ? iconColors[source as ImageSourceKey]
      : undefined;

  return (
    <div className="">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 py-1 text-github-text hover:text-github-link no-underline"
      >
        {imageSrc && (
          <div className="flex-shrink-0">
            {isOcticon(imageSrc) ? (
              // Use imported octicon component with color
              renderOcticon(imageSrc, {
                size: 16,
                className: "w-4 h-4 opacity-70",
                style: iconColor
                  ? {
                      color: iconColor,
                    }
                  : undefined,
              })
            ) : iconColor ? (
              // Use CSS mask for colored brand icons from CDN
              <div
                className="w-4 h-4 opacity-70"
                style={{
                  backgroundColor: iconColor,
                  mask: `url(${imageSrc}) no-repeat center`,
                  maskSize: "contain",
                  WebkitMask: `url(${imageSrc}) no-repeat center`,
                  WebkitMaskSize: "contain",
                }}
              />
            ) : (
              // Fallback to regular img tag for external URLs
              <img
                src={imageSrc}
                alt=""
                className="w-4 h-4 opacity-50 object-contain rounded"
                onError={(e) => {
                  // Hide image if it fails to load
                  e.currentTarget.style.display = "none";
                }}
              />
            )}
          </div>
        )}

        <div className="font-medium text-base truncate">{title}</div>
        {length && (
          <div className="text-github-text-secondary text-sm">{length}</div>
        )}
      </a>
    </div>
  );
}
