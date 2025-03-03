import BlogDetailScreen from "@/modules/blogs/screens/blog-detail-screen";

export default async function page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const slug = await params;
  return <BlogDetailScreen id={slug.id} />;
}
