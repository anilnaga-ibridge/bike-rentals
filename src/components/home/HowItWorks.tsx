import { motion } from 'framer-motion';
import { Search, Bike, Package, MessageCircle, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const steps = [
  {
    icon: Search, step: '01', title: 'Find Your Ride',
    desc: 'Pick your hub (Madhapur, Ameerpet or Kukatpally) and choose your dates.',
    color: 'bg-primary', shadow: 'shadow-primary/30',
  },
  {
    icon: Bike, step: '02', title: 'Select Your Bike',
    desc: 'Browse 500+ bikes — scooties, cruisers, commuters and sports bikes.',
    color: 'bg-secondary', shadow: 'shadow-secondary/30',
  },
  {
    icon: Package, step: '03', title: 'Choose Package',
    desc: 'Pick the daily, weekly, fortnightly or monthly plan that fits your budget.',
    color: 'bg-violet-600', shadow: 'shadow-violet-500/30',
  },
  {
    icon: MessageCircle, step: '04', title: 'Book on WhatsApp',
    desc: 'Confirm via WhatsApp in seconds. No app download, no hassle.',
    color: 'bg-emerald-600', shadow: 'shadow-emerald-500/30',
  },
];

export function HowItWorks() {
  return (
    <section className="py-28 bg-[#020617] relative overflow-hidden" id="how-it-works">
      {/* Atmospheric glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-secondary text-xs font-black tracking-[0.4em] uppercase">4-Step Process</span>
          <h2 className="font-display font-black text-4xl sm:text-5xl text-white mt-2">
            How Booking <span className="text-secondary drop-shadow-[0_0_15px_rgba(255,106,0,0.4)]">Works</span>
          </h2>
          <p className="text-white/50 mt-4 max-w-lg mx-auto leading-relaxed">
            Getting on the road has never been easier. Done in under 2 minutes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative max-w-6xl mx-auto">
          {/* Connector line  */}
          <div className="hidden lg:block absolute top-14 left-[12.5%] right-[12.5%] h-[2px] bg-gradient-to-r from-primary/30 via-secondary/30 to-emerald-500/30" />

          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * 0.12, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center text-center group"
            >
              {/* Icon circle */}
              <div className="relative mb-8">
                <div className={cn(
                  'w-28 h-28 rounded-[2rem] flex items-center justify-center text-white shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6',
                  s.color, s.shadow, 'shadow-lg'
                )}>
                  <s.icon className="h-12 w-12" />
                </div>
                <span className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-white text-foreground shadow-xl border border-primary/10 flex items-center justify-center font-display font-black text-sm">
                  {s.step}
                </span>
                {i < steps.length - 1 && (
                  <div className="hidden sm:flex lg:hidden absolute top-1/2 -right-8 -translate-y-1/2">
                    <ArrowRight className="h-5 w-5 text-white/20" />
                  </div>
                )}
              </div>
              <h3 className="font-display font-black text-xl text-white mb-3">{s.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed max-w-[220px]">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
