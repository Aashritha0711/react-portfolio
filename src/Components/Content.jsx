import { ABOUT_TEXT } from '../constants';
import AboutPic from '../assets/AboutPic.jpg';
import { motion } from 'framer-motion'

const Content = () => {
    return (
        <div className='border-b border-neutral-900 pb-4'>
            <h2 className='my-20 text-center text-4xl'>
                About Me
            </h2>
            <div className='flex flex-wrap lg:flex-nowrap'>
                <motion.div whileInView={{opacity:1, x:0}}
                initial={{opacity:0, x:-100}}
                transition={{duration:0.5}}
                className='w-full lg:w-1/2 flex justify-center'>
                    <img src={AboutPic} alt="profile" className="lg:w-3/5 h-auto rounded-xl mt-4 mb-4 opacity-85" />
            </motion.div>
            <motion.div whileInView={{opacity:1, x:0}}
                initial={{opacity:0, x:100}}
                transition={{duration:0.5}}
                className='w-full lg:w-1/2  ml-2 flex justify-center mr-1/2 lg:justify-start items-center'>
                <p className='my-2 max-w-xl py-6 font-light  justify-center'>{ABOUT_TEXT}</p>

            </motion.div>
        </div>
        </div >
    );
}

export default Content;
