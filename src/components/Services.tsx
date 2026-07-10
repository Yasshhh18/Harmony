import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { Warehouse, ClipboardCheck, ScanLine, Route, Satellite } from 'lucide-react';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const smallCardData = [
  {
    icon: ClipboardCheck,
    title: 'Rigorous Inspection',
    body: 'IICL-certified condition reporting and M&R assessments upon arrival.',
  },
  {
    icon: ScanLine,
    title: 'Gate In / Out',
    body: 'Automated OCR gates for rapid, error-free container processing.',
  },
  {
    icon: Route,
    title: 'Yard Planning',
    body: 'AI-driven stacking algorithms that minimize re-handling.',
  },
  {
    icon: Satellite,
    title: 'Live Tracking',
    body: 'Real-time inventory via our proprietary client portal.',
  },
];

export const Services: React.FC = () => {
  return (
    <section className="py-section-padding bg-surface-container-low border-t border-outline-variant/10" id="services">
      <div className="max-w-container-max mx-auto px-gutter">

        {/* Header */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <p className="font-label-caps text-label-caps text-secondary uppercase tracking-[0.15em] mb-3">
            Core Competencies
          </p>
          <h2 className="font-headline-md text-headline-md text-primary max-w-xl">
            Everything your supply chain demands — delivered.
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {/* Large Feature Card */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-2 lg:col-span-2 row-span-2 bg-surface-container-lowest rounded-2xl overflow-hidden shadow-card card-hover-elevate group relative flex flex-col border border-outline-variant/10"
          >
            {/* Top accent line */}
            <div className="h-0.5 w-full" style={{ background: 'linear-gradient(90deg, #fe6b00 0%, rgba(254,107,0,0.3) 60%, transparent 100%)' }} />

            <div className="p-8 flex flex-col flex-1">
              <div className="icon-container-accent mb-6">
                <Warehouse className="text-secondary-container w-7 h-7" />
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-3">Strategic Storage</h3>
              <p className="text-on-surface-variant font-body-md text-body-md leading-relaxed mb-6 flex-1">
                High-capacity, intelligently planned empty container storage designed for optimal retrieval speed and maximum security across thousands of TEUs.
              </p>
              <div className="mt-auto overflow-hidden rounded-xl">
                <img
                  className="w-full h-52 object-cover image-zoom"
                  alt="Yellow forklifts handling empty shipping containers in an inland container yard."
                  src="/images/services_storage_1783665894259.png"
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>

          {/* Small Service Cards */}
          {smallCardData.map((card, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="bg-surface-container-lowest rounded-2xl p-6 shadow-card card-hover-elevate border border-outline-variant/10 accent-line-top group flex flex-col"
            >
              <div className="icon-container-primary mb-5 group-hover:scale-110 transition-transform duration-300">
                <card.icon className="text-primary w-6 h-6" />
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-2 text-[18px]">{card.title}</h3>
              <p className="text-on-surface-variant font-body-md text-body-md text-[14px] leading-relaxed">{card.body}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
