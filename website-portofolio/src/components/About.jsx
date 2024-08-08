import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8 font-bold text-[#ccd6f6] '>
                <h3 className='text-4xl inline border-b-4 border-slate-300'>About</h3>
            </div>

            <p className='text-xl mt-18 font-bold text-slate-400'>Hi, my name is Naufal Rizki Abyan you can call me Abyan, currently majoring Information System 3rd semester at UPN "Veteran" Jawa Timur. as a Information System student with a deep interest in Software Development particularly on Web Development, I'm on a continuous journey to learn and expand my knowledge on the field that I interest.</p>

            <br />

            <p className='text-xl mt-18 font-bold text-slate-400'>I'm always open to connecting with like-minded individuals, whether to share knowledge, building some beneficial project for citizen, or explore the new opportunities in the tech world.</p>
        </div>
    </div>
  )
}

export default About