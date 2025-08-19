import { motion } from "motion/react";

const Translate = () => {
  return (
    <div className="">
      <motion.div className="box" />

      {/* Translate -> move obj on axis */}

      {/* <motion.div className="box" animate={{ x: 100 }} />
      <motion.div className="box" animate={{ y: 100 }} />
      <motion.div className="box" animate={{ x: -100 }} />
      <motion.div className="box" animate={{ y: -100 }} />
      <motion.div className="box" animate={{ x: 100, y: 100 }} />
      <motion.div className="box" animate={{ x: -100, y: 100 }} />
      <motion.div className="box" animate={{ x: 100, y: -100 }} />
      <motion.div className="box" animate={{ x: -100, y: -100 }} />
      <motion.div className="box" animate={{ x: 0, y: 0, z: 1000 }} />
      <motion.div
        className="box"
        animate={{ translateX: 0, translateY: 0, translateZ: 1000 }}
      /> */}

      <br />

      {/* Rotate -> rotate around axis */}

      <motion.div
        className="box text-9xl text-black flex justify-center items-center"
        animate={{ rotateX: 45 }}
      >
        W
      </motion.div>
      <motion.div
        className="box text-9xl text-black flex justify-center items-center"
        animate={{ rotateX: -45 }}
      >
        W
      </motion.div>
      <motion.div
        className="box text-9xl text-black flex justify-center items-center"
        animate={{ rotateY: 45 }}
      >
        W
      </motion.div>
      <motion.div
        className="box text-9xl text-black flex justify-center items-center"
        animate={{ rotateY: 45 }}
      >
        W
      </motion.div>
      <motion.div
        className="box text-9xl text-black flex justify-center items-center"
        animate={{ rotateZ: 45 }}
      >
        W
      </motion.div>
      <motion.div
        className="box text-9xl text-black flex justify-center items-center"
        animate={{ rotateZ: -45 }}
      >
        W
      </motion.div>
      <motion.div
        className="box text-9xl text-black flex justify-center items-center"
        animate={{ rotate: 45 }}
      >
        W
      </motion.div>
      <motion.div
        className="box text-9xl text-black flex justify-center items-center"
        animate={{ rotateX: 50, rotateY: 50, rotateZ: 10 }}
      >
        W
      </motion.div>

      {/* Skew -> tilting the object */}
      <motion.div
        className="box text-9xl text-black flex justify-center items-center"
        animate={{ skewX: 10 }}
      >
        W
      </motion.div>
      <motion.div
        className="box text-9xl text-black flex justify-center items-center"
        animate={{ skewX: -10 }}
      >
        W
      </motion.div>
      <motion.div
        className="box text-9xl text-black flex justify-center items-center border"
        animate={{ skewY: 10 }}
      >
        W
      </motion.div>
      <motion.div
        className="box text-9xl text-black flex justify-center items-center border"
        animate={{ skewY: -10 }}
      >
        W
      </motion.div>

      {/* Scale -> how big or small it can go - the value is multiply with original dimensions */}
      <motion.div
        className="box text-9xl text-black flex justify-center items-center border"
        animate={{ scaleX: 2 }}
      >
        W
      </motion.div>
      <motion.div
        className="box text-9xl text-black flex justify-center items-center border"
        animate={{ scaleX: -2 }}
      >
        W
      </motion.div>
      <motion.div
        className="box text-9xl text-black flex justify-center items-center border"
        animate={{ scaleY: 2 }}
      >
        W
      </motion.div>
      <motion.div
        className="box text-9xl text-black flex justify-center items-center border"
        animate={{ scaleY: -2 }}
      >
        W
      </motion.div>
      <motion.div
        className="box text-9xl text-black flex justify-center items-center border"
        animate={{ scaleZ: 10 }}
      >
        W
      </motion.div>
      <motion.div
        className="box text-9xl text-black flex justify-center items-center border"
        animate={{ scale: 2 }}
      >
        W
      </motion.div>
    </div>
  );
};

export default Translate;
