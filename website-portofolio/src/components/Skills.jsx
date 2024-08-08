import React from 'react'
import html from  '../assets/img/html.png'
import css from '../assets/img/css.png'
import javascript from '../assets/img/javascript.png'
import react from '../assets/img/react.png'
import tailwind from '../assets/img/tailwind.png'
import java from '../assets/img/java.png'
import mysql from '../assets/img/MySQL.png'
import bootstrap from '../assets/img/bootstrap2.png'

const Skills = () => {
  return (
    <div name='skills' className='h-screen w-full bg-[#0a192f]'>

        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full'>
           <div className='text-slate-400 font-bold '>
                <h2 className='text-4xl text-[#ccd6f6] inline border-b-4 border-slate-300'>Skills</h2>
                <p className='text-xl py-4'>// These are the technologies i've used when coding:</p>
           </div>

           <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-4'>
                <div className='shadow-[#040c16] hover:scale-110 duration-300'>
                    <img className='w-20 mx-auto' src={html} alt="html.png" />
                    <p className='text-center font-bold text-slate-400 py-3'>HTML</p>
                </div>

                <div className='shadow-[#040c16] hover:scale-110 duration-300'>
                    <img className='w-20 mx-auto' src={css} alt="css.png" />
                    <p className='text-center font-bold text-slate-400 py-3'>CSS</p>
                </div>

                <div className='shadow-[#040c16] hover:scale-110 duration-300'>
                    <img className='w-20 mx-auto' src={javascript} alt="javascript.png" />
                    <p className='text-center font-bold text-slate-400 py-3'>JavaScript</p>
                </div>

                <div className='shadow-[#040c16] hover:scale-110 duration-300'>
                    <img className='w-20 mx-auto' src={react} alt="react js.png" />
                    <p className='text-center font-bold text-slate-400 py-3'>React JS</p>
                </div>

                <div className='shadow-[#040c16] hover:scale-110 duration-300'>
                    <img className='w-20 mx-auto' src={tailwind} alt="tailwindcss.png" />
                    <p className='text-center font-bold text-slate-400'>Tailwind CSS</p>
                </div>

                <div className='shadow-[#040c16] hover:scale-110 duration-300'>
                    <img className='w-20 h-21 mx-auto py-2' src={bootstrap} alt="bootstrap.png" />
                    <p className='text-center font-bold text-slate-400'>Bootstrap</p>
                </div>

                <div className='shadow-[#040c16] hover:scale-110 duration-300'>
                    <img className='w-48 mx-auto' src={mysql} alt="mysql.png" />
                    <p></p>
                </div>

                <div className='shadow-[#040c16] hover:scale-110 duration-300'>
                    <img className='w-16 mx-auto h-24' src={java} alt="java.png" />
                    <p></p>
                </div>
           </div>
        </div>

    </div>
  )
}

export default Skills