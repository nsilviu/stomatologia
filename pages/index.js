import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import { CallIcon } from "../components/svgs";

export default function Home() {
  return (
    <>
      <section>
        <Hero />
      </section>
      <div>
        <Button link="tel:0744492444" text="Suna acum!" icon={<CallIcon />} />
      </div>
    </>
  );
}
