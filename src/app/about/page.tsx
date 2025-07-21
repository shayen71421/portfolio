'use client';

import { motion } from 'framer-motion';

const skills = [
  {
    category: 'Programming Languages',
    items: ['Java', 'JavaScript', 'Python', 'C', 'C++'],
  },
  {
    category: 'Frontend',
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML5', 'CSS3'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express', 'SpringBoot'],
  },
  {
    category: 'Databases & DevOps',
    items: ['PostgreSQL', 'MongoDB', 'MySQL', 'Docker', 'Apache'],
  },
  {
    category: 'Tools',
    items: ['Git', 'VS Code', 'AWS'],
  },
];

export default function About() {
  return (
    <div className="py-16">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-8">About Me</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              I&apos;m a B.Tech Computer Science student with a passion for AI, ethical technology, and open-source development. I specialize in Java, Python, and web development, focusing on creating innovative and sustainable solutions to real-world problems.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              When I&apos;m not coding, you can find me exploring new technologies,
              contributing to open-source projects, or just doing a Stand-Up.
            </p>
          </div>

          <div className="space-y-8">
            <h2 className="text-2xl font-semibold">Skills</h2>
            <div className="space-y-6">
              {skills.map((skillGroup) => (
                <motion.div
                  key={skillGroup.category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-2"
                >
                  <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                    {skillGroup.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </motion.div>
    </div>
  );
}
