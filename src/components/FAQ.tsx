import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ChevronDown, Wrench, Receipt, Shield, Satellite } from 'lucide-react';

const categories = [
  {
    id: 'operations',
    icon: Wrench,
    label: 'Operations',
    items: [
      {
        q: 'What are your standard operating hours?',
        a: 'Our core logistics operations run 24/7. The administrative offices and direct customer support lines are open Monday through Friday, 08:00 to 18:00 local time. Yard gate hours for external haulers are generally 06:00 to 22:00, subject to specific terminal agreements.',
      },
      {
        q: 'How do I schedule a container pick-up?',
        a: 'All container pick-ups must be scheduled via our Harmony Client Portal at least 24 hours in advance. You will need your booking reference number and the specific container ID. The portal will provide available time slots to minimise gate congestion.',
      },
    ],
  },
  {
    id: 'billing',
    icon: Receipt,
    label: 'Billing',
    items: [
      {
        q: 'What payment methods are accepted?',
        a: 'We accept electronic funds transfers (EFT), standard corporate credit cards (Visa, MasterCard, Amex), and pre-approved lines of credit for established accounts. Cash payments are strictly prohibited at all terminal locations.',
      },
    ],
  },
  {
    id: 'safety',
    icon: Shield,
    label: 'Safety Protocols',
    items: [
      {
        q: 'What safety standards does Harmony follow?',
        a: 'Harmony maintains ISO 9001 quality management certification and adheres to IICL equipment handling standards. All yard personnel are trained in HSE protocols with regular refresher programmes. Our facilities are equipped with CCTV monitoring, RFID access control, and high-mast LED security lighting.',
      },
    ],
  },
  {
    id: 'tracking',
    icon: Satellite,
    label: 'Tracking',
    items: [
      {
        q: 'How do I track my container?',
        a: 'Use our proprietary Harmony Client Portal for real-time container tracking. Each container is RFID-tagged upon gate-in and its location, status, and movement history are updated in near real-time. You can access the portal 24/7 via web or mobile app.',
      },
    ],
  },
];

export const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<string[]>([]);
  const [activeCategory, setActiveCategory] = useState('operations');
  const [search, setSearch] = useState('');

  const toggleItem = (id: string) => {
    setOpenItems(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
  };

  const currentCategory = categories.find(c => c.id === activeCategory)!;
  const filtered = currentCategory.items.filter(
    item =>
      !search ||
      item.q.toLowerCase().includes(search.toLowerCase()) ||
      item.a.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div id="faq" className="bg-background border-t border-outline-variant/10">
      {/* Page Header */}
      <header className="bg-surface-container-low py-16 px-gutter border-b border-outline-variant/10">
        <div className="max-w-container-max mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <motion.div
            className="max-w-xl"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <p className="font-label-caps text-label-caps text-secondary uppercase tracking-[0.15em] mb-4">Support</p>
            <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-4">
              Frequently Asked Questions
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              Answers to common questions about Harmony CFS operations, billing, safety, and container tracking.
            </p>
          </motion.div>

          <motion.div
            className="w-full md:w-96"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant w-4 h-4" />
              <input
                className="w-full h-[52px] pl-11 pr-4 rounded-xl border border-outline-variant bg-surface-container-lowest font-body-md text-on-surface focus:outline-none focus:border-secondary-container transition-all"
                placeholder="Search FAQ…"
                type="text"
                value={search}
                onChange={e => setSearch(e.target.value)}
                style={{ boxShadow: 'none' }}
                onFocus={e => (e.currentTarget.style.boxShadow = '0 0 0 3px rgba(254,107,0,0.12)')}
                onBlur={e => (e.currentTarget.style.boxShadow = 'none')}
              />
            </div>
          </motion.div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-container-max mx-auto px-gutter py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Sidebar */}
          <aside className="lg:col-span-3 hidden lg:block">
            <div className="sticky top-[88px] bg-surface-container-lowest border border-outline-variant/10 rounded-2xl p-5 shadow-card">
              <h3 className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-[0.12em] mb-4 pb-3 border-b border-outline-variant/20">Categories</h3>
              <ul className="space-y-1">
                {categories.map(cat => (
                  <li key={cat.id}>
                    <button
                      onClick={() => setActiveCategory(cat.id)}
                      className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left font-body-md text-body-md transition-all duration-200 ${
                        activeCategory === cat.id
                          ? 'bg-secondary-container/10 text-secondary-container font-semibold'
                          : 'text-on-surface-variant hover:text-primary hover:bg-surface-container-low'
                      }`}
                    >
                      <cat.icon className="w-4 h-4 flex-shrink-0" />
                      {cat.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* FAQ Accordions */}
          <div className="lg:col-span-9">
            {/* Mobile category tabs */}
            <div className="flex gap-2 overflow-x-auto lg:hidden mb-6 pb-2">
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded-full font-label-caps text-label-caps uppercase tracking-[0.1em] transition-all ${
                    activeCategory === cat.id ? 'bg-primary text-on-primary' : 'bg-surface-container-lowest border border-outline-variant/20 text-on-surface-variant'
                  }`}
                >
                  <cat.icon className="w-3.5 h-3.5" />
                  {cat.label}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3 mb-8">
              <div className="icon-container-accent w-10 h-10 rounded-xl">
                <currentCategory.icon className="text-secondary-container w-5 h-5" />
              </div>
              <h2 className="font-headline-md text-headline-md text-primary">{currentCategory.label}</h2>
            </div>

            <div className="divide-y divide-outline-variant/20 border border-outline-variant/10 rounded-2xl bg-surface-container-lowest shadow-card overflow-hidden">
              {filtered.length === 0 ? (
                <p className="px-6 py-8 text-on-surface-variant font-body-md text-center">No results found for "{search}".</p>
              ) : filtered.map((item, i) => {
                const id = `${activeCategory}-${i}`;
                const isOpen = openItems.includes(id);
                return (
                  <div key={id} className={`transition-colors duration-200 ${isOpen ? 'bg-surface-container-low' : 'hover:bg-surface-container-low/50'}`}>
                    <button
                      className="w-full flex justify-between items-center px-7 py-5 text-left focus:outline-none"
                      onClick={() => toggleItem(id)}
                    >
                      <span className="font-body-lg text-body-lg font-semibold text-primary pr-6">{item.q}</span>
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="flex-shrink-0"
                      >
                        <ChevronDown className="w-5 h-5 text-on-surface-variant" />
                      </motion.div>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: "easeOut" }}
                          style={{ overflow: 'hidden' }}
                        >
                          <div className="px-7 pb-7">
                            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed border-l-2 border-secondary-container/40 pl-5">
                              {item.a}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
