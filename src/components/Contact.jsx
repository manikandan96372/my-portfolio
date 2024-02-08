import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <br/><br />
        <div>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Email: &nbsp;&nbsp; manikandan96372@gmail.com</span>
          </label>
        </div>
        <div>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Linkedin: &nbsp;&nbsp; https://www.linkedin.com/in/manikandan-s-p-12950213a</span>
          </label>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
