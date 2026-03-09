import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export function CTASection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl p-10 sm:p-16 text-center"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-card to-accent/10" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-80 bg-primary/10 blur-[120px] rounded-full" />

          <div className="relative z-10">
            <h2 className="font-display text-3xl sm:text-5xl mb-3">
              Ready to <span className="text-gradient">Ride</span>?
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base max-w-md mx-auto mb-8">
              Join thousands of riders who trust Sri Ganesh Bike Rentals for affordable, convenient & premium bike rentals.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/bikes">
                <Button size="lg" className="font-bold gold-shine text-primary-foreground border-0 px-8">
                  Explore Bikes <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <a href="tel:+919876543210">
                <Button size="lg" variant="outline" className="font-bold px-8">
                  <Phone className="mr-2 h-4 w-4" /> Call Us
                </Button>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
