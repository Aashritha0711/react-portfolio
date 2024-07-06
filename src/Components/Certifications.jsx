import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import cert1 from '../assets/Certifications/Cert1.jpg';
import cert2 from '../assets/Certifications/Cert2.jpg';
import cert3 from '../assets/Certifications/Cert3.jpg';
import cert4 from '../assets/Certifications/Cert4.jpg';
import cert5 from '../assets/Certifications/Cert5.jpg';
import cert6 from '../assets/Certifications/Cert6.jpg';
import {motion} from 'framer-motion';

const Certifications = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="border-b border-neutral-900 pb-24">
      <motion.h2 whileInView={{opacity:1, y:0}} initial={{opacity:0, y:-100}} transition={{duration:0.5}} className="my-20 text-center text-4xl">Certifications</motion.h2>
      <div className="flex flex-wrap justify-center gap-6 items-center mx-auto max-w-5xl w-full">
        <div className="conteudo__general w-full">
          <div className="container">
            <Slider {...settings}>
              <div className="carrossel-item flex justify-center items-center ">
                <img src={cert1} alt="Certification 1" className="max-w-full ml-40" height={700} width={700}/>
              </div>
              <div className="carrossel-item flex justify-center items-center ">
                <img src={cert2} alt="Certification 2" className="max-w-full ml-40" height={700} width={700}/>
              </div>
              <div className="carrossel-item flex justify-center items-center ">
                <img src={cert3} alt="Certification 3" className="max-w-full ml-40"height={700} width={700} />
              </div>
              <div className="carrossel-item flex justify-center items-center ">
                <img src={cert4} alt="Certification 4" className="max-w-full ml-40" height={700} width={700}/>
              </div>
              <div className="carrossel-item flex justify-center items-center ">
                <img src={cert5} alt="Certification 5" className="max-w-full ml-40" height={700} width={700}/>
              </div>
              <div className="carrossel-item flex justify-center items-center ">
                <img src={cert6} alt="Certification 6" className="max-w-full ml-40" height={700} width={700}/>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certifications;
