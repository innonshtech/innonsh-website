import Hero from '../components/hero/Hero';
import TrustMarquee from '../components/sections/TrustMarquee';
import Services from '../components/sections/Services';
import ErpSolutions from '../components/sections/ErpSolutions';
import Products from '../components/sections/Products';
import WhyUs from '../components/sections/WhyUs';
import Process from '../components/sections/Process';
import TechStack from '../components/sections/TechStack';
import Testimonials from '../components/sections/Testimonials';
import LeadCapture from '../components/LeadCapture';

export default function Home() {
  return (
    <>
      <Hero />
      <TrustMarquee />
      <Services />
      <ErpSolutions />
      <Products />
      <WhyUs />
      <Process />
      <TechStack />
      <Testimonials />
      <LeadCapture />
    </>
  );
}
