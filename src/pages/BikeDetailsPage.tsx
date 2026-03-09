import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { bikes, cities } from '@/data/bikes';
import {
  Star, ArrowLeft, Gauge, Settings, Fuel, Ruler, Weight, Zap,
  MapPin, Clock, ShieldCheck, Heart, CheckCircle, Share2, Phone
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { BookingForm } from '@/components/booking/BookingForm';
import { BikeReviews } from '@/components/booking/BikeReviews';
import { cn } from '@/lib/utils';
import { BRAND } from '@/constants/brand';
import { useState } from 'react';

export default function BikeDetailsPage() {
  const { id } = useParams();
  const bike = bikes.find((b) => b.id === id);
  const [liked, setLiked] = useState(false);

  if (!bike) {
    return (
      <div className="pt-32 container mx-auto px-6 text-center py-20">
        <p className="text-muted-foreground text-lg">Bike not found</p>
        <Link to="/bikes" className="text-primary mt-4 inline-flex items-center gap-2 font-bold hover:text-secondary transition-colors">
          <ArrowLeft className="h-4 w-4" /> Back to Bikes
        </Link>
      </div>
    );
  }

  const cityName = cities.find(c => c.id === bike.city)?.name || bike.city;
  const startPrice = bike.pricingTiers[bike.pricingTiers.length - 1].pricePerDay;

  const specs = [
    { icon: Gauge, label: 'Engine', value: `${bike.engineCC}cc` },
    { icon: Zap, label: 'Top Speed', value: bike.specs?.topSpeed ?? '—' },
    { icon: Fuel, label: 'Mileage', value: bike.specs?.mileage ?? '—' },
    { icon: Weight, label: 'Weight', value: bike.specs?.weight ?? '—' },
    { icon: Ruler, label: 'Seat Height', value: bike.specs?.seatHeight ?? '—' },
    { icon: Settings, label: 'Transmission', value: bike.transmission },
  ];

  const includes = [
    'Full Comprehensive Insurance',
    'Premium Helmet Included',
    'Free First Servicing',
    '24/7 Roadside Assistance',
    'GPS Navigation (on request)',
    'Unlimited Kilometres',
  ];

  return (
    <div className="min-h-screen bg-background">

      {/* ── Full-Bleed Cinematic Hero ── */}
      <div className="relative h-[55vh] min-h-[420px] overflow-hidden bg-[#020617]">
        <img
          src={bike.image}
          alt={bike.name}
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/20 via-[#020617]/50 to-[#020617]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#020617]/60 via-transparent to-transparent" />
        {/* Atmospheric glows */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/15 rounded-full blur-[100px]" />

        {/* Back button */}
        <div className="absolute top-8 left-6 z-20 pt-16">
          <Link
            to="/bikes"
            className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-md text-white text-xs font-black uppercase tracking-widest px-4 py-2.5 rounded-full hover:bg-white/20 transition-all"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Showroom
          </Link>
        </div>

        {/* Hero content */}
        <div className="absolute bottom-0 left-0 right-0 p-8 z-10 container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl"
          >
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <Badge className={cn(
                "border-0 text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full",
                bike.available ? "bg-emerald-500 text-white" : "bg-rose-500 text-white"
              )}>
                {bike.available ? '✓ Ready to Ride' : 'On Trip'}
              </Badge>
              <div className="flex items-center gap-1.5 bg-secondary/20 border border-secondary/30 rounded-full px-3 py-1.5">
                <Zap className="h-3 w-3 text-secondary fill-secondary" />
                <span className="text-secondary text-[10px] font-black uppercase tracking-widest">{bike.category}</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/10 border border-white/20 rounded-full px-3 py-1.5 backdrop-blur-sm">
                <MapPin className="h-3 w-3 text-white/70" />
                <span className="text-white/70 text-[10px] font-black uppercase tracking-widest">{cityName}</span>
              </div>
            </div>
            <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-white leading-none tracking-tighter">
              {bike.name}
            </h1>
            <div className="flex items-center gap-4 mt-4">
              <div className="flex items-center gap-1.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className={cn("h-4 w-4", i < Math.floor(bike.rating) ? "fill-secondary text-secondary" : "text-white/20")} />
                ))}
                <span className="text-white font-black text-sm ml-1">{bike.rating}</span>
                <span className="text-white/40 text-xs">({bike.reviewCount} reviews)</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Action buttons top-right */}
        <div className="absolute top-8 right-6 z-20 pt-16 flex gap-2">
          <button
            onClick={() => setLiked(!liked)}
            className={cn(
              "w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-md border transition-all",
              liked ? "bg-rose-500 border-rose-400 text-white" : "bg-white/10 border-white/20 text-white hover:bg-white/20"
            )}
          >
            <Heart className={cn("h-4 w-4", liked && "fill-white")} />
          </button>
          <button className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10 border border-white/20 text-white hover:bg-white/20 backdrop-blur-md transition-all">
            <Share2 className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* ── Main Content ── */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* ── Left Column ── */}
          <div className="lg:col-span-7 space-y-10">

            {/* Pricing Tiers */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="glass border border-primary/10 rounded-[2rem] p-8 overflow-hidden relative"
            >
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-secondary/5 rounded-full blur-3xl" />
              <h2 className="font-display font-black text-2xl text-primary mb-6">
                <span className="text-secondary">Pricing</span> Plans
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {bike.pricingTiers.map((tier, i) => {
                  const isPopular = i === 1;
                  const durationLabel = tier.maxDays === null
                    ? `${tier.minDays}+ Days`
                    : tier.minDays === tier.maxDays
                      ? `${tier.minDays} Day`
                      : `${tier.minDays}–${tier.maxDays} Days`;
                  return (
                    <div
                      key={i}
                      className={cn(
                        "relative rounded-2xl p-5 border text-center transition-all",
                        isPopular
                          ? "bg-primary border-primary/30 text-white shadow-xl shadow-primary/20"
                          : "bg-background border-primary/10 hover:border-primary/25"
                      )}
                    >
                      {isPopular && (
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-secondary text-white text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                          Best Value
                        </div>
                      )}
                      <Clock className={cn("h-5 w-5 mx-auto mb-2", isPopular ? "text-white/60" : "text-primary/40")} />
                      <p className={cn("text-[10px] font-black uppercase tracking-widest mb-3", isPopular ? "text-white/60" : "text-muted-foreground")}>
                        {durationLabel}
                      </p>
                      <p className={cn("font-display font-black text-3xl leading-none", isPopular ? "text-white" : "text-primary")}>
                        ₹{tier.pricePerDay}
                      </p>
                      <p className={cn("text-[10px] font-semibold mt-1", isPopular ? "text-white/50" : "text-muted-foreground")}>/day</p>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            {/* Specs Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="font-display font-black text-2xl text-primary mb-6">
                Technical <span className="text-secondary">Specs</span>
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {specs.map((s, i) => (
                  <motion.div
                    key={s.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * i + 0.3 }}
                    className="group glass border border-primary/10 rounded-[1.5rem] p-6 flex flex-col items-center text-center hover:border-primary/25 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-primary/5 border border-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-400">
                      <s.icon className="h-5 w-5 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <p className="text-[10px] text-muted-foreground uppercase tracking-[0.2em] font-black mb-1">{s.label}</p>
                    <p className="font-display font-black text-lg text-primary">{s.value}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* What's Included */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="glass border border-primary/10 rounded-[2rem] p-8"
            >
              <h2 className="font-display font-black text-2xl text-primary mb-6">
                What's <span className="text-secondary">Included</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {includes.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0">
                      <CheckCircle className="h-4 w-4 text-emerald-500" />
                    </div>
                    <span className="text-sm font-semibold text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Confidence cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex gap-4 items-start p-6 rounded-[1.5rem] bg-emerald-50 border border-emerald-100">
                <div className="p-3 bg-emerald-500 rounded-2xl text-white shrink-0">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-display font-black text-emerald-900 mb-1">Premium Insurance</h4>
                  <p className="text-sm text-emerald-700/70 leading-relaxed">Comprehensive cover included in every rental. Ride with confidence.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start p-6 rounded-[1.5rem] bg-secondary/5 border border-secondary/15">
                <div className="p-3 bg-secondary rounded-2xl text-white shrink-0">
                  <Heart className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-display font-black text-orange-900 mb-1">Well Maintained</h4>
                  <p className="text-sm text-orange-700/70 leading-relaxed">50-point quality check + 24/7 roadside assistance for every bike.</p>
                </div>
              </div>
            </div>
          </div>

          {/* ── Right Column: Sticky Booking Panel ── */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28 space-y-6">
              {/* Price Banner */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15 }}
                className="relative overflow-hidden rounded-[2rem] bg-[#020617] p-8 shadow-2xl shadow-primary/20"
              >
                <div className="absolute top-0 right-0 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/15 rounded-full blur-3xl" />
                <div className="relative z-10">
                  <p className="text-[10px] uppercase tracking-[0.3em] font-black text-white/40 mb-2">Starts from</p>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="font-display font-black text-5xl text-white">₹{startPrice}</span>
                    <span className="text-white/50 font-semibold">/day</span>
                  </div>
                  <div className="flex flex-wrap gap-3 pt-4 border-t border-white/10">
                    <a
                      href={`https://wa.me/${BRAND.whatsapp}?text=Hi! I want to book the ${bike.name}. Is it available?`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 h-12 bg-secondary hover:bg-secondary/90 text-white rounded-2xl font-black text-xs uppercase tracking-widest shadow-lg shadow-secondary/30 hover:scale-[1.02] transition-all"
                    >
                      Book via WhatsApp
                    </a>
                    <a
                      href={`tel:${BRAND.whatsapp}`}
                      className="w-12 h-12 flex items-center justify-center bg-white/10 border border-white/20 text-white rounded-2xl hover:bg-white/20 transition-all"
                    >
                      <Phone className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Booking Form */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="glass border border-primary/10 rounded-[2rem] p-6"
              >
                <BookingForm bike={bike} />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Reviews */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <BikeReviews bikeId={bike.id} />
        </motion.div>
      </div>
    </div>
  );
}
