import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div style={{ position: 'relative', overflow: 'hidden', minHeight: '100vh', backgroundColor: 'var(--bg-primary)' }}>
      {/* Dynamic glow decoration backgrounds globally */}
      <div 
        style={{
          position: 'absolute',
          top: '20vh',
          left: '-20vw',
          width: '50vw',
          height: '50vw',
          background: 'rgba(0, 240, 255, 0.04)',
          borderRadius: '50%',
          filter: 'blur(150px)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      ></div>
      <div 
        style={{
          position: 'absolute',
          top: '60vh',
          right: '-20vw',
          width: '50vw',
          height: '50vw',
          background: 'rgba(189, 0, 255, 0.04)',
          borderRadius: '50%',
          filter: 'blur(150px)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      ></div>
      <div 
        style={{
          position: 'absolute',
          bottom: '10vh',
          left: '-10vw',
          width: '45vw',
          height: '45vw',
          background: 'rgba(57, 255, 20, 0.03)',
          borderRadius: '50%',
          filter: 'blur(150px)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      ></div>

      {/* Main Sections */}
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Timeline />
      <Contact />
      <Footer />
    </div>
  );
}
