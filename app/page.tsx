import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { ServicesGrid } from '@/components/ServicesGrid';
import { CredentialsStrip } from '@/components/CredentialsStrip';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { BookingCTA } from '@/components/BookingCTA';

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <CredentialsStrip />
      <AboutSection />
      <ServicesGrid />
      <TestimonialsSection />
      <BookingCTA />
    </div>
  );
}
