import { motion } from "motion/react";

const PulsingButton = () => {
  return (
    <motion.div
      className="bg-red-500 text-white p-4 text-center"
      animate={{
        scale: [1, 1.1, 1],
        backgroundColor: ["#991b1b", "#ef4444", "#ef4444", "#991b1b"],
      }}
      transition={{
        delay: 1,
        duration: 1,
        repeat: Infinity,
      }}
    >
      Love You
    </motion.div>
  );
};

export default PulsingButton;
