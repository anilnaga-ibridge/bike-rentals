import { motion } from 'framer-motion';
import { Search, Bike, Package, CreditCard } from 'lucide-react';

const steps = [
  { icon: Search, title: 'Find Your Ride', desc: 'Enter your city, pickup & drop dates to search available bikes', step: '01' },
  { icon: Bike, title: 'Select Your Bike', desc: 'Browse our fleet and choose the bike that fits your style & budget', step: '02' },
  { icon: Package, title: 'Choose Package', desc: 'Pick from daily, weekly or monthly rental packages for the best rates', step: '03' },
  { icon: CreditCard, title: 'Confirm Booking', desc: 'Pay the security deposit, pick up your bike and start riding!', step: '04' },
];

export function HowItWorks() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-primary text-xs font-semibold tracking-[0.2em] uppercase">Simple Process</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl mt-1">How Booking Works</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="relative text-center group"
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-px bg-gradient-to-r from-primary/30 to-transparent" />
              )}

              <div className="relative inline-flex mb-5">
                <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <s.icon className="h-8 w-8 text-primary" />
                </div>
                <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full gold-shine text-primary-foreground flex items-center justify-center text-xs font-bold">
                  {s.step}
                </span>
              </div>
              <h3 className="font-display text-lg mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm max-w-[200px] mx-auto leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
