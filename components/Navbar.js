import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);

  const toggleMobileMenu = () => {
    console.log(isMobileMenuVisible);
    setIsMobileMenuVisible(!isMobileMenuVisible);
  };

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const mobileMenu = {
    open: { opacity: 1, x: 0, duration: 0.4 },
    closed: { opacity: 0, x: "50%", y: "-80%", scale: 0, transition: "spring" },
  };

  return (
    <nav>
      <div className="flex justify-between mt-4 ">
        <div className="ml-5">
          <div className="flex flex-col cursor-pointer">
            <Link href="/">
              <div className="text-2xl font-light md:text-4xl md:ml-16">
                Stomatologia
              </div>
            </Link>
            <Link href="/">
              <span className="text-3xl font-extrabold md:text-5xl md:ml-16">
                Orto Implant
              </span>
            </Link>
          </div>
        </div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="flex self-center mr-4 p-2 rounded-md shadow-sm hover:bg-slate-100 cursor-pointer hover:shadow-md"
          onClick={toggleMobileMenu}
        >
          <motion.button initial="hidden" animate="visible" variants={variants}>
            {!isMobileMenuVisible ? <MenuIcon /> : <CloseIcon />}
          </motion.button>
        </motion.div>
        <motion.div
          animate={isMobileMenuVisible ? "open" : "closed"}
          variants={mobileMenu}
          className=" shadow-lg z-50 mt-20 ml-4 left-0 right-0 absolute justify-end font-light align-middle rounded-lg mr-4 bg-slate-100"
        >
          <div className="flex flex-col p-3">
            <ul>
              <li
                className="py-3 px-2 hover:bg-white rounded-lg"
                onClick={toggleMobileMenu}
                href="/"
              >
                <Link href="/">Home</Link>
              </li>

              <li
                className="py-3 px-2 hover:bg-white rounded-lg"
                onClick={toggleMobileMenu}
                src="/prices"
              >
                <Link href="/prices">Preturi</Link>
              </li>

              <li
                className="py-3 px-2 hover:bg-white rounded-lg"
                onClick={toggleMobileMenu}
              >
                <Link href="/">Galerie</Link>
              </li>

              <li
                className="py-3 px-2 hover:bg-white rounded-lg"
                onClick={toggleMobileMenu}
              >
                <Link href="/">Servicii</Link>
              </li>

              <li
                className="py-3 px-2 hover:bg-white rounded-lg"
                onClick={toggleMobileMenu}
              >
                <Link href="/">Contact</Link>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
