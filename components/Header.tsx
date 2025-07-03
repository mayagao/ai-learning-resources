import React from "react";
import { useRouter } from "next/router";
import {
  ThreeBarsIcon,
  ChevronRightIcon,
  MarkGithubIcon,
} from "@primer/octicons-react";
import { Search } from "./Search";

interface HeaderProps {
  onMenuToggle: () => void;
  sidebarOpen: boolean;
  isMobile?: boolean;
}

export function Header({
  onMenuToggle,
  sidebarOpen,
  isMobile = false,
}: HeaderProps) {
  const router = useRouter();

  const getBreadcrumbs = () => {
    const path = router.asPath;
    const pathSegments = path.split("/").filter(Boolean);

    // Always include AI Design Resources with icon when sidebar is not visible
    const breadcrumbs = !sidebarOpen
      ? [{ label: "AI Design Resources", href: "/", isHome: true }]
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

      breadcrumbs.push({ label, href: currentPath, isHome: false });
    });

    return breadcrumbs;
  };

  const breadcrumbs = getBreadcrumbs();

  // Only hide header on desktop when sidebar is open
  if (sidebarOpen && !isMobile) {
    return null;
  }

  return (
    <header className="py-2 bg-white border-b border-github-border flex items-center px-5 gap-2 flex-shrink-0 sticky top-0 z-20 h-14">
      <div className="flex items-center gap-2">
        <button
          onClick={onMenuToggle}
          className="bg-transparent border-none cursor-pointer p-2 text-zinc-400 flex items-center hover:text-github-text transition-colors"
        >
          <ThreeBarsIcon size={16} />
        </button>
      </div>

      {/* Show breadcrumbs only when sidebar is closed or on mobile when sidebar is open but with simple content */}
      {(!sidebarOpen || isMobile) && (
        <nav className="flex items-center gap-2 flex-1">
          {breadcrumbs.map((crumb, index) => (
            <React.Fragment key={crumb.href}>
              {index > 0 && (
                <span className="text-zinc-400">
                  <ChevronRightIcon size={12} />
                </span>
              )}
              <a
                href={crumb.href}
                className={`no-underline  transition-colors flex items-center gap-2 ${
                  index === breadcrumbs.length - 1
                    ? "text-github-text font-medium"
                    : "font-medium"
                }`}
              >
                {crumb.isHome && <MarkGithubIcon size={24} />}
                {crumb.label}
              </a>
            </React.Fragment>
          ))}
        </nav>
      )}
    </header>
  );
}
