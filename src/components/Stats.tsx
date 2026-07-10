import React, { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';

interface StatItem {
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
  description: string;
}

const stats: StatItem[] = [
  { value: 50, suffix: 'K+', label: 'TEU Capacity', description: 'Simultaneous storage capacity across all zones' },
  { value: 1, suffix: 'M+', label: 'Containers Handled', description: 'Cumulative containers processed since inception' },
  { value: 25, suffix: '', label: 'Years Experience', description: 'Decades of trusted operations in logistics' },
  { value: 99, suffix: '%', label: 'On-Time Accuracy', description: 'Consistent delivery performance record' },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { stiffness: 60, damping: 18 });

  useEffect(() => {
    if (isInView) motionValue.set(value);
  }, [isInView, motionValue, value]);

  useEffect(() => {
    return spring.on('change', (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.round(latest).toLocaleString() + suffix;
      }
    });
  }, [spring, suffix]);

  return (
    <span ref={ref} className="tabular-nums">
      0{suffix}
    </span>
  );
}

export const Stats: React.FC = () => {
  return (
    <section className="py-16 bg-primary-container relative overflow-hidden">
      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-5 grid-pattern" />

      <div className="max-w-container-max mx-auto px-gutter relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((stat, i) => (
            <React.Fragment key={i}>
              <motion.div
                className="px-8 py-10 text-center flex flex-col items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <div className="stat-number font-display-lg text-display-lg font-black mb-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="font-label-caps text-label-caps uppercase tracking-[0.12em] text-tertiary-fixed-dim mb-2">
                  {stat.label}
                </div>
                <p className="font-body-md text-[13px] text-on-primary/50 max-w-[160px] leading-relaxed hidden md:block">
                  {stat.description}
                </p>
              </motion.div>

              {/* Divider between stats (except last) */}
              {i < stats.length - 1 && (
                <div className="hidden md:block absolute" style={{ left: `${((i + 1) / 4) * 100}%`, top: '20%', bottom: '20%', width: '1px', background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.12), transparent)' }} />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};
