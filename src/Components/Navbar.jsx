import React from 'react'
import logo from "../assets/logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


const Navbar = () => {
    return (
        <nav className=' mb-20 flex items-center justify-between py-1'>
            <div className='flex flex-shrink-0 items-center '>
                <img className="mx-6 w-28" src={logo} alt="logo" />
            </div>
            <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
                <a href='https://www.linkedin.com/in/aashritha-msl-47a51a286/' target='_blank' rel='noopener noreferrer'>
                    <FaLinkedin />
                </a>
                <a href='https://github.com/Aashritha07?tab=repositories' target='_blank' rel='noopener noreferrer'>
                    <FaGithub /></a>
                <a href='mailto:ugs22014_cse.aashritha@cbit.org.in' target='_blank' rel='noopener noreferrer'>
                    <FaMailBulk /></a>
                


            </div>
        </nav>)
}

export default Navbar
