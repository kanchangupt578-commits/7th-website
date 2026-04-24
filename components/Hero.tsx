'use client';

import { motion } from 'motion/react';
import { ArrowRight, Play, Star } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -z-10 w-1/3 h-1/2 bg-gradient-to-br from-indigo-50 to-transparent rounded-bl-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 -z-10 w-1/4 h-1/4 bg-gradient-to-tr from-blue-50 to-transparent rounded-tr-full blur-3xl opacity-50" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="inline-flex items-center space-x-2 bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 rounded-full mb-6">
              <Star className="w-4 h-4 text-indigo-400 fill-indigo-400" />
              <span className="text-xs font-semibold text-indigo-400 uppercase tracking-widest text-[10px]">
                Powered by Advanced Intelligence
              </span>
            </div>

            <h1 className="text-6xl md:text-7xl font-extrabold text-white leading-[1.1] mb-8">
              Build, Deploy, <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Scale Seamlessly.</span>
            </h1>

            <p className="text-xl text-gray-400 mb-10 max-w-lg leading-relaxed">
              The modern stack for AI innovators. Connected to GitHub, powered by Netlify, and optimized for global performance. Ship faster than ever before.
            </p>

            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="group w-full sm:w-auto bg-indigo-600 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center space-x-3 hover:bg-indigo-500 transition-all">
                <span>Deploy Now</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="group w-full sm:w-auto px-8 py-4 rounded-xl font-bold flex items-center justify-center space-x-3 bg-white/5 hover:bg-white/10 transition-all border border-white/10">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/5 group-hover:scale-110 transition-transform text-white">
                  <Play className="w-4 h-4 fill-white" />
                </div>
                <span className="text-white">Watch Demo</span>
              </button>
            </div>

            <div className="mt-12 flex items-center space-x-6">
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white">99.9%</span>
                <span className="text-xs uppercase tracking-widest text-gray-500">Uptime SLA</span>
              </div>
              <div className="h-10 w-px bg-white/10"></div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white">250ms</span>
                <span className="text-xs uppercase tracking-widest text-gray-500">Global Edge</span>
              </div>
              <div className="h-10 w-px bg-white/10"></div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white">1.2k+</span>
                <span className="text-xs uppercase tracking-widest text-gray-500">Reviews</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square md:aspect-[4/5] rounded-[2rem] overflow-hidden border border-white/5 shadow-2xl">
              <Image
                src="https://picsum.photos/seed/cyber/800/1000"
                alt="Modern Tech"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0B0D] via-transparent to-transparent" />
              
              {/* Floating Stats Card */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="absolute bottom-8 left-8 right-8 bg-[#15181D]/90 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-xl"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-3xl font-bold text-white leading-none">NexusAI</div>
                    <div className="text-sm text-gray-500 mt-1 uppercase tracking-widest font-bold text-[10px]">Cloud Infrastructure</div>
                  </div>
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-[#15181D] overflow-hidden">
                        <Image
                          src={`https://picsum.photos/seed/${i + 15}/100/100`}
                          alt="User"
                          width={40}
                          height={40}
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Decorative Dots */}
            <div className="absolute -top-6 -right-6 w-32 h-32 grid grid-cols-4 gap-2 opacity-10">
              {Array.from({ length: 16 }).map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 bg-indigo-500 rounded-full" />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
