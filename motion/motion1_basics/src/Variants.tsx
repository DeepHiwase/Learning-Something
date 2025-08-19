import { motion } from "motion/react";
import { useState } from "react";

const Variants = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  return (
    <div className="">
      <motion.div
        className="box"
        variants={{
          hidden: { opacity: 0, scale: 0.8 },
          visible: { opacity: 1, scale: 1 },
          exit: { opacity: 0, scale: 0.5 },
        }}
        initial={"hidden"}
        animate={isVisible ? "visible" : "hidden"}
        exit={"exit"}
        transition={{ duration: 1 }}
        onClick={() => setIsVisible(!isVisible)}
      />
    </div>
  );
};

export default Variants;
