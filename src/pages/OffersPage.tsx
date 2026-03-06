import { motion } from 'framer-motion';
import { sampleCoupons } from '@/data/coupons';
import { Tag, Percent, IndianRupee, Calendar, Copy } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

export default function OffersPage() {
  const activeCoupons = sampleCoupons.filter(c => c.active);

  return (
    <div className="pt-24 pb-12">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-14"
        >
          <span className="text-primary text-xs font-semibold tracking-[0.2em] uppercase">Special Deals</span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl mt-2">
            Offers & <span className="text-gradient">Discounts</span>
          </h1>
          <p className="text-muted-foreground mt-3 max-w-lg mx-auto text-sm">
            Use these coupon codes during checkout to save on your next ride!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {activeCoupons.map((c, i) => (
            <motion.div
              key={c.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-2xl border border-border/50 overflow-hidden card-lift"
            >
              <div className="bg-gradient-to-r from-primary/20 to-accent/10 px-6 py-5 text-center">
                <div className="inline-flex items-center gap-2 mb-2">
                  {c.type === 'percentage' ? <Percent className="h-5 w-5 text-primary" /> : <IndianRupee className="h-5 w-5 text-primary" />}
                  <span className="font-display text-3xl text-primary">
                    {c.type === 'percentage' ? `${c.value}%` : `₹${c.value}`}
                  </span>
                </div>
                <p className="text-sm font-medium">OFF</p>
              </div>

              <div className="p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <code className="font-mono font-bold text-lg text-primary bg-primary/10 px-3 py-1 rounded-lg">{c.code}</code>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      navigator.clipboard.writeText(c.code);
                      toast.success('Code copied!');
                    }}
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>

                <div className="space-y-1.5 text-xs text-muted-foreground">
                  <p>Min order: ₹{c.minOrderAmount}</p>
                  <p>Max discount: ₹{c.maxDiscount}</p>
                  <p className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" /> Valid till {c.validTo}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
