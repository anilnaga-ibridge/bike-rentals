import { motion } from 'framer-motion';
import { bikes } from '@/data/bikes';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function FlexiblePackages() {
  const showcaseBikes = bikes.filter(b => b.available).slice(0, 3);

  return (
    <section className="py-24 relative overflow-hidden bg-white">
      {/* Branded Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full opacity-60" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/5 blur-[120px] rounded-full opacity-40" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 mb-6">
            <Zap className="h-3.5 w-3.5 text-secondary fill-secondary" />
            <span className="text-[11px] font-black uppercase tracking-[0.2em] text-primary/60">Limited Offers</span>
          </div>
          <h2 className="font-display text-4xl sm:text-6xl text-primary font-black tracking-tight">
            Flexible <span className="text-secondary underline decoration-primary/10 underline-offset-8">Packages</span>
          </h2>
          <p className="text-primary/40 mt-6 max-w-xl mx-auto font-medium text-lg leading-relaxed">
            Choose the duration that fits your journey. Premium tiered pricing for our exclusively curated fleet.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {showcaseBikes.map((bike, i) => {
            const premiumName = `Premium ${bike.category} Edition`;
            return (
              <motion.div
                key={bike.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.6 }}
                className="group relative"
              >
                {/* Brand-Aligned Package Card with Mixed Color Background */}
                <div className="relative overflow-hidden rounded-[3rem] bg-white border border-primary/5 shadow-xl transition-all duration-500 group-hover:border-secondary/20 group-hover:shadow-2xl group-hover:scale-[1.02]">
                  {/* Branded Color Mix Background Layer - Increased Opacity for Visibility */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-white/80 to-secondary/10 transition-colors duration-500 group-hover:from-primary/20 group-hover:to-secondary/20" />
                  <div className="relative z-10">
                    <div className="relative aspect-[16/11] overflow-hidden bg-surface">
                      <img
                        src={bike.image}
                        alt="Premium Rental Bike"
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent opacity-80" />
                      <div className="absolute bottom-6 left-8">
                        <p className="text-[11px] text-secondary uppercase tracking-[0.25em] font-black mb-1">{bike.category}</p>
                        <h3 className="font-display text-3xl text-white font-black tracking-tight">{premiumName}</h3>
                      </div>
                    </div>

                    <div className="p-8 space-y-6">
                      <div className="space-y-3">
                        {bike.pricingTiers.map((tier, j) => (
                          <div
                            key={j}
                            className={cn(
                              "flex items-center justify-between py-4 px-6 rounded-2xl transition-all duration-500",
                              j === 0
                                ? "bg-secondary text-white shadow-xl shadow-secondary/20 scale-[1.02]"
                                : "bg-primary/[0.03] border border-primary/5 text-primary/70 hover:bg-primary/[0.06]"
                            )}
                          >
                            <span className="flex items-center gap-3 text-[11px] font-black uppercase tracking-widest">
                              <Clock className={cn("h-4 w-4", j === 0 ? "text-white" : "text-secondary")} />
                              {tier.minDays}—{tier.maxDays || '30+'} days
                            </span>
                            <span className="font-display text-2xl font-black">
                              ₹{tier.pricePerDay}<span className="text-[11px] opacity-60 font-body ml-1.5 font-bold">/day</span>
                            </span>
                          </div>
                        ))}
                      </div>

                      <Link to={`/bikes/${bike.id}`} className="block pt-2">
                        <Button className="w-full h-16 rounded-2xl bg-primary text-white hover:bg-secondary font-black text-xs uppercase tracking-[0.25em] transition-all duration-500 shadow-xl shadow-primary/10 border-0 group/btn">
                          Select Package
                          <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover/btn:translate-x-2" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
