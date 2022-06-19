import React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import clamp from "lodash/clamp";
import range from "lodash/range";

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
  const images = ["/slider-1.jpg", "/slider-2.jpg", "/slider-3.jpg"];

  // first slider
  const [[page, direction], setPage] = useState([0, 0]);

  const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  // const [position, setPosition] = useState(0);

  // const handleRight = () => {
  //   if (position < images.length - 1) {
  //     setPosition(position + 1);
  //   }
  // };

  // const handleLeft = () => {
  //   if (position > 0) {
  //     setPosition(position - 1);
  //   }
  // };
  return (
    <>
      {/* <div className="relative mx-4 mt-3 flex h-[50vh] w-[100vw] overflow-hidden rounded-lg">
        {images.map((url, index) => (
          <motion.div
            className="absolute "
            key={index}
            initial={{ scale: 0 }}
            animate={{
              rotate: 0,
              left: `${(index - position) * 60 - 30}vw`,
              scale: index === position ? 1 : 0,
              opacity: index === position ? 1 : 0,
            }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
            drag="x"
          >
            <img src={url} className="w-full rounded-lg object-cover" />
          </motion.div>
        ))}
      </div>
      <div className="flex justify-center">
        <button
          className="m-5 rounded-lg bg-slate-200 p-5 hover:bg-slate-300"
          onClick={handleLeft}
        >
          Left
        </button>
        <button
          className="m-5 rounded-lg bg-slate-200 p-5 hover:bg-slate-300"
          onClick={handleRight}
        >
          Right
        </button>
      </div> */}
      {/* First version of the slider */}
      <div className="m-5">
        <AnimatePresence initial={false} custom={direction}>
          <div className="z-50 rounded-lg">
            <motion.img
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
                x: {
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                },
                opacity: { duration: 0.2 },
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
        </AnimatePresence>
      </div>
    </>
  );
}

export default Hero;
