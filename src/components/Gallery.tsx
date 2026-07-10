import React from 'react';
import { motion } from 'framer-motion';

const galleryItems = [
  {
    src: '/images/gallery_alpha_1783665978754.png',
    alt: 'Inland empty container yard at dawn.',
    title: 'Terminal Alpha',
    desc: 'High-capacity storage yard with automated stacking.',
    tall: true,
  },
  {
    src: '/images/gallery_heavy_1783665989146.png',
    alt: 'Kalmar empty container handler lifting a container.',
    title: 'Heavy Lift Operations',
    desc: 'Precision handling of specialised cargo units.',
    tall: false,
  },
  {
    src: '/images/gallery_team_1783665999141.png',
    alt: 'Logistics team reviewing plans in container yard.',
    title: 'Yard Planning Team',
    desc: 'Coordinating complex logistics workflows on the ground.',
    tall: false,
  },
  {
    src: '/images/gallery_night_1783666009579.png',
    alt: 'Container yard illuminated by high mast LED lights at night.',
    title: '24/7 Operations',
    desc: 'Continuous processing facilities for rapid turnaround.',
    tall: true,
  },
  {
    src: '/images/gallery_abstract_1783666037225.png',
    alt: 'Geometric pattern of stacked container sides.',
    title: 'Optimised Storage',
    desc: 'Maximum density configurations for efficiency.',
    tall: false,
  },
  {
    src: '/images/gallery_control_1783666056751.png',
    alt: 'Modern yard office control room.',
    title: 'Global Command Center',
    desc: 'Real-time tracking and operational oversight.',
    tall: false,
  },
];

export const Gallery: React.FC = () => {
  return (
    <section className="py-section-padding bg-surface-container-low border-t border-outline-variant/10" id="gallery">
      <div className="max-w-container-max mx-auto px-gutter">

        {/* Header */}
        <motion.div
          className="mb-14 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <p className="font-label-caps text-label-caps text-secondary uppercase tracking-[0.15em] mb-4">Our Facilities</p>
          <h2 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-5">
            Infrastructure Gallery
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            Explore our state-of-the-art container yards, precision equipment, and the dedicated teams driving global logistics forward.
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <div className="masonry-grid">
          {galleryItems.map((item, i) => (
            <motion.div
              key={i}
              className="masonry-item relative group rounded-2xl overflow-hidden shadow-card cursor-pointer"
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.07, ease: "easeOut" }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
            >
              <div className="overflow-hidden rounded-2xl">
                <img
                  alt={item.alt}
                  className="w-full h-auto object-cover image-zoom"
                  src={item.src}
                  loading="lazy"
                />
              </div>

              {/* Hover Caption Overlay */}
              <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-350 ease-out">
                <div className="glass-overlay p-5 border-t border-white/30">
                  <h3 className="font-headline-sm text-headline-sm text-primary mb-1 text-[16px]">{item.title}</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant text-[13px] leading-relaxed">{item.desc}</p>
                </div>
              </div>

              {/* Subtle gradient always visible at bottom */}
              <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/20 to-transparent pointer-events-none group-hover:opacity-0 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
