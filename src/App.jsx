import { Routes, Route } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import {About} from './pages/About';
import {Skills }from './pages/Skills';
import {Projects} from './pages/Projects';
import Education from './pages/Education';
import {Contact} from './pages/Contact';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { NavBar } from './components/NavBar';
import HomeSection from './components/HomeSection';
import {AboutSection} from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import EducationSection from './components/EducationSection';
import { ContactSection } from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="scroll-smooth">
      <NavBar />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <section id="home" className="full-screen-section">
                  <HomeSection />
                </section>
                <section id="about" className="full-screen-section">
                  <AboutSection />
                </section>
                <section id="skills" className="full-screen-section">
                  <SkillsSection />
                </section>
                <section id="projects" className="full-screen-section">
                  <ProjectsSection />
                </section>
                <section id="education" className="full-screen-section">
                  <EducationSection />
                </section>
                <section id="contact" className="full-screen-section">
                  <ContactSection />
                </section>
              </>
            }
          />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} /> 
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/education" element={<Education />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}