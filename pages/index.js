import Hero from "../components/Hero";
import ServiceHero from "../components/ServiceHero";
import { CallIcon } from "../components/svgs";

export default function Home() {
  return (
    <>
      <section>
        <Hero />
      </section>
      <section>
        <ServiceHero />
      </section>
    </>
  );
}
