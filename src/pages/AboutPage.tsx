import { motion } from 'framer-motion';
import { Shield, Heart, Eye, Wrench, Users, Award } from 'lucide-react';

const values = [
  { icon: Heart, title: 'Our Mission', desc: 'To make bike rentals accessible, affordable, and hassle-free for every Indian commuter and traveler.' },
  { icon: Eye, title: 'Our Vision', desc: 'To become India\'s most trusted two-wheeler rental platform, connecting riders with quality vehicles in every city.' },
  { icon: Shield, title: 'Safety First', desc: 'Every vehicle undergoes a 50-point quality check. We provide helmets, insurance, and 24/7 roadside assistance.' },
  { icon: Wrench, title: 'Fleet Maintenance', desc: 'Regular servicing, sanitization after each rental, and proactive maintenance scheduling keep our fleet in top condition.' },
];

export default function AboutPage() {
  return (
    <div className="pt-24 pb-12">
      <div className="container mx-auto px-6">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary text-xs font-semibold tracking-[0.2em] uppercase">About Us</span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl mt-2">
            We're <span className="text-gradient">RideX</span>
          </h1>
          <p className="text-muted-foreground mt-4 text-base leading-relaxed">
            Founded in 2024, RideX started with a simple idea: make two-wheeler rentals as easy as booking a cab. 
            Today, we operate across 6 major Indian cities with 500+ bikes, serving 10,000+ happy riders every month.
          </p>
        </motion.div>

        {/* Story */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20"
        >
          <div className="bg-card rounded-2xl border border-border/50 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=800&q=80"
              alt="Our story"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center space-y-5">
            <span className="text-primary text-xs font-semibold tracking-[0.2em] uppercase">Our Story</span>
            <h2 className="font-display text-3xl">Born from a simple need</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Our founders were frustrated with the lack of reliable, affordable bike rental options in Indian cities. 
              Whether for daily commuting, weekend trips, or exploring new cities — there was no platform that offered 
              transparent pricing, quality vehicles, and instant booking.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              RideX was built to change that. We partner with verified vehicle owners, maintain strict quality standards, 
              and use technology to make the entire experience seamless — from search to ride.
            </p>
            <div className="flex gap-8 pt-4">
              {[
                { value: '6', label: 'Cities' },
                { value: '500+', label: 'Bikes' },
                { value: '10K+', label: 'Riders' },
              ].map(s => (
                <div key={s.label}>
                  <p className="font-display text-2xl text-primary">{s.value}</p>
                  <p className="text-[11px] text-muted-foreground uppercase tracking-wider">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Values */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-2xl border border-border/50 p-7"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <v.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-display text-lg mb-2">{v.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
