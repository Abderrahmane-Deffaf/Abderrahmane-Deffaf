import React from 'react'
import {createRoot} from 'react-dom/client'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Projects />
    </div>
  )
}

const root = createRoot(document.getElementById("root") ); 
root.render(<App />) ; 