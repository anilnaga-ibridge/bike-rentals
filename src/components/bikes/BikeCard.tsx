import { Bike } from '@/data/bikes';
import { Star, Fuel, Gauge, Settings, MapPin, Zap, ArrowRight, Heart } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { cities } from '@/data/bikes';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

interface BikeCardProps {
  bike: Bike;
}

export function BikeCard({ bike }: BikeCardProps) {
  const navigate = useNavigate();
  const [liked, setLiked] = useState(false);
  const cityName = cities.find(c => c.id === bike.city)?.name || bike.city;
  const startPrice = bike.pricingTiers[bike.pricingTiers.length - 1].pricePerDay;

  const handleBookClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigate(`/bikes/${bike.id}`);
  };

  return (
    <motion.div
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="group relative cursor-pointer"
      onClick={handleBookClick}
    >
      <div className="relative overflow-hidden rounded-[2.5rem] bg-background border border-primary/10 shadow-lg shadow-primary/5 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-primary/10 group-hover:border-primary/25">

        {/* Hover gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0" />

        <div className="relative z-10">
          {/* ── Image Section ── */}
          <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-primary/5 to-secondary/5">
            <img
              src={bike.image}
              alt={bike.name || 'Rental Bike'}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
            {/* Bottom gradient for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

            {/* Top badges */}
            <div className="absolute top-4 left-4 flex gap-2 flex-wrap">
              <Badge className={cn(
                "px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest border-0 shadow-lg backdrop-blur-sm",
                bike.available ? "bg-emerald-500 text-white" : "bg-rose-500 text-white"
              )}>
                {bike.available ? '✓ Available' : 'On Trip'}
              </Badge>
            </div>

            {/* Wishlist Button */}
            <button
              onClick={(e) => { e.stopPropagation(); setLiked(!liked); }}
              className={cn(
                "absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm border",
                liked
                  ? "bg-rose-500 border-rose-400 text-white scale-110"
                  : "bg-white/20 border-white/20 text-white hover:bg-white/30"
              )}
            >
              <Heart className={cn("h-4 w-4 transition-all", liked && "fill-white")} />
            </button>

            {/* Bottom info overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between">
              <div className="flex items-center gap-1.5 bg-white/15 backdrop-blur-md border border-white/20 rounded-xl px-3 py-1.5">
                <MapPin className="h-3 w-3 text-secondary shrink-0" />
                <span className="text-[9px] font-black text-white uppercase tracking-widest">{cityName}</span>
              </div>
              {/* Price tag */}
              <div className="bg-primary text-white rounded-2xl px-4 py-2 shadow-xl shadow-primary/30">
                <span className="text-[9px] font-bold opacity-70 block leading-none">from</span>
                <span className="font-display font-black text-lg leading-tight">₹{startPrice}<span className="text-xs font-bold opacity-60">/day</span></span>
              </div>
            </div>
          </div>

          {/* ── Info Section ── */}
          <div className="p-6 space-y-5">
            {/* Category + Name */}
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <Zap className="h-3 w-3 fill-secondary text-secondary" />
                <span className="text-[10px] font-black uppercase tracking-[0.25em] text-secondary">{bike.category}</span>
              </div>
              <h3 className="font-display font-black text-xl text-primary tracking-tight leading-tight group-hover:text-secondary transition-colors duration-300">
                {bike.name || `Premium ${bike.category} Bike`}
              </h3>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-2">
              {[
                { icon: Gauge, label: `${bike.engineCC}cc` },
                { icon: Settings, label: bike.transmission },
                { icon: Fuel, label: bike.fuelType },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center gap-1.5 p-3 rounded-2xl bg-primary/5 border border-primary/5 group-hover:bg-primary/10 group-hover:border-primary/15 transition-all duration-300"
                >
                  <stat.icon className="h-4 w-4 text-primary/70" />
                  <span className="text-[9px] font-black text-primary/60 uppercase tracking-wider">{stat.label}</span>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between pt-1">
              <div className="flex items-center gap-1.5 bg-secondary/10 border border-secondary/20 px-3 py-1.5 rounded-full">
                <Star className="h-3.5 w-3.5 fill-secondary text-secondary" />
                <span className="text-xs font-black text-primary">{bike.rating}</span>
                <span className="text-[10px] text-muted-foreground">({bike.reviewCount})</span>
              </div>

              <Button
                onClick={handleBookClick}
                className="h-10 px-6 rounded-full bg-secondary hover:bg-primary text-white font-black text-[10px] uppercase tracking-widest transition-all duration-300 shadow-md shadow-secondary/20 hover:shadow-primary/20 hover:scale-105 border-0"
              >
                Book Now
                <ArrowRight className="ml-1.5 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
