import React from "react";
import fs from "fs";
import path from "path";
import Markdoc from "@markdoc/markdoc";
import { GetStaticProps } from "next";
import { CodeTabs } from "@/components/CodeTabs";
import { Callout } from "@/components/Callout";
import { Diagram } from "@/components/Diagram";
import { CodeBlock } from "@/components/CodeBlock";

interface Props {
  content: any;
}

const components = {
  CodeTabs,
  Callout,
  Diagram,
  CodeBlock,
};

export default function ImageGeneration({ content }: Props) {
  return Markdoc.renderers.react(content, React, { components });
}

export const getStaticProps: GetStaticProps = async () => {
  const filePath = path.join(
    process.cwd(),
    "examples/image-generation/README.md"
  );
  const source = fs.readFileSync(filePath, "utf8");

  const ast = Markdoc.parse(source);
  const content = Markdoc.transform(ast);

  return {
    props: {
      content: JSON.parse(JSON.stringify(content)),
    },
  };
};
