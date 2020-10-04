import React from "react";
import { motion } from "framer-motion";

const DetailWrapper = ({ left, right }) => {
  return (
    <motion.div
      initial={{ scale: 0.9 }}
      animate={{
        scale: [0.95, 1],
      }}
      className="flex py-16 px-40"
    >
      <div className="w-3/5">{left}</div>
      <div className="w-2/5">{right}</div>
    </motion.div>
  );
};

export default DetailWrapper;
