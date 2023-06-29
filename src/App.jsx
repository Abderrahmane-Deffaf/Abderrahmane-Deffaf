import React from 'react'
import {createRoot} from 'react-dom/client'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Who from './components/Who';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Who />
      <Footer />
    </div>
  )
}

const root = createRoot(document.getElementById("root") ); 
root.render(<App />) ; 