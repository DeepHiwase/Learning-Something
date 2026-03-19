import { motion } from "motion/react";

const App = () => {
  return (
    <div className="">
      {/* WhileHover */}
      {/* <motion.div
        className="box"
        whileHover={{ scale: 1.2, rotate: 10 }}
        transition={{ type: "spring", stiffness: 300 }}
      /> */}

      {/* WhileTap */}
      {/* <motion.div
        className="box"
        whileTap={{ scale: 0.8, backgroundColor: "crimson" }}
        transition={{ type: "spring", stiffness: 300 }}
      /> */}

      {/* WhileDrag */}
      <motion.div
        className="box"
        drag
        // drag="x" // now only can drag on x-axis
        dragConstraints={{
          // so set boundries for drag item
          top: -50,
          left: -50,
          bottom: 50,
          right: 50,
        }}
        whileDrag={{ scale: 0.8, backgroundColor: "crimson" }}
        transition={{ type: "spring", stiffness: 300 }}
      />
    </div>
  );
};

export default App;
