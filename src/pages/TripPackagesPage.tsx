import { motion } from 'framer-motion';
import { tripPackages } from '@/data/packages';
import { Calendar, MapPin, Star, Mountain, ChevronRight, Check } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const difficultyColors = {
  Easy: 'border-emerald-500/30 text-emerald-400',
  Moderate: 'border-primary/30 text-primary',
  Challenging: 'border-destructive/30 text-destructive',
};

export default function TripPackagesPage() {
  return (
    <div className="pt-24 pb-12">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-14">
          <span className="text-primary text-xs font-semibold tracking-[0.2em] uppercase">Curated Adventures</span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl mt-2">
            Trip <span className="text-gradient">Packages</span>
          </h1>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto text-sm">
            Pre-planned premium motorcycle trips with everything included.
          </p>
        </motion.div>

        <div className="space-y-6">
          {tripPackages.map((pkg, i) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="bg-card rounded-2xl border border-border/50 overflow-hidden card-lift"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative aspect-[16/10] lg:aspect-auto overflow-hidden">
                  <img src={pkg.image} alt={pkg.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-r from-card/60 via-transparent to-transparent lg:bg-gradient-to-l" />
                  {pkg.featured && (
                    <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground font-bold border-0">⭐ Featured</Badge>
                  )}
                  <Badge variant="outline" className={`absolute bottom-4 left-4 ${difficultyColors[pkg.difficulty]}`}>
                    <Mountain className="h-3 w-3 mr-1" /> {pkg.difficulty}
                  </Badge>
                </div>

                <div className="p-7 space-y-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-primary text-primary" />
                        <span className="text-sm font-semibold">{pkg.rating}</span>
                        <span className="text-[11px] text-muted-foreground">({pkg.reviewCount})</span>
                      </div>
                      <Badge variant="outline" className="border-border text-muted-foreground text-[10px]">
                        <Calendar className="h-3 w-3 mr-1" /> {pkg.duration} Days
                      </Badge>
                    </div>
                    <h2 className="font-display text-2xl sm:text-3xl">{pkg.name}</h2>
                    <p className="text-sm text-muted-foreground mt-2">{pkg.description}</p>
                  </div>

                  <div className="bg-secondary/50 rounded-xl p-3 flex items-center gap-2 text-sm">
                    <MapPin className="h-3.5 w-3.5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{pkg.route}</span>
                  </div>

                  <div className="grid grid-cols-2 gap-1">
                    {pkg.includes.slice(0, 4).map((inc) => (
                      <div key={inc} className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
                        <Check className="h-3 w-3 text-emerald-400" /> {inc}
                      </div>
                    ))}
                  </div>

                  <div className="flex items-end justify-between pt-3 border-t border-border/50">
                    <div>
                      <span className="text-[11px] text-muted-foreground line-through">₹{pkg.originalPrice.toLocaleString()}</span>
                      <p className="font-display text-3xl text-primary">₹{pkg.price.toLocaleString()}</p>
                      <span className="text-[10px] text-muted-foreground">per person • {pkg.duration} days</span>
                    </div>
                    <div className="text-right">
                      <p className="text-[11px] text-muted-foreground mb-2">🏍️ {pkg.bikeName}</p>
                      <Button className="gold-shine text-primary-foreground border-0 font-bold">
                        Book Package <ChevronRight className="h-4 w-4 ml-1" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
