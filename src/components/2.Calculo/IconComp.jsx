import React from "react";
import { motion } from "framer-motion";
import Linkedin from "./interface/icons/Linkedin";
import Github from "./interface/icons/Github";
import Facebook from "./interface/icons/Facebook";
import YouTube from "./interface/icons/YouTube";

function IconComp() {
  return (
    <>
      <div className="flex  space-x-10 max-[425px]:space-x-5 my-8 max-sm:mt-6 justify-center max-sm:my-0">
        <motion.button whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.4 }}>
          <Linkedin />
        </motion.button>
        <motion.button whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.4 }}>
          <Github />
        </motion.button>
        <motion.button whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.4 }}>
          <Facebook />
        </motion.button>
        <motion.button whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.4 }}>
          <YouTube />
        </motion.button>
      </div>
    </>
  );
}

export default IconComp;
