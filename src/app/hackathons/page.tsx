'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
type Hackathon = {
  name: string;
  description: string;
  achievement: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  linkedinUrl?: string;
  liveUrl?: string;
  date: string;
};

const hackathons: Hackathon[] = [
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
  name: 'VITALS 24 (INFINIA 2.0)',
  description: 'Built an AI-powered deepfake-detection solution in 24 hours and secured 2nd Runner-Up among 271+ teams at VITALS 24, showcasing innovation and teamwork under pressure.',
  achievement: '🥈 2nd Runner-Up — VITALS 24',
  image: '/vitals.jpg',
  technologies: ['YOLOv3', 'PyTorch', 'OpenCV', 'React'],
  date: 'November 2025',
},
  
 {
     name: 'ICTAK Techathlon 2024-25',
  description: 'Participated in the month-long Techathlon 2024-25, hosted by ICT Academy of Kerala at Infopark, Koratty. The competition brought together 50+ teams to solve real-world challenges through three evaluation rounds.',
  achievement: '2nd Runner-up',
  image: '/ictak-techathlon-2024-25.jpg',
  technologies: ['Real World Problem Tackling', 'Project Management', 'Project Management'],
  githubUrl: 'https://github.com/shayen71421/fyugp',
  linkedinUrl: 'https://www.linkedin.com/posts/shayen-thomas_honoured-to-be-recognised-as-second-runner-up-ugcPost-7367222807216214016-neZS?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE1n-AwBNoFAOtHZgvoDgIAbrsBwV1VSBWQ',
  date: 'April 2025',
  }, 

  {
    name: 'War Room (Hack@Arch 3.0)',
  description: 'Participated in a 16-hour startup simulation tackling business challenges at Government Engineering College, Thrissur.',
  achievement: 'Finalist',
  image: '/war room hackathon.jpg',
    technologies: ['Strategic Problem Solving', 'Entrepreneurial Thinking', 'Business Analysis'],
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
  {
   name: 'TechXInfinia Hackathon 2024',
  description: 'Participated in the hackathon as part of TechXInfinia conducted by IEEE Sahrdaya SB, held from 27th September to 29th September, 2024.',
  achievement: 'Runner-up(General Track)',
  image: '/Hackathon.JPG',
  technologies: ["Python","JavaScript","NFC"],
  date: 'September 2024', 
  },
];

import { useState } from 'react';

export default function Hackathons() {
  const [selected, setSelected] = useState<Hackathon | null>(null);
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
            className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
            onClick={() => setSelected(hackathon)}
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

      {/* Modal */}
      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-xl max-w-lg w-full p-0 relative flex flex-col" style={{ maxHeight: '90vh' }}>
            <div className="sticky top-0 z-10 bg-white dark:bg-gray-900 rounded-t-lg p-4 flex justify-end">
              <button
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white text-2xl"
                onClick={() => setSelected(null)}
                aria-label="Close"
              >
                &times;
              </button>
            </div>
            <div className="overflow-y-auto p-6" style={{ maxHeight: 'calc(90vh - 64px)' }}>
              <div className="mb-4">
                <Image
                  src={selected.image}
                  alt={selected.name}
                  width={500}
                  height={300}
                  className="rounded-lg object-cover w-full h-auto"
                />
              </div>
              <h2 className="text-2xl font-bold mb-2">{selected.name}</h2>
              <span className="text-sm text-gray-600 dark:text-gray-400 block mb-2">{selected.date}</span>
              <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">{selected.achievement}</p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{selected.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {selected.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                {selected.githubUrl && (
                  <a
                    href={selected.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 font-medium"
                  >
                    GitHub
                  </a>
                )}
                {selected.linkedinUrl && (
                  <a
                    href={selected.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 hover:text-blue-900 dark:text-blue-300 dark:hover:text-blue-500 font-medium"
                  >
                    LinkedIn
                  </a>
                )}
                {selected.liveUrl && (
                  <a
                    href={selected.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
