import { CapabilitiesSection } from "@/components/home/CapabilitiesSection";
import { ContactSection } from "@/components/home/ContactSection";
import { HeroSection } from "@/components/home/HeroSection";
import { PhilosophySection } from "@/components/home/PhilosophySection";
import { SelectedWorkSection } from "@/components/home/SelectedWorkSection";

export default function Home() {
  return (
    <main className="min-h-screen pt-24 pb-12 md:pt-28 md:pb-16">
      <div className="mx-auto flex w-[85vw] max-w-[1600px] flex-col gap-28 md:gap-32">
        <HeroSection />
        <SelectedWorkSection />
        <CapabilitiesSection />
        <PhilosophySection />
        <ContactSection />
        </div>
      </main>
  );
}
