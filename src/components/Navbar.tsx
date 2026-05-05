import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const LIQUID_TRANSITION = { duration: 0.8, ease: [0.16, 1, 0.3, 1] };

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Arsenal', href: '#services' },
    { name: 'Blueprint', href: '#process' },
    { name: 'Impact', href: '#results' },
    { name: 'Connect', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={LIQUID_TRANSITION}
      className="fixed top-0 left-0 right-0 z-[100] bg-transparent"
    >
      <div className="max-w-[1400px] mx-auto flex items-center justify-between px-6 md:px-8 py-6">
        <div 
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => {
            window.scrollTo(0, 0);
            window.location.reload();
          }}
        >
          <img src="/public/website logo.png" alt="Brightlume Logo" className="w-8 h-8 md:w-12 md:h-12 object-contain" />
          <div className="flex flex-col leading-none">
            <span className="font-display font-black text-xl md:text-2xl tracking-tighter text-brightlume-gold">
              BRIGHTLUME
            </span>
            <span className="text-[8px] md:text-[10px] tracking-[0.3em] text-white/60 font-bold uppercase">DIGITAL MEDIA</span>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <button 
            className="p-3 bg-black/20 backdrop-blur-md rounded-full text-white border border-white/10 hover:bg-brightlume-gold hover:text-black transition-all"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/90 backdrop-blur-xl z-[-1]"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={LIQUID_TRANSITION}
              className="fixed top-0 right-0 h-full w-full sm:w-[500px] bg-black border-l border-white/5 overflow-hidden flex flex-col justify-center p-12 md:p-24"
            >
            <div className="flex flex-col gap-8 md:gap-12">
              <span className="text-[10px] font-black tracking-widest text-brightlume-gold uppercase">Navigation Menu</span>
              {navLinks.map((link, idx) => (
                <motion.a 
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ ...LIQUID_TRANSITION, delay: 0.2 + idx * 0.1 }}
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="text-5xl md:text-7xl font-display font-black uppercase tracking-tighter text-white hover:text-brightlume-gold transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.button 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ ...LIQUID_TRANSITION, delay: 0.6 }}
                onClick={() => {
                  setIsOpen(false);
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="mt-8 px-12 py-6 bg-brightlume-gold text-black font-black uppercase text-xl md:text-2xl tracking-tighter hover:scale-105 transition-transform w-fit"
              >
                Start a project
              </motion.button>
            </div>
            
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-8 right-8 p-4 text-white hover:text-brightlume-gold transition-colors"
            >
              <X size={40} />
            </button>
          </motion.div>
        </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
