import { motion } from 'motion/react';

const steps = [
  {
    title: "Market Intel",
    num: "01",
    desc: "We dive deep into competitor landscapes and audience psychographics. We don't guess; we map the battlefield before firing a single shot.",
    details: ["Competitor Mapping", "Gap Analysis", "Audience Profiling"]
  },
  {
    title: "Strategic Blueprint",
    num: "02",
    desc: "Custom-built growth architecture tailored to your unique KPIs. We align brand positioning with performance goals for maximum impact.",
    details: ["Funnel Architecture", "Lead Scoring", "Content Narrative"]
  },
  {
    title: "Tactical Execution",
    num: "03",
    desc: "Deploying high-converting visual assets and precision-targeted ad campaigns. This is where creative edge meets technical dominance.",
    details: ["Creative Deployment", "Ad Management", "Asset Production"]
  },
  {
    title: "Agile Optimization",
    num: "04",
    desc: "Continuous data-loop analysis. We pivot, scale, and refine in real-time to ensure every rupee of your budget delivers peak ROI.",
    details: ["Real-time Analytics", "A/B Testing", "Scale Logistics"]
  }
];

const LIQUID_TRANSITION = { duration: 0.8, ease: [0.16, 1, 0.3, 1] };

export default function Process() {
  return (
    <section id="process" className="py-24 lg:py-40 px-6 md:px-8 bg-[#0b0b0b] relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-20 mb-16 lg:mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={LIQUID_TRANSITION}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="flex items-center gap-4 mb-6 lg:mb-8">
              <div className="w-12 h-1 bg-brightlume-gold" />
              <span className="text-[10px] font-black tracking-[0.5em] text-brightlume-gold uppercase">Methodology</span>
            </div>
            <h2 className="text-6xl md:text-8xl lg:text-[8vw] font-black font-display uppercase leading-[0.85] tracking-tighter shrink-0">
              The <br /><span className="text-stroke">Blueprint.</span>
            </h2>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ...LIQUID_TRANSITION, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-md lg:mt-24"
          >
            <p className="text-lg lg:text-xl font-bold uppercase tracking-tight text-white/40 leading-snug italic border-l-4 border-brightlume-gold pl-6 lg:pl-8">
              A structured, results-obsessed system designed for businesses that demand consistent, measurable scale. No fluff, just leverage.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ ...LIQUID_TRANSITION, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#0b0b0b] p-4 sm:p-8 md:p-12 group hover:bg-brightlume-gold transition-all duration-700 min-h-[220px] sm:min-h-[400px] md:min-h-[500px] flex flex-col justify-between"
            >
               <div>
                <span className="text-3xl md:text-6xl font-black font-display text-white/5 group-hover:text-black/20 transition-colors duration-500">
                  {step.num}
                </span>
                <h3 className="text-sm sm:text-2xl md:text-3xl lg:text-4xl font-display font-black leading-tight uppercase mt-4 sm:mt-8 group-hover:translate-x-4 transition-transform duration-500 group-hover:text-black">
                  {step.title}
                </h3>
              </div>

              <div className="space-y-3 sm:space-y-4 md:space-y-8">
                <p className="text-[10px] sm:text-base md:text-lg font-medium tracking-tight text-white/40 group-hover:text-black uppercase leading-snug line-clamp-3 sm:line-clamp-none">
                  {step.desc}
                </p>
                <div className="flex flex-wrap gap-1 sm:gap-2">
                  {step.details.slice(0, 2).map((detail, dIdx) => (
                    <span key={dIdx} className="text-[7px] sm:text-[10px] font-black tracking-widest border border-white/10 px-1.5 sm:px-3 py-0.5 sm:py-1 uppercase text-white/20 group-hover:border-white/40 group-hover:text-white transition-colors">
                      {detail}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative vertical line */}
      <div className="absolute left-8 top-0 bottom-0 w-[1px] bg-white opacity-[0.03] hidden lg:block" />
    </section>
  );
}
