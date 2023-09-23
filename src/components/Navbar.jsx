import React, { useState } from "react";
import { links } from "../Text/navbar";
import logo from "../assets/logo.svg";
import menu from "../assets/menu.svg";
import close from "../assets/close.svg";
import Socials from "../subComponents/Socials";

const Navbar = () => {
  const [icon, setIcon] = useState(menu);
  const [active, setActive] = useState(0) ; 

  function dropmenu(index) {
    setActive(index) ; 
    document.getElementById("menu").classList.toggle("hidden");
    icon == menu ? setIcon(close) : setIcon(menu);
  }
  /* window.addEventListener("scroll", () => {
    console.log(window.scrollY) ; 
    if( 0 <=window.scrollY <=900 ) {
      console.log("here")  ;
    }else if ( 900 <= window.scrollY <= 1400 ) {
      console.log("here 2") ; 
    }
  }) */

  return (
    <div id="navbar">
      <ul className=" flex px-[2rem]  justify-between  ">
        <ul className="flex h-fit w-full items-center justify-between py-[2.56rem]  laptop:w-fit">
          <li>
            <a>
              <img alt="logo" src={logo} />
            </a>
          </li>
          <li className=" laptop:hidden" onClick={() => dropmenu()}>
            <img alt="burger menu" src={icon} />
          </li>
        </ul>

        <div
          id="menu"
          className=" absolute bottom-0 left-0 right-0 top-[5.3rem] z-30 flex hidden w-full flex-col items-center justify-between bg-black pb-[3.12rem] laptop:static laptop:flex laptop:flex-row  laptop:justify-end laptop:bg-transparent laptop:pb-0 "
        >
          <ul className="mt-[3.12rem] flex flex-col items-center gap-[2rem] text-[1.375rem] laptop:mt-0 laptop:flex-row ">
            {links.map((Element, index) => {
              return (
                <li
                  className={` laptop:link-hover last:rounded-[5px] last:border last:border-white last:px-[2.5rem] last:py-[0.3125rem] ${
                    active == index ? "link-active" : null
                  }`}
                  key={Element.name}
                >
                  <a onClick={() => dropmenu(index)} href={Element.link}>
                    {Element.name}
                  </a>
                </li>
              );
            })}
          </ul>
          <Socials type={"navbar"} />
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
