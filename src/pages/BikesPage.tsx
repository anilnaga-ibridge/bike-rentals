import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { bikes } from '@/data/bikes';
import { BikeCard } from '@/components/bikes/BikeCard';
import { BikeFilters } from '@/components/bikes/BikeFilters';
import { SlidersHorizontal, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function BikesPage() {
  const [category, setCategory] = useState('');
  const [cityFilter, setCityFilter] = useState('');
  const [transmission, setTransmission] = useState('');
  const [priceRange, setPriceRange] = useState([0, 1500]);
  const [showFilters, setShowFilters] = useState(false);

  const filtered = useMemo(() => {
    return bikes.filter((b) => {
      if (category && b.category !== category) return false;
      if (cityFilter && b.city !== cityFilter) return false;
      if (transmission && b.transmission !== transmission) return false;
      const minPrice = b.pricingTiers[b.pricingTiers.length - 1].pricePerDay;
      if (minPrice < priceRange[0] || minPrice > priceRange[1]) return false;
      return true;
    });
  }, [category, cityFilter, transmission, priceRange]);

  return (
    <div className="pt-24 pb-12">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <span className="text-primary text-xs font-semibold tracking-[0.2em] uppercase">Our Fleet</span>
          <div className="flex items-end justify-between mt-1">
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl">Explore Bikes</h1>
            <Button variant="outline" className="lg:hidden" onClick={() => setShowFilters(!showFilters)}>
              {showFilters ? <X className="h-4 w-4" /> : <SlidersHorizontal className="h-4 w-4" />}
            </Button>
          </div>
        </motion.div>

        <div className="flex gap-8">
          <div className={`${showFilters ? 'block' : 'hidden'} lg:block w-full lg:w-72 flex-shrink-0`}>
            <BikeFilters
              category={category} setCategory={setCategory}
              cityFilter={cityFilter} setCityFilter={setCityFilter}
              transmission={transmission} setTransmission={setTransmission}
              priceRange={priceRange} setPriceRange={setPriceRange}
            />
          </div>

          <div className="flex-1">
            <p className="text-sm text-muted-foreground mb-4">{filtered.length} bikes found</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
              {filtered.map((bike, i) => (
                <motion.div key={bike.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}>
                  <BikeCard bike={bike} />
                </motion.div>
              ))}
            </div>
            {filtered.length === 0 && (
              <div className="text-center py-20 text-muted-foreground">
                <p className="text-lg">No bikes match your filters</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
