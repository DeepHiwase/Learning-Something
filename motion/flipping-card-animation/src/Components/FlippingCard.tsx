import { motion } from "motion/react";
import { useState } from "react";

const FlippingCard = () => {
  const [isFlipped, setIsFlipped] = useState<boolean>(false);

  return (
    // <motion.div
    //   onClick={() => setIsFlipped(!isFlipped)}
    //   className="perspective-[1000px]"
    // >
    //   <motion.div
    //     variants={{
    //       front: { rotateY: 0 },
    //       back: { rotateY: 180 },
    //     }}
    //     initial={"front"}
    //     animate={isFlipped ? "back" : "front"}
    //     transition={{ duration: 0.6 }}
    //     className="w-64 h-40 bg-white rounded-lg shadow-lg overflow-hidden transform-3d"
    //   >
    //     <div className="absolute inset-0 flex items-center justify-center text-xl font-bold backface-hidden">
    //       Front Side
    //     </div>
    //     <div className="absolute inset-0 flex items-center justify-center text-xl font-bold rotate-y-180 backface-hidden">
    //       Back Side
    //     </div>
    //   </motion.div>
    // </motion.div>

    <motion.div
      onClick={() => setIsFlipped(!isFlipped)}
      className="perspective-[1000px]"
    >
      <motion.div
        variants={{
          front: { rotateY: 0 },
          back: { rotateY: 180 },
        }}
        initial="front"
        animate={isFlipped ? "back" : "front"}
        transition={{ duration: 0.6 }}
        className="w-64 h-40 bg-white rounded-lg shadow-lg relative transform-3d"
      >
        <div className="absolute inset-0 flex items-center justify-center text-xl font-bold backface-hidden">
          Front Side
        </div>
        <div className="absolute inset-0 flex items-center justify-center text-xl font-bold bg-blue-500 text-white  rotate-y-180 backface-hidden">
          Back Side
        </div>
      </motion.div>
    </motion.div>
  );
};

export default FlippingCard;
