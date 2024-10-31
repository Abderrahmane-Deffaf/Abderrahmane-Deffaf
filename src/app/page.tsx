import Contact from "@/components/contact";
import Footer from "@/components/footer";
import PersonnelInfo from "@/components/personnel-info";
import Project from "@/components/project";
import Skills from "@/components/skills";
import { projects } from "@/content/projects";

export default function Home() {
  const firstProject = projects[0];
  return (
    <div>
      <PersonnelInfo />
      <div className="gradient"></div>

      <section id="f-project" className="shared_project">
        <div className="wrapper project_layout">
          <div id="project-proud">
            <h1>Projects</h1>
          </div>
          <Project
            className={firstProject.className}
            type={firstProject.type}
            name={firstProject.name}
            description={firstProject.description}
            tech={firstProject.tech}
            image={firstProject.image}
            alt={firstProject.alt}
          />
          <div className="see_more_projects">
            <a href="prjects.html">See More Projects</a>
          </div>
        </div>
      </section>
      <div className="gradient"></div>
      <Skills />
      <div className="gradient"></div>

      <Contact />
      <div className="gradient"></div>
    </div>
  );
}
