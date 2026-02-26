import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { bikes, addOns } from '@/data/bikes';
import { Star, ArrowLeft, Gauge, Settings, Fuel, Ruler, Weight, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useState, useMemo } from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { toast } from 'sonner';

export default function BikeDetailsPage() {
  const { id } = useParams();
  const bike = bikes.find((b) => b.id === id);
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);
  const [days, setDays] = useState(1);
  const [isWeekend, setIsWeekend] = useState(false);

  const totalPrice = useMemo(() => {
    if (!bike) return 0;
    const basePrice = bike.pricePerDay * days * (isWeekend ? bike.weekendMultiplier : 1);
    const addOnPrice = selectedAddOns.reduce((sum, id) => {
      const addon = addOns.find((a) => a.id === id);
      return sum + (addon ? addon.pricePerDay * days : 0);
    }, 0);
    return Math.round(basePrice + addOnPrice + bike.deposit);
  }, [bike, days, isWeekend, selectedAddOns]);

  if (!bike) {
    return (
      <div className="pt-24 container mx-auto px-6 text-center py-20">
        <p className="text-muted-foreground text-lg">Bike not found</p>
        <Link to="/bikes" className="text-primary mt-4 inline-block">← Back to Fleet</Link>
      </div>
    );
  }

  const toggleAddOn = (addOnId: string) => {
    setSelectedAddOns((prev) =>
      prev.includes(addOnId) ? prev.filter((id) => id !== addOnId) : [...prev, addOnId]
    );
  };

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

            {/* Pricing */}
            <div className="glass rounded-xl p-6 space-y-4">
              <h3 className="font-display text-2xl">PRICING</h3>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Per Hour</span>
                <span className="font-semibold">${bike.pricePerHour}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Per Day</span>
                <span className="font-semibold">${bike.pricePerDay}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Weekend Multiplier</span>
                <span className="font-semibold text-primary">{bike.weekendMultiplier}x</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Security Deposit</span>
                <span className="font-semibold">${bike.deposit}</span>
              </div>
            </div>

            {/* Booking Config */}
            <div className="glass rounded-xl p-6 space-y-4">
              <h3 className="font-display text-2xl">BOOK THIS BIKE</h3>

              <div className="flex items-center gap-4">
                <label className="text-sm text-muted-foreground">Days:</label>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setDays(Math.max(1, days - 1))}
                    className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center text-foreground hover:bg-muted transition-colors"
                  >
                    -
                  </button>
                  <span className="w-8 text-center font-semibold">{days}</span>
                  <button
                    onClick={() => setDays(days + 1)}
                    className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center text-foreground hover:bg-muted transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Checkbox
                  checked={isWeekend}
                  onCheckedChange={(v) => setIsWeekend(!!v)}
                  id="weekend"
                />
                <label htmlFor="weekend" className="text-sm text-muted-foreground cursor-pointer">
                  Weekend rental ({bike.weekendMultiplier}x rate)
                </label>
              </div>

              {/* Add-ons */}
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Add-ons:</p>
                {addOns.map((addon) => (
                  <div key={addon.id} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Checkbox
                        checked={selectedAddOns.includes(addon.id)}
                        onCheckedChange={() => toggleAddOn(addon.id)}
                        id={addon.id}
                      />
                      <label htmlFor={addon.id} className="text-sm cursor-pointer">
                        {addon.icon} {addon.name}
                      </label>
                    </div>
                    <span className="text-xs text-muted-foreground">${addon.pricePerDay}/day</span>
                  </div>
                ))}
              </div>

              {/* Total */}
              <div className="border-t border-border pt-4 flex justify-between items-center">
                <span className="text-muted-foreground">Total (incl. deposit)</span>
                <span className="font-display text-3xl text-primary">${totalPrice}</span>
              </div>

              <Button
                className="w-full text-base font-bold glow-strong"
                size="lg"
                disabled={!bike.available}
                onClick={() => toast.success('Booking confirmed! Check your dashboard.')}
              >
                {bike.available ? 'Book Now' : 'Currently Unavailable'}
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
