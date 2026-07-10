import React from 'react';
import { MessageCircle, Share2, Globe } from 'lucide-react';

const footerLinks = [
  {
    heading: 'Solutions',
    links: ['Storage Solutions', 'Inspection Services', 'Yard Planning', 'Gate Services'],
  },
  {
    heading: 'Facilities',
    links: ['Infrastructure', 'Operations', 'Control Centre', 'Equipment'],
  },
  {
    heading: 'Company',
    links: ['About Us', 'Contact Us', 'Careers', 'Press'],
  },
  {
    heading: 'Legal',
    links: ['Privacy Policy', 'Terms of Service', 'Cookie Policy'],
  },
];

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-primary-container border-t border-on-primary/8">
      {/* Orange top accent line */}
      <div className="h-0.5 w-full" style={{ background: 'linear-gradient(90deg, #fe6b00 0%, rgba(254,107,0,0.4) 40%, transparent 100%)' }} />

      <div className="max-w-container-max mx-auto px-gutter">
        {/* Main grid */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-x-8 gap-y-12 py-16">
          {/* Brand column */}
          <div className="col-span-2 flex flex-col gap-5">
            <span className="font-display-lg text-headline-sm font-black text-on-primary tracking-tight">Harmony</span>
            <p className="font-body-md text-body-md text-on-primary/60 leading-relaxed max-w-[220px]">
              Industrial Precision in Logistics. Trusted by global shipping lines.
            </p>
            <div className="flex gap-3 mt-2">
              {[MessageCircle, Share2, Globe].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg border border-on-primary/15 flex items-center justify-center text-on-primary/50 hover:border-secondary-container hover:text-secondary-container transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {footerLinks.map((col) => (
            <div key={col.heading} className="flex flex-col gap-3">
              <h4 className="font-label-caps text-label-caps text-on-primary/40 uppercase tracking-[0.15em] mb-1">{col.heading}</h4>
              {col.links.map((link) => (
                <a key={link} href="#" className="footer-link">
                  {link}
                </a>
              ))}
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-on-primary/8 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body-md text-[13px] text-on-primary/40">
            © 2024 Harmony CFS Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="font-label-caps text-label-caps text-on-primary/40 uppercase tracking-[0.1em] hover:text-secondary-container transition-colors text-[11px]">Privacy</a>
            <a href="#" className="font-label-caps text-label-caps text-on-primary/40 uppercase tracking-[0.1em] hover:text-secondary-container transition-colors text-[11px]">Terms</a>
            <a href="#" className="font-label-caps text-label-caps text-on-primary/40 uppercase tracking-[0.1em] hover:text-secondary-container transition-colors text-[11px]">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
