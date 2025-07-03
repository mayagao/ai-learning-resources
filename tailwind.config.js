/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        mono: ["SF Mono", "Monaco", "Inconsolata", "Roboto Mono", "monospace"],
      },
      colors: {
        github: {
          text: "#24292e",
          link: "#0366d6",
          border: "#e1e4e8",
          "bg-secondary": "#fafbfc",
          "bg-tertiary": "#f6f8fa",
          "text-secondary": "#586069",
        },
      },
      width: {
        sidebar: "280px",
      },
      margin: {
        sidebar: "280px",
      },
      spacing: {
        header: "60px",
      },
    },
  },
  plugins: [],
};
