'use client';

import { motion } from 'motion/react';
import { Target, Zap, Shield, Users } from 'lucide-react';

export default function About() {
  const stats = [
    { label: 'Platform Users', value: '500k+' },
    { label: 'Data Points', value: '42B+' },
    { label: 'Uptime', value: '99.99%' },
    { label: 'Happy Clients', value: '2.5k' },
  ];

  const coreValues = [
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Strategic Focus',
      description: 'We align AI precision with your business goals for maximum impact.',
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Agile Innovation',
      description: 'Rapid deployment of cutting-edge tech that stays ahead of trends.',
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Absolute Security',
      description: 'Privacy and data protection are baked into our core architecture.',
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Human Centric',
      description: 'Designing AI that empowers people, not replaces them.',
    },
  ];

  return (
    <section id="about" className="py-32 bg-[#0D0F12] overflow-hidden border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-4 block"
          >
            Our Philosophy
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6"
          >
            Bridges the gap between complex data and <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">clear human insight.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-gray-400 leading-relaxed"
          >
            NexusAI provides high-performance tools for innovators. Connected to GitHub and powered by Netlify for global distribution.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {coreValues.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#15181D] p-8 rounded-2xl border border-white/5 hover:border-indigo-500/30 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-indigo-500/10 text-indigo-400 rounded-xl flex items-center justify-center mb-6 border border-indigo-500/10 group-hover:bg-indigo-500/20">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-4 gap-12 border-t border-white/5 pt-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-5xl font-black text-white mb-2 tracking-tighter">
                {stat.value}
              </div>
              <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
