import {Navbar} from "@/components/layout/Navbar";
import {HeroSection} from "@/components/sections/HeroSection";
import {AboutSection} from "@/components/sections/AboutSection";
import {PhilosophySection} from "@/components/sections/PhilosophySection";
import {StatsSection} from "@/components/sections/StatsSection";
import {TeamSection} from "@/components/sections/TeamSection";
import {OrgStructureSection} from "@/components/sections/OrgStructureSection";
import {DivisionsSection} from "@/components/sections/DivisionsSection";
import {ProgramsSection} from "@/components/sections/ProgramsSection";
import {TimelineSection} from "@/components/sections/TimelineSection";
import {GallerySection} from "@/components/sections/GallerySection";
import {VillagePotentialSection} from "@/components/sections/VillagePotentialSection";
import {InstagramSection} from "@/components/sections/InstagramSection";
import {TestimonialsSection} from "@/components/sections/TestimonialsSection";
import {FAQSection} from "@/components/sections/FAQSection";
import {ContactSection} from "@/components/sections/ContactSection";
import {FooterSection} from "@/components/sections/FooterSection";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <PhilosophySection />
      <StatsSection />
      <TeamSection />
      <OrgStructureSection />
      <DivisionsSection />
      <ProgramsSection />
      <TimelineSection />
      <GallerySection />
      <VillagePotentialSection />
      <InstagramSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
      <FooterSection />
    </main>
  );
}
