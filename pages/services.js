import { ServiceCard } from "../components/ServiceCard";
import { ServicesList } from "../components/ServicesList";

export default function Services() {
  return (
    <>
      <div>
        {ServicesList.map((option) => (
          <ServiceCard
            title={option.title}
            key={option.id}
            description={option.text}
            to={option.link}
          />
        ))}
      </div>
    </>
  );
}
