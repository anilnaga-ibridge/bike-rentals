import { cities } from '@/data/bikes';
import { Slider } from '@/components/ui/slider';
import { cn } from '@/lib/utils';
import { Clock, Settings, Zap, Car, Bike as BikeIcon, ShieldCheck } from 'lucide-react';

interface BikeFiltersProps {
  category: string;
  setCategory: (v: string) => void;
  cityFilter: string;
  setCityFilter: (v: string) => void;
  transmission: string;
  setTransmission: (v: string) => void;
  priceRange: number[];
  setPriceRange: (v: number[]) => void;
  duration: string;
  setDuration: (v: string) => void;
  fuelType: string;
  setFuelType: (v: string) => void;
  vehicleType: string;
  setVehicleType: (v: string) => void;
}

const categories = ['All', 'Sports', 'Cruiser', 'Adventure', 'Scooty'];
const transmissions = ['Gear', 'Gearless'];
const durations = [
  '3 Hours', '6 Hours', 'Half Day', 'Daily', 'Weekly',
  '15 Days', 'Monthly', '3 Months', '6 Months', 'Yearly'
];
const fuelTypes = ['Petrol', 'E-Bike', 'CNG-Petrol'];
const vehicleTypes = ['Bike', 'Car'];
const brands = ['Premium'];

export function BikeFilters({
  category, setCategory,
  cityFilter, setCityFilter,
  transmission, setTransmission,
  priceRange, setPriceRange,
  duration, setDuration,
  fuelType, setFuelType,
  vehicleType, setVehicleType,
}: BikeFiltersProps) {

  const FilterSection = ({ label, icon: Icon, children }: { label: string, icon: any, children: React.ReactNode }) => (
    <div className="space-y-4 pb-6 border-b border-primary/5 last:border-0 last:pb-0">
      <div className="flex items-center gap-2 text-primary/40">
        <Icon className="h-3 w-3" />
        <label className="text-[10px] uppercase tracking-[0.2em] font-black">{label}</label>
      </div>
      {children}
    </div>
  );

  const Chip = ({ active, onClick, children }: { active: boolean, onClick: () => void, children: React.ReactNode }) => (
    <button
      onClick={onClick}
      className={cn(
        "px-4 py-2 rounded-xl text-[11px] font-bold transition-all duration-300 border",
        active
          ? "bg-primary text-white border-primary shadow-lg shadow-primary/20"
          : "bg-white text-primary/60 border-primary/10 hover:border-primary/30 hover:bg-primary/5"
      )}
    >
      {children}
    </button>
  );

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h3 className="font-display text-xl font-black text-primary">Filters</h3>
        <button
          onClick={() => {
            setCategory(''); setCityFilter(''); setTransmission('');
            setDuration(''); setFuelType(''); setVehicleType('');
            setPriceRange([0, 1500]);
          }}
          className="text-[10px] font-bold uppercase tracking-widest text-primary/40 hover:text-primary transition-colors"
        >
          Reset
        </button>
      </div>

      <FilterSection label="Booking Duration" icon={Clock}>
        <div className="flex flex-wrap gap-2">
          {durations.map((d) => (
            <Chip key={d} active={duration === d} onClick={() => setDuration(duration === d ? '' : d)}>
              {d}
            </Chip>
          ))}
        </div>
      </FilterSection>

      <FilterSection label="Transmission Type" icon={Settings}>
        <div className="flex flex-wrap gap-2">
          {transmissions.map((t) => (
            <Chip key={t} active={transmission === t} onClick={() => setTransmission(transmission === t ? '' : t)}>
              {t}
            </Chip>
          ))}
        </div>
      </FilterSection>

      <FilterSection label="GO HUBS" icon={Zap}>
        <div className="space-y-4">
          <label className="text-[9px] font-black text-primary/40 uppercase tracking-widest pl-1">Fuel Type</label>
          <div className="flex flex-wrap gap-2">
            {fuelTypes.map((f) => (
              <Chip key={f} active={fuelType === f} onClick={() => setFuelType(fuelType === f ? '' : f)}>
                {f}
              </Chip>
            ))}
          </div>
        </div>
      </FilterSection>

      <FilterSection label="Vehicle Type" icon={vehicleType === 'Car' ? Car : BikeIcon}>
        <div className="flex flex-wrap gap-2">
          {vehicleTypes.map((v) => (
            <Chip key={v} active={vehicleType === v} onClick={() => setVehicleType(vehicleType === v ? '' : v)}>
              {v}
            </Chip>
          ))}
        </div>
      </FilterSection>

      <FilterSection label="BRANDS" icon={ShieldCheck}>
        <div className="flex flex-wrap gap-2">
          {brands.map((b) => (
            <Chip key={b} active={true} onClick={() => { }}>
              {b}
            </Chip>
          ))}
        </div>
      </FilterSection>

      <FilterSection label="Price Range" icon={Zap}>
        <div className="space-y-4 px-2">
          <div className="flex justify-between text-[11px] font-black text-primary">
            <span>₹{priceRange[0]}</span>
            <span>₹{priceRange[1]}</span>
          </div>
          <Slider value={priceRange} onValueChange={setPriceRange} min={0} max={1500} step={50} className="w-full" />
        </div>
      </FilterSection>

      <FilterSection label="Location" icon={MapPin}>
        <select
          value={cityFilter}
          onChange={(e) => setCityFilter(e.target.value)}
          className="w-full bg-white border border-primary/10 rounded-2xl px-4 py-3 text-xs font-bold text-primary outline-none focus:ring-2 focus:ring-primary/20 appearance-none cursor-pointer"
        >
          <option value="">All Cities</option>
          {cities.map((c) => (
            <option key={c.id} value={c.id}>{c.name}</option>
          ))}
        </select>
      </FilterSection>
    </div>
  );
}

const MapPin = ({ className }: { className: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
);
