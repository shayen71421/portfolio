'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const hackathons = [
  {
    name: 'Tech Innovation Hackathon 2025',
    description: 'Built a real-time collaboration platform for remote teams using WebRTC and WebSocket.',
    achievement: '🏆 First Place',
    image: '/hackathon1-placeholder.svg',
    technologies: ['React', 'Node.js', 'WebRTC', 'Socket.io'],
    projectUrl: 'https://github.com/yourusername/hackathon-project1',
    date: 'June 2025',
  },
  {
    name: 'AI/ML Hackfest',
    description: 'Developed an AI-powered personal finance advisor that provides customized budget recommendations.',
    achievement: '🎯 Best Innovation Award',
    image: '/hackathon2-placeholder.svg',
    technologies: ['Python', 'TensorFlow', 'FastAPI', 'MongoDB'],
    projectUrl: 'https://github.com/yourusername/hackathon-project2',
    date: 'March 2025',
  },
];

export default function Hackathons() {
  return (
    <div className="py-16">
      <h1 className="text-4xl font-bold mb-8">Hackathons</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {hackathons.map((hackathon) => (
          <motion.div
            key={hackathon.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="relative h-48">
              <Image
                src={hackathon.image}
                alt={hackathon.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold">{hackathon.name}</h3>
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {hackathon.date}
                </span>
              </div>
              <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">
                {hackathon.achievement}
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {hackathon.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {hackathon.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={hackathon.projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium inline-flex items-center"
              >
                View Project
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
