import React from "react";
import Skillscard from "./Skillscard";

const SkillsWrapper = ({ Element }) => {
  return (
    <div className="flex flex-col gap-[1rem]">
      <div className="before:contetnet-[''] poly relative w-fit bg-white py-[0.4rem] pl-[1rem]  pr-[0.3rem] text-black before:absolute before:-right-[1rem] before:top-[50%] before:z-10 before:h-[0.6rem] before:w-[0.6rem] before:-translate-y-[50%]  before:rounded-[50%] before:bg-black  after:absolute after:-right-[2.2rem] after:top-[0.638rem] after:h-[25px]  after:w-[46px] after:rotate-90 after:bg-white after:content-['']">
        <p className="text-[1.375rem] font-bold">{Element.title}</p>
      </div>
      <div className="flex flex-wrap justify-center  gap-x-[1rem] gap-y-[2rem] laptop:justify-start">
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
