import { useState } from 'react';
import { motion } from 'motion/react';
import { Send, Instagram, Youtube, Linkedin } from 'lucide-react';

const LIQUID_TRANSITION = { duration: 0.8, ease: [0.16, 1, 0.3, 1] };

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  return (
    <section id="contact" className="py-32 px-8 bg-[#0B0B0B] text-white bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-opacity-5 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-32 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={LIQUID_TRANSITION}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-1 bg-brightlume-gold" />
                <span className="text-[10px] font-black tracking-[0.5em] text-brightlume-gold uppercase">Connect</span>
              </div>
              
              <h2 className="text-4xl sm:text-5xl md:text-[5vw] xl:text-[4vw] font-black font-display uppercase leading-[0.8] tracking-tighter mb-12 max-w-2xl">
                SCALE <br /> YOUR <br /><span className="text-brightlume-gold">DOMINANCE.</span>
              </h2>

              <div className="grid sm:grid-cols-2 gap-x-12 gap-y-12 text-sm font-black uppercase tracking-[0.2em]">
                <div>
                  <h4 className="text-white/30 mb-2">Headquarters</h4>
                  <a 
                    href="https://share.google/UFlUr38QJqV3itO4r" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="leading-relaxed hover:text-brightlume-gold transition-colors"
                  >
                    H, No. 7-1-28/12/1, 1st floor<br />
                    above Naturals, Lal Bungalow,<br />
                    Ameerpet, Hyderabad,<br />
                    Telangana 500016
                  </a>
                </div>
                <div>
                  <h4 className="text-white/30 mb-2">Direct Line</h4>
                  <div className="space-y-4">
                    <div className="flex flex-col gap-1">
                      <a href="tel:+916303645689" className="hover:text-brightlume-gold transition-colors">+91 63036 45689</a>
                      <a href="https://wa.me/916303645689" target="_blank" rel="noopener noreferrer" className="text-[10px] text-green-500 hover:text-green-400">WhatsApp</a>
                    </div>
                    <div className="flex flex-col gap-1">
                      <a href="tel:+917286042944" className="hover:text-brightlume-gold transition-colors">+91 72860 42944</a>
                      <a href="https://wa.me/917286042944" target="_blank" rel="noopener noreferrer" className="text-[10px] text-green-500 hover:text-green-400">WhatsApp</a>
                    </div>
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <h4 className="text-white/30 mb-2">Inquiries</h4>
                  <a 
                    href="mailto:brightlumedigitalmedia@gmail.com" 
                    className="lowercase tracking-normal text-xl md:text-3xl font-display font-black break-words hover:text-brightlume-gold transition-colors"
                  >
                    brightlumedigitalmedia@gmail.com
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={LIQUID_TRANSITION}
            viewport={{ once: true }}
            className="flex flex-col justify-center bg-black p-8 md:p-16 rounded-3xl md:rounded-[40px] text-white border border-white/5"
          >
            {status === 'success' ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={LIQUID_TRANSITION}
                className="text-center py-12"
              >
                <div className="w-20 h-20 bg-brightlume-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Send className="text-brightlume-gold" size={32} />
                </div>
                <h3 className="text-3xl font-display font-black uppercase mb-4">Inquiry Deployed</h3>
                <p className="text-white/60 mb-8 uppercase text-sm font-bold tracking-widest leading-relaxed">
                  We have received your transmission. Our strategists will contact you shortly.
                </p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="text-brightlume-gold font-black uppercase tracking-widest text-xs border-b border-brightlume-gold"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form 
                className="space-y-8 md:space-y-10" 
                onSubmit={async (e) => {
                  e.preventDefault();
                  setStatus('submitting');
                  const form = e.currentTarget;
                  const formData = new FormData(form);
                  
                  try {
                    // Using Formspree - Easiest Way
                    // Note: brightlumedigitalmedia@gmail.com will receive an activation email on first submit if using a new ID
                    const res = await fetch('https://formspree.io/f/xqenprzy', {
                      method: 'POST',
                      body: formData,
                      headers: { 'Accept': 'application/json' }
                    });
                    
                    if (res.ok) {
                      setStatus('success');
                      form.reset();
                    } else {
                      setStatus('error');
                    }
                  } catch (err) {
                    console.error(err);
                    setStatus('error');
                  }
                }}
              >
                <div className="space-y-2 border-b border-white/10 pb-4">
                  <input name="name" type="text" required placeholder="YOUR NAME" className="w-full bg-transparent text-lg md:text-xl font-black uppercase tracking-tighter outline-none placeholder:text-white focus:placeholder:text-white/50 transition-all text-white" />
                </div>
                <div className="space-y-2 border-b border-white/10 pb-4">
                  <input name="email" type="email" required placeholder="YOUR EMAIL" className="w-full bg-transparent text-lg md:text-xl font-black uppercase tracking-tighter outline-none placeholder:text-white focus:placeholder:text-white/50 transition-all text-white" />
                </div>
                <div className="space-y-2 border-b border-white/10 pb-4">
                  <textarea name="message" required rows={1} placeholder="YOUR MESSAGE" className="w-full bg-transparent text-lg md:text-xl font-black uppercase tracking-tighter outline-none placeholder:text-white focus:placeholder:text-white/50 transition-all text-white resize-none" />
                </div>
                
                {status === 'error' && (
                  <p className="text-red-500 text-xs font-black uppercase tracking-widest">
                    Transmission failed. Please try again or email us directly.
                  </p>
                )}

                <button 
                  type="submit" 
                  disabled={status === 'submitting'}
                  className="jan-btn w-full py-6 md:py-8 text-lg md:text-xl flex items-center justify-between group bg-brightlume-gold text-black border-none ring-0 disabled:opacity-50"
                >
                  <span>{status === 'submitting' ? 'DEPLOYING...' : 'DEPLOY CAMPAIGN'}</span>
                  <Send size={24} className="group-hover:translate-x-2 transition-transform" />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      <footer className="mt-24 md:mt-40 pt-12 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left">
        <div className="flex items-center gap-4">
          <img src="/logo.png" alt="Brightlume Logo" className="w-8 h-8 md:w-10 md:h-10 object-contain" />
          <span className="text-[10px] font-black tracking-widest text-white uppercase">Brightlume Digital Media © 2026</span>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-8 md:gap-12 text-[10px] font-black tracking-[0.3em] uppercase items-center">
          <a href="https://www.instagram.com/brightlumedigitalmedia/?hl=en" target="_blank" rel="noopener noreferrer" className="hover:text-brightlume-gold transition-colors flex items-center gap-2">
            <Instagram size={14} /> INSTAGRAM
          </a>
          <a href="https://www.linkedin.com/in/sagar-sai-kolla-132162349/" target="_blank" rel="noopener noreferrer" className="hover:text-brightlume-gold transition-colors flex items-center gap-2">
            <Linkedin size={14} /> LINKEDIN
          </a>
        </div>
      </footer>
    </section>
  );
}
