import { HeroSection } from '@/components/home/HeroSection';
import { FeaturedBikes } from '@/components/home/FeaturedBikes';
import { WhyChooseUs } from '@/components/home/WhyChooseUs';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';
import { CTASection } from '@/components/home/CTASection';

const Index = () => {
  return (
    <>
      <HeroSection />
      <FeaturedBikes />
      <WhyChooseUs />
      <TestimonialsSection />
      <CTASection />
    </>
  );
};

export default Index;
