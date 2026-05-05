import { motion, AnimatePresence } from 'motion/react';
import { Target, TrendingUp, Video, Zap, Cpu, Search, Share2, MessageSquare, X, Send } from 'lucide-react';
import { useState } from 'react';

const services = [
  {
    id: "branding",
    title: "Strategic Branding",
    desc: "We engineer market-leading identities that command authority. From narrative building to visual dominance, we ensure your brand is unmistakable.",
    icon: Zap,
    deliverables: ["Visual Identity", "Brand Strategy", "Core Narrative"],
    longDesc: "Your brand is your reputation. We don't just design; we define. Through deep market research and psychological positioning, we build brands that don't just exist—they dominate. Our process covers everything from the initial spark of an idea to the full execution of a comprehensive brand ecosystem."
  },
  {
    id: "leadgen",
    title: "Lead Dominance",
    desc: "Turning potential into performance. We build aggressive, high-intent lead pipelines that consistently populate your CRM with qualified opportunities.",
    icon: Target,
    deliverables: ["Funnel Build", "Lead Scoring", "CRM Integration"],
    longDesc: "Traffic is useless without conversion. We specialize in building 'ruthless' sales funnels that filter out the noise and capture high-intent prospects. Using advanced behavioral tracking and automated nurturing, we ensure your sales team is only talking to people ready to buy."
  },
  {
    id: "video",
    title: "Visual Arsenal",
    desc: "Cutting through the digital static with high-retention video production and editing tailored for viral scale and high conversion rates.",
    icon: Video,
    deliverables: ["Viral Video", "Asset Motion", "Stellar Editing"],
    longDesc: "In the era of short-form attention, we create content that stops the scroll. Our editing team uses high-retention hooks and psychological pacing to hold viewers until the CTA. We treat every frame as a conversion opportunity."
  },
  {
    id: "ads",
    title: "Performance Ads",
    desc: "Precision deployment across Meta and Google Ads. We optimize every rupee of spend to maximize customer acquisition and direct ROI.",
    icon: TrendingUp,
    deliverables: ["Meta Ads", "Google Ads", "Direct Response"],
    longDesc: "We treat your ad budget like our own investment. By leveraging deep data analysis and continuous A/B testing of creatives and copy, we drive down CPA while scaling volume. Our focus is strictly on bottom-line results."
  },
  {
    id: "ai",
    title: "AI Integration",
    desc: "Leveraging cutting-edge AI automation to streamline yours sales processes and customer interactions for 24/7 efficiency.",
    icon: Cpu,
    deliverables: ["AI Agents", "Workflow Automation", "Smart Personalization"],
    longDesc: "Scale your reach without scaling your headcount. We implement state-of-the-art AI solutions that handle routine inquiries, qualify leads instantly, and personalize customer journeys at scale, giving you a massive competitive advantage."
  },
  {
    id: "seo",
    title: "SEO Warfare",
    desc: "Dominating search results through technical precision and authoritative content that drives sustainable, organic growth.",
    icon: Search,
    deliverables: ["Technical SEO", "Keyword Domination", "Link Authority"],
    longDesc: "SEO isn't just about keywords; it's about digital authority. We rebuild your site's technical foundation and execute a content strategy that makes you the unavoidable answer to your customers' questions on Google."
  }
];

export default function Services() {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  return (
    <section id="services" className="py-24 lg:py-40 px-6 md:px-8 bg-white text-black bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-opacity-5">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 lg:gap-12 mb-16 lg:mb-32">
          <div className="relative">
            <div className="flex items-center gap-4 mb-6 lg:mb-8">
              <div className="w-12 h-1 bg-brightlume-gold" />
              <span className="text-[10px] font-black tracking-[0.5em] text-brightlume-gold uppercase">Capabilities</span>
            </div>
            <h2 className="text-6xl md:text-8xl lg:text-9xl font-display font-black leading-[0.8] tracking-tighter uppercase shrink-0">
              The <br /> Arsenal.
            </h2>
          </div>
          <p className="max-w-md text-lg lg:text-xl font-bold uppercase tracking-tight text-black/60 italic border-l-4 border-brightlume-gold pl-6 lg:pl-8 lg:mb-4">
            We don't provide general marketing. We provide specialized digital leverage designed to scale your revenue with calculated precision.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 border-t border-black/10">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setSelectedService(service)}
              className="group p-4 sm:p-8 lg:p-12 border-b border-r border-black/10 hover:bg-black hover:text-white transition-all duration-700 min-h-[140px] sm:min-h-[300px] md:min-h-[400px] flex flex-col justify-between cursor-pointer"
            >
              <div className="space-y-2 sm:space-y-6 lg:space-y-8">
                <span className="text-xl sm:text-4xl font-black text-black/10 group-hover:text-brightlume-gold transition-colors font-display">
                  0{idx + 1}
                </span>
                <h3 className="text-[10px] sm:text-2xl lg:text-4xl font-display font-black leading-tight uppercase group-hover:translate-x-2 md:group-hover:translate-x-4 transition-transform duration-500">
                  {service.title}
                </h3>
              </div>
              
              <div className="space-y-2 sm:space-y-8 mt-2">
                <p className="text-[8px] sm:text-base md:text-lg font-medium tracking-tight opacity-60 group-hover:opacity-100 uppercase leading-tight sm:leading-snug line-clamp-2 md:line-clamp-none">
                  {service.desc}
                </p>
                <div className="flex flex-wrap gap-1 md:gap-2 mb-2 sm:mb-4">
                  {service.deliverables.slice(0, 2).map((item, iIdx) => (
                    <span key={iIdx} className="text-[6px] sm:text-[9px] font-black tracking-widest border border-black/10 px-1 md:px-2 py-0.5 md:py-1 uppercase opacity-40 group-hover:opacity-100 group-hover:border-white/20">
                      {item}
                    </span>
                  ))}
                </div>
                <div className="w-6 h-6 md:w-12 md:h-12 bg-brightlume-gold hidden sm:flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-10 group-hover:translate-y-0 transition-all duration-500">
                  <ArrowIcon />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-5xl bg-[#0b0b0b] text-white overflow-hidden rounded-2xl md:rounded-[40px] shadow-2xl overflow-y-auto max-h-[90vh]"
            >
              <button 
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 md:top-6 md:right-6 z-[110] w-10 h-10 md:w-12 md:h-12 glass-nav rounded-full flex items-center justify-center hover:bg-brightlume-gold hover:text-black transition-all"
              >
                <X size={20} className="md:w-6 md:h-6" />
              </button>

              <div className="grid lg:grid-cols-2">
                <div className="p-6 md:p-16 space-y-6 md:space-y-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-brightlume-gold/10 flex items-center justify-center rounded-xl md:rounded-2xl">
                      <selectedService.icon className="text-brightlume-gold" size={24} />
                    </div>
                    <span className="text-[10px] md:text-sm font-black tracking-widest text-brightlume-gold uppercase italic">High Impact Service</span>
                  </div>
                  
                  <h2 className="text-3xl md:text-5xl lg:text-7xl font-display font-black leading-tight uppercase tracking-tighter">
                    {selectedService.title}
                  </h2>
                  
                  <p className="text-base md:text-xl text-white/60 leading-relaxed font-medium uppercase italic border-l-4 border-brightlume-gold pl-6 md:pl-8">
                    {selectedService.longDesc}
                  </p>

                  <div className="pt-4 md:pt-8">
                    <h4 className="text-[8px] md:text-[10px] font-black tracking-widest uppercase opacity-40 mb-4">Core Deliverables</h4>
                    <div className="flex flex-wrap gap-2 md:gap-3">
                      {selectedService.deliverables.map((item, i) => (
                        <span key={i} className="px-3 py-1.5 md:px-4 md:py-2 border border-white/10 rounded-full text-[9px] md:text-xs font-bold tracking-widest uppercase">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 p-6 md:p-16 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-white/5">
                  <div className="mb-6 md:mb-8">
                    <h3 className="text-2xl md:text-3xl font-display font-black uppercase mb-1 md:mb-2">Deploy for {selectedService.id}</h3>
                    <p className="text-white/40 text-xs md:text-base uppercase font-bold tracking-tight">Request a custom proposal for your brand.</p>
                  </div>

                  <form 
                    className="space-y-4 md:space-y-6" 
                    onSubmit={async (e) => {
                      e.preventDefault();
                      const form = e.currentTarget;
                      const formData = new FormData(form);
                      formData.append('service', selectedService.title);
                      
                      const submitBtn = form.querySelector('button[type="submit"]');
                      if (submitBtn) submitBtn.textContent = 'DEPLOYING...';
                      
                      try {
                        const res = await fetch('https://formspree.io/f/xqenprzy', {
                          method: 'POST',
                          body: formData,
                          headers: { 'Accept': 'application/json' }
                        });
                        
                        if (res.ok) {
                          alert(`INQUIRY FOR ${selectedService.title.toUpperCase()} DEPLOYED SUCCESSFULLY.`);
                          form.reset();
                          setSelectedService(null);
                        } else {
                          alert('DEPLOYMENT FAILED.');
                        }
                      } catch (err) {
                        console.error(err);
                        alert('CONNECTION ERROR.');
                      } finally {
                        if (submitBtn) submitBtn.textContent = 'SEND INQUIRY';
                      }
                    }}
                  >
                    <input name="name" type="text" required placeholder="YOUR NAME" className="w-full bg-transparent border-b border-white/10 py-3 md:py-4 text-lg md:text-xl font-black uppercase tracking-tighter outline-none placeholder:text-white focus:placeholder:text-white/50 focus:border-brightlume-gold transition-all" />
                    <input name="email" type="email" required placeholder="YOUR EMAIL" className="w-full bg-transparent border-b border-white/10 py-3 md:py-4 text-lg md:text-xl font-black uppercase tracking-tighter outline-none placeholder:text-white focus:placeholder:text-white/50 focus:border-brightlume-gold transition-all" />
                    <textarea name="goals" required placeholder="PROJECT GOALS" rows={2} className="w-full bg-transparent border-b border-white/10 py-3 md:py-4 text-lg md:text-xl font-black uppercase tracking-tighter outline-none placeholder:text-white focus:placeholder:text-white/50 focus:border-brightlume-gold transition-all resize-none" />
                    
                    <button type="submit" className="jan-btn w-full py-4 md:py-6 flex items-center justify-between group bg-brightlume-gold text-black mt-4">
                      <span className="text-sm md:text-base">SEND INQUIRY</span>
                      <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </form>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

function ArrowIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" strokeLinejoin="bevel"/>
    </svg>
  );
}
