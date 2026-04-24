'use client';

import { motion } from 'motion/react';
import { Layers, Cpu, Globe, BarChart, MessageSquare, Code, ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function Services() {
  const services = [
    {
      icon: <Cpu className="w-8 h-8" />,
      title: 'AI Integration',
      desc: 'Seamlessly embed machine learning models into your existing workflows.',
      color: 'bg-blue-500',
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: 'Modern Architecture',
      desc: 'Scaleable cloud infrastructures designed for high-concurrency demands.',
      color: 'bg-indigo-500',
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Global Analytics',
      desc: 'Real-time data processing across all your international endpoints.',
      color: 'bg-emerald-500',
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: 'Natural Language',
      desc: 'Custom trained LLMs for superior customer engagement and support.',
      color: 'bg-amber-500',
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      title: 'Predictive ROI',
      desc: 'Advanced forecasting to optimize your budget and resource allocation.',
      color: 'bg-rose-500',
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Custom SDKs',
      desc: 'Developer-first tools to build your own proprietary AI applications.',
      color: 'bg-violet-500',
    },
  ];

  return (
    <section id="services" className="py-32 bg-[#0A0B0D]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
          <div className="max-w-2xl mb-8 md:mb-0">
            <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-4 block">
              Platform Modules
            </span>
            <h2 className="text-5xl font-extrabold tracking-tight text-white leading-tight">
              Scale faster than <br /> the speed of thought
            </h2>
          </div>
          <button className="text-sm font-bold border-b border-indigo-400 pb-1 text-indigo-400 hover:text-indigo-300 hover:border-indigo-300 transition-colors">
            All Solutions &rarr;
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-[#15181D] p-10 border border-white/5 rounded-2xl hover:border-indigo-500/30 transition-all group flex flex-col items-start"
            >
              <div className={`mb-8 p-4 rounded-xl bg-indigo-500/10 text-white group-hover:scale-110 transition-transform flex items-center justify-center`}>
                <div className={`text-indigo-400`}>
                  {service.icon}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed mb-8 flex-grow">
                {service.desc}
              </p>
              <button className="flex items-center space-x-2 text-xs font-black uppercase tracking-widest text-indigo-400 opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                <span>View Details</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>

        {/* Featured Service Spotlight */}
        <div className="mt-32 relative rounded-[3rem] overflow-hidden bg-[#0D0F12] border border-white/5 p-12 md:p-24 shadow-2xl">
          <div className="absolute inset-0 opacity-20">
            <Image
              src="https://picsum.photos/seed/matrix/1920/1080"
              alt="Feature Background"
              fill
              className="object-cover grayscale"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-indigo-500/10 border border-indigo-500/20 px-4 py-1 rounded-full text-[10px] font-bold text-indigo-400 uppercase tracking-widest mb-6">
                Premium Ecosystem
              </div>
              <h2 className="text-4xl md:text-6xl font-extrabold leading-tight mb-8 text-white">
                GitHub Sync & <br/> Edge Deployment
              </h2>
              <p className="text-lg text-gray-400 mb-10 leading-relaxed">
                Connect your repository and deploy globally in seconds. Our automated CI/CD pipeline is optimized for high-performance AI applications.
              </p>
              <div className="flex gap-4">
                <button className="bg-indigo-600 text-white px-10 py-5 rounded-xl font-bold uppercase text-xs tracking-widest hover:bg-indigo-500 transition-colors shadow-lg shadow-indigo-500/20">
                  Deploy Now
                </button>
                <button className="bg-white/5 border border-white/10 text-white px-10 py-5 rounded-xl font-bold uppercase text-xs tracking-widest hover:bg-white/10 transition-colors">
                  Read Docs
                </button>
              </div>
            </div>
            <div className="hidden lg:block relative aspect-square bg-indigo-500/5 backdrop-blur-2xl rounded-full border border-white/5">
              <div className="absolute inset-8 rounded-full border border-indigo-500/10 animate-spin-slow" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 bg-indigo-600/20 rounded-full flex items-center justify-center border border-indigo-500/20">
                  <Globe className="w-16 h-16 text-indigo-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Sparkles({ className }: { className?: string }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
      <path d="M5 3v4" />
      <path d="M19 17v4" />
      <path d="M3 5h4" />
      <path d="M17 19h4" />
    </svg>
  );
}
