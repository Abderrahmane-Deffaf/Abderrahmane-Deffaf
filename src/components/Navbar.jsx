import React from "react";
import { links, socials } from "../Text/navbar";
import logo from '../assets/logo.svg'
import menu from "../assets/menu.svg";

const Navbar = () => {
  return (
    <div className="">
      <ul className="relative flex justify-between">
        <li>
          <img alt="logo" src={logo} />
        </li>
        <li>
          <img alt="burger menu" src={menu} />
        </li>
        <div className="absolute hidden  flex-col items-center justify-between h-full  bottom-0 text-white">
          <ul className="flex flex-col items-center">
            {links.map((Element) => {
            return (
              <li key={Element.name}>
                <a href={Element.link}>{Element.name}</a>
              </li>
            );
          })}
          </ul>
          
          <ul className="">
            {socials.map((Element) => {
              return (
                <li key={Element.social}>
                  <a href={Element.link}>
                    <img alt={Element.social} src={Element.icon} />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
