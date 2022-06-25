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
    <div className="flex flex-col justify-center">
      <div className="flex justify-center">
        <h1 className="inline-block justify-center text-3xl font-light">
          Servicii
        </h1>
      </div>
      <motion.div
        ref={carousel}
        className="carousel m-3 overflow-hidden rounded-lg p-1 "
      >
        <motion.div
          className="flex flex-row"
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
        >
          {ServicesList.map((option) => (
            <ServiceCard
              title={option.title}
              key={option.id}
              description={option.text}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ServiceHero;
