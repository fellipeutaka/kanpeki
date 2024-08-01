import { Brands } from "./_components/brands";
import { HeroSection } from "./_components/hero-section";
import { OpenSourceSection } from "./_components/open-source-section";

export default function Page() {
  return (
    <main className="container pt-20 md:pt-40 [&>*:not(:first-child)]:my-24">
      <HeroSection />
      <Brands />
      <OpenSourceSection />
    </main>
  );
}
