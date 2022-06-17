import React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import { ClassNames } from "@emotion/react";

// const variants = {
//   enter: (direction) => {
//     return {
//       x: direction > 0 ? 1000 : -1000,
//       opacity: 0,
//     };
//   },
//   center: {
//     zIndex: 1,
//     x: 0,
//     opacity: 1,
//   },
//   exit: (direction) => {
//     return {
//       zIndex: 0,
//       x: direction < 0 ? 1000 : -1000,
//       opacity: 0,
//     };
//   },
// };

// const swipeConfidenceThreshold = 10000;

// const swipePower = (offset, velocity) => {
//   return Math.abs(offset) * velocity;
// };
const variants2 = {};
function Hero() {
  const images = ["/slider-1.jpg", "/slider-2.jpg", "/slider-3.jpg"];

  const [[page, direction], setPage] = useState([0, 0]);

  const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };
  const [position, setPosition] = useState(0);

  return (
    <>
      <div className="flex h-48 flex-row justify-center overflow-hidden rounded-md bg-slate-200 align-middle">
        {/* {images.map((url, index) => ( */}
        <motion.div
          key={imageIndex}
          className="absolute h-[90vh] w-[60vw] overflow-hidden bg-red-300"
          initial={{ scale: 0, rotation: 180 }}
          animate={{
            rotate: 0,
            left: `${position * 60 - 30}vw`,
            scale: 1,
          }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
        >
          <img src={images[1]} className="object-fit h-full w-full"></img>
        </motion.div>
      </div>

      {/* First version of the slider */}
      {/* <AnimatePresence initial={false} custom={direction}>
        <div className="z-50 rounded-lg">
          <motion.img
            objectFit="cover"
            layout="fill"
            className="rounded-lg shadow-lg"
            key={page}
            src={images[imageIndex]}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30, opacity: 1 },
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
        </div>
      </AnimatePresence> */}
    </>
  );
}

export default Hero;
