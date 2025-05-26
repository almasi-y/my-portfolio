import { StarBackground } from './StarBackground';
import { ThemeToggle } from './ThemeToggle';
import profile from '../assets/profile.jpg';
import { motion } from 'framer-motion';


export default function HomeSection() {
  return (
    <main className="scroll-smooth bg-black dark:bg-black">
      <section
        id="home"
        className="flex flex-col md:flex-row items-center justify-center min-h-[60vh] md:min-h-[65vh] h-auto
          bg-green dark:bg-green-950
          text-[#4E342E] dark:text-[#4E342E]
          text-center md:text-left px-4"
      >
        <ThemeToggle />
        <StarBackground />
        <span className=" flex-1 flex justify-center items-center mb-8 md:mb-0 relative">
          {/* Button behind the image */}
          <motion.button
            type="button"
            tabIndex={-1}
            aria-hidden="true"
            className="absolute left-[174px] bottom-[-14px] w-64 h-full rounded-full z=0"
            style={{
              background: '#4E342E',
              border: 'none',
              pointerEvents: 'none',
               boxShadow: '0 12px 32px 0 rgba(32, 16, 16, 0.18)',
            }}
            disabled
            initial={{ y: 0 }}
            animate={{ y: [0, -8, 0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
          />
          <motion.img
            src={profile}
            alt="Profile"
            className="w-64 h-80 object-cover rounded-full shadow-lg relative z-10"
            initial={{ y: 0 }}
            animate={{ y: [0, -8, 0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
          />
        </span>
        <div className="hidden md:block h-64 w-2 bg-[#4E342E] mx-8 rounded-full" />
        <span className="flex-1 flex flex-col items-center md:items-start">
          <motion.h1
            className="text-5xl font-extrabold mb-2 font-[Recoleta]"
            style={{
              color: '#4E342E',
              textShadow: '0 4px 32px #4E342E55',
              fontFamily: 'Recoleta, serif',
              fontWeight: 700
            }}
            initial={{ y: 0 }}
            animate={{ y: [0, -8, 0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
          >
            Avril Diamond
          </motion.h1>
          <motion.p
            className="text-xl mb-6 font-[Recoleta]"
            style={{
              color: '#4E342E',
              textShadow: '0 2px 12px #4E342E33',
              fontFamily: 'Recoleta, serif',
              fontWeight: 700
            }}
            initial={{ y: 0 }}
            animate={{ y: [0, -8, 0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
          >
            Software Developer | Frontend Specialist
          </motion.p>
          <motion.div
            className="space-x-4"
            initial={{ y: 0 }}
            animate={{ y: [0, -8, 0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
          >
            <a
              href="#projects"
              className="px-6 py-3 bg-[#4E342E] text-white rounded-full shadow hover:bg-[#3E2723] transition font-[Recoleta] font-bold"
            >
              View My Work
            </a>
            <a
              href="/resume.pdf"
              download
              className="px-6 py-3 border-2 border-[#4E342E] text-[#4E342E] rounded-full hover:bg-[#3E2723] hover:text-white dark:hover:bg-gray-800 transition font-[Recoleta] font-bold"
            >
              Download Resume
            </a>
          </motion.div>
        </span>
      </section>
    </main>
  );
}
