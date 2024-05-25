import { HeroComp } from "./_components/hero";
import { Businesses } from "./_components/businesses";
import { LetsConnect } from "./_components/letsconnect";

export default function Home() {
  return (
    <main className="space-y-32">
      <div className="md:p-24">
        <HeroComp />
      </div>

      <Businesses />

      <section>
        <LetsConnect />
      </section>
    </main>
  );
}
