'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const contactSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email address'),
  company: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    // Simulate API call
    console.log('Form data:', data);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-32 bg-[#0D0F12]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <div>
            <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-4 block">
              Contact Sales
            </span>
            <h2 className="text-5xl font-extrabold tracking-tight text-white mb-8 leading-tight">
              Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">nexus</span> your data?
            </h2>
            <p className="text-lg text-gray-400 mb-12 leading-relaxed">
              Our engineering team is ready to help you architect your next breakthrough. Connected via GitHub, secured by Netlify.
            </p>

            <div className="space-y-6">
              {[
                { icon: <Mail />, label: 'Email', value: 'systems@nexus-ai.com' },
                { icon: <Phone />, label: 'Security Ops', value: '+1 (555) NEXUS-01' },
                { icon: <MapPin />, label: 'Nexus Node', value: 'San Francisco, CA' },
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-6 p-4 rounded-2xl bg-[#15181D] border border-white/5 transition-all hover:border-indigo-500/20 group">
                  <div className="w-12 h-12 bg-indigo-500/10 text-indigo-400 rounded-xl flex items-center justify-center group-hover:bg-indigo-500/20">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-0.5">
                      {item.label}
                    </div>
                    <div className="text-base font-bold text-white">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#15181D] p-10 md:p-12 rounded-3xl border border-white/5 shadow-2xl"
          >
            {submitted ? (
              <div className="text-center py-20">
                <div className="w-20 h-20 bg-indigo-500/10 text-indigo-400 rounded-full flex items-center justify-center mx-auto mb-6 border border-indigo-500/10">
                  <Send className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Nexus Established</h3>
                <p className="text-gray-400">Our team will synchronize with you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Full Name</label>
                    <input
                      {...register('name')}
                      placeholder="Jane Doe"
                      className={`w-full px-6 py-4 bg-[#0A0B0D] border rounded-xl text-white placeholder:text-gray-600 focus:outline-none transition-all ${
                        errors.name ? 'border-red-500/50' : 'border-white/5 focus:border-indigo-600'
                      }`}
                    />
                    {errors.name && <p className="text-[10px] text-red-400 font-bold uppercase tracking-widest">{errors.name.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Email</label>
                    <input
                      {...register('email')}
                      placeholder="jane@company.com"
                      className={`w-full px-6 py-4 bg-[#0A0B0D] border rounded-xl text-white placeholder:text-gray-600 focus:outline-none transition-all ${
                        errors.email ? 'border-red-500/50' : 'border-white/5 focus:border-indigo-600'
                      }`}
                    />
                    {errors.email && <p className="text-[10px] text-red-400 font-bold uppercase tracking-widest">{errors.email.message}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Message</label>
                  <textarea
                    {...register('message')}
                    rows={4}
                    placeholder="Briefly describe your requirements..."
                    className={`w-full px-6 py-4 bg-[#0A0B0D] border rounded-xl text-white placeholder:text-gray-600 focus:outline-none transition-all resize-none ${
                        errors.message ? 'border-red-500/50' : 'border-white/5 focus:border-indigo-600'
                      }`}
                  />
                  {errors.message && <p className="text-[10px] text-red-400 font-bold uppercase tracking-widest">{errors.message.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-indigo-600 text-white font-bold py-5 rounded-xl hover:bg-indigo-500 transition-all shadow-lg shadow-indigo-600/10 flex items-center justify-center space-x-3 disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <span className="uppercase tracking-widest text-xs">Request Nexus Discovery</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
