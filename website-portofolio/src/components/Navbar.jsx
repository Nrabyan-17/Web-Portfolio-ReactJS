import React, { useState } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaStackOverflow } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const Navbar = () => {

    const [click, setClick] = useState(false) 

    function handleClick() {
        setClick(!click)
    }


  return (
    <div className='fixed w-full bg-[#0a192f] h-[80px] flex justify-between items-center px-5 text-slate-100'>

        

        {/* LOGO */}
        <div className='font-bold text-4xl'>
            Nrabyan-18
        </div>

        {/* MENU */}
        <ul className='hidden md:flex'>
            <li className='text-[#ccd6f6]'>
                <a href="/">Home</a>
            </li>
            <li className='text-[#ccd6f6]'>
                <a href="/about">About</a>
            </li>
            <li className='text-[#ccd6f6]'>
                <a href="/skills">Skills</a>
            </li>
            <li className='text-[#ccd6f6]'>
                <a href="/portofolio">Portofolio</a>
            </li>
            <li className='text-[#ccd6f6]'>
                <a href="/contact">Contact</a>
            </li>
        </ul>
  

        {/* HAMBURGER LIST */}
        <div onClick={handleClick} className='md:hidden cursor-pointer z-10'>
            {!click ? <FaBars /> : <FaTimes /> }
        </div>

        {/* MOBILE MENU */}
            <ul className={!click ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center gap-2 font-bold md:hidden'}>
                <li className="text-4xl py-6 text-[#ccd6f6]">
                    <a href="/">Home</a>
                </li>
                <li className="text-4xl py-6 text-[#ccd6f6]">
                    <a href="/about">About</a>
                </li>
                <li className="text-4xl py-6 text-[#ccd6f6]">
                    <a href="/skills">Skills</a>
                </li>
                <li className="text-4xl py-6 text-[#ccd6f6]">
                    <a href="/portofolio">Portofolio</a>
                </li>
                <li className="text-4xl py-6 text-[#ccd6f6]">
                    <a href="/contact">Contact</a>
                </li>
            </ul>
        

        {/* SOCIAL MEDIA, PERLU DIPELAJARI LAGI ALURNYA*/}
        <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
            
            <ul>
                <li className="flex justify-between items-center w-[160px] h-[60px] ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600 mb-3">
                    <a href="https://www.linkedin.com/in/abyan-rizki-76021528b/" target='_blank' rel='noreferrer' 
                    className="flex w-full justify-between items-center text-gray-300" >
                        Linkedin <FaLinkedin size={30}/>
                    </a>
                </li>

                <li className="flex justify-between items-center w-[160px] h-[60px] ml-[-100px] hover:ml-[-10px] duration-300 bg-black mb-3">
                    <a href="https://github.com/Nrabyan-17" target="_blank" rel='noreferrer' className="flex w-full justify-between items-center text-gray-300">
                        Github <FaGithub size={30}/>
                    </a>
                </li>

                <li className="flex justify-between items-center w-[160px] h-[60px] ml-[-100px] hover:ml-[-10px] duration-300 bg-orange-400 mb-3">
                    <a href="https://stackoverflow.com/users/23208963/hello-world-aby" target='blank' rel='noreferrer' className="flex w-full justify-between items-center">
                        Stack Overflow
                        <FaStackOverflow size={30}/>
                    </a>
                </li>

                <li className="flex justify-between items-center w-[160px] h-[60px] ml-[-100px] hover:ml-[-10px] duration-300 bg-neutral-500">
                    <a href="" 
                    className="flex w-full justify-between items-center text-gray-300" >
                        Email <HiOutlineMail size={30}/>
                    </a>
                </li>
            </ul>
            
        </div>

    </div>
  )
}

export default Navbar