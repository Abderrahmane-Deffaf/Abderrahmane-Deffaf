import React, { useState } from "react";
import { projects } from "../Text/projects";
import link from '../assets/icons/link.svg' ; 

const Projects = () => {
  let [active, setActive] = useState(0);

  function handleSlade(direction) {
    let cardWidth = document.querySelector(".card").clientWidth;
    //console.log(cardWidth) ; 
    if (direction == "left" && active > 0) {
      document.querySelector(".wrapper").scrollLeft -= cardWidth;
      setActive(--active) ;  
    } else if (active < 5 && direction == "right") {
      //console.log(document.querySelector(".wrapper").clientWidth);
      document.querySelector(".wrapper").scrollLeft += cardWidth;
      setActive(++active);
    }
  }

  return (
    <div
      id="projects"
      className="flex  flex-col gap-[1rem] text-center "
    >
      <div className="mt-[2rem] flex flex-col gap-[4.69rem]">
        <h2 className="headers "># Personnel Projects</h2>
        <div className="wrapper flex overflow-hidden ">
          {projects.map((Element) => {
            return (
              <div
                className="card flex min-w-full flex-col gap-[1.56rem] laptop:flex-row "
                key={Element.image}
              >
                <div className="  relative z-50 basis-[60%] laptop:relative laptop:basis-[50%]">
                  <div
                    className={`laptop:background laptop:absolute laptop:bottom-0 laptop:left-0 laptop:top-0 laptop:bg-white`}
                  ></div>
                  <h2 className="font-Slab font-black ">{Element.title}</h2>
                  <p>{Element.description}</p>
                  <div className="mt-[1rem] flex justify-center gap-[2rem]">
                    {Element.liveURL ? (
                      <a className="link" href={Element.liveURL}>
                        Live
                        <img src={link} alt="link" />
                      </a>
                    ) : null}
                    {Element.repo ? (
                      <a className="link" href={Element.repo}>
                        Github
                        <img src={link} alt="link" />
                      </a>
                    ) : null}
                  </div>
                  <div className="laptop:background absolute bottom-0 left-0 right-0 top-0 -z-10 "></div>
                </div>
                <div className=" w-full basis-[40%]  px-[2rem] laptop:z-10 laptop:h-full laptop:basis-[50%]">
                  <img
                    className="h-full w-full rounded-md object-contain"
                    src={Element.image}
                    alt="project"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className=" mx-auto flex gap-2">
        <div
          onClick={() => handleSlade("left")}
          className="gg-chevron-left after:rotate-45"
        ></div>
        <div className="flex items-center gap-2">
          {projects.map((Element, index) => {
            return (
              <div
                className={`circle ${active == index ? "bg-white" : "bg-gray"}`}
                key={Element.title}
              ></div>
            );
          })}
        </div>

        <div
          onClick={() => handleSlade("right")}
          className="gg-chevron-left after:-rotate-[135deg]"
        ></div>
      </div>
    </div>
  );
};

export default Projects;
