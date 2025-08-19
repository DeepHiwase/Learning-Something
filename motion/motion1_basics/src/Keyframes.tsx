// import { motion } from "motion/react";
// import PulsingButton from "./components/PulsingButton";
import BouncingLoader from "./components/BouncingLoader";

const Keyframes = () => {
  return (
    <div>
      {/* <motion.div
        className="box"
        animate={{
          // scale: [1, 2, 2, 1],
          scale: [1, 2, 1],
        }}
        transition={{ duration: 4, ease: "easeInOut", delay: 2 }}
      /> */}

      {/* <motion.div
        className="box text-9xl text-black flex justify-center items-center"
        animate={{
          // rotate: [0, 90, 180, 270, 360]
          rotate: [0, 360],
        }}
        transition={{ duration: 8, ease: "easeInOut", delay: 2 }}
      >
        W
      </motion.div> */}

      {/* <motion.div
        className="box text-9xl text-black flex justify-center items-center"
        animate={{
          // rotate: [0, 90, 180, 270, 360]
          // rotate: [0, 360],
          borderRadius: ["0%", "20%", "20%", "50%", "50%", "20%"],
        }}
        transition={{ duration: 8, ease: "easeInOut", delay: 2 }}
      >
        W
      </motion.div> */}

      {/* <PulsingButton /> */}

      <BouncingLoader />


    </div>
  );
};

export default Keyframes;
