import { FeatureSection } from "./_components/feature-section";
import { HeroSection } from "./_components/hero-section";
import { OpenSourceSection } from "./_components/open-source-section";

export default function Page() {
  return (
    <main className="container pt-20 *:not-first:my-24 md:pt-40 lg:*:not-first:mt-44">
      <HeroSection />
      <FeatureSection />
      <OpenSourceSection />
    </main>
  );
}
