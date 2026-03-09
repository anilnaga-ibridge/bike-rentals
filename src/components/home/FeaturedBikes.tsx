import { motion } from 'framer-motion';
import { bikes } from '@/data/bikes';
import { BikeCard } from '@/components/bikes/BikeCard';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback } from 'react';

export function FeaturedBikes() {
  const featured = bikes.filter((b) => b.available);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start', slidesToScroll: 1 });

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <section className="py-28 bg-background relative overflow-hidden">
      <div className="absolute -right-32 top-0 w-96 h-96 bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -left-32 bottom-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-6"
        >
          <div>
            <span className="text-secondary text-xs font-black tracking-[0.4em] uppercase">Premium Selection</span>
            <h2 className="font-display font-black text-4xl sm:text-5xl text-primary mt-2">
              Featured <span className="text-secondary">Bikes</span>
            </h2>
            <p className="text-muted-foreground mt-2 text-sm">Hand-picked rides for every type of rider</p>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex gap-2">
              <Button variant="outline" size="icon" onClick={scrollPrev} className="rounded-full border-primary/10 hover:bg-primary hover:text-white transition-all">
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon" onClick={scrollNext} className="rounded-full border-primary/10 hover:bg-primary hover:text-white transition-all">
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
            <Link to="/bikes">
              <Button variant="ghost" className="font-bold text-primary hover:text-secondary group">
                Full Inventory <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </motion.div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">
            {featured.map((bike, i) => (
              <div key={bike.id} className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] xl:flex-[0_0_25%] min-w-0">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <BikeCard bike={bike} />
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
