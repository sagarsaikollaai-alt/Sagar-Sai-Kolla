import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { useRef, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 200 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothY, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-10, 10]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      mouseX.set(x);
      mouseY.set(y);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-[#0b0b0b]">
      {/* Noise Overlay */}
      <div className="absolute inset-0 noise-overlay opacity-10 pointer-events-none z-10" />
      
      {/* 3D Floating Orbs */}
      <motion.div 
        style={{ x: useTransform(smoothX, [-0.5, 0.5], [100, -100]), y: useTransform(smoothY, [-0.5, 0.5], [100, -100]) }}
        className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-brightlume-gold/5 rounded-full blur-[120px] pointer-events-none"
      />
      <motion.div 
        style={{ x: useTransform(smoothX, [-0.5, 0.5], [-150, 150]), y: useTransform(smoothY, [-0.5, 0.5], [-150, 150]) }}
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-white/5 rounded-full blur-[150px] pointer-events-none"
      />

      <div className="relative z-20 max-w-[1400px] mx-auto px-8 w-full">
        <motion.div 
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          className="flex flex-col items-start"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4 mb-4"
          >
            <div className="w-12 h-[1px] bg-brightlume-gold" />
            <span className="text-[10px] font-black tracking-[0.5em] text-brightlume-gold uppercase">
              Digital Catalyst
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "circOut" }}
            className="text-[18vw] sm:text-[14vw] lg:text-[12vw] font-display font-black leading-[0.85] tracking-tighter uppercase text-white drop-shadow-2xl"
          >
            Digital <br />
            <span className="text-stroke">Dominance.</span>
          </motion.h1>

          <div className="mt-8 md:mt-12 flex flex-col lg:flex-row items-center lg:items-end justify-between w-full gap-8 lg:gap-12">
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="max-w-xl text-center lg:text-left text-base md:text-xl lg:text-2xl text-white/40 leading-tight font-medium uppercase italic"
            >
              WE ENGINEER HIGH-PERFORMANCE LEAD SYSTEMS <br className="hidden md:block" /> AND BRAND NARRATIVES THAT COMMAND THE MARKET.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
            >
              <button className="group relative px-8 py-8 md:px-12 md:py-12 bg-brightlume-gold rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-500 overflow-hidden">
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                <ArrowRight size={32} className="relative z-10 text-black group-hover:rotate-[-45deg] transition-all md:hidden" />
                <ArrowRight size={48} className="relative z-10 text-black group-hover:rotate-[-45deg] transition-all duration-500 hidden md:block" />
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Large background text with parallax */}
      <motion.div 
        style={{ x: useTransform(smoothX, [-0.5, 0.5], [-50, 50]), y: useTransform(smoothY, [-0.5, 0.5], [-50, 50]) }}
        className="absolute -bottom-20 -right-20 opacity-[0.02] pointer-events-none select-none"
      >
        <span className="text-[40vw] font-black font-display leading-none">STRATEGY</span>
      </motion.div>
    </section>
  );
}
