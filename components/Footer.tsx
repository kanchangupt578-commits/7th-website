'use client';

import { Sparkles, Twitter, Linkedin, Github, Instagram } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Product',
      links: [
        { name: 'Features', href: '#' },
        { name: 'Integrations', href: '#' },
        { name: 'Enterprise', href: '#' },
        { name: 'Solutions', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '#about' },
        { name: 'Careers', href: '#' },
        { name: 'Blog', href: '#' },
        { name: 'Press', href: '#' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Documentation', href: '#' },
        { name: 'Help Center', href: '#' },
        { name: 'Community', href: '#' },
        { name: 'Privacy', href: '#' },
      ],
    },
  ];

  return (
    <footer className="bg-[#0D0F12] pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-20">
          <div className="col-span-2">
            <Link href="#" className="flex items-center space-x-2 mb-8">
              <div className="w-8 h-8 bg-gradient-to-tr from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Sparkles className="text-white w-5 h-5" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white uppercase tracking-tighter">NexusAI</span>
            </Link>
            <p className="text-gray-400 max-w-xs leading-relaxed mb-8 text-sm">
              The modern stack for AI innovators. Built with precision, deployed globally, secured by Nexus.
            </p>
            <div className="flex space-x-4">
              {[Twitter, Linkedin, Github, Instagram].map((Icon, i) => (
                <button key={i} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-500 hover:text-white hover:border-white transition-all">
                  <Icon className="w-5 h-5" />
                </button>
              ))}
            </div>
          </div>

          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-xs font-black uppercase tracking-[0.2em] text-white mb-6">
                {section.title}
              </h4>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-sm text-gray-400 hover:text-indigo-400 transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/5 pt-12 text-xs text-gray-500">
          <div className="flex gap-6 mb-4 md:mb-0">
            <span>&copy; {currentYear} NexusAI Systems Inc.</span>
            <Link href="#" className="hover:text-white">Privacy Policy</Link>
            <Link href="#" className="hover:text-white">Documentation</Link>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex -space-x-2">
              <div className="w-6 h-6 rounded-full bg-gray-700 border-2 border-[#0D0F12]"></div>
              <div className="w-6 h-6 rounded-full bg-indigo-700 border-2 border-[#0D0F12]"></div>
              <div className="w-6 h-6 rounded-full bg-purple-700 border-2 border-[#0D0F12]"></div>
            </div>
            <span>Trusted by 4,000+ teams worldwide</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
