import Link from "next/link";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { motion } from "framer-motion";
import MenuItem from "./MenuItem";
import { MenuItemsOptions } from "./MenuItemsOptions";
import { Button } from "./Button";
import { Tooth } from "./svgs";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
    open: { opacity: 1, x: 0, duration: 0.4, scale: 1 },
    closed: { opacity: 0, x: "50%", y: "-80%", scale: 0, transition: "spring" },
  };

  return (
    <nav className="fixed top-0 z-50 h-24 w-full bg-white md:h-36">
      <div className="mt-4 flex justify-between align-middle">
        <div className="ml-5 flex flex-row align-middle">
          <div className="flex flex-row space-x-1  align-middle">
            <Link href="/">
              <Tooth className="w-10" />
            </Link>
            <div className="flex cursor-pointer flex-col">
              <Link href="/">
                <div className="text-2xl font-light  md:text-4xl">
                  Stomatologia
                </div>
              </Link>
              <Link href="/">
                <span className="text-3xl font-extrabold md:text-5xl">
                  Orto Implant
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-row align-middle">
          <div className="flex align-middle">
            <Button
              link={"tel:0785779776"}
              text={"Contact"}
              icon={faPhone}
              buttonStyle={"p-2"}
              key={"Contact"}
            />
          </div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="mr-4 ml-4 flex cursor-pointer self-center rounded-md p-2 shadow-sm hover:bg-slate-100 hover:shadow-md"
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
            initial={{ scale: 0 }}
            animate={isMobileMenuVisible ? "open" : "closed"}
            variants={mobileMenu}
            className="absolute left-0 right-0 z-50 mt-20 ml-4 mr-4 justify-end rounded-lg bg-slate-100 align-middle font-light shadow-lg"
          >
            <div className="flex flex-col p-3">
              <ul>
                {MenuItemsOptions.map((option) => (
                  <MenuItem
                    label={option.label}
                    to={option.to}
                    key={option.id}
                    onClick={toggleMobileMenu}
                  />
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
