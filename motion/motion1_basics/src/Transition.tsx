import { motion } from "motion/react";

const Transition = () => {
  return (
    <div>
      {/* Transition */}
      <motion.div
        className="box"
        initial={{ x: 0 }}
        animate={{ x: 100 }}
        transition={{ delay: 2, duration: 5, ease: "easeInOut" }}
      />
      <motion.div
        className="box"
        initial={{ x: 0 }}
        animate={{ x: 100 }}
        transition={{ delay: 2, duration: 5, ease: "backInOut" }}
      />
      <motion.div
        className="box"
        initial={{ x: 0 }}
        animate={{ x: 100 }}
        transition={{ delay: 2, duration: 5, ease: "circInOut" }}
      />
      <motion.div
        className="box"
        initial={{ x: 0 }}
        animate={{ x: 100 }}
        transition={{ delay: 2, duration: 5, ease: "anticipate" }}
      />
      <motion.div
        className="box"
        initial={{ x: 0 }}
        animate={{ x: 100 }}
        transition={{ delay: 2, duration: 5, ease: "linear" }}
      />
    </div>
  );
};

export default Transition;
