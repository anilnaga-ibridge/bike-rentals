import { motion } from 'framer-motion';
import { tripPackages } from '@/data/packages';
import { Calendar, MapPin, Star, Clock, Mountain, ChevronRight, Check } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const difficultyColors = {
  Easy: 'border-emerald-500/30 text-emerald-400',
  Moderate: 'border-primary/30 text-primary',
  Challenging: 'border-destructive/30 text-destructive',
};

export default function TripPackagesPage() {
  return (
    <div className="pt-24 pb-12">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-medium tracking-[0.3em] uppercase mb-2">Curated Adventures</p>
          <h1 className="font-display text-5xl md:text-8xl">
            TRIP <span className="text-gradient">PACKAGES</span>
          </h1>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Pre-planned premium motorcycle trips with everything included. Pick your adventure, 
            we handle the rest.
          </p>
        </motion.div>

        {/* Featured Packages */}
        <div className="space-y-8">
          {tripPackages.map((pkg, i) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="glass rounded-2xl overflow-hidden group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Image */}
                <div className="relative aspect-[16/10] lg:aspect-auto overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-card/60 via-transparent to-transparent lg:bg-gradient-to-l" />
                  {pkg.featured && (
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-primary text-primary-foreground font-bold">
                        ⭐ Featured
                      </Badge>
                    </div>
                  )}
                  <div className="absolute bottom-4 left-4 flex gap-2">
                    <Badge variant="outline" className={difficultyColors[pkg.difficulty]}>
                      <Mountain className="h-3 w-3 mr-1" /> {pkg.difficulty}
                    </Badge>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 space-y-5">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-primary text-primary" />
                        <span className="text-sm font-semibold">{pkg.rating}</span>
                        <span className="text-xs text-muted-foreground">({pkg.reviewCount})</span>
                      </div>
                      <Badge variant="outline" className="border-border text-muted-foreground">
                        <Calendar className="h-3 w-3 mr-1" /> {pkg.duration} Days
                      </Badge>
                    </div>
                    <h2 className="font-display text-4xl">{pkg.name}</h2>
                    <p className="text-sm text-muted-foreground mt-2">{pkg.description}</p>
                  </div>

                  {/* Route */}
                  <div className="glass rounded-lg p-3">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
                      <MapPin className="h-3 w-3 text-primary" /> Route
                    </div>
                    <p className="text-sm font-medium">{pkg.route}</p>
                  </div>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2">
                    {pkg.highlights.map((h) => (
                      <span key={h} className="text-xs bg-secondary/80 rounded-full px-3 py-1 text-muted-foreground">
                        {h}
                      </span>
                    ))}
                  </div>

                  {/* Includes */}
                  <div className="grid grid-cols-2 gap-1">
                    {pkg.includes.slice(0, 4).map((inc) => (
                      <div key={inc} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <Check className="h-3 w-3 text-emerald-400" /> {inc}
                      </div>
                    ))}
                  </div>

                  {/* Pricing & CTA */}
                  <div className="flex items-end justify-between pt-3 border-t border-border">
                    <div>
                      <span className="text-xs text-muted-foreground line-through">${pkg.originalPrice}</span>
                      <p className="font-display text-4xl text-primary">${pkg.price}</p>
                      <span className="text-xs text-muted-foreground">per person • {pkg.duration} days</span>
                    </div>
                    <div className="flex flex-col gap-2">
                      <p className="text-xs text-muted-foreground text-right">🏍️ {pkg.bikeName}</p>
                      <Button className="glow-strong font-bold">
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
