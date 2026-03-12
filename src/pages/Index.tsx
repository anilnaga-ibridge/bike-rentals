import { HeroSection } from '@/components/home/HeroSection';
import { FeaturedBikes } from '@/components/home/FeaturedBikes';
import { PromoSection } from '@/components/home/PromoSection';
import { FlexiblePackages } from '@/components/home/FlexiblePackages';
import { WhyChooseUs } from '@/components/home/WhyChooseUs';
import { HowItWorks } from '@/components/home/HowItWorks';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';
import { CTASection } from '@/components/home/CTASection';
import { SEO } from '@/components/SEO';
import { MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <>
      <SEO
        title="Bike Rental in Hyderabad | Premium Two Wheeler Rentals"
        description="Looking for the best bike rental in Hyderabad? Sri Ganesh Bike Rentals offers premium bikes and scooters in Madhapur, Kukatpally, and Ameerpet. Instant booking, lowest prices."
        keywords="bike rental in hyderabad, scooty for rent hyderabad, bullet rental hyderabad, two wheeler rental madhapur, kukatpally bike hire"
      />
      <HeroSection />

      {/* Local SEO Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-display font-black text-3xl md:text-4xl text-primary uppercase">
              Best <span className="text-secondary">Bike Rental Service</span> in Hyderabad
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Sri Ganesh Bike Rentals provides the most reliable and affordable two-wheeler rental solutions across the city. Whether you need a bike for commute or a scooter for quick errands, we've got you covered in all major hubs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Madhapur',
                desc: 'Premium bike rentals in the heart of HITECH City. Perfect for IT professionals and daily commuters.',
                path: '/bike-rental-madhapur'
              },
              {
                name: 'Kukatpally',
                desc: 'Affordable two-wheeler rentals in Kukatpally. Wide range of scooties and commuter bikes available.',
                path: '/bike-rental-kukatpally'
              },
              {
                name: 'Ameerpet',
                desc: 'Experience the best bike hire service in Ameerpet. Ideal for students and frequent travelers.',
                path: '/bike-rental-ameerpet'
              }
            ].map((loc) => (
              <div key={loc.name} className="glass p-8 rounded-3xl border border-primary/5 hover:border-primary/20 transition-all group">
                <MapPin className="h-10 w-10 text-secondary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-display font-bold text-2xl text-primary mb-3">Bike Rental in {loc.name}</h3>
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                  {loc.desc}
                </p>
                <Link to={loc.path} className="text-secondary font-black text-xs uppercase tracking-widest hover:underline">
                  View {loc.name} Fleet →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FeaturedBikes />
      <PromoSection />
      <FlexiblePackages />
      <HowItWorks />
      <WhyChooseUs />
      <TestimonialsSection />
      <CTASection />
    </>
  );
};

export default Index;
