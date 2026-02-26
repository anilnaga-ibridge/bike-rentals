import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function CTASection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl p-12 md:p-20 text-center"
        >
          {/* Background glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/10" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/10 blur-[120px] rounded-full" />

          <div className="relative z-10">
            <h2 className="font-display text-5xl md:text-7xl mb-4">
              READY TO <span className="text-gradient">RIDE</span>?
            </h2>
            <p className="text-muted-foreground text-lg max-w-md mx-auto mb-8">
              Join thousands of riders who trust RideX for their premium motorcycle experience.
            </p>
            <Link to="/bikes">
              <Button size="lg" className="text-lg font-bold px-10 glow-strong">
                Explore Fleet <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
