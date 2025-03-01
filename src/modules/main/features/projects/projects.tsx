import { getProjects } from "../../data/get-project";
import ProjectSlides from "./components/project-slides";

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
