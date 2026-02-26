import { motion } from 'framer-motion';
import { bikes } from '@/data/bikes';
import { BikeCard } from '@/components/bikes/BikeCard';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export function FeaturedBikes() {
  const featured = bikes.filter((b) => b.available).slice(0, 4);

  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between mb-12"
        >
          <div>
            <p className="text-primary text-sm font-medium tracking-[0.3em] uppercase mb-2">Our Fleet</p>
            <h2 className="font-display text-5xl md:text-6xl">FEATURED BIKES</h2>
          </div>
          <Link
            to="/bikes"
            className="hidden md:flex items-center gap-2 text-primary text-sm font-medium hover:gap-3 transition-all"
          >
            View All <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((bike, i) => (
            <motion.div
              key={bike.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <BikeCard bike={bike} />
            </motion.div>
          ))}
        </div>

        <Link
          to="/bikes"
          className="md:hidden flex items-center justify-center gap-2 text-primary text-sm font-medium mt-8"
        >
          View All Bikes <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
