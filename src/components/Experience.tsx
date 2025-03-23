import React from "react";

// SVG Icons
const WorkIcon = () => (
  <svg
    className="w-7 h-7 text-blue-400"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
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
    className="w-5 h-5 text-green-400 mr-2"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

// Experience Data
const experienceData = [
  {
    company: "LeLafe IT Solutions Private Limited",
    role: "Software Development Intern",
    duration: "Dec 2024 - Present",
    tasks: [
      "Developing full-stack applications using the MERN stack.",
      "Implementing authentication and database integration.",
      "Optimizing API performance and enhancing UI/UX.",
    ],
    link: "https://lelafe.com", // Company website link
  },
];

export default function Experience() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-black text-white py-20 px-6">
      <h2 className="text-5xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
        Work Experience
      </h2>

      {/* Experience List */}
      <div className="w-full max-w-4xl space-y-6">
        {experienceData.map((exp, index) => (
          <div
            key={index}
            className="bg-gray-800 p-8 rounded-lg shadow-xl border border-gray-700"
          >
            {/* Company Name and Duration */}
            <div className="flex justify-between items-center mb-5">
              <div className="flex items-center gap-3">
                <WorkIcon />
                {/* Company Name with Link */}
                <a
                  href={exp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl font-semibold text-blue-400 hover:text-blue-500 transition duration-300 underline"
                >
                  {exp.company}
                </a>
              </div>
              <p className="text-sm text-gray-400">{exp.duration}</p>
            </div>

            {/* Job Role */}
            <h3 className="text-3xl font-semibold text-white mb-4">
              {exp.role}
            </h3>

            {/* Experience Details */}
            <ul className="space-y-3 text-gray-300 text-lg">
              {exp.tasks.map((task, taskIndex) => (
                <li key={taskIndex} className="flex items-start">
                  <CheckIcon />
                  {task}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
