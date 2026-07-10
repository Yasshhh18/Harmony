import React from 'react';
import { motion } from 'framer-motion';
import { Anchor, Eye, Gauge, ArrowRight } from 'lucide-react';

const values = [
  {
    icon: Anchor,
    title: 'Structural Integrity',
    body: 'We build processes designed to withstand the stress of global supply chain volatility. Redundancy is engineered into every operational tier.',
    stat: '99.9%', statLabel: 'System Uptime',
  },
  {
    icon: Eye,
    title: 'Absolute Visibility',
    body: 'Blind spots are liabilities. Our systems provide real-time, high-fidelity tracking of every asset, ensuring continuous operational oversight.',
    stat: '< 3s', statLabel: 'Gate Processing',
  },
  {
    icon: Gauge,
    title: 'Velocity Control',
    body: 'Speed without control is chaos. We optimize throughput balancing rapid execution with strict adherence to safety and handling protocols.',
    stat: '40%', statLabel: 'Fewer Re-Handles',
  },
];

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-section-padding bg-surface border-t border-outline-variant/10" id="why-us">
      <div className="max-w-container-max mx-auto px-gutter">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <p className="font-label-caps text-label-caps text-secondary uppercase tracking-[0.15em] mb-3">
              Why Harmony
            </p>
            <h2 className="font-headline-md text-headline-md text-primary max-w-lg">
              Core Competencies that set us apart.
            </h2>
          </motion.div>
          <motion.a
            href="#contact"
            className="hidden md:flex items-center gap-2 font-label-caps text-label-caps text-secondary uppercase tracking-[0.12em] hover:gap-3 transition-all duration-300"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Partner with us <ArrowRight className="w-4 h-4" />
          </motion.a>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((value, i) => (
            <motion.div
              key={i}
              className="bg-surface-container-lowest rounded-2xl p-8 shadow-card border border-outline-variant/10 accent-line-top group card-hover-shadow flex flex-col"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.12, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              {/* Icon */}
              <div className="icon-container-accent mb-6 group-hover:scale-105 transition-transform duration-300">
                <value.icon className="text-secondary-container w-7 h-7" />
              </div>

              {/* Title */}
              <h3 className="font-headline-sm text-headline-sm text-primary mb-3">{value.title}</h3>

              {/* Body */}
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed flex-1">
                {value.body}
              </p>

              {/* Stat */}
              <div className="mt-8 pt-6 border-t border-outline-variant/20 flex items-baseline gap-2">
                <span className="font-display-lg text-headline-md text-primary font-black">{value.stat}</span>
                <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-[0.1em]">{value.statLabel}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
