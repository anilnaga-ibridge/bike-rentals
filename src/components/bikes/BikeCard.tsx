import { Bike } from '@/data/bikes';
import { Link } from 'react-router-dom';
import { Star, Fuel, Gauge, Settings } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface BikeCardProps {
  bike: Bike;
}

export function BikeCard({ bike }: BikeCardProps) {
  return (
    <Link to={`/bikes/${bike.id}`} className="block group">
      <div className="glass rounded-xl overflow-hidden glass-hover">
        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={bike.image}
            alt={`${bike.brand} ${bike.name}`}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />

          {/* Status badge */}
          <Badge
            className={`absolute top-3 right-3 text-xs font-semibold ${
              bike.available
                ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30'
                : 'bg-destructive/20 text-destructive border-destructive/30'
            }`}
            variant="outline"
          >
            {bike.available ? 'Available' : 'Booked'}
          </Badge>

          {/* Price */}
          <div className="absolute bottom-3 left-3">
            <span className="font-display text-2xl text-primary">${bike.pricePerDay}</span>
            <span className="text-xs text-muted-foreground">/day</span>
          </div>
        </div>

        {/* Info */}
        <div className="p-4 space-y-3">
          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-wider">{bike.brand}</p>
            <h3 className="font-body text-lg font-semibold">{bike.name}</h3>
          </div>

          <div className="flex items-center gap-4 text-xs text-muted-foreground">
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

          <div className="flex items-center gap-1">
            <Star className="h-3.5 w-3.5 fill-primary text-primary" />
            <span className="text-sm font-medium">{bike.rating}</span>
            <span className="text-xs text-muted-foreground">({bike.reviewCount})</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
