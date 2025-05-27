import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 bg-black">
      <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-center text-center md:text-left">
        <div className="flex-1 flex flex-col items-center md:items-start mb-8 md:mb-0">
          <motion.h2
            className="text-4xl font-bold"
            style={{ color: '#4E342E', fontFamily: 'Proxima Nova, sans-serif' }}
            initial={{ y: 0 }}
            animate={{ y: [0, -10, 0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
          >
            About Me
          </motion.h2>
        </div>
        {/* Divider matches text height using self-stretch */}
        <div className="hidden md:block self-stretch w-2 bg-[#4E342E] mx-8 rounded-full" />
        <motion.span
          className="flex-6 flex justify-left relative w-full group"
          initial={{ y: 0 }}
          animate={{ y: [0, -10, 0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        >
          {/* 3D shadow button behind the main button, peeking from bottom and side */}
          <button
            type="button"
            tabIndex={-1}
            aria-hidden="true"
            className="absolute left-[-1rem] bottom-[-1rem] w-full h-full rounded-2xl z-0 transition-colors duration-500 pointer-events-none group-hover:bg-[#e9cfc3]"
            style={{
              background: '#e9cfc3',
              filter: 'blur(2px)',
              boxShadow: '0 12px 32px 0 rgba(32, 16, 16, 0.18)',
              borderRadius: '1rem',
              border: 'none'
            }}
            disabled
          />
          <span
            className="px-10 py-2 rounded-2xl w-full transition-colors duration-500 relative z-10"
            style={{
              background: '#e9cfc3',
              fontFamily: 'Proxima Nova, sans-serif',
              color: '#a98274',
              display: 'block',
              fontWeight: 500,
              minWidth: '340px',
              width: '100%',
              maxWidth: '1200px',
              boxShadow: 'none',
              backdropFilter: 'none',
              border: '1.5px solid rgba(78,52,46,0.18)',
              transform: 'none',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = '#f3f3f3';
              const shadow = e.currentTarget.parentElement.querySelector('button[aria-hidden="true"]');
              if (shadow) shadow.style.background = '#f3f3f3';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = '#e9cfc3';
              const shadow = e.currentTarget.parentElement.querySelector('button[aria-hidden="true"]');
              if (shadow) shadow.style.background = '#e9cfc3';
            }}
          >
            <p className="leading-relaxed text-2xl m-0">
              I’m a passionate front-end developer with experience building responsive and interactive web applications using React and Tailwind CSS. 
              <br />
              I thrive on creating clean, maintainable code and delivering high-quality products that meet user needs.
            </p>
          </span>
        </motion.span>
      </div>
    </section>
  );
}

/*<div className="bg-[#e9cfc3d9] text-[#a98274] px-10 py-2 rounded-2xl font-medium text-2xl leading-relaxed font-sans w-[700px] md:w-[850px] max-w-full text-left">
  <p className="m-0">
    I’m a passionate front-end developer with experience building responsive and interactive web applications using React and Tailwind CSS. I enjoy transforming ideas into user-friendly digital experiences. I thrive on creating clean, maintainable code and delivering high-quality products that meet user needs. Always eager to learn new technologies and push the boundaries of what’s possible on the web.
  </p>
</div>
<div className="flex-1 flex justify-start">
  {/* description container here 
</div>
*/