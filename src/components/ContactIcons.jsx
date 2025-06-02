import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

export default function ContactIcons() {
  return (
    <div className="flex space-x-6 text-2xl text-white justify-center mt-6 bg-white">
      <a href="https://github.com/almasi-y" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
      <a href="https://linkedin.com/in/YOUR-LINKEDIN" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
      <a href="https://instagram.com/YOUR-INSTAGRAM" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
    </div>
  );
}