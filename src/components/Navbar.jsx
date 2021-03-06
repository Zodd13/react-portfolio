import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs"
import { Link } from 'react-scroll'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
    return (
        <div className="fixed w-full h-[80px] flex justify-end items-center px-4 bg-[#0a192f] text-gray-300">

            {/* Liens navbar */}
            <ul className="hidden md:flex">
                <li>
                    <Link to="home" smooth={true} duration={500} >
                        Accueil
                    </Link>
                </li>
                <li>                    <Link to="journey" smooth={true} duration={500} >
                    Parcours
                </Link></li>
                <li>                    <Link to="work" smooth={true} duration={500} >
                    Projets
                </Link></li>
                <li>                    <Link to="contact" smooth={true} duration={500} >
                    Contact
                </Link></li>
            </ul>

            {/* hamburger */}
            <div onClick={handleClick} className="md:hidden z-10">
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            {/* mobile menu */}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
                <li className="py-6 text-4xl">                    <Link onClick={handleClick} to="home" smooth={true} duration={500} >
                    Accueil
                </Link></li>
                <li className="py-6 text-4xl"><Link onClick={handleClick} to="journey" smooth={true} duration={500} >
                    Parcours
                </Link></li>
                <li className="py-6 text-4xl"><Link onClick={handleClick} to="work" smooth={true} duration={500} >
                    Projets
                </Link></li>
                <li className="py-6 text-4xl"><Link onClick={handleClick} to="contact" smooth={true} duration={500} >
                    Contact
                </Link></li>
            </ul>
            {/* social icons */}
            <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
                <ul>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500">
                        <a className="flex justify-between items-center w-full text-gray-300" href="/">
                            LinkedIn <FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-purple-800">
                        <a className="flex justify-between items-center w-full text-gray-300" href="/">
                            LinkedIn <FaGithub size={30} />
                        </a>
                    </li>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-red-500">
                        <a className="flex justify-between items-center w-full text-gray-300" href="/">
                            LinkedIn <HiOutlineMail size={30} />
                        </a>
                    </li>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
                        <a className="flex justify-between items-center w-full text-gray-300" href="/">
                            LinkedIn <BsFillPersonLinesFill size={30} />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar