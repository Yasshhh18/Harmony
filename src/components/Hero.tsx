import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { CheckCircle2, ChevronDown } from 'lucide-react';

const trustItems = [
  'ISO 9001 Certified',
  '25+ Years of Operations',
  '50,000 TEU Capacity',
  '99% On-Time Accuracy',
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image with subtle parallax via CSS */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center scale-105 will-change-transform"
        style={{ backgroundImage: "url('/images/hero_yard_1783665855025.png')" }}
      />

      {/* Premium overlay */}
      <div className="absolute inset-0 hero-overlay z-10" />

      {/* Subtle vignette */}
      <div className="absolute inset-0 z-10" style={{ background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.35) 100%)' }} />

      {/* Content */}
      <motion.div
        className="relative z-20 w-full max-w-container-max mx-auto px-gutter text-center flex flex-col items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Label Chip */}
        <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/8 backdrop-blur-sm text-white/80 font-label-caps text-label-caps uppercase tracking-[0.15em]">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary-container inline-block animate-pulse" />
            India's Premier Empty Container Yard
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={itemVariants}
          className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-white mb-6 mx-auto max-w-5xl"
          style={{ textShadow: '0 2px 40px rgba(0,0,0,0.4)', letterSpacing: '-0.03em' }}
        >
          Smart Empty Container
          <br />
          <span className="text-secondary-container">Yard Solutions</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          variants={itemVariants}
          className="font-body-lg text-body-lg mb-10 max-w-2xl mx-auto"
          style={{ color: 'rgba(255,255,255,0.78)', lineHeight: '1.7' }}
        >
          Technology-driven container yard operations with world-class infrastructure.
          Precision tracking, rapid gate times, and uncompromising security — built for global scale.
        </motion.p>

        {/* CTAs */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center gap-4 mb-14">
          <a href="#contact">
            <button className="btn-primary px-8 py-4 bg-secondary-container text-white rounded-xl font-label-caps text-label-caps uppercase tracking-widest shadow-luxury hover:bg-secondary">
              Get in Touch
            </button>
          </a>
          <a href="#services">
            <button className="btn-ghost px-8 py-4 border border-white/30 text-white rounded-xl font-label-caps text-label-caps uppercase tracking-widest hover:bg-white/10 backdrop-blur-sm">
              Explore Services
            </button>
          </a>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-x-8 gap-y-3"
        >
          {trustItems.map((item, i) => (
            <div key={i} className="trust-badge">
              <CheckCircle2 className="w-4 h-4 text-secondary-container flex-shrink-0" />
              <span className="font-label-caps text-label-caps uppercase tracking-[0.1em]">{item}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Caret */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <span className="font-label-caps text-label-caps uppercase tracking-[0.15em] text-white/50">Scroll</span>
        <ChevronDown className="w-5 h-5 text-white/50 scroll-caret" />
      </motion.div>
    </section>
  );
};
