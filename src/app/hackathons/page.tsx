'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const hackathons = [
  //{
  //  name: 'Demo Hackathon Project',
  //  description: 'A hackathon entry with all three links: GitHub, LinkedIn, and Live Demo.',
  //  achievement: '🏅 Demo Award',
   // image: '/hackathon1-placeholder.svg',
  //  technologies: ['React', 'Node.js', 'Socket.io'],
  //  githubUrl: 'https://github.com/yourusername/demo-hackathon',
   // linkedinUrl: 'https://linkedin.com/in/yourusername',
   // liveUrl: 'https://demo-hackathon.example.com',
   // date: 'July 2025',
 // },
  
 {
     name: 'ICTAK Techathlon 2024-25',
  description: 'Participated in the month-long Techathlon 2024-25, hosted by ICT Academy of Kerala at Infopark, Koratty. The competition brought together 50+ teams to solve real-world challenges through three evaluation rounds.',
  achievement: '2nd Runner-up',
  image: '/ictak-techathlon-2024-25.jpg',
  technologies: ['Flask', 'JavaScript', 'Pandas'],
  githubUrl: 'https://github.com/shayen71421/fyugp',
  linkedinUrl: '',
  date: 'April 5, 2025',
  }, 

  {
    name: 'War Room (Hack@Arch 3.0)',
  description: 'Participated in a 16-hour startup simulation tackling business challenges at Government Engineering College, Thrissur.',
  achievement: 'Finalist',
  image: '/war room hackathon.jpg',
    technologies: ['Python', 'Javascript', 'GoogleAuth'],
    linkedinUrl: 'https://www.linkedin.com/posts/shayen-thomas-b78b02302_an-unforgettable-experience-at-war-room-activity-7306367783297024000-QBEl?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE1n-AwBNoFAOtHZgvoDgIAbrsBwV1VSBWQ',
    date: 'March 2025',
  },
  {
     name: 'Useless Projects 2024',
  description: 'Participated in a 24-hour makeathon conducted by TinkerHub at Sahrdaya College of Engineering & Technology, Kodakara.',
  achievement: 'Project was shorlisted in the top 150 out of 800+ projects.',
  image: '/Useless Projects.png',
    technologies: ['Javascript', 'Web Speech API', 'GeoLocation API'],
    githubUrl: 'https://github.com/shayen71421/sNARKnAV',
    date: 'November 2024',
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
