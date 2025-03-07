import BlogInfos from "@/modules/main/features/blogs/blog-infos";
import { getBlogsInfos } from "../../data/get-blogs-infos";
import ErrorMessage from "@/components/ui/error-message";

export default async function BlogsListsInfos() {
  const blogsInfos = await getBlogsInfos();
  if (typeof blogsInfos === "string")
    return <ErrorMessage message={blogsInfos} />;
  return (
    <div className=" flex flex-wrap gap-4 lg:gap-8">
      {blogsInfos.map((blog) => (
        <BlogInfos key={blog.id} blog={blog} />
      ))}
    </div>
  );
}
