import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import profile from '../assets/img/profile1.jpeg'

const Hero = () => {
  return (
          
    <div name="hero" className='w-full h-screen bg-[#0a192f]'>

        {/* CONTAINER */}
        <div className="max-w-screen-lg mx-auto h-screen flex flex-col justify-center items-center px-5 md:flex-row gap-11">
          <div>
            <p className='text-orange-300 mt-10 font-bold px-1'>Hello there, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Naufal Rizki Abyan</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-slate-500 mt-2'>I'm a Software Engineer</h2>
            <p className='py-5 font-bold text-slate-400 max-w-[760px]'>Hi, my name is Naufal Rizki Abyan you can call me Abyan, currently majoring Information System 3rd semester at UPN "Veteran" Jawa Timur. as a Information System student with a deep interest in Software Development particularly on Web Development, I'm on a continuous journey to learn and expand my knowledge on the field that I interest. </p>

            <div className='py-5'>
              <button className='text-black font-bold group hover:bg-transparent border-2 hover:text-white duration-200 rounded-md px-6 py-3 bg-orange-300 flex item-center gap-2'>
                <a href="/portofolio">See portofolio</a>
                <span className='group-hover:rotate-90 duration-300'>
                  <HiArrowNarrowRight />
                </span>
              </button>
            </div>
          </div>

          <div className='w-96 mb-24 border rounded-lg border-[#0a192f]' >
            <img src={profile} alt="my profile" />
          </div>
        </div>

        
    </div>
    
  )
}

export default Hero