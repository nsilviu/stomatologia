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
      <div className="mt-4 flex justify-between ">
        <div className="ml-5">
          <div className="flex cursor-pointer flex-col">
            <Link href="/">
              <div className="text-2xl font-light md:ml-16 md:text-4xl">
                Stomatologia
              </div>
            </Link>
            <Link href="/">
              <span className="text-3xl font-extrabold md:ml-16 md:text-5xl">
                Orto Implant
              </span>
            </Link>
          </div>
        </div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="mr-4 flex cursor-pointer self-center rounded-md p-2 shadow-sm hover:bg-slate-100 hover:shadow-md"
          onClick={toggleMobileMenu}
        >
          <motion.button
            initial={"hidden"}
            animate="visible"
            variants={variants}
          >
            {!isMobileMenuVisible ? <MenuIcon /> : <CloseIcon />}
          </motion.button>
        </motion.div>
        <motion.div
          animate={isMobileMenuVisible ? "open" : "closed"}
          variants={mobileMenu}
          className="absolute left-0 right-0 z-50 mt-20 ml-4 mr-4 justify-end rounded-lg bg-slate-100 align-middle font-light shadow-lg"
        >
          <div className="flex flex-col p-3">
            <ul>
              <li
                className="rounded-lg py-3 px-2 hover:bg-white"
                onClick={toggleMobileMenu}
                href="/"
              >
                <Link href="/">Home</Link>
              </li>

              <li
                className="rounded-lg py-3 px-2 hover:bg-white"
                onClick={toggleMobileMenu}
                src="/prices"
              >
                <Link href="/prices">Preturi</Link>
              </li>

              <li
                className="rounded-lg py-3 px-2 hover:bg-white"
                onClick={toggleMobileMenu}
              >
                <Link href="/">Galerie</Link>
              </li>

              <li
                className="rounded-lg py-3 px-2 hover:bg-white"
                onClick={toggleMobileMenu}
              >
                <Link href="/">Servicii</Link>
              </li>

              <li
                className="rounded-lg py-3 px-2 hover:bg-white"
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
