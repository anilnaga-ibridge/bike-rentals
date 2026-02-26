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
  const [priceRange, setPriceRange] = useState([0, 400]);
  const [showFilters, setShowFilters] = useState(false);

  const filtered = useMemo(() => {
    return bikes.filter((b) => {
      if (category && b.category !== category) return false;
      if (cityFilter && b.city !== cityFilter) return false;
      if (transmission && b.transmission !== transmission) return false;
      if (b.pricePerDay < priceRange[0] || b.pricePerDay > priceRange[1]) return false;
      return true;
    });
  }, [category, cityFilter, transmission, priceRange]);

  return (
    <div className="pt-24 pb-12">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <p className="text-primary text-sm font-medium tracking-[0.3em] uppercase mb-2">Our Fleet</p>
          <div className="flex items-end justify-between">
            <h1 className="font-display text-5xl md:text-6xl">EXPLORE BIKES</h1>
            <Button
              variant="outline"
              className="lg:hidden"
              onClick={() => setShowFilters(!showFilters)}
            >
              {showFilters ? <X className="h-4 w-4" /> : <SlidersHorizontal className="h-4 w-4" />}
            </Button>
          </div>
        </motion.div>

        <div className="flex gap-8">
          {/* Filters sidebar */}
          <div className={`${showFilters ? 'block' : 'hidden'} lg:block w-full lg:w-72 flex-shrink-0`}>
            <BikeFilters
              category={category} setCategory={setCategory}
              cityFilter={cityFilter} setCityFilter={setCityFilter}
              transmission={transmission} setTransmission={setTransmission}
              priceRange={priceRange} setPriceRange={setPriceRange}
            />
          </div>

          {/* Grid */}
          <div className="flex-1">
            <p className="text-sm text-muted-foreground mb-4">{filtered.length} bikes found</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {filtered.map((bike, i) => (
                <motion.div
                  key={bike.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                >
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
