import React from 'react';
import { motion } from 'framer-motion';
import { LogIn, Wrench, PackageSearch, LayoutDashboard, TrendingUp, TrendingDown } from 'lucide-react';

const steps = [
  {
    icon: LogIn,
    number: '01',
    title: 'Automated Gate-In',
    body: 'OCR technology and RFID scanners instantly identify incoming containers, checking them against manifest data for immediate verification without manual intervention.',
    bullets: ['99.8% OCR Accuracy', '< 3s Processing Time'],
  },
  {
    icon: PackageSearch,
    number: '02',
    title: 'Algorithmic Stacking',
    body: 'Our AI allocates yard slots based on predictive departure models, minimising reshuffling. Equipment operators receive real-time dispatch instructions via cabin terminals.',
    bullets: ['40% Reduction in Moves', 'Dynamic Slot Allocation'],
  },
  {
    icon: Wrench,
    number: '03',
    title: 'M&R Integration',
    body: 'Automated damage assessment triggers immediate Maintenance & Repair workflows. Containers are routed directly to repair zones before entering the available pool.',
    bullets: ['Automated Estimates', 'ISO Standard Compliance'],
  },
];

const inventoryRows = [
  { id: 'MSKU 1928374', type: "40' Dry", status: 'Available', location: 'Block A, Tier 2', statusStyle: 'bg-green-50 text-green-700 border border-green-200' },
  { id: 'CMAU 5647382', type: "20' Reefer", status: 'Cleaning', location: 'Wash Bay 3', statusStyle: 'bg-amber-50 text-amber-700 border border-amber-200' },
  { id: 'HLXU 9012345', type: "40' HC", status: 'Damaged', location: 'M&R Zone B', statusStyle: 'bg-red-50 text-red-700 border border-red-200' },
];

export const Equipment: React.FC = () => {
  return (
    <div id="operations">
      {/* Hero */}
      <section className="py-section-padding border-t border-outline-variant/10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center max-w-container-max mx-auto px-gutter">
          <motion.div
            className="flex flex-col gap-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <p className="font-label-caps text-label-caps text-secondary uppercase tracking-[0.15em]">Operations Detail</p>
            <h2 className="font-display-lg text-display-lg text-primary tracking-tight leading-tight">Empty Yard Operations</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed max-w-lg">
              Precision storage, real-time tracking, and automated workflows designed for maximum throughput and minimum dwell times in global logistics.
            </p>
          </motion.div>

          <motion.div
            className="h-96 w-full rounded-3xl overflow-hidden shadow-image relative group"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div
              className="bg-cover bg-center w-full h-full absolute inset-0 image-zoom"
              style={{ backgroundImage: "url('/images/equip_yard_1783665941976.png')" }}
            />
            <div className="absolute inset-0 tech-overlay" />
          </motion.div>
        </div>
      </section>

      {/* Technical Workflow */}
      <section className="py-section-padding border-t border-outline-variant/10 bg-surface-container-low">
        <div className="max-w-container-max mx-auto px-gutter">
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <p className="font-label-caps text-label-caps text-secondary uppercase tracking-[0.15em] mb-3">How It Works</p>
            <h2 className="font-headline-md text-headline-md text-primary mb-3">Technical Workflow</h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl leading-relaxed">
              A deep dive into the automated processes that drive our empty yard efficiency, from gate-in to deployment.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.12, duration: 0.5, ease: "easeOut" }}
                viewport={{ once: true }}
                className="bg-surface-container-lowest border border-outline-variant/10 rounded-2xl p-8 shadow-card card-hover-shadow accent-line-top relative overflow-hidden group"
              >
                <div className="absolute top-5 right-5 opacity-6">
                  <step.icon className="w-16 h-16 text-primary" />
                </div>
                <span className="font-mono-data text-secondary font-black text-[28px] mb-4 block leading-none">{step.number}</span>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-3">{step.title}</h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-6">{step.body}</p>
                <ul className="flex flex-col gap-2">
                  {step.bullets.map((b, j) => (
                    <li key={j} className="flex items-center gap-2 font-mono-data text-mono-data text-on-surface-variant text-[13px]">
                      <span className="w-4 h-4 rounded-full border-2 border-secondary text-secondary flex items-center justify-center text-[9px] font-black flex-shrink-0">✓</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Real-time Inventory */}
      <section className="py-section-padding border-t border-outline-variant/10">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1 flex flex-col justify-center">
              <p className="font-label-caps text-label-caps text-secondary uppercase tracking-[0.15em] mb-4">Live Dashboard</p>
              <h2 className="font-headline-md text-headline-md text-primary mb-4">Real-Time Inventory Management</h2>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-8">
                Visibility is control. Our proprietary dashboard provides a live, digital twin of the yard, allowing operations managers to track inventory levels by type, size, and status instantly.
              </p>
              <button className="btn-primary w-fit px-6 py-3.5 bg-primary text-on-primary font-label-caps text-label-caps uppercase tracking-widest rounded-xl shadow-card hover:bg-surface-tint transition-all">
                Request Demo
              </button>
            </div>

            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="bg-surface-container-lowest border border-outline-variant/10 rounded-2xl shadow-luxury overflow-hidden">
                {/* Dashboard Header */}
                <div className="bg-surface-container-low border-b border-outline-variant/20 px-6 py-4 flex justify-between items-center">
                  <div className="flex items-center gap-2.5">
                    <LayoutDashboard className="text-primary w-4 h-4" />
                    <span className="font-label-caps text-label-caps text-primary uppercase tracking-[0.1em]">Yard Control Center</span>
                  </div>
                  <div className="flex items-center gap-4 text-on-surface-variant font-mono-data text-[12px]">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                      System Live
                    </span>
                    <span className="text-on-surface-variant/60">Last Sync: 0s ago</span>
                  </div>
                </div>

                {/* KPI Cards */}
                <div className="p-6 bg-surface grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-surface-container-lowest border border-outline-variant/10 rounded-xl p-5 shadow-card">
                    <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-[0.1em] block mb-2">Total Inventory</span>
                    <span className="font-headline-md text-headline-md text-primary font-black">4,285</span>
                    <span className="text-[12px] text-green-600 flex items-center gap-1 mt-2 font-medium">
                      <TrendingUp className="w-3 h-3" /> 12% vs last week
                    </span>
                  </div>
                  <div className="bg-surface-container-lowest border border-secondary-container/30 rounded-xl p-5 shadow-card active-tracking-border">
                    <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-[0.1em] block mb-2">Available 40' HC</span>
                    <span className="font-headline-md text-headline-md text-primary font-black">1,102</span>
                    <span className="text-[12px] text-on-surface-variant flex items-center gap-1 mt-2">Ready for dispatch</span>
                  </div>
                  <div className="bg-surface-container-lowest border border-outline-variant/10 rounded-xl p-5 shadow-card">
                    <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-[0.1em] block mb-2">Pending Repair</span>
                    <span className="font-headline-md text-headline-md text-primary font-black">87</span>
                    <span className="text-[12px] text-secondary flex items-center gap-1 mt-2 font-medium">
                      <TrendingDown className="w-3 h-3" /> Requires attention
                    </span>
                  </div>

                  {/* Table */}
                  <div className="col-span-1 md:col-span-3 bg-surface-container-lowest border border-outline-variant/10 rounded-xl overflow-hidden shadow-card">
                    <table className="w-full text-left">
                      <thead className="bg-surface-container-low border-b border-outline-variant/20">
                        <tr>
                          {['Container ID', 'Type', 'Status', 'Location'].map(h => (
                            <th key={h} className="px-5 py-3.5 font-label-caps text-label-caps text-on-surface-variant uppercase tracking-[0.08em]">{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {inventoryRows.map((row, i) => (
                          <tr key={i} className={`border-b border-outline-variant/10 hover:bg-surface-container transition-colors duration-150 ${i === inventoryRows.length - 1 ? 'border-0' : ''}`}>
                            <td className="px-5 py-4 font-mono-data text-mono-data text-primary font-semibold">{row.id}</td>
                            <td className="px-5 py-4 font-mono-data text-mono-data text-on-surface-variant">{row.type}</td>
                            <td className="px-5 py-4">
                              <span className={`font-label-caps text-[11px] px-2.5 py-1 rounded-full uppercase tracking-[0.08em] ${row.statusStyle}`}>{row.status}</span>
                            </td>
                            <td className="px-5 py-4 font-mono-data text-mono-data text-on-surface-variant">{row.location}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};
