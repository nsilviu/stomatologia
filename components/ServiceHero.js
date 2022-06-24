import { ServiceCard } from "./ServiceCard";
import { ServicesList } from "./ServicesList";

const ServiceHero = () => {
  return (
    <div className=" flex flex-row overflow-hidden">
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
