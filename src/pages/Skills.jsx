export default function Skills() {
  const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS', 'Git', 'GitHub', 'REST APIs'];
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold text-green-700 mb-4">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {skills.map(skill => (
          <span key={skill} className="bg-green-100 px-3 py-1 rounded-full text-green-800 text-center">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}