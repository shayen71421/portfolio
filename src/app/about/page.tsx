'use client';

import { motion } from 'framer-motion';

const skills = [
  { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
  { category: 'Backend', items: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB'] },
  { category: 'Tools', items: ['Git', 'VS Code', 'Docker', 'AWS'] },
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
            <h2 className="text-2xl font-semibold">Background</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              I'm a passionate Full Stack Developer with a focus on creating beautiful,
              functional, and user-friendly applications. With several years of
              experience in web development, I enjoy turning complex problems into
              simple, elegant solutions.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or sharing my knowledge through
              technical writing and mentoring.
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
