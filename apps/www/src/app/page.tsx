import { CodeSection } from "./_components/code-section";
import { FeatureSection } from "./_components/feature-section";
import { HeroSection } from "./_components/hero-section";
import { LogoStripSection } from "./_components/logo-strip-section";
import { OpenSourceSection } from "./_components/open-source-section";
import { ShowcaseSection } from "./_components/showcase-section";

export default function Page() {
  return (
    <main className="flex flex-col">
      <HeroSection />

      <LogoStripSection />

      <div className="container py-16 lg:py-24">
        <ShowcaseSection />
      </div>

      <div className="container border-t py-24 lg:py-32">
        <FeatureSection />
      </div>

      <div className="container border-t py-24 lg:py-32">
        <CodeSection />
      </div>

      <div className="container pb-24 lg:pb-32">
        <OpenSourceSection />
      </div>
    </main>
  );
}
