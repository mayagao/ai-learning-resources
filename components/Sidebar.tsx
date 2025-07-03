import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  XIcon,
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

  const isItemActive = (item: NavigationItem): boolean => {
    if (router.pathname === item.href) return true;
    if (item.children) {
      return item.children.some((child: NavigationItem) => isItemActive(child));
    }
    return false;
  };

  const renderNavigationItem = (item: NavigationItem, level: number = 0) => {
    const isActive = isItemActive(item);
    const hasChildren = item.children && item.children.length > 0;
    const isExpanded = expandedItems.has(item.href);
    const paddingLeft = 0;

    return (
      <li key={item.href} className={level === 0 ? "mb-1" : "mb-1"}>
        <div className="flex items-center">
          <Link
            href={item.href}
            className={`flex items-center gap-2 py-1.5 px-3 rounded-lg flex-1 no-underline transition-all duration-200 hover:bg-gray-100 ${
              level === 0 ? "text-base" : "text-sm"
            } ${
              isActive
                ? "text-zinc-800 bg-zinc-100 font-medium"
                : "text-zinc-700 font-normal"
            }`}
          >
            {item.title}
          </Link>
        </div>

        {hasChildren && isExpanded && (
          <ul className="list-none mt-1">
            {item.children!.map((child) =>
              renderNavigationItem(child, level + 1)
            )}
          </ul>
        )}
      </li>
    );
  };

  return (
    <aside
      className={`sidebar h-screen flex flex-col bg-zinc-50 border-r border-gray-200 ${
        isOpen ? "open" : ""
      }`}
    >
      <div className="flex justify-between items-center px-5 py-5 sticky top-0 z-10">
        <Link
          href="/"
          className="flex items-center gap-2 no-underline text-inherit transition-opacity duration-200 hover:opacity-70"
        >
          <MarkGithubIcon size={24} />
          <h2 className="text-base font-semibold m-0">AI Design Resources</h2>
        </Link>
      </div>

      <nav className="flex-1 overflow-y-auto px-3">
        {navigationSections.map((section, sectionIndex) => (
          <div key={section.title} className="mb-6">
            {sectionIndex >= 0 && (
              <h3 className="text-sm ml-3 font-medium mb-3 text-zinc-500 ">
                {section.title}
              </h3>
            )}
            <ul className="list-none">
              {section.items.map((item) => renderNavigationItem(item))}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
}
