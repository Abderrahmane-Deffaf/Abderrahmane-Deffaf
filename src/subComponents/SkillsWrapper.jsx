import React from "react";
import Skillscard from "./Skillscard";

const SkillsWrapper = ({ Element }) => {
  return (
    <div className="flex flex-col gap-[2rem]">
      <div className="before:contetnet-[''] poly relative w-fit bg-white py-[0.4rem] pl-[1rem]  pr-[0.3rem] text-black before:absolute before:h-[1rem] before:w-[1rem] before:rounded-[50%] before:bg-black after:absolute after:-right-[2.5rem] after:top-1 after:h-[37px]  after:w-[50px] after:rotate-90 after:bg-white after:content-['']">
        <p className="text-[1.375rem]">{Element.title}</p>
      </div>
      <div className="flex flex-wrap justify-between gap-y-[2rem]">
        {Element.technologies.map((Element) => {
          return (
            <Skillscard
              key={Element.icon}
              name={Element.name}
              icon={Element.icon}
              level={Element.level}
              experience={Element.experience}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SkillsWrapper;
