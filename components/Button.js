import { motion } from "framer-motion";

const Button = (props) => {
  const { link, text, icon } = props;

  return (
    <div className="mx-4">
      <motion.a
        className=" inline-flex w-full items-center justify-between rounded-xl bg-teal-500 px-5 py-3 text-xl text-slate-100 hover:bg-teal-600 hover:text-teal-100"
        href={link}
        animate={{}}
      >
        <span className="inline-block w-10 fill-current">{icon}</span>
        <span className="inline-block">{text}</span>
      </motion.a>
    </div>
  );
};

export default Button;
