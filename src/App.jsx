import React, { useState } from 'react'
import {createRoot} from 'react-dom/client'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Who from './components/Who';
import Footer from './components/Footer';
import arrowUp from './assets/icons/arrowUp.svg'

const App = () => {

  return (
    <div
      className="m-auto  max-w-[1620px]"
    >
      <div className="fixed  right-0 top-[90%] z-20">
        <a
          href="#navbar"
        >
          <img className="  " src={arrowUp} alt="arrowup" />
          <span aria-hidden="true" className="hidden">
            scroll to navbar
          </span>
        </a>
      </div>
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Who />
      <Footer />
    </div>
  );
}

const root = createRoot(document.getElementById("root") ); 
root.render(<App />) ; 