import { getBlogById } from "../data/get-blog-by-id";
import { formatDate } from "@/lib/format-date";
import InfoElement from "@/components/ui/info-element";
import BlogDetails from "../features/blog-details/blog-details";

export default async function BlogDetailScreen({ id }: { id: string }) {
  const blogDetails = await getBlogById(+id);
  if (typeof blogDetails === "string")
    return <div className=" text-red-500">{blogDetails}</div>;
  return (
    <section>
      <div className=" wrapper py-16 space-y-8 lg:space-y-16">
        <div className=" flex flex-col gap-2 lg:gap-4">
          <h4>{blogDetails.title}</h4>

          <div className=" flex flex-col gap-2">
            {blogDetails.updated_at && (
              <p>Last Update: {formatDate(blogDetails.updated_at)}</p>
            )}

            <p>Created At: {formatDate(blogDetails.created_at)}</p>
          </div>
          <div className=" flex flex-wrap gap-2">
            {blogDetails.topics.split(",").map((topic) => (
              <InfoElement key={topic} topic={topic} />
            ))}
          </div>
        </div>
        <div className=" space-y-2 lg:space-y-4">
          <h2 className=" text-green-700">Content:</h2>
          <BlogDetails content={blogDetails.content} />
        </div>
      </div>
    </section>
  );
}
