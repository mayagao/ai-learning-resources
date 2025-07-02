import React, { useState } from "react";
import { useRouter } from "next/router";
import {
  ThreeBarsIcon,
  SearchIcon,
  ChevronRightIcon,
  MarkGithubIcon,
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

    // Only include Home in breadcrumbs when sidebar is not visible
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
    <header
      style={{
        position: "fixed",
        top: 0,
        left: sidebarOpen ? "280px" : 0,
        right: 0,
        height: "60px",
        backgroundColor: "#ffffff",
        borderBottom: "1px solid #e1e4e8",
        display: "flex",
        alignItems: "center",
        padding: "0 24px",
        gap: "16px",
        zIndex: 100,
        transition: "left 0.3s ease",
      }}
    >
      {!sidebarOpen && (
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <MarkGithubIcon size={24} />
          <button
            onClick={onMenuToggle}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "8px",
              color: "#586069",
              display: "flex",
              alignItems: "center",
            }}
          >
            <ThreeBarsIcon size={16} />
          </button>
        </div>
      )}

      <nav
        style={{ display: "flex", alignItems: "center", gap: "8px", flex: 1 }}
      >
        {breadcrumbs.map((crumb, index) => (
          <React.Fragment key={crumb.href}>
            {index > 0 && (
              <span style={{ color: "#586069" }}>
                <ChevronRightIcon size={12} />
              </span>
            )}
            <a
              href={crumb.href}
              style={{
                color: index === breadcrumbs.length - 1 ? "#24292e" : "#586069",
                textDecoration: "none",
                fontSize: "14px",
                fontWeight: index === breadcrumbs.length - 1 ? "600" : "400",
              }}
            >
              {crumb.label}
            </a>
          </React.Fragment>
        ))}
      </nav>

      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        <div
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
          }}
        >
          <span
            style={{
              position: "absolute",
              left: "12px",
              color: "#586069",
            }}
          >
            <SearchIcon size={16} />
          </span>
          <input
            type="text"
            placeholder="Search documentation..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
            style={{
              width: "300px",
              padding: "8px 12px 8px 36px",
              border: "1px solid #e1e4e8",
              borderRadius: "6px",
              fontSize: "14px",
              fontFamily: "inherit",
              backgroundColor: "#fafbfc",
              outline: "none",
            }}
            onFocus={(e) => {
              e.target.style.backgroundColor = "#ffffff";
              e.target.style.borderColor = "#0366d6";
            }}
            onBlur={(e) => {
              e.target.style.backgroundColor = "#fafbfc";
              e.target.style.borderColor = "#e1e4e8";
            }}
          />
        </div>
      </div>
    </header>
  );
}
