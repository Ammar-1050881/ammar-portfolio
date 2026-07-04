import { Analytics } from "@vercel/analytics/react";
import React, { useState } from 'react'; // 👈 Added useState here!
import Preloader from './components/Preloader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import TechnicalSkills from './components/TechnicalSkills'
import Services from './components/Services'
import Projects from './components/Projects'
import ContentCreator from './components/ContentCreator'
import Internships from './components/Internships'
import Leadership from './components/Leadership'
import Certificates from './components/Certificates'
import SoftSkills from './components/SoftSkills'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  // 👈 This is the "switch" that tracks if you clicked the button
  const [hasEntered, setHasEntered] = useState(false);

  return (
    <>
      {/* 👈 We pass the switch and the function to flip it to the Preloader */}
      <Preloader hasEntered={hasEntered} setHasEntered={setHasEntered} />
      
      <Navbar />
      
      {/* 👈 We tell the Hero section whether the switch has been flipped so it can play the video */}
      <Hero hasEntered={hasEntered} /> 
      
      <About />
      <TechnicalSkills />
      <Services />
      <Projects />
      <ContentCreator />
      <Internships />
      <Leadership />
      <Certificates />
      <SoftSkills />
      <Contact />
      <Footer />
      
      {/* 📊 Vercel Analytics goes right here at the bottom */}
      <Analytics />
    </>
  )
}

export default App