import React from "react";
import Contact from "../subComponents/Contact";
import Socials from "../subComponents/Socials";
import man from "../assets/man.svg";
import planet from "../assets/planet.svg";

const Hero = () => {
  return (
    <div
      id="home"
      className="flex  flex-col items-center gap-[1.5625rem] laptop:mt-[4rem] "
    >
      <div className="flex flex-col gap-[1.5625rem] text-center">
        <div className="">
          <p className="font-Sugarpunch  text-[1.5rem] laptop:text-[2rem] laptop:tracking-wider">
            Hi, I'am
          </p>
          <h1 className="font-Sugarpunch text-[2.5rem] laptop:text-[4rem] laptop:tracking-widest">
            Deffaf <br /> Abderrahmane
          </h1>
        </div>
        <p>Front-end Developer</p>
      </div>
      <Contact />
      <Socials type={"not"} />
      <div className="flex w-full ">
        <div className="relative h-[33rem] basis-[50%] laptop:h-0  ">
          <img
            className="absolute laptop:w-[60%] -left-[2rem] -top-[10rem] laptop:-top-[30rem] laptop:-left-[10rem]"
            src={planet}
            alt="planet"
          />
        </div>
        <div className="relative basis-[50%] ">
          <img
            className="absolute laptop:w-[60%] -right-[7rem] laptop:-top-[30rem]"
            src={man}
            alt="man"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
