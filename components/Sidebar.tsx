import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  BookIcon,
  CodeIcon,
  GraphIcon,
  XIcon,
  SidebarCollapseIcon,
  MarkGithubIcon,
} from "@primer/octicons-react";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const navigationItems = [
  {
    title: "Getting Started",
    icon: BookIcon,
    href: "/getting-started",
  },
  {
    title: "AI Fundamentals",
    icon: GraphIcon,
    href: "/ai-fundamentals",
  },
  {
    title: "Design Tools",
    icon: CodeIcon,
    href: "/design-tools",
  },
];

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const router = useRouter();

  return (
    <aside className={`sidebar ${isOpen ? "open" : ""}`}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "24px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <MarkGithubIcon size={24} />
          <h2 style={{ fontSize: "16px", fontWeight: "600" }}>AI Learning</h2>
        </div>
        {isOpen && (
          <button
            onClick={onClose}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "4px",
              color: "#586069",
              display: "flex",
              alignItems: "center",
            }}
            title="Collapse sidebar"
          >
            <SidebarCollapseIcon size={16} />
          </button>
        )}
      </div>

      <nav>
        <ul style={{ listStyle: "none" }}>
          {navigationItems.map((item) => {
            const isActive = router.pathname === item.href;
            return (
              <li key={item.href} style={{ marginBottom: "8px" }}>
                <Link
                  href={item.href}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "8px 12px",
                    borderRadius: "4px",
                    color: isActive ? "#0366d6" : "#586069",
                    backgroundColor: isActive ? "#f1f8ff" : "transparent",
                    textDecoration: "none",
                    transition: "all 0.2s ease",
                    fontWeight: isActive ? "600" : "400",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.backgroundColor = "#f1f3f4";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.backgroundColor = "transparent";
                    }
                  }}
                >
                  <item.icon size={16} />
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div
        style={{
          marginTop: "32px",
          padding: "16px 0",
          borderTop: "1px solid #e1e4e8",
        }}
      >
        <h3
          style={{
            fontSize: "14px",
            fontWeight: "600",
            marginBottom: "12px",
            color: "#586069",
          }}
        >
          Examples
        </h3>
        <ul style={{ listStyle: "none" }}>
          {[
            {
              href: "/examples/prompt-engineering",
              title: "Prompt Engineering",
            },
            { href: "/examples/image-generation", title: "Image Generation" },
            {
              href: "/examples/workflow-automation",
              title: "Workflow Automation",
            },
          ].map((example) => {
            const isActive = router.pathname === example.href;
            return (
              <li key={example.href} style={{ marginBottom: "6px" }}>
                <Link
                  href={example.href}
                  style={{
                    color: isActive ? "#0366d6" : "#586069",
                    fontSize: "13px",
                    textDecoration: "none",
                    display: "block",
                    padding: "4px 8px",
                    borderRadius: "4px",
                    backgroundColor: isActive ? "#f1f8ff" : "transparent",
                    fontWeight: isActive ? "600" : "400",
                    transition: "all 0.2s ease",
                  }}
                >
                  {example.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
}
