import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { bikes, cities } from '@/data/bikes';
import { Star, ArrowLeft, Gauge, Settings, Fuel, Ruler, Weight, Zap, MapPin, Clock } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { BookingForm } from '@/components/booking/BookingForm';
import { BikeReviews } from '@/components/booking/BikeReviews';

export default function BikeDetailsPage() {
  const { id } = useParams();
  const bike = bikes.find((b) => b.id === id);

  if (!bike) {
    return (
      <div className="pt-24 container mx-auto px-6 text-center py-20">
        <p className="text-muted-foreground text-lg">Bike not found</p>
        <Link to="/bikes" className="text-primary mt-4 inline-block">← Back to Bikes</Link>
      </div>
    );
  }

  const cityName = cities.find(c => c.id === bike.city)?.name || bike.city;

  const specs = [
    { icon: Gauge, label: 'Engine', value: `${bike.engineCC}cc` },
    { icon: Zap, label: 'Top Speed', value: bike.specs.topSpeed },
    { icon: Fuel, label: 'Mileage', value: bike.specs.mileage },
    { icon: Weight, label: 'Weight', value: bike.specs.weight },
    { icon: Ruler, label: 'Seat Height', value: bike.specs.seatHeight },
    { icon: Settings, label: 'Transmission', value: bike.transmission },
  ];

  return (
    <div className="pt-24 pb-12">
      <div className="container mx-auto px-6">
        <Link to="/bikes" className="inline-flex items-center text-muted-foreground hover:text-foreground text-sm mb-8 transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Bikes
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-card rounded-2xl border border-border/50 overflow-hidden">
              <img
                src={bike.image}
                alt={`${bike.brand} ${bike.name}`}
                className="w-full aspect-[4/3] object-cover"
              />
            </div>

            {/* Pricing Tiers */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-card rounded-2xl border border-border/50 p-6 mt-5"
            >
              <h3 className="font-display text-lg mb-4 flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" /> Rental Packages
              </h3>
              <div className="space-y-2">
                {bike.pricingTiers.map((tier, i) => (
                  <div
                    key={i}
                    className={`flex items-center justify-between py-3 px-4 rounded-xl text-sm ${
                      i === 0 ? 'bg-primary/10 border border-primary/20' : 'bg-secondary/50'
                    }`}
                  >
                    <span className="text-muted-foreground">
                      {tier.minDays}–{tier.maxDays || '30+'} days
                    </span>
                    <span className={`font-display text-lg ${i === 0 ? 'text-primary' : ''}`}>
                      ₹{tier.pricePerDay}<span className="text-[10px] text-muted-foreground font-body">/day</span>
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Details & Booking */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <div>
              <p className="text-primary text-xs font-semibold tracking-[0.2em] uppercase">{bike.brand}</p>
              <h1 className="font-display text-4xl md:text-5xl mt-1">{bike.name}</h1>
              <div className="flex items-center gap-3 mt-3 flex-wrap">
                <Badge variant="outline" className={bike.available
                  ? 'border-emerald-500/30 text-emerald-400'
                  : 'border-destructive/30 text-destructive'
                }>
                  {bike.available ? 'Available Now' : 'Currently Booked'}
                </Badge>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-primary text-primary" />
                  <span className="text-sm font-medium">{bike.rating}</span>
                  <span className="text-xs text-muted-foreground">({bike.reviewCount})</span>
                </div>
                <Badge variant="secondary" className="text-xs gap-1">
                  <MapPin className="h-3 w-3" /> {cityName}
                </Badge>
              </div>
            </div>

            {/* Specs Grid */}
            <div className="grid grid-cols-3 gap-3">
              {specs.map((s) => (
                <div key={s.label} className="bg-card rounded-xl border border-border/50 p-3 text-center">
                  <s.icon className="h-4 w-4 text-primary mx-auto mb-1" />
                  <p className="text-[10px] text-muted-foreground uppercase tracking-wider">{s.label}</p>
                  <p className="text-sm font-semibold">{s.value}</p>
                </div>
              ))}
            </div>

            <BookingForm bike={bike} />
          </motion.div>
        </div>

        <BikeReviews bikeId={bike.id} />
      </div>
    </div>
  );
}
