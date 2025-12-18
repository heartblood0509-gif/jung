import Hero from "@/components/sections/Hero";
import USPSection from "@/components/sections/USPSection";
import MenuPreview from "@/components/sections/MenuPreview";
import Gallery from "@/components/sections/Gallery";
import ReservationForm from "@/components/sections/ReservationForm";
import Reviews from "@/components/sections/Reviews";
import Map from "@/components/sections/Map";
import FloatingCTA from "@/components/sections/FloatingCTA";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <USPSection />
      <MenuPreview />
      <Gallery />
      <ReservationForm />
      <Reviews />
      <Map />
      <FloatingCTA />
      <Footer />
    </main>
  );
}
