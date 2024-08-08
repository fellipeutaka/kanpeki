import { FeatureSection } from "./_components/feature-section";
import { HeroSection } from "./_components/hero-section";
import { OpenSourceSection } from "./_components/open-source-section";

export default function Page() {
  return (
    <main className="container pt-20 md:pt-40 [&>*:not(:first-child)]:my-24 lg:[&>*:not(:first-child)]:mt-44">
      <HeroSection />
      <FeatureSection />
      <OpenSourceSection />
    </main>
  );
}
