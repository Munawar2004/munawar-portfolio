import React from "react";

const skills = [
  {
    category: "Frontend Development",
    technologies: ["React.js", "Redux", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"],
  },
  {
    category: "Backend Development",
    technologies: ["Node.js", "Express.js", "RESTful APIs"],
  },
  {
    category: "Database",
    technologies: ["MongoDB", "Database Design"],
  },
  {
    category: "Tools & Others",
    technologies: ["Git", "Postman", "Canva"],
  },
];

export default function Skills() {
  return (
    <div className="relative py-24 overflow-hidden bg-gradient-to-br from-gray-900 to-black text-white">
      {/* Background Image (Same as About Section) */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80')] bg-cover bg-center"></div>
      </div>

      {/* Animated Blobs (Same as About Section) */}
      <div className="absolute inset-0">
        <div className="absolute w-96 h-96 -top-48 -left-48 bg-pink-500/30 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute w-96 h-96 -top-48 -right-48 bg-purple-500/30 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute w-96 h-96 -bottom-48 -left-48 bg-blue-500/30 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
          Technical Skills
        </h2>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-blue-400 transition-all duration-300 hover:scale-105 hover:rotate-2 hover:shadow-2xl"
            >
              <h3 className="text-xl font-semibold text-blue-400 mb-4">{skill.category}</h3>
              <ul className="space-y-2">
                {skill.technologies.map((tech, techIndex) => (
                  <li key={techIndex} className="text-gray-300 flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-2 group-hover:bg-emerald-400 transition-colors"></div>
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Custom Animations */}
      <style>
        {`
          @keyframes blob {
            0%, 100% {
              transform: translate(0, 0) scale(1);
            }
            25% {
              transform: translate(20px, -20px) scale(1.1);
            }
            50% {
              transform: translate(-20px, 20px) scale(0.9);
            }
            75% {
              transform: translate(-20px, -20px) scale(1.1);
            }
          }
          .animate-blob {
            animation: blob 7s infinite ease-in-out;
          }
          .animation-delay-2000 {
            animation-delay: 2s;
          }
          .animation-delay-4000 {
            animation-delay: 4s;
          }
        `}
      </style>
    </div>
  );
}