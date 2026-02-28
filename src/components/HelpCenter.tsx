import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Phone, Mail, X, HelpCircle } from 'lucide-react';
import { useState } from 'react';

export function HelpCenter() {
  const [open, setOpen] = useState(false);

  const contacts = [
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      desc: 'Chat with us',
      color: 'bg-emerald-500',
      href: 'https://wa.me/919876543210?text=Hi%20RideX%20Team!%20I%20need%20help%20with%20my%20booking.',
    },
    {
      icon: Phone,
      label: 'Call Us',
      desc: '+91 9876543210',
      color: 'bg-blue-500',
      href: 'tel:+919876543210',
    },
    {
      icon: Mail,
      label: 'Email',
      desc: 'support@ridex.com',
      color: 'bg-primary',
      href: 'mailto:support@ridex.com',
    },
  ];

  return (
    <div className="fixed left-6 top-1/2 -translate-y-1/2 z-40 flex flex-col items-start gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: -20, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -20, scale: 0.9 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="glass rounded-2xl p-4 space-y-3 mb-2"
          >
            <p className="text-xs uppercase tracking-wider text-muted-foreground font-medium">Need Help?</p>
            {contacts.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-2 rounded-lg hover:bg-secondary/60 transition-colors group"
              >
                <div className={`${c.color} rounded-full p-2 group-hover:scale-110 transition-transform`}>
                  <c.icon className="h-4 w-4 text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium">{c.label}</p>
                  <p className="text-xs text-muted-foreground">{c.desc}</p>
                </div>
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setOpen(!open)}
        className={`rounded-full p-3.5 shadow-lg transition-colors duration-300 ${
          open
            ? 'bg-secondary text-foreground'
            : 'bg-primary text-primary-foreground glow-strong'
        }`}
      >
        {open ? <X className="h-5 w-5" /> : <HelpCircle className="h-5 w-5" />}
      </motion.button>
    </div>
  );
}
