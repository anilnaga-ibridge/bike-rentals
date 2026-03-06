import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, MessageCircle, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import { toast } from 'sonner';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      toast.error('Please fill all required fields');
      return;
    }
    toast.success('Message sent! We\'ll get back to you within 24 hours.');
    setName(''); setEmail(''); setPhone(''); setMessage('');
  };

  const contacts = [
    { icon: Phone, label: 'Phone', value: '+91 9876543210', href: 'tel:+919876543210' },
    { icon: Mail, label: 'Email', value: 'support@ridex.com', href: 'mailto:support@ridex.com' },
    { icon: MessageCircle, label: 'WhatsApp', value: 'Chat with us', href: 'https://wa.me/919876543210' },
    { icon: MapPin, label: 'Office', value: 'Bangalore, India', href: '#' },
  ];

  return (
    <div className="pt-24 pb-12">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="text-primary text-xs font-semibold tracking-[0.2em] uppercase">Get In Touch</span>
          <h1 className="font-display text-4xl sm:text-5xl mt-2">Contact Us</h1>
          <p className="text-muted-foreground mt-3 text-sm">
            Have a question? We'd love to hear from you. Send us a message and we'll respond within 24 hours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            {contacts.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-card rounded-2xl border border-border/50 p-5 hover:border-primary/30 transition-colors group"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <c.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">{c.label}</p>
                  <p className="text-sm font-medium">{c.value}</p>
                </div>
              </a>
            ))}
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            onSubmit={handleSubmit}
            className="lg:col-span-2 bg-card rounded-2xl border border-border/50 p-7 space-y-5"
          >
            <h3 className="font-display text-xl">Send a Message</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-[11px] uppercase tracking-widest text-muted-foreground font-medium">Name *</label>
                <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" className="bg-secondary border-none" />
              </div>
              <div className="space-y-1.5">
                <label className="text-[11px] uppercase tracking-widest text-muted-foreground font-medium">Email *</label>
                <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="your@email.com" className="bg-secondary border-none" />
              </div>
            </div>
            <div className="space-y-1.5">
              <label className="text-[11px] uppercase tracking-widest text-muted-foreground font-medium">Phone</label>
              <Input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+91 98765 43210" className="bg-secondary border-none" />
            </div>
            <div className="space-y-1.5">
              <label className="text-[11px] uppercase tracking-widest text-muted-foreground font-medium">Message *</label>
              <Textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="How can we help?" className="bg-secondary border-none" rows={4} />
            </div>
            <Button type="submit" className="w-full gold-shine text-primary-foreground border-0 font-bold" size="lg">
              <Send className="mr-2 h-4 w-4" /> Send Message
            </Button>
          </motion.form>
        </div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 rounded-2xl overflow-hidden border border-border/50"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.84916296526!2d77.46612559677948!3d12.953945614498955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1709000000000!5m2!1sen!2sin"
            width="100%"
            height="350"
            style={{ border: 0, filter: 'grayscale(1) invert(0.92) contrast(0.9)' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="RideX Location"
          />
        </motion.div>
      </div>
    </div>
  );
}
