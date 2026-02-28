import { motion, AnimatePresence } from 'framer-motion';
import { Star, Play, Quote, X } from 'lucide-react';
import { testimonials } from '@/data/reviews';
import { useState } from 'react';

export function TestimonialsSection() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 blur-[150px] rounded-full" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-medium tracking-[0.3em] uppercase mb-2">Testimonials</p>
          <h2 className="font-display text-5xl md:text-7xl">
            WHAT RIDERS <span className="text-gradient">SAY</span>
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto text-sm">
            Real stories from riders who experienced the RideX difference
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.7, ease: 'easeOut' }}
              whileHover={{ y: -4, transition: { duration: 0.3 } }}
              className="glass rounded-2xl overflow-hidden group"
            >
              {/* Media */}
              {(t.image || t.videoThumbnail) && (
                <div className="relative aspect-[16/9] overflow-hidden">
                  <motion.img
                    src={t.videoThumbnail || t.image}
                    alt={`${t.name}'s experience`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.8 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-card/30 to-transparent" />
                  {t.videoUrl && (
                    <button
                      onClick={() => setActiveVideo(t.videoUrl!)}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <motion.div
                        whileHover={{ scale: 1.15 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center glow-strong"
                      >
                        <Play className="h-6 w-6 text-primary-foreground ml-1" />
                      </motion.div>
                    </button>
                  )}
                  {t.videoUrl && (
                    <div className="absolute top-3 right-3">
                      <span className="text-[10px] uppercase tracking-wider bg-primary/80 text-primary-foreground px-2 py-0.5 rounded-full font-bold">
                        📹 Video
                      </span>
                    </div>
                  )}
                </div>
              )}

              {/* Content */}
              <div className="p-6 space-y-4">
                <Quote className="h-8 w-8 text-primary/30" />
                <p className="text-foreground/90 leading-relaxed">{t.comment}</p>

                <div className="flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <motion.div
                      key={j}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 + j * 0.05, duration: 0.3 }}
                    >
                      <Star
                        className={`h-4 w-4 ${j < t.rating ? 'fill-primary text-primary' : 'text-muted'}`}
                      />
                    </motion.div>
                  ))}
                </div>

                <div className="flex items-center gap-3 pt-2 border-t border-border">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-11 h-11 rounded-full object-cover border-2 border-primary/30"
                  />
                  <div>
                    <p className="font-semibold text-sm">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role} • {t.city}</p>
                  </div>
                  <div className="ml-auto text-right">
                    <p className="text-xs text-primary font-medium">{t.bikeRented}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Video Modal */}
        <AnimatePresence>
          {activeVideo && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 backdrop-blur-sm"
              onClick={() => setActiveVideo(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="relative w-full max-w-3xl mx-6 aspect-video glass rounded-2xl overflow-hidden flex items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                <p className="text-muted-foreground text-sm">Video player placeholder</p>
                <button
                  onClick={() => setActiveVideo(null)}
                  className="absolute top-4 right-4 p-2 glass rounded-full hover:bg-secondary transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
