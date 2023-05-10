import React from "react";
import { motion } from "framer-motion";
import { pageAnimation } from "../../animations";
import WorkSection from "./WorkSection";
import MiniWorkSection from "./MiniWorkSection";

const Work = () => {
  return (
    <motion.div
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <WorkSection />
      <MiniWorkSection />
    </motion.div>
  );
};

export default Work;
