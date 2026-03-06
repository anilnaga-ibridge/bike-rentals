import { motion } from 'framer-motion';
import { bikes } from '@/data/bikes';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const packageLabels = ['Daily', 'Weekly', 'Fortnightly', 'Monthly'];

export function FlexiblePackages() {
  const showcaseBikes = bikes.filter(b => b.available).slice(0, 3);

  return (
    <section className="py-20 surface">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-primary text-xs font-semibold tracking-[0.2em] uppercase">Save More</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl mt-1">Flexible Rental Packages</h2>
          <p className="text-muted-foreground text-sm mt-3 max-w-lg mx-auto">
            The longer you rent, the more you save. Check out our tiered pricing for popular bikes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {showcaseBikes.map((bike, i) => (
            <motion.div
              key={bike.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              className="bg-card rounded-2xl border border-border/50 overflow-hidden card-lift"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img src={bike.image} alt={bike.name} className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                <div className="absolute bottom-3 left-4">
                  <p className="text-[10px] text-primary uppercase tracking-widest font-semibold">{bike.brand}</p>
                  <h3 className="font-display text-xl">{bike.name}</h3>
                </div>
              </div>

              <div className="p-5 space-y-3">
                {bike.pricingTiers.map((tier, j) => (
                  <div
                    key={j}
                    className={`flex items-center justify-between py-2.5 px-4 rounded-xl text-sm ${
                      j === 0 ? 'bg-primary/10 border border-primary/20' : 'bg-secondary/50'
                    }`}
                  >
                    <span className="text-muted-foreground flex items-center gap-2">
                      <Clock className="h-3 w-3 text-primary" />
                      {tier.minDays}–{tier.maxDays || '30+'} days
                    </span>
                    <span className={`font-display text-lg ${j === 0 ? 'text-primary' : 'text-foreground'}`}>
                      ₹{tier.pricePerDay}<span className="text-[10px] text-muted-foreground font-body">/day</span>
                    </span>
                  </div>
                ))}

                <Link to={`/bikes/${bike.id}`}>
                  <Button className="w-full mt-2 gold-shine text-primary-foreground border-0 font-semibold" size="sm">
                    Book Now <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
