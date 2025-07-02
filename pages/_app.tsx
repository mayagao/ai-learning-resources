import type { AppProps } from "next/app";
import { Layout } from "@/components/Layout";
import { getNavigationSections } from "../utils/navigation";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  const navigationSections = getNavigationSections();

  return (
    <Layout
      frontmatter={pageProps.markdoc?.frontmatter}
      navigationSections={navigationSections}
    >
      <Component {...pageProps} />
    </Layout>
  );
}
