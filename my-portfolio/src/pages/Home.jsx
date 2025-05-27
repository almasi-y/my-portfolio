import profile from '../assets/profile.jpg'; // Add your image to assets/
import { StarBackground } from '../components/StarBackground';
import { ThemeToggle } from '../components/ThemeToggle';

export default function Home() {
  return (
    <section
      className="flex flex-col items-center justify-center h-screen text-center p-4
        bg-gray-100 dark:bg-gradient-to-br dark:from-green-950 dark:via-green-900 dark:to-black
        text-gray-900 dark:text-gray-100 overflow-x-hidden"
    >
      <ThemeToggle />
      <StarBackground />
      <img src={profile} alt="Profile" className="w-40 h-40 rounded-full shadow-lg mb-4" />
      <h1 className="text-4xl font-extrabold text-green-900 dark:text-green-400">Avril Diamond</h1>
      <p className="text-lg text-green-900 dark:text-green-200 mt-2"> Software Developer | Frontend Specialist </p>

      <div className="mt-6 space-x-4">
        <a
          href="#projects"
          className="px-5 py-2 bg-green-800 text-white rounded-full shadow hover:bg-green-900 transition"
        >
          View My Work
        </a>
        <a
          href="/resume.pdf"
          download
          className="px-5 py-2 border border-green-600 text-green-100 rounded-full hover:bg-green-900 hover:text-white transition"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}
