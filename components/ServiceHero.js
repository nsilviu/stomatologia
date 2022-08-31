import { ServiceCard } from "./ServiceCard";
import { ServicesList } from "./ServicesList";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Pagination } from "swiper";
import "swiper/css/effect-cards";

const ServiceHero = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  // useEffect(() => {
  //   setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  // }, []);
  return (
    <div className="m-4">
      <div className="flex justify-center">
        <h1 className="mb-4 inline-block text-center text-3xl font-bold text-slate-600">
          Servicii
        </h1>
      </div>
      <Swiper
        className="h-[30vh] w-[93vw] overflow-hidden shadow-none"
        effect={"cards"}
        pagination={{
          clickable: true,
        }}
        modules={[EffectCards]}
      >
        {ServicesList.map((option, index) => (
          <SwiperSlide key={index} className="h-[100%] shadow-none">
            <ServiceCard
              style={"h-full text-center shadow-none"}
              title={option.title}
              key={option.id}
              description={option.text}
              to={option.link}
              descriptionLength={300}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ServiceHero;
