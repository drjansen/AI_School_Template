import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import LeadershipSpotlight from "@/components/LeadershipSpotlight";
import Pathway from "@/components/Pathway";
import Curriculum from "@/components/Curriculum";
import Outcomes from "@/components/Outcomes";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-sky-600 focus:text-white focus:rounded-lg focus:font-semibold">
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Mission />
        {/* TEMPORARY: LeadershipSpotlight is hidden — uncomment to restore */}
        {/* <LeadershipSpotlight /> */}
        <Pathway />
        <Curriculum />
        <Outcomes />
        <Portfolio />
        <Testimonials />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
