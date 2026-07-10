import React from 'react';
import { motion } from 'framer-motion';
import { Building, Headset, Shield, ArrowRight, MapPin, Mail } from 'lucide-react';

const departments = [
  { icon: Headset, label: 'Operations Support', phone: '+31 10 123 4567', href: 'tel:+31101234567' },
  { icon: Shield, label: 'Customs Clearance', phone: '+31 10 123 4568', href: 'tel:+31101234568' },
];

const emails = [
  { label: 'General Inquiries', email: 'info@harmonycfs.com' },
  { label: 'Yard Planning', email: 'planning@harmonycfs.com' },
];

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-section-padding bg-background border-t border-outline-variant/10">
      <div className="max-w-container-max mx-auto px-gutter">

        {/* Header */}
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <p className="font-label-caps text-label-caps text-secondary uppercase tracking-[0.15em] mb-4">Get In Touch</p>
          <h2 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-5 max-w-2xl">
            Let's build something
            <br />
            <span className="text-secondary">exceptional together.</span>
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl leading-relaxed">
            Connect with our global logistics experts. We ensure precision and reliability for your supply chain needs.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

          {/* Contact Form */}
          <motion.div
            className="lg:col-span-8 bg-surface-container-lowest border border-outline-variant/10 rounded-2xl p-8 shadow-luxury"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h3 className="font-headline-sm text-headline-sm text-primary mb-8">Send us a message</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="form-group">
                  <input className="form-input" id="firstName" name="firstName" placeholder=" " type="text" />
                  <label className="form-label-float" htmlFor="firstName">First Name</label>
                </div>
                <div className="form-group">
                  <input className="form-input" id="lastName" name="lastName" placeholder=" " type="text" />
                  <label className="form-label-float" htmlFor="lastName">Last Name</label>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="form-group">
                  <input className="form-input" id="email" name="email" placeholder=" " type="email" />
                  <label className="form-label-float" htmlFor="email">Work Email</label>
                </div>
                <div className="form-group">
                  <input className="form-input" id="company" name="company" placeholder=" " type="text" />
                  <label className="form-label-float" htmlFor="company">Company</label>
                </div>
              </div>
              <div className="relative">
                <select
                  className="w-full h-[56px] px-4 bg-surface rounded-lg border border-outline-variant appearance-none font-body-md text-on-surface focus:outline-none focus:border-secondary-container transition-all"
                  id="department"
                  name="department"
                  style={{ boxShadow: 'none' }}
                  onFocus={e => (e.currentTarget.style.boxShadow = '0 0 0 3px rgba(254,107,0,0.12)')}
                  onBlur={e => (e.currentTarget.style.boxShadow = 'none')}
                >
                  <option>General Inquiry</option>
                  <option>Yard Planning &amp; Storage</option>
                  <option>Customs Inspection</option>
                  <option>Billing &amp; Support</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
                  <svg className="w-4 h-4 text-on-surface-variant" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
              <div>
                <textarea
                  className="form-textarea"
                  id="message"
                  name="message"
                  placeholder="How can we assist your operations?"
                  rows={4}
                />
              </div>
              <button
                type="submit"
                className="btn-primary flex items-center gap-3 h-[54px] px-8 bg-secondary-container text-white font-label-caps text-label-caps uppercase tracking-widest rounded-xl shadow-card hover:bg-secondary transition-all"
              >
                Send Message
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </motion.div>

          {/* Sidebar */}
          <aside className="lg:col-span-4 flex flex-col gap-5">
            {/* HQ Card */}
            <motion.div
              className="bg-primary text-on-primary p-7 rounded-2xl relative overflow-hidden shadow-luxury"
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="absolute -right-8 -top-8 opacity-6">
                <Building className="w-36 h-36" />
              </div>
              <h4 className="font-headline-sm text-headline-sm mb-4 relative z-10">Global Headquarters</h4>
              <address className="not-italic font-body-md text-on-primary/75 mb-5 relative z-10 leading-relaxed">
                <p>100 Logistics Way, Suite 400</p>
                <p>Port District, Terminal A</p>
                <p>Rotterdam, Netherlands 3089</p>
              </address>
              <div className="flex items-center gap-2 relative z-10 text-secondary-fixed">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-mono-data text-mono-data text-[12px]">Mon – Fri, 08:00 – 18:00 CET</span>
              </div>
            </motion.div>

            {/* Direct Lines */}
            <motion.div
              className="bg-surface-container-lowest border border-outline-variant/10 p-6 rounded-2xl shadow-card"
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <h4 className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-[0.12em] mb-5 pb-3 border-b border-outline-variant/20">Direct Lines</h4>
              <ul className="space-y-5">
                {departments.map((d, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="icon-container-accent w-10 h-10 rounded-xl flex-shrink-0">
                      <d.icon className="text-secondary-container w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-body-md font-semibold text-primary text-[14px]">{d.label}</p>
                      <a className="font-mono-data text-mono-data text-on-surface-variant hover:text-secondary-container transition-colors text-[13px]" href={d.href}>{d.phone}</a>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Email Contacts */}
            <motion.div
              className="bg-surface-container-lowest border border-outline-variant/10 p-6 rounded-2xl shadow-card"
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <h4 className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-[0.12em] mb-5 pb-3 border-b border-outline-variant/20">Email Contacts</h4>
              <ul className="space-y-5">
                {emails.map((e, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="icon-container-primary w-10 h-10 rounded-xl flex-shrink-0">
                      <Mail className="text-primary w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-body-md font-semibold text-primary text-[14px] mb-0.5">{e.label}</p>
                      <a className="font-body-md text-on-surface-variant hover:text-secondary-container transition-colors text-[13px] break-all" href={`mailto:${e.email}`}>{e.email}</a>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          </aside>
        </div>

        {/* Map */}
        <motion.div
          className="mt-10 w-full h-[420px] rounded-2xl overflow-hidden shadow-image relative group"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <img
            className="w-full h-full object-cover image-zoom"
            alt="Aerial satellite map view of an inland empty container yard."
            src="/images/contact_map_1783666074647.png"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-primary/10 pointer-events-none" />
          {/* Location Pin */}
          <div className="absolute bottom-6 left-6 glass-panel p-4 rounded-2xl border border-white/25 shadow-luxury flex items-center gap-3">
            <div className="w-10 h-10 bg-secondary-container rounded-xl flex items-center justify-center text-white flex-shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <p className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-[0.1em] text-[10px]">Terminal Location</p>
              <p className="font-body-md font-semibold text-primary text-[14px]">Nhava Sheva, Navi Mumbai</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
