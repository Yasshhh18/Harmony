import React from 'react';
import { motion } from 'framer-motion';
import { Factory, Component, ArrowRight } from 'lucide-react';

export const Infrastructure: React.FC = () => {
  return (
    <section id="infrastructure" className="py-section-padding px-gutter md:px-gutter lg:px-0 relative overflow-hidden bg-surface-container-low grid-pattern border-t border-outline-variant/10">
      <div className="max-w-container-max mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

        {/* Left: Text Content */}
        <motion.div
          className="lg:col-span-5 space-y-8 lg:pr-8"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Label */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/6 border border-primary/10">
            <Factory className="w-3.5 h-3.5 text-primary" />
            <span className="font-label-caps text-label-caps text-primary uppercase tracking-[0.12em]">Industrial Precision</span>
          </div>

          {/* Headline */}
          <h2 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary leading-tight">
            Engineered for{' '}
            <br />
            <span className="text-secondary">Global Scale.</span>
          </h2>

          {/* Body */}
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg leading-relaxed">
            State-of-the-art logistics infrastructure designed to handle immense volume with frictionless precision. Discover our modern yards, heavy lifting capabilities, and advanced security protocols.
          </p>

          {/* Metrics row */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { value: '15,000', label: 'TEU per Terminal' },
              { value: '24 / 7', label: 'Operations' },
              { value: '< 45 min', label: 'Avg. Gate Time' },
              { value: 'ISO 9001', label: 'Certified' },
            ].map((m, i) => (
              <div key={i} className="bg-surface-container-lowest rounded-xl p-4 border border-outline-variant/10 shadow-card">
                <p className="font-mono-data text-headline-sm font-black text-primary mb-0.5">{m.value}</p>
                <p className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-[0.1em]">{m.label}</p>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex gap-4 pt-2">
            <button className="btn-primary px-6 py-3 bg-primary text-on-primary font-label-caps text-label-caps uppercase tracking-widest rounded-xl shadow-card hover:bg-surface-tint transition-all">
              Explore Facilities
            </button>
            <button className="btn-ghost flex items-center gap-2 px-6 py-3 border border-outline text-primary font-label-caps text-label-caps uppercase tracking-widest rounded-xl hover:bg-surface-container-high transition-all">
              View Yard Map <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>

        {/* Right: Image */}
        <motion.div
          className="lg:col-span-7 relative h-[560px] rounded-3xl overflow-hidden shadow-image group"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center image-zoom"
            style={{ backgroundImage: "url('/images/infra_yard_1783665932001.png')" }}
          />
          <div className="absolute inset-0 tech-overlay flex flex-col justify-end p-8">
            {/* Glass Info Card */}
            <div className="glass-panel p-6 rounded-2xl max-w-sm border border-white/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-secondary-container/20 border border-secondary-container/30 flex items-center justify-center">
                  <Component className="text-secondary-container w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-headline-sm text-headline-sm text-primary text-[16px]">Terminal Alpha</h3>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    <span className="font-label-caps text-label-caps text-on-surface-variant text-[10px] uppercase tracking-wider">Live</span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 border-t border-outline-variant/20 pt-4">
                <div>
                  <p className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-[0.1em] mb-1">Capacity</p>
                  <p className="font-mono-data text-mono-data text-primary font-semibold">15,000 TEU</p>
                </div>
                <div>
                  <p className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-[0.1em] mb-1">Active Units</p>
                  <p className="font-mono-data text-mono-data text-primary font-semibold flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary-container" />
                    42 Units
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
