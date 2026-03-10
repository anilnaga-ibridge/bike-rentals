import { motion, AnimatePresence } from 'framer-motion';
import { tripPackages } from '@/data/packages';
import { Calendar, MapPin, Star, Mountain, ChevronRight, Check, Users, Clock, Compass, Flame, ArrowRight, Phone } from 'lucide-react';
import { WhatsAppIcon } from '@/components/icons/WhatsAppIcon';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { BRAND } from '@/constants/brand';

const difficultyConfig: Record<string, { label: string; color: string; dot: string; bg: string }> = {
  Easy: { label: 'Easy', color: 'text-emerald-600', dot: 'bg-emerald-500', bg: 'bg-emerald-50 border-emerald-200' },
  Moderate: { label: 'Moderate', color: 'text-primary', dot: 'bg-primary', bg: 'bg-primary/10 border-primary/20' },
  Challenging: { label: 'Challenging', color: 'text-secondary', dot: 'bg-secondary', bg: 'bg-secondary/10 border-secondary/20' },
};

const filterTabs = ['All', 'Easy', 'Moderate', 'Challenging'];

function PackageCard({ pkg, i }: { pkg: typeof tripPackages[0]; i: number }) {
  const diff = difficultyConfig[pkg.difficulty];
  const savings = pkg.originalPrice - pkg.price;
  const savingsPercent = Math.round((savings / pkg.originalPrice) * 100);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ delay: i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="group relative rounded-[2.5rem] overflow-hidden glass border border-primary/10 shadow-xl hover:shadow-2xl hover:border-primary/20 transition-all duration-500"
    >
      {/* Subtle gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1fr_1.3fr]">
        {/* ── Image Column ── */}
        <div className="relative aspect-[4/3] lg:aspect-auto min-h-[280px] overflow-hidden">
          <img
            src={pkg.image}
            alt={pkg.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            loading="lazy"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=800&q=80';
            }}
          />
          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/20 lg:bg-gradient-to-r lg:from-black/20 lg:via-black/10 lg:to-black/60" />

          {/* Badges top */}
          <div className="absolute top-5 left-5 flex flex-col gap-2 z-10">
            {pkg.featured && (
              <div className="inline-flex items-center gap-1.5 bg-secondary text-white text-[9px] font-black uppercase tracking-[0.25em] px-3 py-1.5 rounded-full shadow-lg shadow-secondary/30">
                <Flame className="h-3 w-3" /> Featured
              </div>
            )}
            <div className={cn('inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full border backdrop-blur-md', diff.bg, diff.color)}>
              <span className={cn('w-2 h-2 rounded-full', diff.dot)} />
              <Mountain className="h-3 w-3" /> {diff.label}
            </div>
          </div>

          {/* Savings badge top-right */}
          <div className="absolute top-5 right-5 z-10 bg-emerald-500 text-white text-[10px] font-black px-3 py-1.5 rounded-full shadow-lg">
            SAVE {savingsPercent}%
          </div>

          {/* Bottom info overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 z-10 lg:hidden">
            <h2 className="font-display font-black text-2xl text-white">{pkg.name}</h2>
            <div className="flex items-center gap-2 mt-2">
              <Star className="h-4 w-4 fill-secondary text-secondary" />
              <span className="text-white font-bold text-sm">{pkg.rating}</span>
              <span className="text-white/50 text-xs">({pkg.reviewCount} reviews)</span>
            </div>
          </div>
        </div>

        {/* ── Content Column ── */}
        <div className="p-8 sm:p-10 flex flex-col gap-6 justify-between">
          {/* Header */}
          <div className="space-y-4">
            {/* Rating + Duration - desktop only */}
            <div className="hidden lg:flex items-center gap-3">
              <div className="flex items-center gap-1.5 bg-secondary/10 border border-secondary/20 px-3 py-1.5 rounded-full">
                <Star className="h-3.5 w-3.5 fill-secondary text-secondary" />
                <span className="text-sm font-black text-primary">{pkg.rating}</span>
                <span className="text-[11px] text-muted-foreground">({pkg.reviewCount})</span>
              </div>
              <div className="flex items-center gap-1.5 bg-primary/5 border border-primary/10 px-3 py-1.5 rounded-full">
                <Calendar className="h-3.5 w-3.5 text-primary" />
                <span className="text-[11px] font-black uppercase tracking-widest text-primary">{pkg.duration} Days</span>
              </div>
            </div>

            <h2 className="font-display font-black text-3xl sm:text-4xl text-primary leading-tight group-hover:text-secondary transition-colors duration-300">
              {pkg.name}
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed">{pkg.description}</p>

            {/* Route pill */}
            <div className="flex items-center gap-3 bg-primary/5 border border-primary/10 rounded-2xl p-4">
              <div className="w-9 h-9 rounded-xl bg-white shadow-sm flex items-center justify-center shrink-0">
                <Compass className="h-4 w-4 text-secondary" />
              </div>
              <div>
                <p className="text-[9px] font-black text-muted-foreground uppercase tracking-widest mb-0.5">Route</p>
                <span className="text-sm font-semibold text-primary">{pkg.route}</span>
              </div>
            </div>
          </div>

          {/* Highlights / Includes */}
          <div className="grid grid-cols-2 gap-2">
            {pkg.includes.slice(0, 6).map((inc) => (
              <div key={inc} className="flex items-center gap-2 text-xs font-semibold text-foreground/80">
                <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                  <Check className="h-3 w-3 text-emerald-600" />
                </div>
                {inc}
              </div>
            ))}
          </div>

          {/* Price + CTA */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 pt-5 border-t border-primary/10">
            <div>
              <span className="text-xs text-muted-foreground line-through">₹{pkg.originalPrice.toLocaleString()}</span>
              <div className="flex items-baseline gap-2 mt-0.5">
                <span className="font-display font-black text-4xl text-primary leading-none">₹{pkg.price.toLocaleString()}</span>
                <span className="text-xs text-muted-foreground font-medium">/ person</span>
              </div>
              <div className="text-xs text-emerald-600 font-bold mt-1">You save ₹{savings.toLocaleString()}</div>
            </div>
            <div className="space-y-2">
              <p className="text-[11px] font-black uppercase tracking-widest text-secondary flex items-center gap-1.5">
                🏍️ {pkg.bikeName}
              </p>
              <Button
                onClick={() => window.open(`https://wa.me/${BRAND.whatsapp}?text=Hi! I'm interested in the "${pkg.name}" trip package (${pkg.duration} days). Please share more details.`, '_blank')}
                className="h-12 px-8 rounded-2xl bg-primary hover:bg-primary/90 text-white font-black text-xs uppercase tracking-widest shadow-xl shadow-primary/20 hover:scale-105 active:scale-95 transition-all border-0"
              >
                Book Package <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function TripPackagesPage() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = activeFilter === 'All'
    ? tripPackages
    : tripPackages.filter(p => p.difficulty === activeFilter);

  return (
    <div className="overflow-x-hidden">

      {/* ── Dark Cinematic Hero ── */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-[#020617]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1558981359-219d6364c9c8?w=1600&q=80"
            alt="Trip Packages"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/30 via-[#020617]/60 to-[#020617]" />
        </div>
        <div className="absolute top-1/4 left-1/5 w-96 h-96 bg-secondary/25 rounded-full blur-[110px]" />
        <div className="absolute bottom-1/4 right-1/5 w-80 h-80 bg-primary/25 rounded-full blur-[100px]" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center max-w-4xl mx-auto px-6 pt-32 pb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 bg-secondary/20 border border-secondary/30 rounded-full px-4 py-2 mb-6"
          >
            <Compass className="h-4 w-4 text-secondary" />
            <span className="text-secondary text-xs font-black tracking-widest uppercase">Curated Motorcycle Adventures</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="font-display font-black text-5xl sm:text-6xl md:text-7xl text-white uppercase leading-none tracking-tighter"
          >
            Ride Beyond{' '}
            <span className="text-secondary drop-shadow-[0_0_25px_rgba(255,106,0,0.5)]">
              Limits
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-6 text-lg text-white/60 max-w-2xl mx-auto leading-relaxed"
          >
            Pre-planned premium motorcycle trips with everything included — bike, insurance, gear, and an unforgettable route.
          </motion.p>

          {/* Trust pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
          >
            {[
              { icon: Users, label: '500+ Riders Served' },
              { icon: Clock, label: 'Free Itinerary Planning' },
              { icon: Mountain, label: 'Helmet & Gear Included' },
            ].map((pill, i) => (
              <div key={i} className="flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 text-white/80 text-xs font-semibold">
                <pill.icon className="h-3.5 w-3.5 text-secondary" />
                {pill.label}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ── Filter Tabs + Package List ── */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute -right-48 top-32 w-96 h-96 bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute -left-48 bottom-32 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          {/* Filter tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap items-center justify-center gap-3 mb-16"
          >
            {filterTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveFilter(tab)}
                className={cn(
                  'px-6 py-2.5 rounded-2xl text-xs font-black uppercase tracking-widest transition-all duration-300',
                  activeFilter === tab
                    ? 'bg-primary text-white shadow-lg shadow-primary/30 scale-105'
                    : 'glass border border-primary/10 text-muted-foreground hover:text-primary hover:border-primary/30'
                )}
              >
                {tab}
                {tab === 'All' && (
                  <span className="ml-2 bg-white/20 text-white/80 text-[9px] px-2 py-0.5 rounded-full">
                    {tripPackages.length}
                  </span>
                )}
              </button>
            ))}
          </motion.div>

          {/* Packages */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-10 max-w-6xl mx-auto"
            >
              {filtered.map((pkg, i) => (
                <PackageCard key={pkg.id} pkg={pkg} i={i} />
              ))}
              {filtered.length === 0 && (
                <div className="text-center py-20 text-muted-foreground">
                  <Mountain className="h-16 w-16 mx-auto mb-4 opacity-20" />
                  <p className="font-display font-black text-2xl text-primary opacity-40">No packages found</p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ── Custom Trip CTA ── */}
      <section className="py-20 bg-[#020617] relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-secondary/20 rounded-full blur-[80px]" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="text-secondary text-xs font-black tracking-[0.4em] uppercase mb-4 block">Need Something Custom?</span>
            <h2 className="font-display font-black text-4xl sm:text-5xl text-white uppercase leading-none tracking-tighter">
              Plan Your <span className="text-secondary drop-shadow-[0_0_20px_rgba(255,106,0,0.4)]">Dream Route</span>
            </h2>
            <p className="mt-6 text-white/50 max-w-xl mx-auto leading-relaxed">
              Have a specific destination in mind? Talk to our trip experts and we'll build a custom package just for you.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`https://wa.me/${BRAND.whatsapp}?text=Hi! I want to plan a custom bike trip. Can you help?`} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="h-14 px-12 rounded-2xl bg-secondary hover:bg-secondary/90 text-white font-black text-xs uppercase tracking-widest shadow-lg shadow-secondary/30 hover:scale-105 transition-all border-0">
                  <WhatsAppIcon className="mr-2 h-4 w-4" /> Chat on WhatsApp
                </Button>
              </a>
              <a href={`tel:${BRAND.whatsapp}`}>
                <Button size="lg" variant="outline" className="h-14 px-12 rounded-2xl border-white/20 text-white hover:bg-white hover:text-primary font-black text-xs uppercase tracking-widest transition-all">
                  <ArrowRight className="mr-2 h-4 w-4" /> Call Us Now
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
