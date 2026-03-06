import { HeroSection } from '@/components/home/HeroSection';
import { FeaturedBikes } from '@/components/home/FeaturedBikes';
import { FlexiblePackages } from '@/components/home/FlexiblePackages';
import { WhyChooseUs } from '@/components/home/WhyChooseUs';
import { HowItWorks } from '@/components/home/HowItWorks';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';
import { CTASection } from '@/components/home/CTASection';

const Index = () => {
  return (
    <>
      <HeroSection />
      <FeaturedBikes />
      <FlexiblePackages />
      <HowItWorks />
      <WhyChooseUs />
      <TestimonialsSection />
      <CTASection />
    </>
  );
};

export default Index;
