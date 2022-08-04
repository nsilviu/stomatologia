import { ServiceCard } from "./ServiceCard";
import { ServicesList } from "./ServicesList";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const ServiceHero = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);
  return (
    <div className="flex flex-col px-4">
      <div className="flex justify-center">
        <h1 className="mb-4 inline-block text-center text-3xl font-bold text-slate-600">
          Servicii
        </h1>
      </div>
      <motion.div
        ref={carousel}
        className="carousel overflow-hidden rounded-lg"
      >
        <motion.div
          className="flex"
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
        >
          {ServicesList.map((option) => (
            <ServiceCard
              title={option.title}
              key={option.id}
              description={option.text}
              to={option.link}
              descriptionLength={150}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ServiceHero;
