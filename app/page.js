import Image from "next/image";
import { DotBackgroundDemo } from "@/components/ui/dot-background-demo";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Features from "@/components/features";
export default function HomePage() {
  return (
    <div className="relative">
      <DotBackgroundDemo />
      <Navbar/>
      <Hero/>
      <Features/>
    </div>
  );
}

