import TeamMember from "./TeamMember";
import { TeamList } from "./TeamList";
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";

const TeamHero = (option) => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <div className="flex flex-col">
      <h1 className="my-4 inline-block text-center text-3xl font-bold text-slate-600">
        Echipa noastra
      </h1>
      <motion.div
        ref={carousel}
        className="align-st relative flex flex-row flex-nowrap overflow-hidden"
      >
        <motion.div
          className="flex flex-row"
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
        >
          {TeamList.map((option) => (
            <TeamMember
              title={option.title}
              key={option.id}
              description={option.description}
              photo={option.photo}
              subtitle={option.subtitle}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default TeamHero;
