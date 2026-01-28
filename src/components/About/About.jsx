import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import profileImage from '../../assets/profile2.jpg';

const Typewriter = ({ words, speed = 150, delay = 2000 }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (index === words.length) return;

    if (subIndex === words[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), delay);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? speed / 2 : speed);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words, speed, delay]);

  return (
    <span className="text-[#8245ec]">
      {words[index].substring(0, subIndex)}
      <span className="animate-pulse">|</span>
    </span>
  );
};

const About = () => {
  return (
    <section
      id="about"
      className="pb-7 pt-4 px-[7vw] md:px-[7vw] lg:px-[7vw] font-sans bg-skills-gradient clip-path-custom"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-12">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="md:w-1/2 text-center md:text-left"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2"
          >
            Hi, I am
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-4"
          >
            Durgesh Sharma
          </motion.h2>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#8245ec] mb-6">
            <span className="text-white">I am a </span>
            <Typewriter
              words={['Fullstack Developer', 'MERN Stack Expert', 'Web Designer', 'Coder']}
            />
          </h3>

          <p className="text-base sm:text-lg text-gray-300 mb-10 leading-relaxed">
            I am a full-stack developer, building scalable web applications. Skilled in both front-end and
            back-end development, I specialize in the MERN stack and other modern technologies to create seamless
            user experiences and efficient solutions.
          </p>

          <motion.a
            href="https://drive.google.com/file/d/19ja4pEFMbIr1RqGsGjqzYp2KnoZcrCzI/view"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(130, 69, 236, 0.6)" }}
            whileTap={{ scale: 0.95 }}
            className="inline-block text-white py-3 px-8 rounded-full text-lg font-bold transition-all duration-300"
            style={{
              background: 'linear-gradient(90deg, #8245ec, #a855f7)',
              boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
            }}
          >
            DOWNLOAD CV
          </motion.a>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="md:w-1/2 flex justify-center"
        >
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, -5, 0]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[26rem] md:h-[26rem] border-4 border-[#8245ec] rounded-full shadow-lg relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-transparent z-10"></div>
            <img
              src={profileImage}
              alt="Durgesh Sharma"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
