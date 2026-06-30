import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Vision from "@/components/Vision";
import Panasonic from "@/components/Panasonic";
import Location from "@/components/Location";
import Ownership from "@/components/Ownership";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Vision />
      <Panasonic />
      <Location />
      <Ownership />
      <CTA />
      <Footer />
    </main>
  );
}
