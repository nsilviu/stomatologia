import { motion } from "framer-motion";

export const Button = (props) => {
  const { link, text, icon } = props;

  return (
    <div className="flex align-middle">
      <motion.a
        className="inline-flex 
        items-center 
        justify-between 
        self-center 
        rounded-xl 
        bg-teal-500 text-lg 
        font-bold 
        text-slate-100 
        shadow-md
        hover:bg-teal-600
        hover:text-teal-100"
        href={link}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="m-2 inline-block w-5 fill-current">{icon}</span>
        <span className="m-2 inline-block">{text}</span>
      </motion.a>
    </div>
  );
};

export default Button;
