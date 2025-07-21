'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      await emailjs.send(
        'service_r9r72wr', // replace with your EmailJS service ID
        'template_aeby2ng', // replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        'wp6h-PLWQ4vEJV94q' // replace with your EmailJS public key
      );
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="py-16">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-8">Contact Me</h1>
        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg">
          {status === 'success' ? (
            <div className="text-green-600 dark:text-green-400 text-lg font-semibold mb-6">Thank you! Your message has been sent.</div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-60"
              disabled={status === 'sending'}
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
          </form>
          )}
          <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-semibold mb-4">Other Ways to Connect</h2>
            <div className="space-y-2">
              <p className="text-gray-600 dark:text-gray-300">
                Email:{' '}
                <a
                  href="mailto:shayen71421@gmail.com"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  shayen71421@gmail.com
                </a>
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                LinkedIn:{' '}
                <a
                  href="https://www.linkedin.com/in/shayen-thomas-b78b02302/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  linkedin.com/in/shayen-thomas-b78b02302
                </a>
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                GitHub:{' '}
                <a
                  href="https://github.com/shayen71421"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  github.com/shayen71421
                </a>
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Instagram:{' '}
                <a
                  href="https://www.instagram.com/_.shayen_thomas._/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  instagram.com/_.shayen_thomas._/
                </a>
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
