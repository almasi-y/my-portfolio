import { useState } from 'react';

export default function SkillsSection() {
  // Assign a percentage to each technical skill
  const technicalSkills = [
    { name: 'HTML', percent: 80 },
    { name: 'CSS', percent: 75 },
    { name: 'JavaScript', percent: 70 },
    { name: 'React', percent: 65 },
    { name: 'Tailwind CSS', percent: 60 },
    { name: 'Git', percent: 70 },
    { name: 'GitHub', percent: 60 },
    { name: 'REST APIs', percent: 50 }
  ];
  const softSkills = [
    'Communication', 'Teamwork', 'Problem Solving', 'Adaptability', 'Creativity', 'Time Management'
  ];

  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <main className="bg-black text-[#a98274]">
      <section id="skills" className="py-20 px-4">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12">
          {/* Technical Skills (Left) */}
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-6 text-left" style={{ color: '#a98274' }}>
              Technical Skills
            </h2>
            <div className="space-y-6">
              {technicalSkills.map(skill => (
                <div key={skill.name} className="mb-2">
                  <div
                    className="mb-2 text-lg font-semibold text-left"
                    style={{
                      color: '#a98274',
                      fontFamily: 'Proxima Nova, sans-serif'
                    }}
                  >
                    {skill.name}
                  </div>
                  <div
                    className="w-full bg-[#e9cfc3] rounded-full h-3 cursor-pointer transition-all duration-500"
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <div
                      className="h-3 rounded-full transition-all duration-700 "
                      style={{
                        width: hoveredSkill === skill.name ? `${Math.min(skill.percent + 10, 100)}%` : `${skill.percent}%`,
                        background: hoveredSkill === skill.name ? '#a98274' : '#a98274cc'
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Soft Skills (Right) */}
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-6 text-left" style={{ color: '#a98274' }}>
              Soft Skills
            </h2>
            <span
              className="flex flex-col gap-4 p-4 rounded-xl"
              style={{
                background: 'transparent',
                fontFamily: 'Proxima Nova, sans-serif'
              }}
            >
              {softSkills.map(skill => (
                <span key={skill} className="relative group w-fit">
                  {/* Button behind */}
                  <span
                    className="absolute left-[-4px] bottom-[-4px] w-full h-full rounded-full z-0 transition-colors duration-300"
                    style={{
                      background: 'white',
                      pointerEvents: 'none'
                    }}
                    aria-hidden="true"
                  />
                  <button
                    className="relative z-10 bg-[#e9cfc3] text-[#a98274] px-4 py-2 rounded-full font-semibold transition-colors duration-300 hover:bg-[#f3f3f3] hover:text-[#a98274] group-hover:shadow-lg"
                    style={{
                      fontFamily: 'Proxima Nova, sans-serif'
                    }}
                    type="button"
                    onMouseEnter={e => {
                      const behind = e.currentTarget.previousSibling;
                      if (behind) behind.style.background = '#f3f3f3';
                    }}
                    onMouseLeave={e => {
                      const behind = e.currentTarget.previousSibling;
                      if (behind) behind.style.background = 'white';
                    }}
                  >
                    {skill}
                  </button>
                </span>
              ))}
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}

