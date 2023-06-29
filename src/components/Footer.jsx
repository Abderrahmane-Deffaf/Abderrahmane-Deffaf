import React from 'react'
import logo from '../assets/logo.svg' ; 
import Socials from '../subComponents/Socials';

const Footer = () => {
  return (
    <footer className="flex flex-col gap-[1.3rem] pb-[3rem] items-center">
      <div className='flex flex-col gap-[1rem]'>
        <img src={logo} alt="logo" />
        <Socials />
      </div>
      <div>
        <small>Designed by Eduardo Maciel | 2022</small>
      </div>
    </footer>
  );
}

export default Footer