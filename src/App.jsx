import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import StackedSection from './components/StackedSection';
import Contact from './components/Contact';
import './styles/index.scss';

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Experience />
      <Skills />
      <StackedSection />
      <Contact />
    </div>
  );
}

export default App;
