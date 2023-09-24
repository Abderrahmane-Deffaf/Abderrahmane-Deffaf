import React from "react";
import Contact from "../subComponents/Contact";
import Socials from "../subComponents/Socials";
import man from "../assets/man.svg";
import planet from "../assets/planet.svg";

const Hero = () => {
  return (
    <div
      id="home"
      className="flex flex-col items-center  gap-[1.5625rem] overflow-hidden  laptop:mt-[4rem] "
    >
      <div className="flex flex-col gap-[1.5625rem] px-[2rem] text-center">
        <div className="">
          <p className="font-Sugarpunch  text-[1.5rem] laptop:text-[2rem] laptop:tracking-wider">
            Hi, I am
          </p>
          <h1 className="font-Sugarpunch text-[2.5rem] laptop:text-[4rem] laptop:tracking-widest">
            Deffaf <br /> Abderrahmane
          </h1>
        </div>
        <p>Front-end Developer</p>
      </div>
      <Contact />
      <Socials type={"not"} />
      <div className="relative laptop:mb-[11rem] h-[20rem]  w-full tablet:h-[22rem] laptop:h-0   ">
        <img
          className="absolute -left-[3rem]  w-[50%]  tablet:-top-[25%] tablet:w-[40%]  laptop:-left-[10rem] laptop:-top-[25rem]  laptop:w-[30%]"
          src={planet}
          alt="planet"
        />
        <img
          className="absolute -right-[6rem]   w-[50%]  tablet:-top-[25%] tablet:w-[40%] laptop:-top-[25rem] laptop:w-[30%]"
          src={man}
          alt="man"
        />
      </div>
    </div>
  );
};

export default Hero;
