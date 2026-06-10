import React from "react";

// SVG Icons
const WorkIcon = () => (
  <svg
    className="w-8 h-8 text-blue-400"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 7h18M9 3h6m-7 3h8m-8 0V2m8 4V2m4 4v10a2 2 0 01-2 2H5a2 2 0 01-2-2V6m4 10v4h10v-4"
    />
  </svg>
);

const CheckIcon = () => (
  <svg
    className="w-5 h-5 text-green-400 mt-1 mr-3 flex-shrink-0"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

// Experience Data
const experienceData = [
  {
    company: "LeLafe IT Solutions",
    role: "Software Development Intern",
    duration: "Dec 2024 – Jun 2025",
    tasks: [
      "Developed a full-stack food delivery platform using MongoDB, Express.js, React.js, and Node.js in an agile team of 3 developers.",
      "Built 40+ RESTful APIs covering user authentication, restaurant registration, menu management, cart operations, and order processing.",
      "Implemented JWT-based authentication and role-based access control for customers, restaurant owners, and administrators.",
      "Designed and integrated MongoDB schemas, improving data organization and application performance.",
      "Collaborated with team members to enhance UI/UX and optimize backend API response times.",
    ],
    link: "https://lelafe.com",
  },
];

export default function Experience() {
  return (
    <div className="relative py-24 overflow-hidden bg-gradient-to-br from-gray-900 to-black text-white">
      
      {/* Background Blobs */}
      <div className="absolute inset-0">
        <div className="absolute w-96 h-96 -top-48 -left-48 bg-pink-500/20 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute w-96 h-96 -top-48 -right-48 bg-purple-500/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute w-96 h-96 -bottom-48 -left-48 bg-blue-500/20 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 relative z-10">
        
        {/* Section Heading */}
        <h2 className="text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
          Work Experience
        </h2>

        {/* Experience Cards */}
        {experienceData.map((exp, index) => (
          <div
            key={index}
            className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-blue-400 hover:shadow-2xl transition-all duration-300"
          >
            {/* Company + Duration */}
            <div className="flex items-start gap-4 mb-6">
  <div className="mt-1 flex-shrink-0">
    <WorkIcon />
  </div>

  <div className="flex-1">
    <div className="flex justify-between items-start gap-2">
      <a
        href={exp.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-lg md:text-2xl font-bold text-blue-400 hover:text-emerald-400 transition-colors"
      >
        {exp.company}
      </a>

      <span className="text-xs md:text-sm text-gray-300 bg-blue-500/10 border border-blue-500/30 px-3 py-1 rounded-full whitespace-nowrap flex-shrink-0">
        {exp.duration}
      </span>
    </div>

    <h3 className="text-lg md:text-xl font-semibold text-white mt-3">
      {exp.role}
    </h3>
  </div>
</div>

            {/* Responsibilities */}
            <ul className="space-y-4">
              {exp.tasks.map((task, taskIndex) => (
                <li
                  key={taskIndex}
                  className="flex items-start text-gray-300 leading-relaxed"
                >
                  <CheckIcon />
                  <span>{task}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Animations */}
      <style>
        {`
          @keyframes blob {
            0%,100% {
              transform: translate(0,0) scale(1);
            }
            25% {
              transform: translate(20px,-20px) scale(1.1);
            }
            50% {
              transform: translate(-20px,20px) scale(0.9);
            }
            75% {
              transform: translate(-20px,-20px) scale(1.1);
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