import { Bike, getPriceForDays } from '@/data/bikes';
import { Link } from 'react-router-dom';
import { Star, Fuel, Gauge, Settings, MapPin } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { cities } from '@/data/bikes';

interface BikeCardProps {
  bike: Bike;
}

export function BikeCard({ bike }: BikeCardProps) {
  const cityName = cities.find(c => c.id === bike.city)?.name || bike.city;
  const startPrice = bike.pricingTiers[bike.pricingTiers.length - 1].pricePerDay;

  return (
    <Link to={`/bikes/${bike.id}`} className="block group">
      <div className="bg-card rounded-2xl overflow-hidden border border-border/50 card-lift">
        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={bike.image}
            alt={`${bike.brand} ${bike.name}`}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />

          {/* Status badge */}
          <Badge
            className={`absolute top-3 left-3 text-[10px] font-bold uppercase ${
              bike.available
                ? 'bg-emerald-500/90 text-white border-0'
                : 'bg-destructive/90 text-white border-0'
            }`}
          >
            {bike.available ? 'Available' : 'Booked'}
          </Badge>

          {/* Location */}
          <div className="absolute top-3 right-3">
            <Badge variant="secondary" className="text-[10px] gap-1 bg-background/80 backdrop-blur-sm border-0">
              <MapPin className="h-2.5 w-2.5" /> {cityName}
            </Badge>
          </div>

          {/* Price */}
          <div className="absolute bottom-3 left-3">
            <span className="font-display text-xl text-primary">₹{startPrice}</span>
            <span className="text-[10px] text-muted-foreground">/day</span>
          </div>
        </div>

        {/* Info */}
        <div className="p-4 space-y-3">
          <div>
            <p className="text-[10px] text-primary uppercase tracking-widest font-semibold">{bike.brand}</p>
            <h3 className="font-display text-lg">{bike.name}</h3>
          </div>

          <div className="flex items-center gap-3 text-[11px] text-muted-foreground">
            <span className="flex items-center gap-1">
              <Gauge className="h-3 w-3 text-primary" /> {bike.engineCC}cc
            </span>
            <span className="flex items-center gap-1">
              <Settings className="h-3 w-3 text-primary" /> {bike.transmission}
            </span>
            <span className="flex items-center gap-1">
              <Fuel className="h-3 w-3 text-primary" /> {bike.fuelType}
            </span>
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-border/50">
            <div className="flex items-center gap-1">
              <Star className="h-3.5 w-3.5 fill-primary text-primary" />
              <span className="text-sm font-semibold">{bike.rating}</span>
              <span className="text-[10px] text-muted-foreground">({bike.reviewCount})</span>
            </div>
            <span className="text-[10px] text-primary font-semibold uppercase tracking-wider group-hover:underline">
              Book Now →
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
