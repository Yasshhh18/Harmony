import React from 'react';
import { motion } from 'framer-motion';
import { Factory, ArrowRight } from 'lucide-react';

const stats = [
  { value: '45M+', label: 'TEUs Processed' },
  { value: '99.9%', label: 'Uptime' },
  { value: '120', label: 'Facilities' },
  { value: '0', label: 'Tolerance for Error' },
];

export const About: React.FC = () => {
  return (
    <div id="about">
      {/* About Hero */}
      <section className="py-section-padding px-gutter md:px-gutter bg-background border-t border-outline-variant/10">
        <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: Text */}
          <motion.div
            className="z-10 relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <p className="font-label-caps text-label-caps text-secondary uppercase tracking-[0.15em] mb-4">
              About Harmony
            </p>
            <h2 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-4 leading-tight">
              Industrial Precision in Logistics.
            </h2>
            <p className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-[0.1em] mb-6 text-[13px]">
              Trusted by leading shipping lines across India.
            </p>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed max-w-xl mb-8">
              We orchestrate the complex symphony of global trade. Harmony is the central nervous system for modern logistics operations, engineered for absolute reliability and massive scale.
            </p>
            <div className="flex gap-4">
              <button className="btn-primary px-8 py-4 bg-secondary-container text-white font-label-caps text-label-caps uppercase tracking-widest rounded-xl shadow-card hover:bg-secondary transition-all">
                Explore Operations
              </button>
              <button className="btn-ghost flex items-center gap-2 px-6 py-4 text-primary font-label-caps text-label-caps uppercase tracking-widest hover:text-secondary transition-colors">
                Learn More <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            className="relative h-[480px] lg:h-[560px] rounded-3xl overflow-hidden shadow-image group"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <img
              className="absolute inset-0 w-full h-full object-cover image-zoom"
              alt="Aerial drone view of a vast inland empty container yard."
              src="/images/about_aerial_yard_1783665884219.png"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/20 to-transparent flex items-end p-8">
              <div className="glass-panel p-5 rounded-2xl w-full max-w-sm border border-white/20">
                <div className="flex items-center gap-3 mb-3">
                  <div className="icon-container-accent w-10 h-10 rounded-xl">
                    <Factory className="text-secondary-container w-5 h-5" />
                  </div>
                  <span className="font-label-caps text-label-caps uppercase tracking-[0.1em] text-on-surface font-bold">Scale & Efficiency</span>
                </div>
                <div className="w-full bg-surface-variant rounded-full h-1.5">
                  <motion.div
                    className="bg-secondary-container h-1.5 rounded-full"
                    initial={{ width: '0%' }}
                    whileInView={{ width: '85%' }}
                    transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
                    viewport={{ once: true }}
                  />
                </div>
                <p className="font-mono-data text-mono-data text-on-surface-variant mt-2 text-right">85% utilisation</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Company History & Stats */}
      <section className="py-section-padding bg-surface-container-low border-y border-outline-variant/10">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <h2 className="font-headline-md text-headline-md text-primary mb-8">The Architecture of Global Trade</h2>
              <div className="space-y-5 text-on-surface-variant font-body-lg text-body-lg leading-relaxed">
                <p>Founded on the principle that modern supply chains require a higher order of operational intelligence, Harmony began as a specialized engineering project to untangle terminal congestion.</p>
                <p>Today, we operate a vast network of Container Freight Stations (CFS), utilizing proprietary algorithms to manage throughput with surgical precision. We don't just move boxes — we engineer flow.</p>
              </div>
            </motion.div>

            {/* Stat Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.92 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/10 shadow-card card-hover-shadow"
                >
                  <div className="text-secondary font-display-lg text-display-lg mb-2 font-black leading-none">{s.value}</div>
                  <div className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-[0.1em]">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-section-padding bg-primary-container text-on-primary-container">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="border-l-2 border-secondary-container pl-8"
            >
              <h3 className="font-label-caps text-label-caps uppercase text-secondary-container mb-4 tracking-[0.15em]">Our Mission</h3>
              <p className="font-headline-md text-headline-md text-on-primary leading-snug">
                To eliminate friction in global supply chains through uncompromising engineering and operational discipline.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="border-l-2 border-on-primary/20 pl-8"
            >
              <h3 className="font-label-caps text-label-caps uppercase text-on-primary-container/60 mb-4 tracking-[0.15em]">Our Vision</h3>
              <p className="font-body-lg text-body-lg text-on-primary/75 leading-relaxed">
                A fully transparent, universally integrated logistics ecosystem where data moves faster than physical assets, preempting bottlenecks before they form.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};
