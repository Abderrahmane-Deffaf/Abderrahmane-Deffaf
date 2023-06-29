import React from "react";
import Contact from "../subComponents/Contact";
import Socials from "../subComponents/Socials";
import man from "../assets/man.svg";
import planet from "../assets/planet.svg";

const Hero = () => {
  return (
    <div className="flex flex-col items-center gap-[1.5625rem] ">
      <div className="flex flex-col gap-[1.5625rem] text-center">
        <div className="">
          <p className="font-Sugarpunch  text-[1.5rem]">Hi, I'am</p>
          <h1 className="font-Sugarpunch text-[2.5rem]">
            Deffaf <br /> Abderrahmane
          </h1>
        </div>
        <p>Front-end Developer</p>
      </div>
      <Contact />
      <Socials />
      <div className="flex w-full ">
        <div className="relative basis-[50%] h-[33rem] ">
          <img className="absolute -top-[10rem] -left-[2rem] " src={planet} alt="planet" />
        </div>
        <div className="relative basis-[50%] ">
          <img className="absolute -right-[2rem]" src={man} alt="man" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
