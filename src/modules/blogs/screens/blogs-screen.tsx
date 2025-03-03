import BlogsListsInfos from "../features/blog-lists-infos/blogs-lists-infos";

export default function BlogsScreen() {
  return (
    <section>
      <div className=" wrapper py-16 space-y-8 lg:space-y-16 ">
        <h1>Blogs List</h1>
        <BlogsListsInfos />
      </div>
    </section>
  );
}
