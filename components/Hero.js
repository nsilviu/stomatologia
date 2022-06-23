import React, { useState } from "react";
import { slider } from "./images";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { wrap } from "popmotion";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import range from "lodash/range";

const Dots = ({ count, active }) => (
  <div className="absolute top-full z-50 -mt-6 flex flex-row justify-center">
    {range(count).map((i) => (
      <>
        <motion.div
          className="mx-4 h-2 w-2 rounded-md bg-white opacity-80 shadow-lg"
          initial={false}
          animate={{
            scale: active === i ? 1.5 : 1,
            opacity: active === i ? 1 : 0.5,
          }}
        />
      </>
    ))}
  </div>
);

const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

function Hero() {
  const [[page, direction], setPage] = useState([0, 0]);

  const imageIndex = wrap(0, slider.length, page);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <div className="relative m-4 flex h-[30vh] flex-row justify-center md:left-1/2 md:h-[50vh] md:w-[80vw]">
      <motion.img
        className="w-full rounded-xl object-cover shadow-sm"
        key={page}
        src={slider[imageIndex]}
        custom={direction}
        variants={variants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{
          x: { type: "spring", stiffness: 300, damping: 30, bounce: 0 },
          opacity: 0.2,
        }}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={1}
        onDragEnd={(e, { offset, velocity }) => {
          const swipe = swipePower(offset.x, velocity.x);
          if (swipe < -swipeConfidenceThreshold) {
            paginate(1);
          } else if (swipe > swipeConfidenceThreshold) {
            paginate(-1);
          }
        }}
      />
      <Dots count={slider.length} active={imageIndex} />

      <motion.button
        className="absolute left-0 top-[45%] z-50 mx-2 cursor-pointer select-none  rounded-lg bg-white p-2 align-middle shadow-sm hover:bg-slate-200"
        onClick={() => paginate(-1)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <ArrowBackIosIcon />
      </motion.button>
      <motion.button
        className="absolute top-[45%] right-0 z-50 mx-2 cursor-pointer select-none rounded-lg bg-white p-2 align-middle shadow-sm hover:bg-slate-200"
        onClick={() => paginate(1)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <ArrowForwardIosIcon />
      </motion.button>
    </div>
  );
}

export default Hero;
