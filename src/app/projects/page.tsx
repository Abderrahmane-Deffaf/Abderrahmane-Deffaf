import Project from "@/components/project";
import { projects } from "@/content/projects";

export default function page() {
  return (
    <div id="f-project" className=" py-8">
      <h1 className=" w-full text-center underline text-3xl font-bold">
        Projects
      </h1>
      {projects.map((Element, index) => (
        <section key={Element.name}>
          <div className="wrapper project_layout">
            <Project
              alt={Element.alt}
              image={Element.image}
              tech={Element.tech}
              description={Element.description}
              name={Element.name}
              className={++index % 2 === 0 ? "second" : ""}
              type={Element.type}
              imageClassName={index % 2 === 0 ? "img-2" : ""}
            />
            {index != projects.length && <div className="gradient"></div>}
          </div>
        </section>
      ))}
    </div>
  );
}
