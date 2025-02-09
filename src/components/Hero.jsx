import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  const [displayText, setDisplayText] = useState(false);

  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px]
        max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm
            <span className="text-[#915eff]"> Noura</span>
          </h1>
          {!displayText && (
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              I develop
              <TypeAnimation
                cursor={false} // omit the default css typing animation class, otherwise we won't be able to manipulate it manually
                className={'text-[#915eff]'} // pass custom cursor className that will be manipulated (defaults below)
                sequence={[
                  ' Web Applications',
                  500,
                  ' Modern Websites',
                  500,
                  ' User Interfaces',
                  500,
                  ' Responsive Interfaces',
                  500,
                  ' ', // Keep the space to reset
                  100,
                  () => setDisplayText(true),
                ]}
                repeat={0}
              />
            </p>
          )}
          {displayText && (
            <p
              className={`${styles.heroSubText} mt-2 text-white-100`}
              style={{ textAlign: 'justify' }}
            >
              As a versatile Full Stack Web Developer, I possess a unique blend
              of front and back-end expertise. I specialize in creating dynamic
              and user-centric web applications. Let’s work together to turn
              your ideas into reality and create something extraordinary!{' '}
              <br className="sm:block hidden" />
            </p>
          )}
        </div>
      </div>

      <ComputersCanvas />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
