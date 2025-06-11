import Hero from '@/components/home/Hero';
import Features from '@/components/home/Features';
import HowItWorks from '@/components/home/HowItWorks';
import CTA from '@/components/home/CTA';
import Header from '@/components/layout/Header';


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
     <Header />
      
      <Hero />
  
      <HowItWorks />
      <Features />
      <CTA />
    </div>
  );
}