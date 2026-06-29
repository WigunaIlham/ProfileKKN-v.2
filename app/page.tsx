import dynamic from "next/dynamic";
import {Navbar} from "@/components/layout/Navbar";
import {HeroSection} from "@/components/sections/HeroSection";
import {AboutSection} from "@/components/sections/AboutSection";

// Below-fold sections — code-split via next/dynamic (SSR stays on, just lazy
// loads the JS chunk so first interactive is faster). Each section is a thin
// chunk, total bundle savings ~30% on initial load.
const PhilosophySection = dynamic(() =>
  import("@/components/sections/PhilosophySection").then((m) => ({
    default: m.PhilosophySection,
  })),
);
const StatsSection = dynamic(() =>
  import("@/components/sections/StatsSection").then((m) => ({
    default: m.StatsSection,
  })),
);
const TeamSection = dynamic(() =>
  import("@/components/sections/TeamSection").then((m) => ({
    default: m.TeamSection,
  })),
);
const OrgStructureSection = dynamic(() =>
  import("@/components/sections/OrgStructureSection").then((m) => ({
    default: m.OrgStructureSection,
  })),
);
const DivisionsSection = dynamic(() =>
  import("@/components/sections/DivisionsSection").then((m) => ({
    default: m.DivisionsSection,
  })),
);
const ProgramsSection = dynamic(() =>
  import("@/components/sections/ProgramsSection").then((m) => ({
    default: m.ProgramsSection,
  })),
);
const TimelineSection = dynamic(() =>
  import("@/components/sections/TimelineSection").then((m) => ({
    default: m.TimelineSection,
  })),
);
const GallerySection = dynamic(() =>
  import("@/components/sections/GallerySection").then((m) => ({
    default: m.GallerySection,
  })),
);
const VillagePotentialSection = dynamic(() =>
  import("@/components/sections/VillagePotentialSection").then((m) => ({
    default: m.VillagePotentialSection,
  })),
);
const InstagramSection = dynamic(() =>
  import("@/components/sections/InstagramSection").then((m) => ({
    default: m.InstagramSection,
  })),
);
const TestimonialsSection = dynamic(() =>
  import("@/components/sections/TestimonialsSection").then((m) => ({
    default: m.TestimonialsSection,
  })),
);
const FAQSection = dynamic(() =>
  import("@/components/sections/FAQSection").then((m) => ({
    default: m.FAQSection,
  })),
);
const ContactSection = dynamic(() =>
  import("@/components/sections/ContactSection").then((m) => ({
    default: m.ContactSection,
  })),
);
const FooterSection = dynamic(() =>
  import("@/components/sections/FooterSection").then((m) => ({
    default: m.FooterSection,
  })),
);

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
