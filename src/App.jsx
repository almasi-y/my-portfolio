import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Education from './pages/Education';
import Contact from './pages/Contact';
import './index.css';

import Navbar from './components/Navbar';
import HomeSection from './components/HomeSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import EducationSection from './components/EducationSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  return (
    
      <div className="scroll-smooth">
        <Navbar />
        <main className="bg-white">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <HomeSection />
                  <AboutSection />
                  <SkillsSection />
                  <ProjectsSection />
                  <EducationSection />
                  <ContactSection />
                </>
              }
            />
          </Routes>
        </main>
        <Footer />
      </div>
    
  );
}
