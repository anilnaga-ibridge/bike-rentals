import { motion } from 'framer-motion';
import { MapPin, Calendar, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cities } from '@/data/bikes';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';

export function HeroSection() {
  const [city, setCity] = useState('');
  const [pickupDate, setPickupDate] = useState<Date>();
  const [dropDate, setDropDate] = useState<Date>();
  const navigate = useNavigate();

  return (
    <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=1920&q=80"
          alt="Bike rental hero"
          className="w-full h-full object-cover scale-105"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ y: [0, -30, 0], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 8 + i * 3, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute rounded-full bg-primary/10 blur-[100px]"
            style={{ width: `${200 + i * 80}px`, height: `${200 + i * 80}px`, left: `${15 + i * 20}%`, top: `${20 + (i % 3) * 20}%` }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-6 pt-20">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }} className="flex justify-center mb-6">
              <img src="/images/logo.png" alt="Sri Ganesh Bike Rentals" className="h-24 sm:h-32 w-auto drop-shadow-2xl" />
            </motion.div>

            <motion.h1
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              Commuting Made{' '}
              <span className="text-gradient">Easy</span>,{' '}
              <br className="hidden sm:block" />
              Affordable &{' '}
              <span className="text-gradient">Quick</span>
            </motion.h1>

            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 0.6 }} className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto mb-10">
              Rent bikes & scooters starting at just ₹249/day. Flexible packages for daily, weekly & monthly rentals across 6 cities.
            </motion.p>
          </motion.div>

          {/* Search Box */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.7, type: 'spring' }}
            className="glass rounded-2xl p-5 sm:p-6 max-w-4xl mx-auto"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              <div className="space-y-1.5">
                <label className="text-[11px] uppercase tracking-widest text-muted-foreground flex items-center gap-1.5 font-medium">
                  <MapPin className="h-3 w-3 text-primary" /> City
                </label>
                <select value={city} onChange={(e) => setCity(e.target.value)} className="w-full bg-secondary/80 border-none rounded-xl px-4 py-3 text-foreground text-sm focus:ring-2 focus:ring-primary/50 outline-none transition-shadow">
                  <option value="">Select City</option>
                  {cities.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}
                </select>
              </div>
              <div className="space-y-1.5">
                <label className="text-[11px] uppercase tracking-widest text-muted-foreground flex items-center gap-1.5 font-medium">
                  <Calendar className="h-3 w-3 text-primary" /> Pickup Date
                </label>
                <Popover>
                  <PopoverTrigger asChild>
                    <button className={cn("w-full bg-secondary/80 rounded-xl px-4 py-3 text-sm text-left transition-shadow focus:ring-2 focus:ring-primary/50", !pickupDate && "text-muted-foreground")}>
                      {pickupDate ? format(pickupDate, 'dd MMM yyyy') : 'Select date'}
                    </button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <CalendarComponent mode="single" selected={pickupDate} onSelect={setPickupDate} disabled={(d) => d < new Date()} className="p-3 pointer-events-auto" />
                  </PopoverContent>
                </Popover>
              </div>
              <div className="space-y-1.5">
                <label className="text-[11px] uppercase tracking-widest text-muted-foreground flex items-center gap-1.5 font-medium">
                  <Calendar className="h-3 w-3 text-primary" /> Drop Date
                </label>
                <Popover>
                  <PopoverTrigger asChild>
                    <button className={cn("w-full bg-secondary/80 rounded-xl px-4 py-3 text-sm text-left transition-shadow focus:ring-2 focus:ring-primary/50", !dropDate && "text-muted-foreground")}>
                      {dropDate ? format(dropDate, 'dd MMM yyyy') : 'Select date'}
                    </button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <CalendarComponent mode="single" selected={dropDate} onSelect={setDropDate} disabled={(d) => d < (pickupDate || new Date())} className="p-3 pointer-events-auto" />
                  </PopoverContent>
                </Popover>
              </div>
              <div className="flex items-end">
                <Button onClick={() => navigate('/bikes')} className="w-full py-3 text-sm font-bold gold-shine text-primary-foreground border-0" size="lg">
                  <Search className="mr-2 h-4 w-4" /> Search Bikes
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Trust badges */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 0.8 }} className="flex flex-wrap justify-center gap-8 mt-10">
            {[
              { value: '10K+', label: 'Happy Riders' },
              { value: '500+', label: 'Bikes' },
              { value: '6', label: 'Cities' },
              { value: '4.8★', label: 'Rating' },
            ].map((stat, i) => (
              <motion.div key={stat.label} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.3 + i * 0.1 }} className="text-center">
                <p className="font-display text-2xl sm:text-3xl text-primary">{stat.value}</p>
                <p className="text-[11px] text-muted-foreground uppercase tracking-wider">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
