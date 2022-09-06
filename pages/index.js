import Hero from "../components/Hero";
import ServiceHero from "../components/ServiceHero";
import Gallery from "../components/Gallery";
import TeamHero from "../components/TeamHero";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <section>
        <Hero />
      </section>
      <section>
        <Contact />
      </section>
      <section>
        <ServiceHero />
      </section>
      <section>
        <Gallery />
      </section>
      <section>
        <TeamHero />
      </section>
    </>
  );
}
