import { skills } from "@/content/projects";

export default function Skills() {
  return (
    <section id="skills">
      <div className="wrapper">
        <h2>Skills</h2>
        <div className="skills">
          {skills.map((Element) => (
            <ul key={Element.title}>
              <h3 className=" underline font-bold text-xl">{Element.title}</h3>
              {Element.skills.map((element) => (
                <li key={element}>{element}</li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
