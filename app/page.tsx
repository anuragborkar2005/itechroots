import TopNavBar from "@/components/TopNavBar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CommunitiesSection from "@/components/CommunitiesSection";
import EventArchiveSection from "@/components/EventArchiveSection";
import LegacySection from "@/components/LegacySection";
import Footer from "@/components/Footer";
import WhySponsorUsSection from "@/components/WhySponsorUs";

export default function Home() {
  return (
    <>
      {/* Global Root Line (Grid Guide) */}
      <div className="root-line hidden md:block" />

      {/* Navigation */}
      <TopNavBar />

      <main className="w-full max-w-360 mx-auto overflow-hidden relative">
        {/* Sections */}
        <HeroSection />
        <AboutSection />
        <CommunitiesSection />
        {/*<EventSpectrum />*/}
        <EventArchiveSection />
        <WhySponsorUsSection />
        <LegacySection />
        {/*<SponsorshipArchitecture />
        <ContactSection />*/}
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
