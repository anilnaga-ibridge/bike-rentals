import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, X, HelpCircle, ChevronRight, MessageCircle } from 'lucide-react';
import { WhatsAppIcon } from '@/components/icons/WhatsAppIcon';
import { useState } from 'react';

export function HelpCenter() {
  const [open, setOpen] = useState(false);

  const contacts = [
    {
      icon: WhatsAppIcon,
      label: 'WhatsApp Support',
      desc: 'Instant Response',
      color: 'bg-[#25D366]',
      href: 'https://wa.me/918106885488?text=Hi%20Sri%20Ganesh%20Bike%20Rentals!%20I%20need%20help%20with%20my%20booking.',
    },
    {
      icon: Phone,
      label: 'Direct Call',
      desc: '+91 91004 38272',
      color: 'bg-primary',
      href: 'tel:+919100438272',
    },
    {
      icon: Mail,
      label: 'Email Support',
      desc: 'support@sriganesh.com',
      color: 'bg-accent',
      href: 'mailto:support@sriganeshbikerentals.com',
    },
    {
      icon: MessageCircle,
      label: 'Text Message',
      desc: 'SMS Support',
      color: 'bg-indigo-500',
      href: 'sms:+919100438272',
    },
  ];

  return (
    <div className="fixed right-6 bottom-24 z-50 flex flex-col items-end gap-4">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="bg-white rounded-[2rem] p-6 shadow-[0_32px_64px_-16px_rgba(11,61,145,0.2)] border border-primary/5 w-72 overflow-hidden"
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="font-display font-black text-primary text-xl">Help Center</h3>
                <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest mt-0.5">We're here for you 24/7</p>
              </div>
              <button onClick={() => setOpen(false)} className="p-2 hover:bg-primary/5 rounded-full transition-colors">
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="space-y-3">
              {contacts.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3 rounded-2xl hover:bg-primary/5 transition-all group relative border border-transparent hover:border-primary/5"
                >
                  <div className={`${c.color} rounded-xl p-3 text-white shadow-lg group-hover:scale-110 transition-transform`}>
                    <c.icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-bold text-primary">{c.label}</p>
                    <p className="text-[10px] text-muted-foreground font-medium">{c.desc}</p>
                  </div>
                  <ChevronRight className="h-4 w-4 text-primary/20 group-hover:text-primary/100 group-hover:translate-x-1 transition-all" />
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setOpen(!open)}
        className={`w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transition-all duration-500 relative ${open
          ? 'bg-primary text-white'
          : 'bg-primary text-white gold-shine'
          }`}
      >
        <div className="absolute inset-0 rounded-full animate-ping bg-primary opacity-20" />
        {open ? <X className="h-7 w-7" /> : <HelpCircle className="h-7 w-7" />}
      </motion.button>
    </div>
  );
}
