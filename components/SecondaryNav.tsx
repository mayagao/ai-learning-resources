import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

interface Heading {
  id: string;
  text: string;
  level: number;
}

export const SecondaryNav: React.FC = () => {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const router = useRouter();

  useEffect(() => {
    // Query all h2 and h3 in the main content area
    const main = document.querySelector("main");
    if (!main) return;
    const nodes = Array.from(main.querySelectorAll("h2, h3"));
    const headingList: Heading[] = nodes.map((node) => {
      let id = node.id;
      if (!id) {
        // Generate an ID if missing
        id =
          node.textContent
            ?.toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/(^-|-$)/g, "") || "";
        node.id = id;
      }
      return {
        id,
        text: node.textContent || "",
        level: node.tagName === "H2" ? 2 : 3,
      };
    });
    setHeadings(headingList);
  }, [router.asPath]);

  if (headings.length === 0) return null;

  return (
    <nav className="hidden lg:block sticky top-14 max-h-[100vh] w-[220px] overflow-auto ml-8 w-72 text-base">
      <div className="rounded-lg p-4">
        <ul className="space-y-2">
          {headings.map((heading) => (
            <li
              key={heading.id}
              className={heading.level === 2 ? "ml-0" : "ml-4 "}
            >
              <a
                href={`#${heading.id}`}
                className="hover:text-zinc-900 text-zinc-500 transition-colors"
              >
                {heading.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
