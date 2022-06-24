import { ServiceCard } from "./ServiceCard";
import { ServicesList } from "./ServicesList";

const ServiceHero = () => {
  return (
    <div className="m-2 flex flex-row">
      {ServicesList.map((option) => (
        <ServiceCard
          title={option.title}
          key={option.id}
          description={option.text}
        />
      ))}
    </div>
  );
};

export default ServiceHero;
