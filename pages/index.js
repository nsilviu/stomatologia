import Hero from "../components/Hero";
import ServiceHero from "../components/ServiceHero";
import Image from "next/image";
import { CallIcon } from "../components/svgs";
import Gallery from "../components/Gallery";

export default function Home() {
  return (
    <>
      <section>
        <Hero />
      </section>
      <section>
        <ServiceHero />
      </section>
      <section>
        <Gallery />
      </section>
    </>
  );
}
