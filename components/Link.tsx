import React, { useState } from "react";

interface LinkProps {
  source?: string;
  url: string;
  length?: string;
  title: string;
}

export function Link({ source, url, length, title }: LinkProps) {
  // Helper to extract domain from URL
  const getDomain = (url: string): string | null => {
    try {
      const { hostname } = new URL(url);
      return hostname;
    } catch {
      return null;
    }
  };

  const domain = url ? getDomain(url) : null;
  // Use Google favicon service as default
  const faviconUrl = domain
    ? `https://www.google.com/s2/favicons?domain=${domain}&sz=32`
    : undefined;

  const [faviconError, setFaviconError] = useState(false);

  // Fallback Octicon (book icon as default)
  // You can import a specific Octicon if you want a different fallback
  // import { BookIcon } from "@primer/octicons-react";
  // <BookIcon size={16} />
  // For now, use a simple SVG as fallback
  const fallbackIcon = (
    <svg
      width="16"
      height="16"
      fill="currentColor"
      viewBox="0 0 16 16"
      className="text-zinc-400"
    >
      <path d="M1.75 2.5A.75.75 0 0 1 2.5 1.75h10.75A.75.75 0 0 1 14 2.5v10.75a.75.75 0 0 1-.75.75H2.5a.75.75 0 0 1-.75-.75V2.5Zm1.5.75v9.25h9.25V3.25H3.25Z" />
    </svg>
  );

  return (
    <div className="">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 py-1 text-github-text hover:text-github-link no-underline"
      >
        <div className="flex-shrink-0">
          {!faviconError && faviconUrl ? (
            <img
              src={faviconUrl}
              alt="favicon"
              className="w-4 h-4 object-contain rounded"
              onError={() => setFaviconError(true)}
            />
          ) : (
            fallbackIcon
          )}
        </div>
        <div className="font-medium text-base truncate">{title}</div>
        {length && (
          <div className="text-github-text-secondary text-sm">{length}</div>
        )}
      </a>
    </div>
  );
}
