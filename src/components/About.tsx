import React from "react";

// SVG Icons for Each Role
const FullStackIcon = () => (
  <svg className="w-12 h-12 text-blue-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);

const MERNIcon = () => (
  <svg className="w-12 h-12 text-purple-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

const FrontendIcon = () => (
  <svg className="w-12 h-12 text-pink-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const BackendIcon = () => (
  <svg className="w-12 h-12 text-green-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
  </svg>
);

export default function About() {
  return (
    <div id="about" className="relative py-24 overflow-hidden bg-gradient-to-br from-gray-900 to-black text-white">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute w-96 h-96 -top-48 -left-48 bg-pink-500/30 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute w-96 h-96 -top-48 -right-48 bg-purple-500/30 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute w-96 h-96 -bottom-48 -left-48 bg-blue-500/30 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Overview Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400 mb-6">
            Overview
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            As a Computer Science student at Dayananda Sagar, I am passionate about developing innovative software solutions and user-friendly interfaces. I have proficiency in JavaScript, React.js, Node.js, Express.js, MongoDB, EJS, RESTful APIs, C++, Data Structures, HTML, and CSS. I’m a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems. Let’s work together to bring your ideas to life!
          </p>
        </div>

        {/* Roles Section with Icons */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { role: "Full Stack Developer", icon: <FullStackIcon /> },
            { role: "MERN Developer", icon: <MERNIcon /> },
            { role: "Frontend Developer", icon: <FrontendIcon /> },
            { role: "Backend Developer", icon: <BackendIcon /> },
          ].map((item, index) => (
            <div
              key={index}
              className="p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-blue-400 transition-all duration-300 hover:scale-105 flex flex-col items-center text-center"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-blue-400">{item.role}</h3>
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