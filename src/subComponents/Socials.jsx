import React from 'react'
import { socials } from '../Text/navbar';

const Socials = ({type}) => {
  return (
    <ul
      className={` px-[2rem] flex ${
        type == "navbar" ? "laptop:hidden" : null
      }  gap-[1.5625rem] `}
    >
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
  );
}

export default Socials