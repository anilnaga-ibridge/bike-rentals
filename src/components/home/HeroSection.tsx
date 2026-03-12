import { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

const TEASER_WORDS = ["Perfect Ride", "Dream Bike", "Next Adventure", "Open Road"];
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Search, MapPin, Calendar, ArrowRight, Shield, Star, Bike, Clock } from 'lucide-react';
import { WhatsAppIcon } from '@/components/icons/WhatsAppIcon';
import { Button } from '@/components/ui/button';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';
import { cities } from '@/data/bikes';
import { BRAND } from '@/constants/brand';

const TRUST_BADGES = [
  { icon: Star, label: '4.9★ Rating', sub: '500+ Reviews' },
  { icon: Bike, label: '500+ Bikes', sub: 'All Categories' },
  { icon: Shield, label: 'Fully Insured', sub: 'Every Ride' },
  { icon: Clock, label: 'Book in 2 Min', sub: 'Via WhatsApp' },
];

// Stable particles — computed once, never on re-render
const PARTICLES = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  left: `${(i * 5.5) % 100}%`,
  duration: `${12 + (i * 1.3) % 14}s`,
  delay: `${(i * 0.7) % 6}s`,
}));

export function HeroSection() {
  const [city, setCity] = useState('');
  const [pickupDate, setPickupDate] = useState<Date>();
  const [dropDate, setDropDate] = useState<Date>();
  const navigate = useNavigate();

  // ── Typewriter ─────────────────────────────────────────────────────────────
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (subIndex === TEASER_WORDS[phraseIndex].length && !isDeleting) {
      const t = setTimeout(() => setIsDeleting(true), 2500);
      return () => clearTimeout(t);
    }
    if (subIndex === 0 && isDeleting) {
      setIsDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % TEASER_WORDS.length);
      return;
    }
    const t = setTimeout(
      () => setSubIndex((prev) => prev + (isDeleting ? -1 : 1)),
      isDeleting ? 40 : 100
    );
    return () => clearTimeout(t);
  }, [subIndex, phraseIndex, isDeleting]);

  // ── 3‑D Showroom rotation via RAF + refs (ZERO React re-renders) ───────────
  const rotationRef = useRef(0);
  const isHoveringRef = useRef(false);
  const rafIdRef = useRef<number>(0);
  const bikeRefs = useRef<(HTMLDivElement | null)[]>([]);
  const activeIndexRef = useRef(0);

  const bikes = useMemo(() => [
    { id: 1, name: 'Premium Sport', price: '₹1200', url: '/images/sports.png' },
    { id: 2, name: 'Exclusive Edition', price: '₹2500', url: '/images/premium.png' },
    { id: 3, name: 'Classic Cruiser', price: '₹1500', url: '/images/cruiser.png' },
  ], []);

  const radius = 400;
  const bikeCount = bikes.length;

  // RAF tick — directly mutates DOM without going through React state
  const tick = useCallback(() => {
    if (!isHoveringRef.current) {
      rotationRef.current = (rotationRef.current + 0.18) % 360;
    }

    const r = rotationRef.current;
    bikeRefs.current.forEach((el, index) => {
      if (!el) return;
      const angle = (index / bikeCount) * 360 + r;
      const rad = (angle * Math.PI) / 180;
      const x = Math.sin(rad) * radius;
      const z = Math.cos(rad) * radius;
      const scale = 0.5 + (z + radius) / (radius * 2) * 0.7;
      const opacity = 0.2 + (z + radius) / (radius * 2) * 0.8;
      const zIndex = Math.round(z + radius);
      el.style.transform = `translateX(${x}px) scale(${scale})`;
      el.style.opacity = String(opacity);
      el.style.zIndex = String(zIndex);
    });

    rafIdRef.current = requestAnimationFrame(tick);
  }, [bikeCount]);

  useEffect(() => {
    rafIdRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafIdRef.current);
  }, [tick]);

  // ── Mouse parallax ────────────────────────────────────────────────────────
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const bgX = useSpring(useTransform(mouseX, [-0.5, 0.5], [15, -15]), { damping: 25 });
  const bgY = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), { damping: 25 });

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    mouseX.set((e.clientX / window.innerWidth) - 0.5);
    mouseY.set((e.clientY / window.innerHeight) - 0.5);
  }, [mouseX, mouseY]);

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative h-screen min-h-[850px] w-full flex items-center justify-center overflow-hidden bg-[#020617] cursor-default"
    >
      {/* ── Atmospheric Background ── */}
      <motion.div style={{ x: bgX, y: bgY }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B3D91]/25 via-[#020617] to-[#020617]" />
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px]" />
        {/* Stable particles — no random on re-render */}
        {PARTICLES.map((p) => (
          <div
            key={p.id}
            className="particle w-1 h-1 bg-white/10"
            style={{ left: p.left, bottom: '5%', animationDuration: p.duration, animationDelay: p.delay }}
          />
        ))}
      </motion.div>

      {/* ── 3D Rotating Showroom (DOM-driven, zero React re-renders) ── */}
      <div className="relative w-full h-full flex items-center justify-center z-10 perspective-[2000px]">
        <div className="absolute bottom-[18%] w-[1400px] h-[300px] bg-gradient-to-t from-primary/10 to-transparent rounded-[50%] blur-3xl opacity-40" />

        <div className="relative w-full h-full flex items-center justify-center">
          {bikes.map((bike, index) => (
            <div
              key={bike.id}
              ref={(el) => { bikeRefs.current[index] = el; }}
              className="absolute flex flex-col items-center pointer-events-none will-change-transform"
              onMouseEnter={() => { isHoveringRef.current = true; }}
              onMouseLeave={() => { isHoveringRef.current = false; }}
              style={{ willChange: 'transform, opacity' }}
            >
              {/* Floor Reflection */}
              <div className="absolute -bottom-10 w-full h-1/2 overflow-hidden flex justify-center opacity-25">
                <img src={bike.url} className="w-[80%] floor-reflection grayscale brightness-125" alt={`${bike.name} reflection`} loading="lazy" />
              </div>
              {/* Bike */}
              <div className="relative pointer-events-auto cursor-pointer">
                <img
                  src={bike.url}
                  alt={`${bike.name} - Premium Bike Rental in Hyderabad`}
                  className="w-[400px] md:w-[600px] drop-shadow-[0_30px_60px_rgba(0,0,0,0.7)]"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Content Overlay ── */}
      <div className="absolute inset-0 z-50 pointer-events-none flex flex-col items-center justify-between py-16 px-6">

        {/* Top: Hero Text */}
        <div className="flex flex-col items-center text-center max-w-5xl mt-8 pointer-events-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-6 backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            <span className="text-white/70 text-[10px] font-black tracking-[0.3em] uppercase">Hyderabad's #1 Bike Rentals</span>
            <span className="text-secondary text-[10px] font-black">· 3 Hubs</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-black text-white leading-[1.05] uppercase tracking-tighter"
          >
            Find Your <br />
            <span className="text-secondary drop-shadow-[0_0_30px_rgba(255,106,0,0.5)] inline-flex items-center">
              {TEASER_WORDS[phraseIndex].substring(0, subIndex)}
              <span className="inline-block w-[4px] md:w-[5px] h-[40px] md:h-[60px] lg:h-[72px] bg-secondary ml-1 animate-[pulse_0.9s_ease-in-out_infinite]" />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-6 text-lg md:text-xl text-white font-medium max-w-xl mx-auto leading-relaxed"
          >
            Premium bikes at unbeatable prices. Daily, weekly & monthly rentals
            available across Madhapur, Ameerpet & Kukatpally.
          </motion.p>
        </div>

        {/* Bottom: Booking Widget + CTAs */}
        <div className="container mx-auto flex flex-col items-center pointer-events-auto w-full">

          {/* Booking Widget */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="w-full max-w-5xl mb-6"
          >
            <div className="relative overflow-hidden rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-2xl p-6 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/5 pointer-events-none rounded-[2rem]" />

              <div className="relative z-10 grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
                {/* City */}
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-black text-white/40 uppercase tracking-[0.25em] flex items-center gap-2">
                    <MapPin className="h-3 w-3 text-secondary" /> Pickup Hub
                  </label>
                  <select
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="h-12 bg-white/10 border border-white/10 hover:border-secondary/40 rounded-xl px-4 text-white outline-none focus:bg-white/15 transition-all font-bold text-sm"
                  >
                    <option value="" className="bg-[#020617]">Select Hub</option>
                    {cities.map(c => <option key={c.id} value={c.id} className="bg-[#020617]">{c.name}</option>)}
                  </select>
                </div>

                {/* Pickup Date */}
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-black text-white/40 uppercase tracking-[0.25em] flex items-center gap-2">
                    <Calendar className="h-3 w-3 text-secondary" /> Pickup Date
                  </label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <button className={cn(
                        "h-12 flex items-center justify-between bg-white/10 border border-white/10 hover:border-secondary/40 rounded-xl px-4 text-sm font-bold transition-all",
                        !pickupDate ? "text-white/30" : "text-white"
                      )}>
                        {pickupDate ? format(pickupDate, 'dd MMM yyyy') : 'Select date'}
                        <Search className="h-3.5 w-3.5 opacity-30" />
                      </button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0 border-white/10 bg-[#020617]" align="start">
                      <CalendarComponent mode="single" selected={pickupDate} onSelect={setPickupDate} disabled={(d) => d < new Date()} className="p-3 text-white" />
                    </PopoverContent>
                  </Popover>
                </div>

                {/* Return Date */}
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-black text-white/40 uppercase tracking-[0.25em] flex items-center gap-2">
                    <Calendar className="h-3 w-3 text-secondary" /> Return Date
                  </label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <button className={cn(
                        "h-12 flex items-center justify-between bg-white/10 border border-white/10 hover:border-secondary/40 rounded-xl px-4 text-sm font-bold transition-all",
                        !dropDate ? "text-white/30" : "text-white"
                      )}>
                        {dropDate ? format(dropDate, 'dd MMM yyyy') : 'Select date'}
                        <Search className="h-3.5 w-3.5 opacity-30" />
                      </button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0 border-white/10 bg-[#020617]" align="start">
                      <CalendarComponent mode="single" selected={dropDate} onSelect={setDropDate} disabled={(d) => d < (pickupDate || new Date())} className="p-3 text-white" />
                    </PopoverContent>
                  </Popover>
                </div>

                {/* Search Button */}
                <Button
                  onClick={() => navigate('/bikes')}
                  className="h-12 rounded-xl bg-secondary hover:bg-secondary/90 text-white font-black text-xs uppercase tracking-widest transition-all shadow-xl shadow-secondary/30 hover:scale-[1.02]"
                >
                  Find Bikes <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 mb-10"
          >
            <Button
              size="lg"
              onClick={() => navigate('/bikes')}
              className="h-14 px-10 rounded-2xl bg-primary hover:bg-primary/90 text-white font-black text-xs uppercase tracking-widest shadow-xl shadow-primary/30 hover:scale-105 active:scale-95 transition-all border-0"
            >
              Browse All Bikes
            </Button>
            <a href={`https://wa.me/${BRAND.whatsapp}?text=Hi! I want to book a bike rental.`} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                variant="outline"
                className="h-14 px-10 rounded-2xl border-white/20 text-primary hover:bg-white hover:text-primary font-black text-xs uppercase tracking-widest transition-all w-full sm:w-auto"
              >
                <WhatsAppIcon className="mr-2 h-4 w-4" /> Book via WhatsApp
              </Button>
            </a>
          </motion.div>

          {/* Trust badges row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            {TRUST_BADGES.map((badge, i) => (
              <div key={i} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-4 py-2.5 backdrop-blur-sm">
                <badge.icon className="h-4 w-4 text-secondary shrink-0" />
                <div>
                  <p className="text-white text-xs font-black leading-none">{badge.label}</p>
                  <p className="text-white/40 text-[9px] font-semibold mt-0.5">{badge.sub}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-2 opacity-20 animate-bounce">
        <div className="w-[1px] h-10 bg-gradient-to-b from-white to-transparent" />
        <span className="text-[7px] font-black text-white uppercase tracking-[1em]">Scroll</span>
      </div>
    </section>
  );
}
