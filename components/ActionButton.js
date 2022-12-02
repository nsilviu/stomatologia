import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ActionButton = (props) => {
  const { link, text, icon, buttonStyle, iconStyle, textStyle, key } = props;

  return (
    <div className="flex align-middle">
      <motion.a
        key={text}
        className={`${buttonStyle}
        inline-flex 
        items-center 
        justify-between 
        self-center 
        rounded-xl 
        shadow-md`}
        href={link}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className={`${iconStyle} m-1 inline-block w-5 fill-current`}>
          <FontAwesomeIcon icon={icon} />
        </span>
        <span className={`${textStyle} m-1 inline-block`}>{text}</span>
      </motion.a>
    </div>
  );
};

export default ActionButton;
