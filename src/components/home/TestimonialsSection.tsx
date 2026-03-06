import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '@/data/reviews';

export function TestimonialsSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 blur-[150px] rounded-full" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-primary text-xs font-semibold tracking-[0.2em] uppercase">Testimonials</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl mt-1">What Riders Say</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ y: -4 }}
              className="bg-card rounded-2xl p-6 border border-border/50"
            >
              <Quote className="h-8 w-8 text-primary/20 mb-3" />
              <p className="text-foreground/90 text-sm leading-relaxed mb-4">{t.comment}</p>

              <div className="flex items-center gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star
                    key={j}
                    className={`h-3.5 w-3.5 ${j < t.rating ? 'fill-primary text-primary' : 'text-muted'}`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-3 pt-3 border-t border-border/50">
                <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover border-2 border-primary/20" />
                <div>
                  <p className="font-semibold text-sm">{t.name}</p>
                  <p className="text-[11px] text-muted-foreground">{t.role} • {t.city}</p>
                </div>
                <span className="ml-auto text-[10px] text-primary font-semibold">{t.bikeRented}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
