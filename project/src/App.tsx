import { LanguageProvider } from './contexts/LanguageContext';
import MouseSpotlightBackground from './components/background/MouseSpotlightBackground';
import Header from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import ProofStrip from './components/ProofStrip';
import About from './components/About/About';
import Process from './components/Process/Process';
import Education from './components/Education/Education';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <LanguageProvider>
      <MouseSpotlightBackground />
      <div className="relative z-0">
        <Header />
        <main>
          <Hero />
          <ProofStrip />
          <About />
          <Process />
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