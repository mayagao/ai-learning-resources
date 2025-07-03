import React, { useState } from "react";
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";
import { NavigationSection } from "../utils/navigation";
import { SecondaryNav } from "./SecondaryNav";

interface LayoutProps {
  children: React.ReactNode;
  frontmatter?: any;
  navigationSections?: NavigationSection[];
}

export function Layout({
  children,
  frontmatter,
  navigationSections = [],
}: LayoutProps) {
  const [sidebarState, setSidebarState] = useState<"open" | "closed">("open");

  const toggleSidebar = () => {
    setSidebarState((prev) => (prev === "open" ? "closed" : "open"));
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar
        isOpen={sidebarState === "open"}
        onClose={() => setSidebarState("closed")}
        navigationSections={navigationSections}
      />

      <div className="flex-1 flex flex-col min-w-0 h-screen">
        <div className="sticky top-0 z-20">
          <Header
            onMenuToggle={toggleSidebar}
            sidebarOpen={sidebarState === "open"}
          />
        </div>
        <div className="flex flex-row flex-1 overflow-hidden">
          <div className="flex-1 flex flex-row overflow-y-auto">
            <main className="flex-1 px-4 py-6 md:px-8 pb-12">
              <div className="pb-12"> {children}</div>
            </main>
            <SecondaryNav />
          </div>
        </div>
      </div>
    </div>
  );
}
