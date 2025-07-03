import React, { useState } from "react";
import { useRouter } from "next/router";
import {
  ThreeBarsIcon,
  SearchIcon,
  ChevronRightIcon,
  MarkGithubIcon,
  SidebarCollapseIcon,
} from "@primer/octicons-react";

interface HeaderProps {
  onMenuToggle: () => void;
  sidebarOpen: boolean;
}

export function Header({ onMenuToggle, sidebarOpen }: HeaderProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const getBreadcrumbs = () => {
    const path = router.asPath;
    const pathSegments = path.split("/").filter(Boolean);

    // Only include AI Learning in breadcrumbs when sidebar is not visible
    const breadcrumbs = !sidebarOpen
      ? [{ label: "AI Learning", href: "/" }]
      : [];

    let currentPath = "";
    pathSegments.forEach((segment) => {
      currentPath += `/${segment}`;
      let label = segment
        .replace(/-/g, " ")
        .replace(/\b\w/g, (l) => l.toUpperCase());

      if (segment === "getting-started") label = "Getting Started";
      if (segment === "ai-fundamentals") label = "AI Fundamentals";
      if (segment === "design-tools") label = "Design Tools";
      if (segment === "prompt-engineering") label = "Prompt Engineering";
      if (segment === "image-generation") label = "Image Generation";
      if (segment === "workflow-automation") label = "Workflow Automation";

      breadcrumbs.push({ label, href: currentPath });
    });

    return breadcrumbs;
  };

  const breadcrumbs = getBreadcrumbs();

  return (
    <header className="py-2 bg-white border-b border-github-border flex items-center px-6 gap-4 flex-shrink-0 sticky top-0 z-20">
      {!sidebarOpen && (
        <div className="flex items-center gap-2">
          <MarkGithubIcon size={24} />
          <button
            onClick={onMenuToggle}
            className="bg-transparent border-none cursor-pointer p-2 text-github-text-secondary flex items-center hover:text-github-text transition-colors"
          >
            <ThreeBarsIcon size={16} />
          </button>
        </div>
      )}

      {sidebarOpen && (
        <button
          onClick={onMenuToggle}
          className="bg-transparent border-none cursor-pointer p-2 text-github-text-secondary flex items-center hover:text-github-text transition-colors"
          title="Collapse sidebar"
        >
          <SidebarCollapseIcon size={16} />
        </button>
      )}

      {!sidebarOpen && (
        <nav className="flex items-center gap-2 flex-1">
          {breadcrumbs.map((crumb, index) => (
            <React.Fragment key={crumb.href}>
              {index > 0 && (
                <span className="text-github-text-secondary">
                  <ChevronRightIcon size={12} />
                </span>
              )}
              <a
                href={crumb.href}
                className={`no-underline text-sm hover:underline transition-colors ${
                  index === breadcrumbs.length - 1
                    ? "text-github-text font-semibold"
                    : "text-github-text-secondary font-normal"
                }`}
              >
                {crumb.label}
              </a>
            </React.Fragment>
          ))}
        </nav>
      )}

      <div
        className={`flex items-center gap-4 ${sidebarOpen ? "ml-auto" : ""}`}
      >
        <div className="relative flex items-center">
          <span className="absolute left-3">
            <SearchIcon className="text-zinc-400" size={16} />
          </span>
          <input
            type="text"
            placeholder="Search documentation..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input text-base bg-white border-none"
          />
        </div>
      </div>
    </header>
  );
}
