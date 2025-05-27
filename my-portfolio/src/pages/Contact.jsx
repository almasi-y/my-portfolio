import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

export default function Contact() {
  return (
    <div className="p-8 text-center">
      <h2 className="text-2xl font-bold text-green-700 mb-4">Contact Me</h2>
      <p className="text-gray-600 mb-4">Feel free to connect with me on the platforms below:</p>
      <div className="flex justify-center space-x-6 text-3xl text-green-600">
        <a href="https://github.com/almasi-y" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://linkedin.com/in/almasi-y" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="https://instagram.com/almasi.y" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
      </div>
    </div>
  );
}
