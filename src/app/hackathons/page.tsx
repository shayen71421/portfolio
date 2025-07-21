'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const hackathons = [
  {
    name: 'Demo Hackathon Project',
    description: 'A hackathon entry with all three links: GitHub, LinkedIn, and Live Demo.',
    achievement: '🏅 Demo Award',
    image: '/hackathon1-placeholder.svg',
    technologies: ['React', 'Node.js', 'Socket.io'],
    githubUrl: 'https://github.com/yourusername/demo-hackathon',
    linkedinUrl: 'https://linkedin.com/in/yourusername',
    liveUrl: 'https://demo-hackathon.example.com',
    date: 'July 2025',
  },
  {
    name: 'Tech Innovation Hackathon 2025',
    description: 'Built a real-time collaboration platform for remote teams using WebRTC and WebSocket.',
    achievement: '🏆 First Place',
    image: '/hackathon1-placeholder.svg',
    technologies: ['React', 'Node.js', 'WebRTC', 'Socket.io'],
    githubUrl: 'https://github.com/yourusername/hackathon-project1',
    linkedinUrl: '',
    date: 'June 2025',
  },
  {
    name: 'AI/ML Hackfest',
    description: 'Developed an AI-powered personal finance advisor that provides customized budget recommendations.',
    achievement: '🎯 Best Innovation Award',
    image: '/hackathon2-placeholder.svg',
    technologies: ['Python', 'TensorFlow', 'FastAPI', 'MongoDB'],
    githubUrl: '',
    linkedinUrl: 'https://linkedin.com/in/yourusername',
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
              <div className="flex gap-4">
                {hackathon.githubUrl && (
                  <a
                    href={hackathon.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 font-medium inline-flex items-center"
                  >
                    GitHub
                  </a>
                )}
                {hackathon.linkedinUrl && (
                  <a
                    href={hackathon.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 hover:text-blue-900 dark:text-blue-300 dark:hover:text-blue-500 font-medium inline-flex items-center"
                  >
                    LinkedIn
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
