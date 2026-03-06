import { motion } from 'framer-motion';
import { bikes } from '@/data/bikes';
import { BikeCard } from '@/components/bikes/BikeCard';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function FeaturedBikes() {
  const featured = bikes.filter((b) => b.available).slice(0, 4);

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4"
        >
          <div>
            <span className="text-primary text-xs font-semibold tracking-[0.2em] uppercase">Popular Rides</span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl mt-1">Featured Bikes</h2>
          </div>
          <Link to="/bikes">
            <Button variant="outline" size="sm" className="group">
              View All <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
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
      </div>
    </section>
  );
}
