import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '@/data/reviews';

const avatarColors = [
  'from-primary to-blue-700',
  'from-secondary to-orange-600',
  'from-violet-600 to-purple-700',
  'from-emerald-500 to-green-600',
];

export function TestimonialsSection() {
  return (
    <section className="py-28 bg-background relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-secondary text-xs font-black tracking-[0.4em] uppercase">Rider Reviews</span>
          <h2 className="font-display font-black text-4xl sm:text-5xl text-primary mt-2">What Riders Say</h2>
          <p className="text-muted-foreground mt-4 max-w-md mx-auto leading-relaxed">
            Over 10,000 happy riders trust Sri Ganesh Bike Rentals every month.
          </p>
        </motion.div>

        {/* Star summary bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-3 mb-14"
        >
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-6 w-6 fill-secondary text-secondary" />
            ))}
          </div>
          <span className="font-display font-black text-3xl text-primary">4.9</span>
          <span className="text-muted-foreground text-sm font-medium">/ 5 from 500+ reviews</span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="group glass border border-primary/10 rounded-[2rem] p-8 hover:shadow-xl hover:border-primary/20 transition-all duration-500 cursor-default relative overflow-hidden"
            >
              {/* Subtle gradient background on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-[2rem]" />

              <div className="relative z-10">
                {/* Quote icon */}
                <Quote className="h-10 w-10 text-secondary/20 mb-4 -scale-x-100" />

                {/* Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star
                      key={j}
                      className={`h-4 w-4 ${j < t.rating ? 'fill-secondary text-secondary' : 'text-muted'}`}
                    />
                  ))}
                </div>

                <p className="text-foreground text-sm leading-relaxed mb-6 font-medium">"{t.comment}"</p>

                <div className="flex items-center gap-4 pt-5 border-t border-primary/10">
                  {/* Avatar — try image, fallback to initials */}
                  <div className="relative shrink-0">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-12 h-12 rounded-2xl object-cover border-2 border-primary/10"
                      onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                    />
                    <div className={`absolute inset-0 w-12 h-12 rounded-2xl bg-gradient-to-br ${avatarColors[i % avatarColors.length]} flex items-center justify-center -z-10`}>
                      <span className="text-white font-black text-sm">{t.name.charAt(0)}</span>
                    </div>
                  </div>
                  <div>
                    <p className="font-black text-sm text-primary">{t.name}</p>
                    <p className="text-[11px] text-muted-foreground font-medium">{t.role} · {t.city}</p>
                  </div>
                  <div className="ml-auto">
                    <span className="text-[9px] font-black text-secondary bg-secondary/10 px-3 py-1 rounded-full uppercase tracking-wider">Verified</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
