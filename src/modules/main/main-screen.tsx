import Projects from "./features/projects/projects";
// import Blogs from "./features/blogs/blogs";
import Infos from "./features/infos/infos";
export default function MainScreen() {
  return (
    <div className=" wrapper py-8 space-y-16 lg:space-y-32 lg:py-16">
      <Infos />
      <Projects />
      {/* <Blogs /> */}
    </div>
  );
}
