import React, { useState } from "react";
import { links } from "../Text/navbar";
import logo from "../assets/logo.svg";
import menu from "../assets/menu.svg";
import close from "../assets/close.svg";
import Socials from "../subComponents/Socials";

const Navbar = () => {
  const [icon, setIcon] = useState(menu);

  function dropmenu() {
    document.getElementById("menu").classList.toggle("hidden");
    icon == menu ? setIcon(close) : setIcon(menu) ; 
  }

  return (
    <div id="navbar">
      <ul className=" flex   justify-between ">
        <ul className="flex h-fit w-full items-center justify-between  py-[2.56rem]">
          <li>
            <a>
              <img alt="logo" src={logo} />
            </a>
          </li>
          <li  onClick={() => dropmenu()}>
            <img alt="burger menu" src={icon} />
          </li>
        </ul>

        <div
          id="menu"
          className=" z-30 bg-black absolute bottom-0 left-0 right-0 top-[5.3rem] flex hidden w-full flex-col items-center justify-between  pb-[3.12rem]   "
        >
          <ul className="mt-[3.12rem] flex flex-col items-center gap-[3.69rem] text-[1.375rem]">
            {links.map((Element) => {
              return (
                <li
                  className=" last:rounded-[5px] last:border last:border-white last:px-[2.5rem] last:py-[0.3125rem]"
                  key={Element.name}
                >
                  <a onClick={()=>dropmenu()} href={Element.link}>{Element.name}</a>
                </li>
              );
            })}
          </ul>
          <Socials/>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
