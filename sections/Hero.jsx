'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { slideIn, staggerContainer, textVariant } from '../utils/motion';

const Hero = () => (
  <section className={`${styles.yPaddings} sm:pl-16 pl-16`}>
    <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.25 }} className={`${styles.innerWidth} mx-auto flex flex-col`}>
      <div className="flex justify-center flex-col relative z-10">
        <motion.h1 variants={textVariant(0.3)} className={`${styles.heroHeading} flex justify-center`}>Metaverse</motion.h1>
        <motion.div variants={textVariant(0.5)} className="flex flex-row justify-center items-center">
          <h1 className={styles.heroHeading}>Ma</h1>
          <div className={styles.heroDText}>{ }</div>
          <h1 className={styles.heroHeading}>ness</h1>
        </motion.div>
      </div>
      <motion.div variants={slideIn('right', 'tween', 0.5, 1)} className="relative w-full md:-mt-[20px] -mt-[12px] justify-center flex">
        <div className="absolute rounded-tl-[140px] z-[0] -top-[30px]" />
        <div>
          <img src="/cover.png" alt="cover" className="w-full -mt-10 sm:h-[500px] h-[300px] object-cover rounded-tl-[140px] z-10 relative" />
          <a href="#explore">
            <div className="w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10">
              <img src="/stamp.png" alt="stamp" className="sm:w-[155px] w-[100px] sm:h[155px] h-[100px] object-contain" />
            </div>
          </a>
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
