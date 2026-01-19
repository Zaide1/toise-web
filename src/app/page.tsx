import { HeroPanel } from "@/components/hero/HeroPanel";
import { FloatingNav } from "@/components/nav/FloatingNav";
import { LandingSlogan } from "@/components/sections/LandingSlogan";
import { HeroInfoBlocks } from "@/components/sections/HeroInfoBlocks";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-viewport bg-[var(--page-bg)] pb-8 pt-20 text-[var(--text)] sm:pt-24">
      <FloatingNav />
      <LandingSlogan />
      <HeroPanel />
      <HeroInfoBlocks />
      <Footer />
    </main>
  );
}
