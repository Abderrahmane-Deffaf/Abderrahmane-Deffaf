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
import rehypeAutoLinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";

type BlogElementProps = {
  content: string;
};
export default async function BlogDetails({ content }: BlogElementProps) {
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
    .use(rehypeStringify)
    .use(rehypeAutoLinkHeadings)
    .use(rehypePrettyCode)
    .use(rehypeSlug);

  const file = await processor.process(content);
  return (
    <div
      className="content text-white prose prose-lg dark:prose-invert max-w-fit overflow-hidden "
      dangerouslySetInnerHTML={{
        __html: String(file),
      }}
    />
  );
}
