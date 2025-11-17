
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Team from './components/Team';
import AIStylist from './components/AIStylist';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-brand-dark">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <AIStylist />
        <Gallery />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
