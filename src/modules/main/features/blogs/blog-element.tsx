import rehypeFormat from "rehype-format";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";
import rehypeStringify from "rehype-stringify";
import remarkDirective from "remark-directive";
import remarkFrontmatter from "remark-frontmatter";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";

type BlogElementProps = {
  content: string;
};
export default async function BlogElement({ content }: BlogElementProps) {
  //const mdxSource = await serialize(source);

  const processor = unified()
    .use(remarkParse)
    .use(remarkDirective)
    .use(remarkFrontmatter)
    .use(remarkGfm)
    .use(remarkMath)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeFormat)
    .use(rehypeSanitize)
    .use(rehypeStringify);

  const file = await processor.process(content);
  return (
    <div
      className="prose prose-lg dark:prose-invert max-w-none select-none"
      dangerouslySetInnerHTML={{
        __html: String(file),
      }}
    />
  );
}
