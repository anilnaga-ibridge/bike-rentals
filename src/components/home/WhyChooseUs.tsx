import { motion } from 'framer-motion';
import { Package, Bike, Wrench, Headphones, Wallet, RefreshCcw } from 'lucide-react';

const features = [
  { icon: Package, title: 'Flexible Packages', desc: 'Daily, weekly, fortnightly & monthly rental options to suit your needs' },
  { icon: Bike, title: 'Wide Range of Bikes', desc: 'From scooties to sports bikes — 500+ vehicles across 6 cities' },
  { icon: Wrench, title: 'Highly Maintained', desc: 'Every bike is serviced and sanitized before each ride' },
  { icon: Headphones, title: '24/7 Support', desc: 'Round-the-clock roadside assistance & customer support' },
  { icon: Wallet, title: 'Book Now, Pay Later', desc: 'Reserve your ride instantly with minimal deposit' },
  { icon: RefreshCcw, title: 'Instant Refund', desc: 'Cancel anytime and get your deposit refunded within 24 hours' },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 surface">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-primary text-xs font-semibold tracking-[0.2em] uppercase">Why RideX</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl mt-1">Why Choose Us</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{ y: -4, transition: { duration: 0.3 } }}
              className="bg-card rounded-2xl p-7 border border-border/50 group cursor-default"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <f.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-display text-lg mb-2">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
