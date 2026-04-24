'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, Send, X, Bot, User, Sparkles, Loader2, Minimize2 } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

// Initialize Gemini
const ai = new GoogleGenAI({ apiKey: process.env.NEXT_PUBLIC_GEMINI_API_KEY });

interface Message {
  role: 'user' | 'bot';
  content: string;
}

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { role: 'bot', content: "Hello! I'm your Lumina AI Business Assistant. How can I help you optimize your business today?" }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: [
          { role: 'user', parts: [{ text: userMessage }] }
        ],
        config: {
          systemInstruction: "You are Lumina AI's Business Assistant. You are professional, insightful, and helpful. You provide strategic advice about growth, efficiency, and technology integration. Keep responses concise and formatted for a chat interface.",
        }
      });

      const botResponse = response.text || "I'm sorry, I couldn't process that. Could you rephrase?";
      setMessages(prev => [...prev, { role: 'bot', content: botResponse }]);
    } catch (error) {
      console.error('Gemini Error:', error);
      setMessages(prev => [...prev, { role: 'bot', content: "Our neural links are currently busy. Please try again in a moment." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className={`bg-[#15181D] border border-white/5 shadow-2xl rounded-[2rem] overflow-hidden flex flex-col mb-4 transition-all duration-300 ${
              isMinimized ? 'h-16 w-80' : 'h-[600px] w-[400px]'
            }`}
          >
            {/* Header */}
            <div className="p-4 bg-[#0D0F12] text-white flex items-center justify-between border-b border-white/5">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-sm tracking-tight">Nexus Intel</h3>
                  <div className="flex items-center space-x-1">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-[10px] font-bold text-white/50 uppercase tracking-widest">Neural Link Active</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button 
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="p-1 hover:bg-white/5 rounded-md transition-colors"
                >
                  <Minimize2 className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => { setIsOpen(false); setIsMinimized(false); }}
                  className="p-1 hover:bg-white/5 rounded-md transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {!isMinimized && (
              <>
                {/* Messages */}
                <div className="flex-grow overflow-y-auto p-6 space-y-4">
                  {messages.map((m, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed ${
                        m.role === 'user' 
                          ? 'bg-indigo-600 text-white rounded-tr-none shadow-lg shadow-indigo-600/10' 
                          : 'bg-[#0D0F12] text-gray-300 rounded-tl-none border border-white/5'
                      }`}>
                        {m.content}
                      </div>
                    </motion.div>
                  ))}
                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="bg-[#0D0F12] p-4 rounded-2xl rounded-tl-none border border-white/5 flex items-center space-x-2">
                        <Loader2 className="w-4 h-4 animate-spin text-gray-500" />
                        <span className="text-xs font-medium text-gray-500 italic">Processing neural links...</span>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {/* Input */}
                <div className="p-4 bg-[#0D0F12] border-t border-white/5">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Ask nexus..."
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                      className="w-full bg-[#15181D] border border-white/10 rounded-xl px-6 py-3 pr-14 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-indigo-600 transition-all"
                    />
                    <button
                      onClick={handleSend}
                      disabled={!input.trim() || isLoading}
                      className="absolute right-2 top-1.5 w-10 h-10 bg-indigo-600 text-white rounded-lg flex items-center justify-center hover:bg-indigo-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed group"
                    >
                      <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </button>
                  </div>
                  <div className="mt-4 flex justify-center">
                    <span className="text-[9px] font-bold text-gray-500 uppercase tracking-widest flex items-center space-x-1">
                      <span>Nexus Protocol</span>
                      <Bot className="w-3 h-3" />
                      <span>v2.4 Engine</span>
                    </span>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => {
          setIsOpen(!isOpen);
          setIsMinimized(false);
        }}
        className={`w-16 h-16 rounded-full flex items-center justify-center shadow-xl transition-all duration-500 hover:scale-110 active:scale-95 ${
          isOpen ? 'bg-white text-black rotate-90 scale-0' : 'bg-black text-white'
        }`}
      >
        <MessageCircle className="w-8 h-8" />
      </button>

      {isOpen && (
        <button
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 -z-10 bg-transparent md:hidden"
        />
      )}
    </div>
  );
}
