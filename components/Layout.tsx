import React, { useState, useEffect, useRef } from "react";
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
  const [isMobile, setIsMobile] = useState(false);
  const hasInitialized = useRef(false);
  const userHasManuallyClosedOnDesktop = useRef(false);

  // Detect screen size and set initial sidebar state
  useEffect(() => {
    const checkScreenSize = () => {
      const mobile = window.innerWidth < 768;
      const wasMobile = isMobile;
      setIsMobile(mobile);

      // Only set initial state on first load
      if (!hasInitialized.current) {
        hasInitialized.current = true;
        if (mobile) {
          setSidebarState("closed");
        } else {
          setSidebarState("open");
        }
        return;
      }

      // Handle transitions between mobile and desktop
      if (wasMobile && !mobile) {
        // Transitioning from mobile to desktop
        // Only open if user hasn't manually closed it on desktop before
        if (!userHasManuallyClosedOnDesktop.current) {
          setSidebarState("open");
        }
      } else if (!wasMobile && mobile) {
        // Transitioning from desktop to mobile - always close
        setSidebarState("closed");
      }
      // If staying in the same mode (mobile->mobile or desktop->desktop), don't change state
    };

    // Check on mount
    checkScreenSize();

    // Listen for resize events
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, [isMobile]);

  const toggleSidebar = () => {
    const newState = sidebarState === "open" ? "closed" : "open";
    setSidebarState(newState);

    // Track if user manually closed sidebar on desktop
    if (!isMobile && newState === "closed") {
      userHasManuallyClosedOnDesktop.current = true;
    } else if (!isMobile && newState === "open") {
      userHasManuallyClosedOnDesktop.current = false;
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Backdrop for mobile overlay */}
      {isMobile && sidebarState === "open" && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setSidebarState("closed")}
        />
      )}

      <Sidebar
        isOpen={sidebarState === "open"}
        onClose={() => setSidebarState("closed")}
        navigationSections={navigationSections}
        isMobile={isMobile}
      />

      <div
        className={` mx-auto flex-1 flex flex-col min-w-0 h-screen duration-300 ${
          !isMobile && sidebarState === "open" ? "" : "ml-0"
        }`}
      >
        <div className="sticky top-0 z-20">
          <Header
            onMenuToggle={toggleSidebar}
            sidebarOpen={sidebarState === "open"}
            isMobile={isMobile}
          />
        </div>
        <div className="flex flex-row flex-1 overflow-hidden ">
          <div className="overflow-y-auto w-full">
            <div className="max-w-screen-lg mx-auto flex-1 flex flex-row items-start">
              <main className="flex-1 px-4 py-6 md:px-8 pb-12">
                <div className="pb-12"> {children}</div>
              </main>
              <SecondaryNav />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
