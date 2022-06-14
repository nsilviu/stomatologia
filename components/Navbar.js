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

  return (
    <nav>
      <div className="flex justify-between mt-4">
        <div className="ml-5">
          <div className="flex flex-col cursor-pointer">
            <Link href="/">
              <div className="text-2xl font-light xl:text-3xl">
                Stomatologia
              </div>
            </Link>
            <Link href="/">
              <span className="text-3xl font-extrabold">Orto Implant</span>
            </Link>
          </div>
        </div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className=" flex self-center mr-4 p-2 rounded-md shadow-sm hover:bg-slate-100 cursor-pointer hover:shadow-md"
          onClick={toggleMobileMenu}
        >
          <motion.button initial="hidden" animate="visible" variants={variants}>
            {!isMobileMenuVisible ? <MenuIcon /> : <CloseIcon />}
          </motion.button>
        </motion.div>
      </div>
      {isMobileMenuVisible ? (
        <div className="m-5 rounded-md shadow-md p-5 z-50">
          <div className="w-full flex justify-center py-1 z-50 rounded-md hover:bg-slate-100">
            <Link href="/">Home</Link>
          </div>
          <div className="w-full flex justify-center py-1 z-50 rounded-md hover:bg-slate-100">
            <Link href="/">Preturi</Link>
          </div>
          <div className="w-full flex justify-center py-1 z-50 rounded-md hover:bg-slate-100">
            <Link href="/">Galerie</Link>
          </div>
          <div className="w-full flex justify-center py-1 z-50 rounded-md hover:bg-slate-100">
            <Link href="/">Servicii</Link>
          </div>
          <div className="w-full flex justify-center py-1 z-50 rounded-md hover:bg-slate-100">
            <Link href="/">Contact</Link>
          </div>
        </div>
      ) : (
        <motion.div></motion.div>
      )}
    </nav>
  );
};

export default Navbar;
