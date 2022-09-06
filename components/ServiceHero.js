import { ServiceCard } from "./ServiceCard";
import { ServicesList } from "./ServicesList";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

const ServiceHero = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  // useEffect(() => {
  //   setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  // }, []);
  return (
    <div className="z-1 m-4">
      <div className="text-center">
        <h1 className="mx-4 mt-4 inline-block text-3xl font-bold text-slate-800">
          Servicii
        </h1>
      </div>
      <div className="rounded-xl">
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          loop={true}
          modules={[Pagination]}
          className="h-[280px] rounded-xl"
          spaceBetween={5}
        >
          {ServicesList.map((option, index) => (
            <SwiperSlide key={index}>
              <div className="flex w-full justify-center">
                <ServiceCard
                  style={"text-center h-[250px]"}
                  title={option.title}
                  key={option.id}
                  description={option.text}
                  to={option.link}
                  descriptionLength={300}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ServiceHero;
