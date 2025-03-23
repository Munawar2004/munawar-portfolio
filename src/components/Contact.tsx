import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const email = "munawarbhat2004@email.com"; 

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 to-gray-900 text-white flex flex-col justify-between relative overflow-hidden">
      {/* Lightning Effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="lightning-bolt"></div>
        <div className="lightning-bolt delay-1"></div>
        <div className="lightning-bolt delay-2"></div>
      </div>

      {/* Main Content */}
      <div className="flex-grow flex items-center justify-center relative z-10">
        {/* Square Container */}
        <div className="w-96 h-96 bg-gray-800/50 border border-gray-700 rounded-lg shadow-lg flex flex-col items-center justify-center p-8">
          {/* Get In Touch Heading */}
          <h2 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
            Get In Touch
          </h2>

          {/* Email and LinkedIn Buttons */}
          <div className="space-y-4">
            {/* Email Button */}
            <motion.a
              href={`mailto:${email}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="block w-64 px-6 py-3 text-center text-lg font-semibold text-white bg-blue-500 hover:bg-blue-600 rounded-lg transition-all duration-300"
            >
              Send Email
            </motion.a>

            {/* LinkedIn Button */}
            <motion.a
              href="https://www.linkedin.com/in/munawar-bhat-701535236/" 
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="block w-64 px-6 py-3 text-center text-lg font-semibold text-white bg-blue-500 hover:bg-blue-600 rounded-lg transition-all duration-300"
            >
              LinkedIn
            </motion.a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-4 text-center relative z-10">
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Made by Munawar. All rights reserved.
        </p>
      </footer>

      {/* Lightning Effect CSS */}
      <style jsx>{`
        .lightning-bolt {
          position: absolute;
          width: 2px;
          height: 100%;
          background: linear-gradient(
            to bottom,
            rgba(255, 255, 255, 0),
            rgba(255, 255, 255, 0.8),
            rgba(255, 255, 255, 0)
          );
          animation: lightning 2s infinite;
          opacity: 0;
        }

        .lightning-bolt.delay-1 {
          left: 20%;
          animation-delay: 0.5s;
        }

        .lightning-bolt.delay-2 {
          left: 80%;
          animation-delay: 1s;
        }

        @keyframes lightning {
          0% {
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          20% {
            opacity: 0;
          }
          100% {
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}