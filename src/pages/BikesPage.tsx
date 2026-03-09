import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { bikes } from '@/data/bikes';
import { BikeCard } from '@/components/bikes/BikeCard';
import { BikeFilters } from '@/components/bikes/BikeFilters';
import { SlidersHorizontal, X, Search, Bike, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';

export default function BikesPage() {
  const [category, setCategory] = useState('');
  const [cityFilter, setCityFilter] = useState('');
  const [transmission, setTransmission] = useState('');
  const [priceRange, setPriceRange] = useState([0, 1500]);
  const [duration, setDuration] = useState('');
  const [fuelType, setFuelType] = useState('');
  const [vehicleType, setVehicleType] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const filtered = useMemo(() => {
    return bikes.filter((b) => {
      if (category && b.category !== category) return false;
      if (cityFilter && b.city !== cityFilter) return false;
      if (transmission && b.transmission !== transmission) return false;
      if (duration && !b.pricingPackages?.includes(duration)) return false;
      if (fuelType && b.fuelType !== fuelType) return false;
      if (vehicleType && b.vehicleType !== vehicleType) return false;
      const minPrice = b.pricingTiers[b.pricingTiers.length - 1].pricePerDay;
      if (minPrice < priceRange[0] || minPrice > priceRange[1]) return false;
      return true;
    });
  }, [category, cityFilter, transmission, priceRange, duration, fuelType, vehicleType]);

  const clearAllFilters = () => {
    setCategory(''); setCityFilter(''); setTransmission('');
    setPriceRange([0, 1500]); setDuration(''); setFuelType(''); setVehicleType('');
  };

  const hasActiveFilters = category || cityFilter || transmission || duration || fuelType || vehicleType;

  return (
    <div className="min-h-screen bg-background">
      {/* ── Premium Page Hero Banner ── */}
      <div className="relative bg-[#020617] pt-32 pb-16 overflow-hidden">
        {/* Glows */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary/15 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 bg-secondary/20 border border-secondary/30 rounded-full px-4 py-2 mb-5">
              <Zap className="h-3.5 w-3.5 text-secondary" />
              <span className="text-secondary text-[10px] font-black tracking-[0.3em] uppercase">Premium Fleet</span>
            </div>
            <div className="flex items-end justify-between gap-6">
              <div>
                <h1 className="font-display font-black text-5xl sm:text-6xl md:text-7xl text-white uppercase leading-none tracking-tighter">
                  Find Your{' '}
                  <span className="text-secondary drop-shadow-[0_0_20px_rgba(255,106,0,0.4)]">
                    Next Ride
                  </span>
                </h1>
                <p className="text-white/50 mt-4 text-base max-w-xl leading-relaxed">
                  Browse 500+ premium two-wheelers across our 3 Hyderabad hubs. Daily, weekly & monthly rentals.
                </p>
              </div>
              {/* Mobile filter toggle */}
              <Button
                variant="outline"
                className="lg:hidden rounded-2xl border-white/20 text-white hover:bg-white/10 shrink-0"
                onClick={() => setShowFilters(!showFilters)}
              >
                {showFilters ? <X className="h-4 w-4" /> : <SlidersHorizontal className="h-4 w-4" />}
              </Button>
            </div>

            {/* Stats pills */}
            <div className="flex flex-wrap gap-3 mt-8">
              {[
                { label: `${bikes.length} Total Bikes`, icon: Bike },
                { label: `${bikes.filter(b => b.available).length} Available Now`, icon: Zap },
              ].map((s) => (
                <div key={s.label} className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2">
                  <s.icon className="h-3.5 w-3.5 text-secondary" />
                  <span className="text-white/70 text-xs font-semibold">{s.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Content Area ── */}
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-8">

          {/* Sidebar Filter */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className={`${showFilters ? 'block' : 'hidden'} lg:block w-full lg:w-80 flex-shrink-0 h-fit lg:sticky lg:top-28 z-40`}
          >
            <div className="bg-background border border-primary/10 rounded-[2rem] p-6 shadow-xl shadow-primary/5">
              <BikeFilters
                category={category} setCategory={setCategory}
                cityFilter={cityFilter} setCityFilter={setCityFilter}
                transmission={transmission} setTransmission={setTransmission}
                priceRange={priceRange} setPriceRange={setPriceRange}
                duration={duration} setDuration={setDuration}
                fuelType={fuelType} setFuelType={setFuelType}
                vehicleType={vehicleType} setVehicleType={setVehicleType}
              />
            </div>
          </motion.div>

          {/* Bike Grid */}
          <div className="flex-1 min-w-0">
            {/* Result bar */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <p className="text-sm font-black text-foreground">
                  <span className="text-primary">{filtered.length}</span> bikes found
                </p>
                {hasActiveFilters && (
                  <button
                    onClick={clearAllFilters}
                    className="inline-flex items-center gap-1 text-[10px] font-black uppercase tracking-widest text-secondary bg-secondary/10 border border-secondary/20 px-3 py-1.5 rounded-full hover:bg-secondary/20 transition-colors"
                  >
                    <X className="h-3 w-3" /> Clear Filters
                  </button>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              <AnimatePresence mode="popLayout">
                {isLoading ? (
                  Array.from({ length: 6 }).map((_, i) => (
                    <motion.div key={`skeleton-${i}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                      <div className="rounded-[2.5rem] overflow-hidden border border-primary/5 bg-background">
                        <Skeleton className="aspect-[4/3] w-full rounded-none" />
                        <div className="p-6 space-y-3">
                          <Skeleton className="h-3 w-1/3" />
                          <Skeleton className="h-6 w-2/3" />
                          <div className="flex gap-2 pt-2">
                            <Skeleton className="h-10 flex-1 rounded-2xl" />
                            <Skeleton className="h-10 flex-1 rounded-2xl" />
                            <Skeleton className="h-10 flex-1 rounded-2xl" />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))
                ) : (
                  filtered.map((bike, i) => (
                    <motion.div
                      key={bike.id}
                      layout
                      initial={{ opacity: 0, scale: 0.92, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.92 }}
                      transition={{ delay: i * 0.04, duration: 0.4 }}
                    >
                      <BikeCard bike={bike} />
                    </motion.div>
                  ))
                )}
              </AnimatePresence>
            </div>

            {/* Empty state */}
            {!isLoading && filtered.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-32 rounded-[3rem] border border-primary/10 bg-primary/5"
              >
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="h-10 w-10 text-primary/30" />
                </div>
                <h3 className="font-display font-black text-2xl text-primary">No bikes found</h3>
                <p className="text-muted-foreground mt-2 max-w-xs mx-auto">Try adjusting your filters to discover more vehicles.</p>
                <Button
                  variant="ghost"
                  className="mt-6 text-secondary font-bold hover:text-secondary/80"
                  onClick={clearAllFilters}
                >
                  Clear all filters
                </Button>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
