import { getProjects } from "../get-first-project";
import ProjectSlides from "./project-slides";

export default async function Projects() {
  const projects = await getProjects();
  if (typeof projects === "string")
    return <div className=" text-red-500">{projects}</div>;
  return (
    <div className=" space-y-4 lg:space-y-8">
      <h2>Projects: </h2>
      <div>
        <ProjectSlides projects={projects} />
      </div>
    </div>
  );
}
