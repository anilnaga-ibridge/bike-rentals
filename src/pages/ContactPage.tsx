import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { WhatsAppIcon } from '@/components/icons/WhatsAppIcon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import { toast } from 'sonner';
import { BRAND } from '@/constants/brand';

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
    { icon: Phone, label: 'Phone', value: BRAND.whatsappDisplay, href: `tel:${BRAND.whatsapp}` },
    { icon: Phone, label: 'Phone', value: '+91 81068 85488', href: 'tel:8106885488' },
    { icon: Mail, label: 'Email', value: BRAND.email, href: `mailto:${BRAND.email}` },
    { icon: WhatsAppIcon, label: 'WhatsApp', value: 'Chat with us', href: `https://wa.me/${BRAND.secondaryWhatsapp}` },
    { icon: MapPin, label: 'Office', value: 'Hyderabad, Telangana, India', href: '#' },
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
              <Input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder={BRAND.whatsappDisplay} className="bg-secondary border-none" />
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

        {/* Our Branches */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h2 className="font-display font-black text-4xl text-center mb-12 text-primary">
            Our <span className="text-secondary">Hubs</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Ameerpet Hub',
                address: 'Shiv Bagh Colony, Near Fruitoholic, Ameerpet, Hyderabad - 500016',
                mapUrl: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15551.941494285498!2d78.4867813!3d17.4506021!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91f5f8b3b3b3%3A0x1234567890abcdef!2sHyderabad!5e0!3m2!1sen!2sin',
                link: 'https://maps.app.goo.gl/JbfiTCNVrpRQrvaV7',
              },
              {
                name: 'Madhapur Hub',
                address: 'Madhapur, HITEC City Area, Hyderabad - 500081',
                mapUrl: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15552.5!2d78.49!3d17.44!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91f5f8b3b3b4%3A0x1234567890abcdf0!2sHyderabad!5e0!3m2!1sen!2sin',
                link: 'https://maps.app.goo.gl/h8FasxtNgLKvoCEA6',
              },
              {
                name: 'Kukatpally Hub',
                address: 'Kukatpally, Near KPHB Metro Station, Hyderabad - 500072',
                mapUrl: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15553.0!2d78.48!3d17.45!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91f5f8b3b3b5%3A0x1234567890abcdf1!2sHyderabad!5e0!3m2!1sen!2sin',
                link: 'https://maps.app.goo.gl/67rjbrQDXeaKWCe77',
              },
            ].map((branch, i) => (
              <motion.div
                key={branch.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="group relative bg-white/70 backdrop-blur-xl rounded-[2rem] border border-primary/10 shadow-xl shadow-primary/5 overflow-hidden hover:shadow-2xl hover:border-primary/30 transition-all duration-500 card-lift flex flex-col"
              >
                {/* Brand Mix Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-white/50 to-secondary/10 opacity-60 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="relative z-10 w-full h-48 overflow-hidden rounded-t-[2rem]">
                  <iframe
                    src={branch.mapUrl}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    style={{ border: 0, filter: 'grayscale(0.8) contrast(1.1) opacity(0.9) sepia(0.1)' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={branch.name}
                  />
                  {/* Subtle top inner shadow overlay for iframe */}
                  <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(0,0,0,0.1)] pointer-events-none" />
                </div>

                <div className="relative z-10 p-6 flex flex-col justify-between flex-grow gap-3 bg-white/40">
                  <div className="flex items-start gap-2">
                    <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <MapPin className="h-4 w-4 text-secondary drop-shadow-sm" />
                    </div>
                    <div>
                      <span className="font-display font-black text-lg text-primary">{branch.name}</span>
                      <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{branch.address}</p>
                    </div>
                  </div>

                  <a
                    href={branch.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <Button variant="outline" className="w-full border-primary/20 text-primary hover:bg-primary hover:text-white transition-all group-hover:border-primary/50 shadow-sm" size="sm">
                      Open in Maps
                    </Button>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
