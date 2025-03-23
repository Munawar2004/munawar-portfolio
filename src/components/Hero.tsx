import React from 'react';
import profilePic from "./assets/res.jpeg";

// SVG icons as components
const GithubIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const LinkedinIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} x="2" y="9" width="4" height="12" />
    <circle strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} cx="4" cy="4" r="2" />
  </svg>
);

const MailIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

export default function Hero() {
  return (
    <div
      className="relative h-screen flex items-center justify-center text-white overflow-hidden"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Dark Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      <div className="relative container mx-auto px-6 lg:px-20 flex flex-col md:flex-row items-center">
        {/* Left Side - Details */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
            Munawar Bhat
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Full Stack Developer | MERN Stack
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-6">
            Passionate about building scalable web applications using the MERN Stack.
          </p>
          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-6">
            <a
              href="https://github.com"
              className="transform hover:scale-110 transition-transform"
            >
              <GithubIcon />
            </a>
            <a
              href="https://linkedin.com"
              className="transform hover:scale-110 transition-transform"
            >
              <LinkedinIcon />
            </a>
            <a
              href="mailto:contact@example.com"
              className="transform hover:scale-110 transition-transform"
            >
              <MailIcon />
            </a>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="md:w-1/2 flex justify-center mt-8 md:mt-0 relative z-10">
          <img
            src="/res.jpeg" // Replace with your profile image URL
            alt="Munawar"
            className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover border-4 border-blue-400 shadow-lg bg-white"
          />
        </div>
      </div>
    </div>
  );
}

