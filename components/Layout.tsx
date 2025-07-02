import React, { useState } from "react";
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [sidebarState, setSidebarState] = useState<"open" | "closed">("open");

  const toggleSidebar = () => {
    setSidebarState((prev) => (prev === "open" ? "closed" : "open"));
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar
        isOpen={sidebarState === "open"}
        onClose={() => setSidebarState("closed")}
      />

      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          marginLeft: sidebarState === "open" ? "280px" : "0",
          transition: "margin-left 0.3s ease",
          minWidth: 0,
        }}
      >
        <Header
          onMenuToggle={toggleSidebar}
          sidebarOpen={sidebarState === "open"}
        />

        <main
          style={{
            flex: 1,
            padding: "24px 48px",
            marginTop: "60px", // Account for fixed header
            maxWidth: "100%",
            overflow: "auto",
          }}
        >
          {children}
        </main>
      </div>
    </div>
  );
}
