import TeamMember from "./TeamMember";
import { TeamList } from "./TeamList";
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import { Scrollbar } from "swiper";

const TeamHero = (option) => {
  return (
    <div>
      <h1 className="my-4 text-center text-3xl font-bold text-slate-600">
        Echipa noastra
      </h1>
      <Swiper spaceBetween={5} scrollbar modules={[Scrollbar]}>
        {TeamList.map((option, index) => (
          <SwiperSlide key={index}>
            <TeamMember
              title={option.title}
              key={option.id}
              description={option.description}
              photo={option.photo}
              subtitle={option.subtitle}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TeamHero;
