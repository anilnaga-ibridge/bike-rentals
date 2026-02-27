import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { bikes } from '@/data/bikes';
import { Star, ArrowLeft, Gauge, Settings, Fuel, Ruler, Weight, Zap } from 'lucide-react';
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
        <Link to="/bikes" className="text-primary mt-4 inline-block">← Back to Fleet</Link>
      </div>
    );
  }

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
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Fleet
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass rounded-2xl overflow-hidden">
              <img
                src={bike.image}
                alt={`${bike.brand} ${bike.name}`}
                className="w-full aspect-[4/3] object-cover"
              />
            </div>
          </motion.div>

          {/* Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <div>
              <p className="text-primary text-sm font-medium tracking-[0.2em] uppercase">{bike.brand}</p>
              <h1 className="font-display text-5xl md:text-6xl mt-1">{bike.name}</h1>
              <div className="flex items-center gap-3 mt-3">
                <Badge variant="outline" className={bike.available
                  ? 'border-emerald-500/30 text-emerald-400'
                  : 'border-destructive/30 text-destructive'
                }>
                  {bike.available ? 'Available Now' : 'Currently Booked'}
                </Badge>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-primary text-primary" />
                  <span className="text-sm font-medium">{bike.rating}</span>
                  <span className="text-xs text-muted-foreground">({bike.reviewCount} reviews)</span>
                </div>
              </div>
            </div>

            {/* Specs Grid */}
            <div className="grid grid-cols-3 gap-3">
              {specs.map((s) => (
                <div key={s.label} className="glass rounded-lg p-3 text-center">
                  <s.icon className="h-4 w-4 text-primary mx-auto mb-1" />
                  <p className="text-xs text-muted-foreground">{s.label}</p>
                  <p className="text-sm font-semibold">{s.value}</p>
                </div>
              ))}
            </div>

            {/* Pricing Info */}
            <div className="glass rounded-xl p-6 space-y-3">
              <h3 className="font-display text-2xl">PRICING</h3>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Per Hour</span>
                <span className="font-semibold">${bike.pricePerHour}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Per Day (24h)</span>
                <span className="font-semibold">${bike.pricePerDay}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Weekend Multiplier</span>
                <span className="font-semibold text-primary">{bike.weekendMultiplier}x</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Security Deposit (refundable)</span>
                <span className="font-semibold">${bike.deposit}</span>
              </div>
            </div>

            {/* Booking Form with Date/Time */}
            <BookingForm bike={bike} />
          </motion.div>
        </div>

        {/* Reviews */}
        <BikeReviews bikeId={bike.id} />
      </div>
    </div>
  );
}
