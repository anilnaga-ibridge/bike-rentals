import { cities } from '@/data/bikes';
import { Slider } from '@/components/ui/slider';

interface BikeFiltersProps {
  category: string;
  setCategory: (v: string) => void;
  cityFilter: string;
  setCityFilter: (v: string) => void;
  transmission: string;
  setTransmission: (v: string) => void;
  priceRange: number[];
  setPriceRange: (v: number[]) => void;
}

const categories = ['All', 'Sports', 'Cruiser', 'Adventure', 'Scooty'];
const transmissions = ['All', 'Manual', 'Automatic'];

export function BikeFilters({
  category, setCategory,
  cityFilter, setCityFilter,
  transmission, setTransmission,
  priceRange, setPriceRange,
}: BikeFiltersProps) {
  return (
    <div className="glass rounded-xl p-6 space-y-6">
      <h3 className="font-display text-2xl">FILTERS</h3>

      {/* City */}
      <div className="space-y-2">
        <label className="text-xs uppercase tracking-wider text-muted-foreground">Location</label>
        <select
          value={cityFilter}
          onChange={(e) => setCityFilter(e.target.value)}
          className="w-full bg-secondary rounded-lg px-3 py-2 text-sm text-foreground border-none outline-none focus:ring-1 focus:ring-primary"
        >
          <option value="">All Cities</option>
          {cities.map((c) => (
            <option key={c.id} value={c.id}>{c.name}</option>
          ))}
        </select>
      </div>

      {/* Category */}
      <div className="space-y-2">
        <label className="text-xs uppercase tracking-wider text-muted-foreground">Category</label>
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat === 'All' ? '' : cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                (cat === 'All' && !category) || category === cat
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary text-secondary-foreground hover:bg-muted'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Transmission */}
      <div className="space-y-2">
        <label className="text-xs uppercase tracking-wider text-muted-foreground">Transmission</label>
        <div className="flex gap-2">
          {transmissions.map((t) => (
            <button
              key={t}
              onClick={() => setTransmission(t === 'All' ? '' : t)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                (t === 'All' && !transmission) || transmission === t
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary text-secondary-foreground hover:bg-muted'
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div className="space-y-3">
        <label className="text-xs uppercase tracking-wider text-muted-foreground">
          Price Range: ${priceRange[0]} - ${priceRange[1]}/day
        </label>
        <Slider
          value={priceRange}
          onValueChange={setPriceRange}
          min={0}
          max={400}
          step={10}
          className="w-full"
        />
      </div>
    </div>
  );
}
