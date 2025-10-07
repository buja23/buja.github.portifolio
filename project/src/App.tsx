import React from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Education from './components/Education/Education';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <LanguageProvider>
      <div className="App">
        <Header />
        <main>
          <Hero />
          <About />
          <Education />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;