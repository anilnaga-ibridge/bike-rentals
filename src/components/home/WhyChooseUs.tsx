import { motion } from 'framer-motion';
import { Shield, Clock, MapPin, CreditCard, Headphones, Award } from 'lucide-react';

const features = [
  { icon: Shield, title: 'Fully Insured', desc: 'Every ride is covered with comprehensive insurance' },
  { icon: Clock, title: 'Instant Booking', desc: 'Book in seconds, pick up in minutes' },
  { icon: MapPin, title: '5 Cities', desc: 'Available across major metropolitan areas' },
  { icon: CreditCard, title: 'Flexible Payment', desc: 'Pay full or partial — your choice' },
  { icon: Headphones, title: '24/7 Support', desc: 'Round-the-clock roadside assistance' },
  { icon: Award, title: 'Premium Fleet', desc: 'Only world-class motorcycles in our lineup' },
];

export function WhyChooseUs() {
  return (
    <section className="py-24 surface">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-medium tracking-[0.3em] uppercase mb-2">Why RideX</p>
          <h2 className="font-display text-5xl md:text-6xl">THE RIDEX DIFFERENCE</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="glass rounded-xl p-8 glass-hover group cursor-default"
            >
              <f.icon className="h-10 w-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-body text-lg font-semibold mb-2">{f.title}</h3>
              <p className="text-muted-foreground text-sm">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
