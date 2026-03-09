import { motion } from 'framer-motion';
import { Package, Bike, Wrench, Headphones, Wallet, RefreshCcw } from 'lucide-react';

const features = [
  {
    icon: Package, title: 'Flexible Packages', desc: 'Daily, weekly, fortnightly & monthly rental options to suit your needs.',
    gradient: 'from-blue-500/20 to-sky-500/10', border: 'border-blue-200', icon_bg: 'bg-blue-50 text-blue-600',
  },
  {
    icon: Bike, title: 'Wide Range of Bikes', desc: 'From scooties to sports bikes — 500+ vehicles across 3 Hyderabad hubs.',
    gradient: 'from-secondary/20 to-orange-500/10', border: 'border-secondary/20', icon_bg: 'bg-secondary/10 text-secondary',
  },
  {
    icon: Wrench, title: 'Highly Maintained', desc: 'Every bike is serviced and sanitized before each ride — 50-point quality check.',
    gradient: 'from-emerald-500/20 to-green-500/10', border: 'border-emerald-200', icon_bg: 'bg-emerald-50 text-emerald-600',
  },
  {
    icon: Headphones, title: '24/7 Support', desc: 'Round-the-clock roadside assistance & customer support via WhatsApp.',
    gradient: 'from-violet-500/20 to-purple-500/10', border: 'border-violet-200', icon_bg: 'bg-violet-50 text-violet-500',
  },
  {
    icon: Wallet, title: 'Minimal Deposit', desc: "Reserve your ride instantly with the industry's lowest security deposit.",
    gradient: 'from-amber-500/20 to-yellow-500/10', border: 'border-amber-200', icon_bg: 'bg-amber-50 text-amber-600',
  },
  {
    icon: RefreshCcw, title: 'Instant Refund', desc: 'Cancel anytime and get your deposit refunded within 24 hours — guaranteed.',
    gradient: 'from-rose-500/20 to-pink-500/10', border: 'border-rose-200', icon_bg: 'bg-rose-50 text-rose-500',
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-28 bg-gradient-to-br from-primary/5 via-background to-secondary/5 relative overflow-hidden">
      <div className="absolute -left-32 top-20 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -right-32 bottom-20 w-96 h-96 bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-secondary text-xs font-black tracking-[0.4em] uppercase">The SG Advantage</span>
          <h2 className="font-display font-black text-4xl sm:text-5xl text-primary mt-2">
            Why <span className="text-secondary">Choose</span> Us
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto leading-relaxed">
            We don't just rent bikes — we deliver an experience you can trust, every single time.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className={`group relative rounded-[2rem] border bg-gradient-to-br p-8 cursor-default overflow-hidden transition-shadow duration-500 hover:shadow-xl ${f.gradient} ${f.border}`}
            >
              {/* Watermark icon */}
              <div className="absolute -top-2 -right-2 opacity-[0.07] pointer-events-none">
                <f.icon className="w-28 h-28" />
              </div>
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ${f.icon_bg}`}>
                <f.icon className="h-7 w-7" />
              </div>
              <h3 className="font-display font-black text-xl text-foreground mb-3">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
