import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

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
      className="fixed top-0 left-0 right-0 z-[100] glass-nav"
    >
      <div className="max-w-[1400px] mx-auto flex items-center justify-between px-6 md:px-8 py-4 md:py-5">
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="Brightlume Logo" className="w-8 h-8 md:w-10 md:h-10 object-contain" />
          <div className="flex flex-col leading-none">
            <span className="font-display font-black text-lg md:text-xl tracking-tighter">
              BRIGHTLUME
            </span>
            <span className="text-[8px] md:text-[10px] tracking-[0.3em] text-white/40 font-bold uppercase">DIGITAL MEDIA</span>
          </div>
        </div>
        
        <div className="hidden lg:flex items-center gap-12 text-[11px] font-black tracking-widest uppercase">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-brightlume-gold transition-colors">{link.name}</a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="jan-btn hidden sm:block"
          >
            Start a project
          </button>
          
          <button 
            className="lg:hidden p-2 text-white"
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
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm lg:hidden"
            />
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="relative lg:hidden bg-black border-b border-white/10 overflow-hidden"
            >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-display font-black uppercase tracking-tighter hover:text-brightlume-gold transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <button 
                onClick={() => {
                  setIsOpen(false);
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="jan-btn w-full mt-4"
              >
                Start a project
              </button>
            </div>
          </motion.div>
        </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
