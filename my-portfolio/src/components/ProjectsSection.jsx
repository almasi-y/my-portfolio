import ProjectCard from './ProjectCard';
export default function ProjectsSection() {
  const projects = [
    {
      title: 'Portfolio Website',
      description: 'A modern personal portfolio built with React and Tailwind CSS.',
      tech: ['React', 'Tailwind CSS'],
      live: 'https://your-live-link.com',
      github: 'https://github.com/almasi-y/portfolio'
    },
    {
      title: 'Task Tracker',
      description: 'A to-do app with CRUD features.',
      tech: ['React', 'CSS', 'LocalStorage'],
      live: 'https://task-tracker-demo.com',
      github: 'https://github.com/almasi-y/task-tracker'
    },
    {
      title: 'Student Registration System',
      description: 'A Laravel-based app with exam simulator and grading system.',
      tech: ['Laravel', 'MySQL', 'Tailwind CSS'],
      live: 'https://student-reg-system-demo.com',
      github: 'https://github.com/almasi-y/student-registration-system'
    }
  ];
  return (
    <main className="bg-black text-[#a98274]">
      <section id="projects" className="py-20 px-4 bg-black-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#a98274] mb-6 text-center">Projects</h2>
          <div className="grid gap-8 md:grid-cols-2 text-[#a98274]">
            {projects.map(p => (
              <ProjectCard
                key={p.title}
                title={p.title}
                description={p.description}
                tech={p.tech.join(', ')}
                live={p.live}
                github={p.github}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}