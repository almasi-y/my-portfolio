import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import { HashLink } from 'react-router-hash-link';
import {BrowserRouter as Router} from "react-router-dom";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { FaGithub } from 'react-icons/fa';

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  // Helper to scroll smoothly to section
  const handleNavClick = (e, href, name) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const el = document.getElementById(href.replace("#", ""));
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        setActiveLink(name.toLowerCase());
        setIsMenuOpen(false);
      }
    }
  };

  return (
    //<Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container className="flex flex-wrap items-center justify-between">
        <Navbar.Brand style={{ color: "#fff" }}>
          <p style={{ color: "#fff", margin: 0 }}>PORTFOLIO</p>
        </Navbar.Brand>
        {/* Responsive toggle for mobile */}
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="d-md-none"
          onClick={() => setIsMenuOpen(true)}
          style={{
            background: "#fff",
            border: "none",
            borderRadius: "0.75rem", // More rectangular, less circular
            boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
            width: "56px", // Wider for rectangular look
            height: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 0,
          }}
        >
          <Menu color="#222" size={28} />
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav" className="d-none d-md-flex">
          <Nav className="ms-auto d-flex flex-wrap align-items-center">
            {navItems.map((item, key) => (
              <Nav.Link
                key={key}
                href={item.href}
                className={activeLink === item.name.toLowerCase() ? 'active navbar-link' : 'navbar-link'}
                onClick={e => handleNavClick(e, item.href, item.name)}
                style={{ color: "#fff" }}
              >
                {item.name}
              </Nav.Link>
            ))}
          </Nav>
          <span className="navbar-text d-flex flex-wrap align-items-center mt-2 mt-md-0">
            <div className="social-icon me-2">
              <a
                href="https://www.linkedin.com/in/wavinya-avril-diamond-a550b5329?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                className="social-icon-link"
              >
                <img src={navIcon1} alt="" />
              </a>
              <a
                href="https://github.com/almasi-y"
                className="social-icon-link"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                  alt="GitHub"
                />
              </a>
              <a
                href="https://www.instagram.com/___.avril?igsh=aGZ0bDJwNTdjN3N4"
                className="social-icon-link"
              >
                <img src={navIcon3} alt="" />
              </a>
            </div>
            <HashLink to='#connect'>
              <button className="vvd"><span>Let’s Connect</span></button>
            </HashLink>
          </span>
        </Navbar.Collapse>
      </Container>
      {/* Mobile Menu Toggle */}
      <div
        className={cn(
          "fixed inset-0 z-40 flex flex-col items-center justify-center",
          "transition-all duration-300 md:hidden",
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
        style={{
          background: "rgba(25, 25, 59, 0.85)",
          backdropFilter: "blur(8px)",
        }}
      >
        <button
          className="absolute top-6 right-6 text-3xl"
          onClick={() => setIsMenuOpen(false)}
          aria-label="Close menu"
          style={{ background: "none", border: "none", color: "#fff" }}
        >
          <X />
        </button>
        <div className="flex flex-col space-y-8 text-2xl font-semibold">
          {navItems.map((item, key) => (
            <button
              key={key}
              onClick={e => handleNavClick(e, item.href, item.name)}
              style={{
                background: "transparent",
                border: "none",
                color: "#fff",
                padding: "0.75rem 2rem",
                borderRadius: "0.75rem",
                cursor: "pointer",
                transition: "background 0.2s, color 0.2s",
                letterSpacing: "0.04em"
              }}
              className="hover:bg-white/10 hover:text-primary focus:outline-none"
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>
      </Navbar>
   // </Router>
  )
}