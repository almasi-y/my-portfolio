export default function ProjectCard({ title, description, tech, github, live }) {
  return (
    <div className="border rounded-2xl shadow-md p-6 bg-green hover:shadow-lg transition">
      <h3 className="text-xl font-semiboldtext-[#a98274] mb-2">{title}</h3>
      <p className="text-white-100 mb-2">{description}</p>
      <p className="text-sm text-white-500 mb-4">Technologies: {tech}</p>
      <div className="flex space-x-4">
        {github && (
          <a href={github} target="_blank" rel="noopener noreferrer" className="text-[#a98274] underline">
            GitHub
          </a>
        )}
        {live && (
          <a href={live} target="_blank" rel="noopener noreferrer" className="text-[#a98274] underline">
            Live Site
          </a>
        )}
      </div>
    </div>
  );
}