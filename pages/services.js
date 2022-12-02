import { ServiceCard } from "../components/ServiceCard";
import { ServicesList } from "../components/ServicesList";
import Hero from "../components/Hero";

export default function Services() {
  return (
    <>
      <section>
        <Hero />
      </section>
      <div className="grid grid-flow-dense grid-cols-1 justify-center p-4">
        {ServicesList.map((option) => (
          <div key={option.id} className="mb-4">
            <ServiceCard
              title={option.title}
              key={option.id}
              description={option.text}
              to={option.link}
              descriptionLength={400}
            />
          </div>
        ))}
      </div>
    </>
  );
}
