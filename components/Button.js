import { motion } from "framer-motion";

export const Button = (props) => {
  const { link, text, icon, buttonStyle, iconStyle, textStyle } = props;

  return (
    <div className="flex align-middle">
      <motion.a
        className={`${buttonStyle}
        inline-flex 
        items-center 
        justify-between 
        self-center 
        rounded-xl 
        bg-teal-500
        text-slate-100
        shadow-md
        hover:bg-teal-600
        hover:text-teal-100`}
        href={link}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className={`${iconStyle} m-1 inline-block w-5 fill-current`}>
          {icon}
        </span>
        <span className={`${textStyle} m-1 inline-block`}>{text}</span>
      </motion.a>
    </div>
  );
};

export default Button;
