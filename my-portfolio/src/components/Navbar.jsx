import { useState, useEffect } from 'react';

const links = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' }
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <nav className={`fixed w-full z-50 flex justify-between items-center px-4 md:px-10 lg:px-16 py-4 md:py-6 transition-all duration-700 ${
        scrolled ? 'shadow-2xl' : ''
      } bg-[#a98274]`}>
        <h1 className="text-xl md:text-2xl font-bold text-white tracking-tight font-sans select-none uppercase">
          Portfolio
        </h1>
        {/* Hamburger menu for small screens */}
        <button
          className="md:hidden text-white text-3xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          ☰
        </button>
        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-4 lg:space-x-8">
          {links.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-white font-semibold text-lg px-3 lg:px-4 py-2 rounded-xl hover:bg-white hover:text-[#a98274] transition border border-white"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      {/* Mobile menu */}
      {menuOpen && (
        <div className="fixed top-20 left-0 w-full bg-[#a98274] z-40 flex flex-col items-center md:hidden shadow-2xl">
          <ul className="w-full flex flex-col items-center space-y-2 py-4">
            {links.map(link => (
              <li key={link.href} className="w-full">
                <a
                  href={link.href}
                  className="block w-full text-white font-semibold text-lg px-4 py-3 rounded-xl hover:bg-white hover:text-[#a98274] transition border border-white text-center"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
      {/* Spacer for fixed navbar */}
      <div className="h-20 md:h-26"></div>
    </>
  );
}
