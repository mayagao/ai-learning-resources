const withMarkdoc = require("@markdoc/next.js");

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdoc"],
  experimental: {
    mdxRs: false,
  },
};

module.exports = withMarkdoc()(nextConfig);
