import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>AI Learning Resources for Designers</title>
        <meta
          name="description"
          content="Learn AI tools and concepts for design work"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1
          style={{ fontSize: "32px", fontWeight: "600", marginBottom: "16px" }}
        >
          AI Learning Resources for Designers
        </h1>

        <p style={{ fontSize: "16px", marginBottom: "24px", color: "#586069" }}>
          A comprehensive guide to understanding and using AI tools in your
          design workflow.
        </p>

        <div
          style={{
            display: "grid",
            gap: "24px",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          }}
        >
          <div
            style={{
              padding: "24px",
              border: "1px solid #e1e4e8",
              borderRadius: "8px",
            }}
          >
            <h3
              style={{
                fontSize: "18px",
                fontWeight: "600",
                marginBottom: "12px",
              }}
            >
              Getting Started
            </h3>
            <p style={{ marginBottom: "16px", color: "#586069" }}>
              Learn the basics of AI and how it can enhance your design process.
            </p>
            <a
              href="/getting-started"
              style={{ color: "#0366d6", textDecoration: "none" }}
            >
              Start learning →
            </a>
          </div>

          <div
            style={{
              padding: "24px",
              border: "1px solid #e1e4e8",
              borderRadius: "8px",
            }}
          >
            <h3
              style={{
                fontSize: "18px",
                fontWeight: "600",
                marginBottom: "12px",
              }}
            >
              AI Fundamentals
            </h3>
            <p style={{ marginBottom: "16px", color: "#586069" }}>
              Understand key concepts like machine learning, neural networks,
              and LLMs.
            </p>
            <a
              href="/ai-fundamentals"
              style={{ color: "#0366d6", textDecoration: "none" }}
            >
              Explore concepts →
            </a>
          </div>

          <div
            style={{
              padding: "24px",
              border: "1px solid #e1e4e8",
              borderRadius: "8px",
            }}
          >
            <h3
              style={{
                fontSize: "18px",
                fontWeight: "600",
                marginBottom: "12px",
              }}
            >
              Design Tools
            </h3>
            <p style={{ marginBottom: "16px", color: "#586069" }}>
              Discover AI-powered tools for design, prototyping, and creative
              work.
            </p>
            <a
              href="/design-tools"
              style={{ color: "#0366d6", textDecoration: "none" }}
            >
              View tools →
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
