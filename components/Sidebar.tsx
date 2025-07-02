import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  XIcon,
  SidebarCollapseIcon,
  MarkGithubIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@primer/octicons-react";
import { NavigationItem, NavigationSection } from "../utils/navigation";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  navigationSections: NavigationSection[];
}

export function Sidebar({ isOpen, onClose, navigationSections }: SidebarProps) {
  const router = useRouter();
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  const toggleExpanded = (href: string) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(href)) {
      newExpanded.delete(href);
    } else {
      newExpanded.add(href);
    }
    setExpandedItems(newExpanded);
  };

  const isItemActive = (item: NavigationItem): boolean => {
    if (router.pathname === item.href) return true;
    if (item.children) {
      return item.children.some((child) => isItemActive(child));
    }
    return false;
  };

  const renderNavigationItem = (item: NavigationItem, level: number = 0) => {
    const isActive = isItemActive(item);
    const hasChildren = item.children && item.children.length > 0;
    const isExpanded = expandedItems.has(item.href);
    const paddingLeft = 12 + level * 16;

    return (
      <li key={item.href} style={{ marginBottom: level === 0 ? "8px" : "4px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "4px",
          }}
        >
          {hasChildren ? (
            <button
              onClick={() => toggleExpanded(item.href)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "8px 4px",
                color: "#586069",
                display: "flex",
                alignItems: "center",
                minWidth: "24px",
              }}
            >
              {isExpanded ? (
                <ChevronDownIcon size={12} />
              ) : (
                <ChevronRightIcon size={12} />
              )}
            </button>
          ) : (
            <div style={{ width: "24px" }} />
          )}

          <Link
            href={item.href}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "8px 12px",
              paddingLeft: `${paddingLeft}px`,
              borderRadius: "4px",
              color: isActive ? "#0366d6" : "#586069",
              backgroundColor: isActive ? "#f1f8ff" : "transparent",
              textDecoration: "none",
              transition: "all 0.2s ease",
              fontWeight: isActive ? "600" : "400",
              fontSize: level === 0 ? "14px" : "13px",
              flex: 1,
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
            {item.icon && level === 0 && <item.icon size={16} />}
            {item.title}
          </Link>
        </div>

        {hasChildren && isExpanded && (
          <ul style={{ listStyle: "none", marginTop: "4px" }}>
            {item.children!.map((child) =>
              renderNavigationItem(child, level + 1)
            )}
          </ul>
        )}
      </li>
    );
  };

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
        {navigationSections.map((section, sectionIndex) => (
          <div key={section.title} style={{ marginBottom: "24px" }}>
            {sectionIndex > 0 && (
              <h3
                style={{
                  fontSize: "12px",
                  fontWeight: "600",
                  marginBottom: "12px",
                  color: "#586069",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                }}
              >
                {section.title}
              </h3>
            )}
            <ul style={{ listStyle: "none" }}>
              {section.items.map((item) => renderNavigationItem(item))}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
}
