import { motion, useScroll, useTransform } from 'framer-motion';
import { Shield, Heart, Eye, Wrench, Star, Bike, Users, MapPin, CheckCircle, Zap, Clock, ThumbsUp } from 'lucide-react';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const values = [
  {
    icon: Heart,
    title: 'Our Mission',
    desc: 'To make bike rentals accessible, affordable, and hassle-free for every commuter and traveler in India.',
    color: 'from-rose-500/20 to-pink-500/10',
    border: 'border-rose-200',
    iconBg: 'bg-rose-50 text-rose-500',
  },
  {
    icon: Eye,
    title: 'Our Vision',
    desc: "To become India's most trusted two-wheeler rental platform, connecting riders with quality vehicles in every city.",
    color: 'from-violet-500/20 to-purple-500/10',
    border: 'border-violet-200',
    iconBg: 'bg-violet-50 text-violet-500',
  },
  {
    icon: Shield,
    title: 'Safety First',
    desc: 'Every vehicle undergoes a 50-point quality check. We provide helmets, insurance, and 24/7 roadside assistance.',
    color: 'from-primary/20 to-blue-500/10',
    border: 'border-primary/20',
    iconBg: 'bg-primary/10 text-primary',
  },
  {
    icon: Wrench,
    title: 'Fleet Excellence',
    desc: 'Regular servicing, sanitization after each rental, and proactive maintenance keep our fleet in top condition.',
    color: 'from-secondary/20 to-orange-500/10',
    border: 'border-secondary/20',
    iconBg: 'bg-secondary/10 text-secondary',
  },
  {
    icon: Zap,
    title: 'Instant Booking',
    desc: 'Book your ride in seconds — no paperwork, no waiting. Just pick your bike and go.',
    color: 'from-yellow-500/20 to-amber-500/10',
    border: 'border-yellow-200',
    iconBg: 'bg-yellow-50 text-yellow-600',
  },
  {
    icon: ThumbsUp,
    title: 'Customer Love',
    desc: 'Over 10,000 happy riders and counting. Our 4.9★ rating speaks for itself.',
    color: 'from-emerald-500/20 to-green-500/10',
    border: 'border-emerald-200',
    iconBg: 'bg-emerald-50 text-emerald-600',
  },
];

const stats = [
  { value: '3', label: 'Hubs in Hyderabad', icon: MapPin },
  { value: '500+', label: 'Premium Bikes', icon: Bike },
  { value: '10K+', label: 'Happy Riders', icon: Users },
  { value: '4.9★', label: 'Average Rating', icon: Star },
];

const timeline = [
  { year: '2022', title: 'The Spark', desc: 'Started with just 5 bikes in Ameerpet, Hyderabad on a mission to change city commutes.' },
  { year: '2023', title: 'Growing Fast', desc: 'Expanded to Madhapur hub. Crossed 1,000 rides milestone. Team of 10+ dedicated staff.' },
  { year: '2024', title: 'Kukatpally Launch', desc: 'Opened the third hub at Kukatpally. Launched monthly rentals & trip packages.' },
  { year: '2025', title: 'Going Digital', desc: 'Launched our premium website & online booking. 10,000+ satisfied riders and still growing!' },
];

const perks = [
  'Lowest guaranteed prices — always',
  'No hidden fees or security deposit hassle',
  'Helmets included with every rental',
  'Well-maintained, regularly serviced bikes',
  'Quick & easy WhatsApp booking in 2 minutes',
  'Best for students, office commuters & delivery',
];

export default function AboutPage() {
  const navigate = useNavigate();
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <div className="overflow-x-hidden">

      {/* ─── Cinematic Hero ─── */}
      <section ref={heroRef} className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-[#020617]">
        <motion.div style={{ y: heroY }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/30 via-[#020617]/80 to-[#020617]" />
          <img
            src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=1600&q=80"
            alt="Bike Rentals"
            className="w-full h-full object-cover opacity-30"
          />
        </motion.div>

        {/* Atmospheric glows */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary/20 rounded-full blur-[80px] pointer-events-none" />

        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 text-center max-w-4xl mx-auto px-6 pt-28 pb-20"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-secondary text-xs font-black tracking-[0.4em] uppercase mb-4"
          >
            Our Story
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="font-display font-black text-5xl sm:text-6xl md:text-7xl text-white uppercase leading-none tracking-tighter"
          >
            Ride the{' '}
            <span className="text-secondary drop-shadow-[0_0_25px_rgba(255,106,0,0.5)]">
              Future
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-6 text-lg text-white/60 max-w-2xl mx-auto leading-relaxed"
          >
            Sri Ganesh Bike Rentals started with a dream — affordable, reliable bikes for every Indian.
            Today, we're Hyderabad's most trusted rental brand.
          </motion.p>
        </motion.div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-40 animate-bounce">
          <div className="w-[1px] h-8 bg-gradient-to-b from-white to-transparent" />
        </div>
      </section>

      {/* ─── Stats Bar ─── */}
      <section className="relative bg-background border-b border-primary/10">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-primary/5 border border-primary/10 mb-4 group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                  <s.icon className="h-5 w-5 text-primary group-hover:text-white transition-colors" />
                </div>
                <p className="font-display font-black text-4xl text-primary">{s.value}</p>
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mt-1">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Our Journey (Timeline) ─── */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute -left-32 top-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-secondary text-xs font-black tracking-[0.4em] uppercase">The Journey</span>
            <h2 className="font-display font-black text-4xl md:text-5xl text-primary mt-2">How We Got Here</h2>
          </motion.div>

          <div className="max-w-4xl mx-auto relative">
            {/* Vertical line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/20 via-secondary/20 to-transparent -translate-x-1/2" />

            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className={`relative flex items-start gap-6 mb-14 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-row pl-20 md:pl-0`}
              >
                {/* Dot */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 top-4 w-4 h-4 rounded-full bg-secondary border-4 border-background shadow-lg shadow-secondary/30 z-10" />
                {/* Card */}
                <div className={`md:w-[calc(50%-3rem)] ${i % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'} glass rounded-2xl border border-primary/10 p-6 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}>
                  <span className="text-secondary text-xs font-black tracking-[0.3em] uppercase">{item.year}</span>
                  <h3 className="font-display font-black text-xl text-primary mt-1 mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Why Choose Us (Perks + Image) ─── */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative rounded-[2.5rem] overflow-hidden aspect-[4/3] shadow-2xl shadow-primary/10"
            >
              <img
                src="https://images.unsplash.com/photo-1558980394-4c7c9299fe96?w=900&q=80"
                alt="Sri Ganesh Fleet"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="glass rounded-2xl border border-white/20 p-4 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center shrink-0">
                    <Bike className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-black text-sm">500+ Premium Bikes</p>
                    <p className="text-white/60 text-xs">Available across 3 Hyderabad hubs</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Perks */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <span className="text-secondary text-xs font-black tracking-[0.4em] uppercase">Why Us?</span>
                <h2 className="font-display font-black text-4xl md:text-5xl text-primary mt-2 leading-tight">
                  Born from <span className="text-secondary">passion,</span><br />built on trust.
                </h2>
                <p className="text-muted-foreground mt-4 leading-relaxed">
                  We're not just another rental company. We're riders ourselves — and we know exactly what you need.
                </p>
              </div>
              <ul className="space-y-3">
                {perks.map((perk, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-foreground">{perk}</span>
                  </motion.li>
                ))}
              </ul>
              <Button
                size="lg"
                onClick={() => navigate('/bikes')}
                className="h-14 px-10 rounded-2xl bg-primary hover:bg-primary/90 text-white font-black text-xs uppercase tracking-widest shadow-xl shadow-primary/20"
              >
                Explore Our Fleet
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Values Grid ─── */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 max-w-2xl mx-auto"
          >
            <span className="text-secondary text-xs font-black tracking-[0.4em] uppercase">What We Stand For</span>
            <h2 className="font-display font-black text-4xl md:text-5xl text-primary mt-2">Our Core Values</h2>
            <p className="text-muted-foreground mt-4 leading-relaxed">
              Every decision we make is guided by these principles.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className={`group relative p-7 rounded-[2rem] border bg-gradient-to-br ${v.color} ${v.border} hover:shadow-xl hover:-translate-y-2 transition-all duration-500 overflow-hidden`}
              >
                <div className="absolute top-0 right-0 w-32 h-32 opacity-10 pointer-events-none">
                  <v.icon className="w-full h-full" />
                </div>
                <div className={`w-14 h-14 rounded-2xl ${v.iconBg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <v.icon className="h-7 w-7" />
                </div>
                <h3 className="font-display font-black text-xl text-foreground mb-3">{v.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA Banner ─── */}
      <section className="py-20 bg-[#020617] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-secondary/20 rounded-full blur-[80px]" />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-secondary text-xs font-black tracking-[0.4em] uppercase mb-4">Ready to Ride?</p>
            <h2 className="font-display font-black text-4xl md:text-6xl text-white uppercase leading-none tracking-tighter">
              Start Your <span className="text-secondary drop-shadow-[0_0_20px_rgba(255,106,0,0.4)]">Adventure</span>
            </h2>
            <p className="mt-6 text-white/50 max-w-xl mx-auto text-lg">
              Join thousands of happy riders. Book your bike in seconds.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => navigate('/bikes')}
                className="h-14 px-12 rounded-2xl bg-secondary hover:bg-secondary/90 text-white font-black text-xs uppercase tracking-widest shadow-lg shadow-secondary/20 hover:scale-105 transition-all"
              >
                Browse All Bikes
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => navigate('/contact')}
                className="h-14 px-12 rounded-2xl border-white/20 text-white hover:bg-white hover:text-[#020617] font-black text-xs uppercase tracking-widest transition-all"
              >
                Contact Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
