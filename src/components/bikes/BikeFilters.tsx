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
    <div className="bg-card rounded-2xl border border-border/50 p-6 space-y-6">
      <h3 className="font-display text-lg">Filters</h3>

      <div className="space-y-2">
        <label className="text-[11px] uppercase tracking-widest text-muted-foreground font-medium">City</label>
        <select
          value={cityFilter}
          onChange={(e) => setCityFilter(e.target.value)}
          className="w-full bg-secondary rounded-xl px-3 py-2.5 text-sm text-foreground border-none outline-none focus:ring-2 focus:ring-primary/50"
        >
          <option value="">All Cities</option>
          {cities.map((c) => (
            <option key={c.id} value={c.id}>{c.name}</option>
          ))}
        </select>
      </div>

      <div className="space-y-2">
        <label className="text-[11px] uppercase tracking-widest text-muted-foreground font-medium">Category</label>
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

      <div className="space-y-2">
        <label className="text-[11px] uppercase tracking-widest text-muted-foreground font-medium">Transmission</label>
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

      <div className="space-y-3">
        <label className="text-[11px] uppercase tracking-widest text-muted-foreground font-medium">
          Price: ₹{priceRange[0]} – ₹{priceRange[1]}/day
        </label>
        <Slider value={priceRange} onValueChange={setPriceRange} min={0} max={1500} step={50} className="w-full" />
      </div>
    </div>
  );
}
