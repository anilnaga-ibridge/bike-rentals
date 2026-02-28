import { motion } from 'framer-motion';
import { MapPin, Calendar, Clock, Search, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cities } from '@/data/bikes';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';

const floatingVariants = {
  animate: (i: number) => ({
    y: [0, -20, 0],
    x: [0, 10 * (i % 2 === 0 ? 1 : -1), 0],
    opacity: [0.3, 0.6, 0.3],
    transition: { duration: 6 + i * 2, repeat: Infinity, ease: 'easeInOut' as const },
  }),
};

export function HeroSection() {
  const [city, setCity] = useState('');
  const [pickupDate, setPickupDate] = useState<Date>();
  const [returnDate, setReturnDate] = useState<Date>();
  const [pickupTime, setPickupTime] = useState('09:00');
  const [returnTime, setReturnTime] = useState('18:00');
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=1920&q=80"
          alt="Premium motorcycle on highway"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/70 to-transparent" />
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={floatingVariants}
            animate="animate"
            className="absolute rounded-full bg-primary/8 blur-[80px]"
            style={{
              width: `${120 + i * 60}px`,
              height: `${120 + i * 60}px`,
              left: `${10 + i * 15}%`,
              top: `${15 + (i % 3) * 25}%`,
            }}
          />
        ))}
      </div>

      {/* Floating sparkles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`sparkle-${i}`}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 1, 0],
              y: [-10, -60],
              x: [0, (i % 2 === 0 ? 20 : -20)],
            }}
            transition={{ duration: 3, delay: i * 1.2, repeat: Infinity }}
            className="absolute"
            style={{ left: `${20 + i * 15}%`, top: `${40 + (i % 3) * 15}%` }}
          >
            <Sparkles className="h-4 w-4 text-primary/40" />
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-4xl"
        >
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-primary font-medium tracking-[0.3em] uppercase text-sm mb-4"
          >
            Premium Bike Rentals
          </motion.p>

          <motion.h1
            className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.9] mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              RIDE{' '}
            </motion.span>
            <motion.span
              className="text-gradient"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.6, type: 'spring' }}
            >
              FREEDOM
            </motion.span>
            <br />
            <motion.span
              className="text-muted-foreground text-4xl sm:text-5xl md:text-6xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              RENT PREMIUM BIKES INSTANTLY
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="text-muted-foreground text-lg max-w-xl mb-10"
          >
            Experience the thrill of riding world-class motorcycles. Safe, convenient, 
            and affordable — book in seconds, ride in minutes.
          </motion.p>
        </motion.div>

        {/* Booking Search Box */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 1.0, duration: 0.8, type: 'spring' }}
          className="glass rounded-2xl p-6 max-w-5xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {/* City */}
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                <MapPin className="h-3 w-3 text-primary" /> Location
              </label>
              <select
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full bg-secondary border-none rounded-lg px-4 py-3 text-foreground text-sm focus:ring-1 focus:ring-primary outline-none"
              >
                <option value="">Select City</option>
                {cities.map((c) => (
                  <option key={c.id} value={c.id}>{c.name}</option>
                ))}
              </select>
            </div>

            {/* Pickup Date */}
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                <Calendar className="h-3 w-3 text-primary" /> Pickup Date
              </label>
              <Popover>
                <PopoverTrigger asChild>
                  <button className={cn(
                    "w-full bg-secondary rounded-lg px-4 py-3 text-sm text-left",
                    !pickupDate && "text-muted-foreground"
                  )}>
                    {pickupDate ? format(pickupDate, 'MMM dd, yyyy') : 'Select date'}
                  </button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <CalendarComponent mode="single" selected={pickupDate} onSelect={setPickupDate} disabled={(d) => d < new Date()} className="p-3 pointer-events-auto" />
                </PopoverContent>
              </Popover>
            </div>

            {/* Pickup Time */}
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                <Clock className="h-3 w-3 text-primary" /> Pickup Time
              </label>
              <select
                value={pickupTime}
                onChange={(e) => setPickupTime(e.target.value)}
                className="w-full bg-secondary border-none rounded-lg px-4 py-3 text-foreground text-sm focus:ring-1 focus:ring-primary outline-none"
              >
                {Array.from({ length: 24 }, (_, i) => `${i.toString().padStart(2, '0')}:00`).map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>

            {/* Return Date */}
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                <Calendar className="h-3 w-3 text-primary" /> Return Date
              </label>
              <Popover>
                <PopoverTrigger asChild>
                  <button className={cn(
                    "w-full bg-secondary rounded-lg px-4 py-3 text-sm text-left",
                    !returnDate && "text-muted-foreground"
                  )}>
                    {returnDate ? format(returnDate, 'MMM dd, yyyy') : 'Select date'}
                  </button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <CalendarComponent mode="single" selected={returnDate} onSelect={setReturnDate} disabled={(d) => d < (pickupDate || new Date())} className="p-3 pointer-events-auto" />
                </PopoverContent>
              </Popover>
            </div>

            {/* CTA */}
            <div className="flex items-end">
              <Button
                onClick={() => navigate('/bikes')}
                className="w-full py-3 text-base font-bold glow-strong"
                size="lg"
              >
                <Search className="mr-2 h-5 w-5" />
                Search
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.8 }}
          className="flex flex-wrap gap-10 mt-12 mb-8"
        >
          {[
            { value: '500+', label: 'Premium Bikes' },
            { value: '5', label: 'Cities' },
            { value: '50K+', label: 'Happy Riders' },
            { value: '4.9', label: 'Average Rating' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 + i * 0.1, duration: 0.5 }}
            >
              <p className="font-display text-4xl text-primary">{stat.value}</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
