'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <div className="relative w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden">
          <Image
            src="/IMG_1104r.jpg"
            alt="Shayen Thomas"
            fill
            className="object-cover"
            priority
          />
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-teal-500 dark:from-blue-400 dark:to-teal-300 text-transparent bg-clip-text">
          Shayen Thomas
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          Full Stack Developer & Java Enthusiast
        </p>

        {/* Glassmorphism Social Card */}
        <div className="mx-auto mb-8 w-full max-w-md">
          <div className="backdrop-blur-md bg-white/30 dark:bg-gray-900/30 border border-white/20 dark:border-gray-700/40 rounded-2xl shadow-lg p-6 flex flex-col items-center gap-4">
            <h2 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-100">Let&apos;s Connect </h2>
            <div className="flex flex-wrap justify-center gap-5">
              <a href="mailto:shayen71421@gmail.com" target="_blank" rel="noopener noreferrer" title="Email" className="hover:scale-110 transition-transform">
                <img src="/email.jpg" alt="Email" className="w-8 h-8" />
              </a>
              <a href="https://www.linkedin.com/in/shayen-thomas-b78b02302/" target="_blank" rel="noopener noreferrer" title="LinkedIn" className="hover:scale-110 transition-transform">
                <img src="/linkedin1.jpg" alt="LinkedIn" className="w-8 h-8" />
              </a>
              <a href="https://github.com/shayen71421" target="_blank" rel="noopener noreferrer" title="GitHub" className="hover:scale-110 transition-transform">
                <img src="/github.png" alt="GitHub" className="w-8 h-8" />
              </a>
              <a href="https://www.instagram.com/sh4yen_/" target="_blank" rel="noopener noreferrer" title="Instagram" className="hover:scale-110 transition-transform">
                <img src="/instagram.png" alt="Instagram" className="w-8 h-8" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex gap-4 justify-center">
          <Link
            href="/projects"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            View Projects
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
          >
            Contact Me
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
