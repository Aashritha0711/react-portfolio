import { FaReact, FaNodeJs, FaDatabase, FaHtml5, FaCss3Alt, FaJsSquare, FaGitAlt ,FaPython, FaJava} from 'react-icons/fa';
import {  SiTailwindcss, SiMongodb, SiPostgresql,SiDjango ,SiBootstrap,SiExpress} from 'react-icons/si';
import React from 'react';
import {motion} from 'framer-motion';


const iconVariants=(duration) => ({
    initial: { y: 0 },
    animate: {
        x:[0,10,0],
        // y: [0, -15, 0],
        transition: {
            duration: duration,
            ease: 'easeInOut',
            repeat: Infinity,
        }
    }
})

const Technologies = () => {

    const techList = [
        { icon: FaReact, name: 'React', color: 'text-blue-500' },
        
        { icon: FaNodeJs, name: 'Node.js', color: 'text-green-500' },
        { icon: FaDatabase, name: 'Database', color: 'text-blue-700' },
        { icon: SiMongodb, name: 'MongoDB', color: 'text-green-700' },
        { icon: SiPostgresql, name: 'PostgreSQL', color: 'text-blue-600' },
        { icon: FaHtml5, name: 'HTML5', color: 'text-red-600' },
        { icon: FaCss3Alt, name: 'CSS3', color: 'text-blue-600' },
        { icon: FaJsSquare, name: 'JavaScript', color: 'text-yellow-500' },
        { icon: SiTailwindcss, name: 'Tailwind CSS', color: 'text-teal-500' },
        { icon: SiBootstrap, name: 'Bootstrap', color: 'text-purple-600' },
        { icon: FaGitAlt, name: 'Git', color: 'text-orange-600' },
        { icon: FaPython, name: 'Python', color: 'text-blue-500', hover: ' transition-colors duration-300', size: 'text-7xl' },
 
        { icon: SiDjango, name: 'Django', color: 'text-green-500' },
        { icon: SiExpress, name: 'Express.js', color: 'text-black-500' },
        { icon: FaJava, name: 'Java', color: 'text-red-500' },
    ];

    return (
        <div className='border-b border-neutral-800 pb-24'>
            <motion.h2 whileInView={{opacity:1, y:0}}
      initial={{opacity:0, y:-100}}
      transition={{duration:0.5}} className='my-20 text-center text-4xl'>Technologies</motion.h2>
            <motion.div
            variants={iconVariants(2.5)}
            initial='initial'
            animate='animate'
            
            className='flex flex-wrap justify-center gap-6 items-center  mx-auto max-w-5xl w-1/2'>
                {techList.map((tech, index) => (
                    <div key={index} className="rounded-2xl border-4 border-neutral-800 p-4">
                        <tech.icon className={`${tech.color} hover:${tech.color.replace('500', '300')} transition-colors duration-300 text-7xl`} />
                        <p className="mt-2 text-center">{tech.name}</p>
                    </div>
                ))}
            </motion.div>
        </div>
    );
}

export default Technologies;
