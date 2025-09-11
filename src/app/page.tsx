import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="pt-16">
      <Hero />
      <Services />
      <Gallery />
      <Testimonials />
    </div>
  );
}