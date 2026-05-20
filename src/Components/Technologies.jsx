import React from 'react';
import { motion } from 'framer-motion';

import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaGitAlt,
  FaPython,
} from 'react-icons/fa';

import {
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiDjango,
  SiBootstrap,
  SiExpress,
  SiDocker,
  SiJenkins,
  SiTypescript,
  SiStreamlit,
  
} from 'react-icons/si';

const iconVariants = (duration) => ({
  initial: { y: 0 },
  animate: {
    x: [0, 10, 0],
    transition: {
      duration: duration,
      ease: 'easeInOut',
      repeat: Infinity,
    },
  },
});

const Technologies = () => {
  const techList = [
    { icon: FaReact, name: 'React', color: 'text-cyan-400' },
    { icon: FaNodeJs, name: 'Node.js', color: 'text-green-500' },
    
    { icon: SiMongodb, name: 'MongoDB Atlas', color: 'text-green-600' },
    { icon: SiPostgresql, name: 'PostgreSQL', color: 'text-blue-500' },

    { icon: FaHtml5, name: 'HTML5', color: 'text-orange-500' },
    { icon: FaCss3Alt, name: 'CSS3', color: 'text-blue-500' },
    { icon: FaJsSquare, name: 'JavaScript', color: 'text-yellow-400' },
    { icon: SiTypescript, name: 'TypeScript', color: 'text-blue-400' },

    { icon: SiTailwindcss, name: 'Tailwind CSS', color: 'text-cyan-400' },
    { icon: SiBootstrap, name: 'Bootstrap', color: 'text-purple-500' },

    { icon: FaPython, name: 'Python', color: 'text-blue-400' },
    { icon: SiDjango, name: 'Django', color: 'text-green-500' },
    { icon: SiExpress, name: 'Express.js', color: 'text-gray-300' },

    { icon: SiDocker, name: 'Docker', color: 'text-blue-400' },
    { icon: SiJenkins, name: 'Jenkins', color: 'text-red-500' },

    { icon: SiStreamlit, name: 'Streamlit', color: 'text-red-400' },
    

    { icon: FaGitAlt, name: 'Git', color: 'text-orange-500' },
  ];

  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h2>

      <motion.div
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
        className="flex flex-wrap justify-center gap-6 items-center mx-auto max-w-5xl"
      >
        {techList.map((tech, index) => (
          <div
            key={index}
            className="rounded-2xl border-4 border-neutral-800 p-4 hover:border-neutral-600 transition-all duration-300"
          >
            <tech.icon
              className={`${tech.color} text-7xl hover:scale-110 transition-transform duration-300`}
            />
            <p className="mt-2 text-center text-sm">{tech.name}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Technologies;