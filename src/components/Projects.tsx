import React from "react";

const projects = [
  {
    title: "FoodCart",
    description:
      "Full-stack food delivery platform built using the MERN stack. Features restaurant onboarding, menu management, JWT authentication, shopping cart, order tracking, admin approval workflows, and responsive user experience.",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT"],
  },

  {
    title: "Portfolio Website",
    description:
      "Modern responsive portfolio website designed to showcase projects, technical skills, certifications, and professional experience. Features interactive UI, animations, and optimized performance.",
    tech: ["React.js", "Tailwind CSS", "HTML5", "SVG", "JavaScript"],
  },

  {
    title: "AWS Scalable Web Deployment",
    description:
      "Designed and deployed a highly available multi-tier web application on AWS using EC2, Application Load Balancer, Auto Scaling Groups, Route 53, and S3. Implemented secure networking, Linux server administration, Tomcat deployment, MySQL database integration, RabbitMQ messaging, and Memcached caching.",
    tech: [
      "AWS",
      "EC2",
      "ALB",
      "Auto Scaling",
      "Route 53",
      "S3",
      "Linux",
    ],
  },

  {
    title: "CI/CD Pipeline with Jenkins & Docker",
    description:
      "Built an automated CI/CD pipeline that integrates GitHub, Jenkins, Docker, and Kubernetes. Automated code build, testing, Docker image creation, container registry push, and application deployment to Kubernetes clusters, reducing manual deployment efforts.",
    tech: [
      "Jenkins",
      "Docker",
      "Kubernetes",
      "GitHub",
      "CI/CD",
      "Helm",
      "Linux",
    ],
  },

  {
    title: "Infrastructure Automation with Terraform & Ansible",
    description:
      "Automated cloud infrastructure provisioning and server configuration using Terraform and Ansible. Created reusable Infrastructure as Code templates for AWS resources and automated application deployment and configuration management.",
    tech: [
      "Terraform",
      "Ansible",
      "AWS",
      "EC2",
      "Linux",
      "Infrastructure as Code",
    ],
  },
  {
  title: "QuickChat",
  description:
    "Real-time chat application built with the MERN stack, enabling secure one-to-one messaging with instant message delivery using WebSocket communication. Features include user authentication, profile management, online/offline presence tracking, media sharing, chat history, and responsive dark-mode UI. Designed with a scalable backend architecture for handling real-time socket connections and message persistence.",
  tech: [
    "MongoDB",
    "Express.js",
    "React.js",
    "Node.js",
    "Socket.io",
    "WebSockets",
  ],
},
];

export default function Projects() {
  return (
    <div className="relative py-24 overflow-hidden bg-gradient-to-br from-gray-900 to-black text-white">
      {/* Background Image (Same as Technical Skills Section) */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80')] bg-cover bg-center"></div>
      </div>

      {/* Animated Blobs (Same as Technical Skills Section) */}
      <div className="absolute inset-0">
        <div className="absolute w-96 h-96 -top-48 -left-48 bg-pink-500/30 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute w-96 h-96 -top-48 -right-48 bg-purple-500/30 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute w-96 h-96 -bottom-48 -left-48 bg-blue-500/30 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
          Featured Projects
        </h2>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-blue-400 transition-all duration-300 hover:scale-105 hover:rotate-2 hover:shadow-2xl"
            >
              <h3 className="text-2xl font-semibold text-blue-400 mb-4">{project.title}</h3>
              <p className="text-gray-300 mb-6">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-white/10 text-blue-300 rounded-full text-sm border border-blue-500/20 group-hover:bg-emerald-400/10 group-hover:text-emerald-300 group-hover:border-emerald-500/20 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
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