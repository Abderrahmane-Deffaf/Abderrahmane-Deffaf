import { formatDate } from "@/lib/format-date";

type BlogInfosProps = {
  blog: Blog;
};
export default function BlogInfos({ blog }: BlogInfosProps) {
  return (
    <div className=" space-y-2">
      <h4>{blog.title}</h4>

      <div className=" flex flex-col gap-2">
        {blog.updated_at && <p>Last Update: {formatDate(blog.updated_at)}</p>}

        <p>Created At: {formatDate(blog.created_at)}</p>
      </div>
      <div className=" flex flex-wrap gap-2">
        {blog.topics.split(",").map((topic) => (
          <span
            key={topic}
            className=" uppercase bg-muted px-2 py-1 rounded-lg border border-neutral-500 block w-fit"
          >
            {topic}
          </span>
        ))}
      </div>
    </div>
  );
}
