import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { id: 'home', label: 'Home', href: '#' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'services', label: 'Services', href: '#services' },
  { id: 'infrastructure', label: 'Infrastructure', href: '#infrastructure' },
  { id: 'operations', label: 'Operations', href: '#operations' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const isClickScrolling = useRef(false);

  // Handle scroll for glass effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for scroll spy (Active section)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (isClickScrolling.current) return;
        
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // If it's the hero/home section (usually doesn't have an ID or is top)
            if (entry.target.tagName === 'BODY' || entry.target.id === '') {
              setActiveSection('home');
            } else {
              setActiveSection(entry.target.id);
            }
          }
        });
      },
      { rootMargin: '-20% 0px -70% 0px' } // Trigger when section is in the top part of viewport
    );

    // Observe all sections that have IDs matching our links
    const sectionIds = navLinks.filter(link => link.id !== 'home').map(link => link.id);
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    // Special case for top of page / home
    const handleScrollForHome = () => {
      if (!isClickScrolling.current && window.scrollY < 100) {
        setActiveSection('home');
      }
    };
    window.addEventListener('scroll', handleScrollForHome, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScrollForHome);
    };
  }, []);

  return (
    <>
      <motion.nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'nav-glass-scrolled' : 'nav-glass border-b border-outline-variant/20'}`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="flex justify-between items-center px-gutter py-3 max-w-container-max mx-auto">
          {/* Logo */}
          <a href="#" className="font-display-lg text-headline-sm font-extrabold text-primary tracking-tight hover:text-secondary transition-colors duration-300 relative z-10">
            Harmony
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`relative px-4 py-2 font-label-caps text-label-caps uppercase tracking-[0.12em] transition-colors duration-300 ${
                    isActive ? 'text-secondary-container font-bold' : 'text-on-surface-variant hover:text-primary'
                  }`}
                  onClick={() => {
                    // Temporarily disable scroll spy during smooth scroll
                    isClickScrolling.current = true;
                    setActiveSection(link.id);
                    setTimeout(() => {
                      isClickScrolling.current = false;
                    }, 1000); // 1000ms covers most smooth scroll durations
                  }}
                >
                  {/* Sliding pill background */}
                  {isActive && (
                    <motion.div
                      layoutId="navPill"
                      className="absolute inset-0 bg-secondary-container/10 rounded-full border border-secondary-container/20"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </a>
              );
            })}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3 relative z-10">
            <button className="btn-ghost font-label-caps text-label-caps uppercase tracking-[0.12em] px-4 py-2.5 border border-outline-variant/50 text-on-surface-variant hover:border-primary hover:text-primary rounded-lg transition-all duration-200">
              Login
            </button>
            <button className="btn-primary font-label-caps text-label-caps uppercase tracking-[0.12em] px-5 py-2.5 bg-secondary-container text-white rounded-lg hover:bg-secondary transition-all duration-200 shadow-card">
              Track Container
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-primary p-2 rounded-lg hover:bg-surface-container transition-colors relative z-10"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-primary/60 z-50 backdrop-blur-sm md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              className="fixed top-0 right-0 h-full w-72 bg-surface z-50 shadow-luxury flex flex-col md:hidden"
              initial={{ x: 288 }}
              animate={{ x: 0 }}
              exit={{ x: 288 }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            >
              <div className="flex justify-between items-center px-6 py-5 border-b border-outline-variant/20">
                <span className="font-display-lg text-headline-sm font-extrabold text-primary">Harmony</span>
                <button onClick={() => setMobileOpen(false)} className="p-2 rounded-lg hover:bg-surface-container transition-colors" aria-label="Close menu">
                  <X className="w-5 h-5 text-primary" />
                </button>
              </div>
              <nav className="flex flex-col gap-1 px-4 py-6 flex-1">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.id;
                  return (
                    <a
                      key={link.id}
                      href={link.href}
                      onClick={() => {
                        setMobileOpen(false);
                        isClickScrolling.current = true;
                        setActiveSection(link.id);
                        setTimeout(() => {
                          isClickScrolling.current = false;
                        }, 1000);
                      }}
                      className={`flex items-center justify-between px-4 py-3 rounded-xl font-label-caps text-label-caps uppercase tracking-[0.12em] transition-all duration-200 ${
                        isActive
                          ? 'bg-secondary-container/10 text-secondary-container border border-secondary-container/20'
                          : 'text-on-surface-variant hover:text-primary hover:bg-surface-container-low'
                      }`}
                    >
                      {link.label}
                      {isActive ? (
                        <div className="w-1.5 h-1.5 rounded-full bg-secondary-container" />
                      ) : (
                        <ChevronRight className="w-4 h-4 opacity-40" />
                      )}
                    </a>
                  );
                })}
              </nav>
              <div className="px-6 py-6 border-t border-outline-variant/20 flex flex-col gap-3">
                <button className="w-full py-3 border border-outline-variant/50 text-on-surface-variant font-label-caps text-label-caps uppercase tracking-[0.12em] rounded-xl hover:border-primary hover:text-primary transition-all">Login</button>
                <button className="w-full py-3 bg-secondary-container text-white font-label-caps text-label-caps uppercase tracking-[0.12em] rounded-xl hover:bg-secondary transition-all shadow-card">Track Container</button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
