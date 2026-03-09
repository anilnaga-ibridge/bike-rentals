import { motion, AnimatePresence } from 'framer-motion';
import { sampleCoupons } from '@/data/coupons';
import { Tag, Percent, IndianRupee, Calendar, Copy, Check, Zap, Clock, Gift, TrendingDown, Flame } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const cardStyles = [
  { bg: 'from-[#0B3D91] to-[#1a56b0]', accent: 'bg-white/10 border-white/20', badge: 'bg-white/20 text-white', glow: 'shadow-primary/40' },
  { bg: 'from-[#FF6A00] to-[#ff8c35]', accent: 'bg-white/10 border-white/20', badge: 'bg-white/20 text-white', glow: 'shadow-secondary/40' },
  { bg: 'from-[#7c3aed] to-[#9f60f0]', accent: 'bg-white/10 border-white/20', badge: 'bg-white/20 text-white', glow: 'shadow-violet-500/40' },
  { bg: 'from-[#0a6e50] to-[#0d8c66]', accent: 'bg-white/10 border-white/20', badge: 'bg-white/20 text-white', glow: 'shadow-emerald-600/40' },
  { bg: 'from-[#be123c] to-[#e11d48]', accent: 'bg-white/10 border-white/20', badge: 'bg-white/20 text-white', glow: 'shadow-rose-600/40' },
  { bg: 'from-[#854d0e] to-[#a16207]', accent: 'bg-white/10 border-white/20', badge: 'bg-white/20 text-white', glow: 'shadow-amber-700/40' },
];

function CouponCard({ c, i }: { c: typeof sampleCoupons[0]; i: number }) {
  const [copied, setCopied] = useState(false);
  const style = cardStyles[i % cardStyles.length];
  const usagePercent = Math.round((c.usedCount / c.usageLimit) * 100);
  const remaining = c.usageLimit - c.usedCount;

  const handleCopy = () => {
    navigator.clipboard.writeText(c.code);
    setCopied(true);
    toast.success(`Code "${c.code}" copied to clipboard!`);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ delay: i * 0.08, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className={cn('group relative rounded-[2.5rem] overflow-hidden shadow-2xl cursor-default', style.glow)}
    >
      {/* Top gradient section with discount value */}
      <div className={cn('relative bg-gradient-to-br p-8 pb-10', style.bg)}>
        {/* Background tag icon watermark */}
        <div className="absolute top-4 right-4 opacity-10">
          <Tag className="w-28 h-28 -rotate-12" />
        </div>

        {/* Hot badge */}
        {usagePercent > 40 && (
          <div className="inline-flex items-center gap-1 bg-white/20 text-white text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full mb-4 border border-white/30">
            <Flame className="h-3 w-3" /> Popular Deal
          </div>
        )}

        {/* Discount amount */}
        <div className="flex items-end gap-2 mb-2">
          {c.type === 'percentage'
            ? <Percent className="h-8 w-8 text-white/70 mb-2" />
            : <IndianRupee className="h-8 w-8 text-white/70 mb-2" />
          }
          <span className="font-display font-black text-7xl text-white leading-none drop-shadow-lg">
            {c.value}
          </span>
        </div>
        <p className="text-white/70 text-sm font-black uppercase tracking-[0.4em]">
          {c.type === 'percentage' ? 'Percent Off' : 'Rupees Off'}
        </p>

        {/* Coupon code pill */}
        <div className={cn('mt-6 flex items-center justify-between rounded-2xl border px-5 py-3', style.accent)}>
          <code className="font-display font-black text-2xl text-white tracking-widest">{c.code}</code>
          <Button
            variant="ghost"
            size="sm"
            className="h-9 w-9 p-0 rounded-xl hover:bg-white/20 text-white transition-all"
            onClick={handleCopy}
          >
            <AnimatePresence mode="wait">
              {copied
                ? <motion.div key="check" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}><Check className="h-5 w-5 text-white" /></motion.div>
                : <motion.div key="copy" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}><Copy className="h-5 w-5" /></motion.div>
              }
            </AnimatePresence>
          </Button>
        </div>

        {/* Serrated edge connector */}
        <div className="absolute -bottom-4 left-0 right-0 flex">
          {Array.from({ length: 20 }).map((_, j) => (
            <div key={j} className="flex-1 h-8 bg-background rounded-t-full" />
          ))}
        </div>
      </div>

      {/* Bottom info section */}
      <div className="bg-background pt-8 px-8 pb-8 space-y-5">
        <div className="grid grid-cols-2 gap-4">
          <div className="glass rounded-2xl border border-primary/10 p-4 text-center">
            <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-1">Min Order</p>
            <p className="font-display font-black text-xl text-primary">₹{c.minOrderAmount}</p>
          </div>
          <div className="glass rounded-2xl border border-primary/10 p-4 text-center">
            <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-1">Max Save</p>
            <p className="font-display font-black text-xl text-secondary">₹{c.maxDiscount}</p>
          </div>
        </div>

        {/* Usage progress bar */}
        <div className="space-y-2">
          <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-muted-foreground">
            <span className="flex items-center gap-1">
              <TrendingDown className="h-3 w-3" /> {remaining} Remaining
            </span>
            <span>{usagePercent}% Used</span>
          </div>
          <div className="h-2 bg-primary/10 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${usagePercent}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: 'easeOut', delay: i * 0.08 + 0.4 }}
              className={cn('h-full rounded-full bg-gradient-to-r', style.bg)}
            />
          </div>
        </div>

        {/* Validity */}
        <div className="flex items-center justify-center gap-2 pt-1 text-xs font-bold text-muted-foreground">
          <Calendar className="h-3.5 w-3.5 text-secondary" />
          <span>Valid until <strong className="text-foreground">{c.validTo}</strong></span>
        </div>

        <Button
          onClick={handleCopy}
          className={cn(
            'w-full h-12 rounded-2xl font-black text-xs uppercase tracking-widest text-white border-0 shadow-lg transition-all hover:scale-[1.02] bg-gradient-to-r',
            style.bg,
            `shadow-[${style.glow}]`
          )}
        >
          <Copy className="mr-2 h-4 w-4" />
          {copied ? 'Copied!' : 'Copy Code & Save'}
        </Button>
      </div>
    </motion.div>
  );
}

export default function OffersPage() {
  const navigate = useNavigate();
  const activeCoupons = sampleCoupons.filter(c => c.active);

  return (
    <div className="overflow-x-hidden">

      {/* ── Dark Hero ── */}
      <section className="relative min-h-[55vh] flex items-center justify-center overflow-hidden bg-[#020617]">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary/25 rounded-full blur-[110px]" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/25 rounded-full blur-[100px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-violet-500/15 rounded-full blur-[80px]" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 text-center max-w-4xl mx-auto px-6 pt-32 pb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 bg-secondary/20 border border-secondary/30 rounded-full px-4 py-2 mb-6"
          >
            <Gift className="h-4 w-4 text-secondary" />
            <span className="text-secondary text-xs font-black tracking-widest uppercase">Special Deals & Offers</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="font-display font-black text-5xl sm:text-6xl md:text-7xl text-white uppercase leading-none tracking-tighter"
          >
            Save Big,{' '}
            <span className="text-secondary drop-shadow-[0_0_25px_rgba(255,106,0,0.5)]">
              Ride More
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-6 text-lg text-white/60 max-w-2xl mx-auto leading-relaxed"
          >
            Exclusive coupon codes for Sri Ganesh riders. Copy the code, apply at checkout and save instantly.
          </motion.p>

          {/* Live stat pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
          >
            {[
              { icon: Zap, label: `${activeCoupons.length} Active Coupons` },
              { icon: Clock, label: 'Limited Time Offers' },
              { icon: TrendingDown, label: 'Up to 50% Off' },
            ].map((pill, i) => (
              <div key={i} className="flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 text-white/80 text-xs font-semibold">
                <pill.icon className="h-3.5 w-3.5 text-secondary" />
                {pill.label}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ── Coupons Grid ── */}
      <section className="py-24 bg-gradient-to-b from-background via-primary/3 to-background relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[150px] -translate-y-1/3 -translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px] translate-y-1/3 translate-x-1/3 pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-14">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-muted-foreground text-sm font-medium"
            >
              <span className="text-secondary font-black">{activeCoupons.length}</span> exclusive offers available right now
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {activeCoupons.map((c, i) => (
              <CouponCard key={c.id} c={c} i={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── How To Use ── */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-secondary text-xs font-black tracking-[0.4em] uppercase">How It Works</span>
            <h2 className="font-display font-black text-4xl text-primary mt-2">Redeem in 3 Steps</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { num: '01', icon: Copy, title: 'Copy the Code', desc: 'Tap the copy button on any coupon card above.' },
              { num: '02', icon: Tag, title: 'Browse & Select', desc: 'Pick your perfect bike from our fleet on the Bikes page.' },
              { num: '03', icon: Check, title: 'Apply & Save', desc: 'Enter the code at booking checkout to apply your discount instantly.' },
            ].map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass border border-primary/10 rounded-[2rem] p-8 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-primary text-white font-display font-black text-xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-primary/30">
                  {step.num}
                </div>
                <step.icon className="h-7 w-7 text-secondary mx-auto mb-4" />
                <h3 className="font-display font-black text-lg text-primary mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button
              size="lg"
              onClick={() => navigate('/bikes')}
              className="h-14 px-12 rounded-2xl bg-primary hover:bg-primary/90 text-white font-black text-xs uppercase tracking-widest shadow-xl shadow-primary/20 hover:scale-105 transition-all"
            >
              Browse Bikes Now
            </Button>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
