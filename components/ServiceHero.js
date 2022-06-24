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
    <motion.div
      ref={carousel}
      className="carousel m-3 overflow-hidden rounded-lg p-1 "
    >
      <motion.div
        className="flex flex-row   "
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
  );
};

export default ServiceHero;
