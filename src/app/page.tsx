import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Feature from "@/components/Feature"
import Plans from "@/components/Plans"
import Testimonials from "@/components/Testimonials"
import CTA from "@/components/CTA"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Feature />
      <Plans />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
