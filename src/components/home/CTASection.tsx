import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone } from 'lucide-react';
import { WhatsAppIcon } from '@/components/icons/WhatsAppIcon';
import { Link } from 'react-router-dom';
import { BRAND } from '@/constants/brand';

export function CTASection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[3rem] bg-[#020617] px-10 py-20 text-center"
        >
          {/* Glows */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/25 blur-[100px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary/20 blur-[80px] rounded-full pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-violet-500/10 blur-[120px] rounded-full pointer-events-none" />

          <div className="relative z-10">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-secondary text-xs font-black tracking-[0.4em] uppercase mb-4"
            >
              Ready to Ride?
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display font-black text-4xl sm:text-6xl text-white uppercase leading-none tracking-tighter"
            >
              Start Your{' '}
              <span className="text-secondary drop-shadow-[0_0_20px_rgba(255,106,0,0.5)]">
                Journey
              </span>{' '}
              Today
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-white/50 mt-6 max-w-xl mx-auto leading-relaxed text-base"
            >
              Join thousands of riders who trust Sri Ganesh Bike Rentals for affordable, reliable & premium two-wheelers in Hyderabad.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link to="/bikes">
                <Button
                  size="lg"
                  className="h-14 px-12 rounded-2xl bg-secondary hover:bg-secondary/90 text-white font-black text-xs uppercase tracking-widest shadow-xl shadow-secondary/30 hover:scale-105 active:scale-95 transition-all border-0"
                >
                  Browse All Bikes <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <a href={`https://wa.me/${BRAND.whatsapp}?text=Hi! I want to book a bike rental.`} target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  variant="outline"
                  className="h-14 px-12 rounded-2xl border-white/20 text-white hover:bg-white hover:text-[#020617] font-black text-xs uppercase tracking-widest transition-all"
                >
                  <WhatsAppIcon className="mr-2 h-4 w-4" /> Chat on WhatsApp
                </Button>
              </a>
              <a href={`tel:${BRAND.whatsapp}`}>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-14 px-10 rounded-2xl border-white/10 text-white/70 hover:bg-white/10 hover:text-white font-black text-xs uppercase tracking-widest"
                >
                  <Phone className="mr-2 h-4 w-4" /> Call Us
                </Button>
              </a>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-12 flex flex-wrap gap-6 justify-center"
            >
              {['No Hidden Fees', 'Instant Booking', '24/7 Support', 'Helmet Included'].map((item) => (
                <div key={item} className="flex items-center gap-2 text-white/40 text-xs font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                  {item}
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
