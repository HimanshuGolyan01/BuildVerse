import Image from "next/image";
import { DotBackgroundDemo } from "@/components/ui/dot-background-demo";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Features from "@/components/features";
import Pricingsection from "@/components/pricing-section";
import ReviewSection from "@/components/reviews-section";
import FaqSection from "@/components/faq-section";
import Footer from "@/components/footer";

export default function HomePage() {
  return (
    <div className="relative">
      <DotBackgroundDemo />
      <Navbar/>
      <Hero/>
      <Features/>
      <Pricingsection/>
      <ReviewSection/>
      <FaqSection/>
      <Footer/>
      
      </div>
  );
}

