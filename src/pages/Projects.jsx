
export default function Projects() {
  const projects = [
    {
      name: 'Portfolio Website',
      description: 'A modern personal portfolio built with React and Tailwind CSS.',
      tech: ['React', 'Tailwind CSS'],
      live: 'https://your-live-link.com',
      github: 'https://github.com/almasi-y/portfolio'
    },
    {
      name: 'Task Tracker',
      description: 'A to-do app with CRUD features.',
      tech: ['React', 'CSS', 'LocalStorage'],
      live: 'https://task-tracker-demo.com',
      github: 'https://github.com/almasi-y/task-tracker'
    }
  ];

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold text-green-700 mb-4">Projects</h2>
      <div className="grid gap-6">
        {projects.map(project => (
          <div key={project.name} className="bg-white p-4 rounded shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold text-green-800">{project.name}</h3>
            <p className="text-gray-700 mb-2">{project.description}</p>
            <p className="text-sm text-gray-600 mb-2">Technologies: {project.tech.join(', ')}</p>
            <a href={project.live} className="text-green-600 underline mr-2" target="_blank" rel="noopener noreferrer">Live</a>
            <a href={project.github} className="text-green-600 underline" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        ))}
      </div>
    </div>
  );
}