import React from "react";
import { slider } from "./images";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css/bundle";

function Hero() {
  return (
    <div className="">
      <div className="m-4 h-[30vh] rounded-xl">
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          loop={true}
          modules={[Pagination, Navigation]}
          className="h-full w-full rounded-xl text-center align-middle shadow-xl"
          spaceBetween={0}
          navigation={{ enabled: true, hideOnClick: true }}
        >
          {slider.map((option, index) => (
            <SwiperSlide key={index} className="p-1">
              <Image
                alt={"Hero Slider"}
                layout={"fill"}
                objectFit={"cover"}
                src={option}
                className=""
              ></Image>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Hero;
