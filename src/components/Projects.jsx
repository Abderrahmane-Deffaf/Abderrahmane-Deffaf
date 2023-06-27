import React from "react";
import { projects } from "../Text/projects";

const Projects = () => {
  return (
    <div className="flex flex-col gap-[1rem]  overflow-hidden  text-center text-white">
      <div className="flex flex-col gap-[4.69rem]">
        <h2 className="text-[1.75rem]">Projects</h2>
        <div className="flex ">
          {projects.map((Element) => {
            return (
              <div
                className="flex min-w-full flex-col gap-[1.56rem] px-[2.19rem]"
                key={Element.image}
              >
                <div>
                  <h2 className="text-[3rem]">{Element.title}</h2>
                  <p>{Element.description}</p>
                  <div>
                    {Element.liveURL ? (
                      <a href={Element.liveURL}>Live</a>
                    ) : null}
                    {Element.repo ? <a href={Element.repo}>Github</a> : null}
                  </div>
                </div>
                <div className="h-[164px] w-full ">
                  <img
                    className="h-full w-full object-contain"
                    src={Element.image}
                    alt="project"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className=" flex px-[2.19rem] gap-2 mx-auto">
        <div className="gg-chevron-left after:rotate-45"></div>
        <div className="flex gap-2 items-center">
          {
            projects.map((Element) => {
              return (
                <div className="circle" key={Element.title}></div>
              )
            })
          }
        </div>
        
        <div className="gg-chevron-left after:-rotate-[135deg]"></div>
      </div>
    </div>
  );
};

export default Projects;
