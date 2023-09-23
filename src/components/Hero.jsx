import React from "react";
import Contact from "../subComponents/Contact";
import Socials from "../subComponents/Socials";
import man from "../assets/man.svg";
import planet from "../assets/planet.svg";

const Hero = () => {
  return (
    <div
      id="home"
      className="relative flex flex-col  items-center gap-[1.5625rem] px-[2rem] laptop:mt-[4rem] "
    >
      <div className="flex flex-col gap-[1.5625rem] text-center">
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
      <img
        className="absolute -bottom-[19rem] -left-[3rem] w-[50%] tablet:-bottom-[25rem]  tablet:w-[40%]  laptop:-left-[10rem] laptop:top-[0]  laptop:w-[30%]"
        src={planet}
        alt="planet"
      />
      <img
        className="absolute -bottom-[15rem]  -right-[3rem]  w-[50%] tablet:-bottom-[23rem]  tablet:w-[40%] laptop:top-0 laptop:w-[30%]"
        src={man}
        alt="man"
      />
    </div>
  );
};

export default Hero;
