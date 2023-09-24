import React from "react";
import { skills } from "../Text/skills";
import SkillsWrapper from "../subComponents/SkillsWrapper";
import manupilated from "./../assets/manupilated.svg"

const Skills = () => {
  return (
    <section id="skills" className="mt-[6rem]  flex flex-col gap-[3rem]">
      <h2 className="headers"># Skills</h2>
      <div className="flex w-full overflow-hidden">
        <div className="flex flex-col gap-[2rem] px-[2rem] laptop:w-[60%]">
          {skills.map((Element) => {
            return <SkillsWrapper key={Element.title} Element={Element} />;
          })}
        </div>
        <div className="relative flex w-0 items-start justify-end laptop:w-[40%]">
          <img src={manupilated} className="" alt="man manupilated" />
          <div className="laptop:background2 absolute -top-[2rem] bottom-0 left-[-103px] right-0  hidden laptop:block"></div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
