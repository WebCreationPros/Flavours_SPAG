
import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import MenuHighlights from './components/MenuHighlights';
import VibeGallery from './components/VibeGallery';
import Catering from './components/Catering';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-brand-dark overflow-x-hidden">
      <Navbar />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="menu">
          <MenuHighlights />
        </section>
        <VibeGallery />
        <section id="catering">
          <Catering />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
      <Analytics />
    </div>
  );
};

export default App;
