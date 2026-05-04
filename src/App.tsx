/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0b0b0b]">
      <CustomCursor />
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Full width divider quote */}
        <section className="py-24 md:py-40 bg-white text-black overflow-hidden relative">
          <div className="absolute inset-0 noise-overlay opacity-5 pointer-events-none" />
          <div className="max-w-[1400px] mx-auto px-6 md:px-8">
            <h2 className="text-4xl md:text-5xl lg:text-[5vw] font-black font-display uppercase leading-[0.9] tracking-tighter">
              "WE DON'T DO VANITY METRICS. <br />
              <span className="text-brightlume-gold">WE DO PERFORMANCE.</span>"
            </h2>
          </div>
          
          {/* Scrolling ticker */}
          <div className="mt-16 md:mt-24 flex whitespace-nowrap overflow-hidden border-y border-black py-4 md:py-8 bg-black">
            <motion.div 
              animate={{ x: [0, -1000] }}
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
              className="flex"
            >
              {[...Array(20)].map((_, i) => (
                <span key={i} className="text-5xl md:text-9xl font-black font-display text-stroke px-6 md:px-12 uppercase tracking-tighter hover:text-brightlume-gold transition-colors cursor-default">
                  Strategy • Growth • Execution • Data •
                </span>
              ))}
            </motion.div>
          </div>
        </section>

        <Services />
        <Process />
        
        {/* Results / Mission Section */}
        <section id="results" className="py-24 lg:py-40 px-6 md:px-8 bg-black relative overflow-hidden font-sans">
          <div className="absolute top-0 right-0 w-[50vw] h-full bg-brightlume-gold/5 skew-x-[-20deg] translate-x-20" />
          
          <div className="max-w-[1400px] mx-auto flex flex-col lg:grid lg:grid-cols-2 gap-12 md:gap-20 items-center lg:items-end relative z-10">
            <div className="w-full">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-1 bg-brightlume-gold" />
                <span className="text-[10px] font-black tracking-[0.5em] text-brightlume-gold uppercase">Mission</span>
              </div>
              <h3 className="text-5xl md:text-6xl lg:text-[5vw] font-display font-black uppercase leading-[0.85] tracking-tighter">
                TO BUILD THE <br /><span className="text-stroke">GLOBAL BENCHMARK</span> <br /> OF DIGITAL SCALE.
              </h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 w-full">
              <div className="space-y-4 border-l border-white/10 pl-8">
                <div className="text-6xl font-black font-display text-brightlume-gold tracking-tighter">500+</div>
                <p className="text-xs font-black tracking-[0.2em] text-white/30 uppercase leading-relaxed">
                  Qualified leads extracted <br /> across 30-day offensive campaigns.
                </p>
              </div>
              <div className="space-y-4 border-l border-white/10 pl-8">
                <div className="text-6xl font-black font-display text-white tracking-tighter">3X+</div>
                <p className="text-xs font-black tracking-[0.2em] text-white/30 uppercase leading-relaxed">
                  Average return on <br /> digital artillery spend.
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-[1400px] mx-auto relative z-10 mt-20 md:mt-32 pt-12 border-t border-white/5">
            <span className="text-[10px] font-black tracking-[0.5em] text-white/20 uppercase block mb-8 text-center">Sectors We Dominate</span>
            <div className="flex flex-wrap justify-center gap-x-8 md:gap-x-12 gap-y-4 md:gap-y-6 opacity-20 px-6">
              {["Real Estate", "E-Commerce", "B2B SaaS", "Health & Wellness", "FinTech"].map((sector) => (
                <span key={sector} className="text-lg md:text-2xl font-black font-display uppercase tracking-tighter">{sector}</span>
              ))}
            </div>
          </div>
        </section>

        <Contact />
      </main>
    </div>
  );
}

