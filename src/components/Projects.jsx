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
    <div id="projects" className="flex flex-col gap-[1rem]    text-center">
      <div className="flex flex-col gap-[4.69rem]">
        <h2 className="headers ">
          # Personnel Projects
        </h2>
        <div className="wrapper flex overflow-hidden ">
          {projects.map((Element) => {
            return (
              <div
                className="card flex min-w-full flex-col gap-[1.56rem] "
                key={Element.image}
              >
                <div>
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
