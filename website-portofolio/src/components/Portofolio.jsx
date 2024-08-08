import React from 'react'
import movieImg from '../assets/img/movie.png'
import quizApp from '../assets/img/quiz.png'
import weather from '../assets/img/weather.png'
import breakingnews from '../assets/img/breakingnews.png'
import companyprofile from '../assets/img/companyprofile.png'
import travel from '../assets/img/travel.png'

const Portofolio = () => {
  return (
    <div name="portofolio" className='bg-[#0a192f] text-[#ccd6f6] w-full md:h-screen'>
        
        {/* CONTAINER CONTENT PORTFOLIO*/}
        <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
            <div className='pb-8'>
                <h2 className='font-bold text-4xl inline border-b-4 '>Portfolio</h2>
                <p className='mt-5 font-bold text-xl text-slate-400'>// check out these awesome portfolio project i've been build for:</p>
            </div>

            {/* CONTAINER UNTUK KUMPULAN GAMBAR PROJECT PORTFOLIO */}
            <div  className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

                {/* CONTAINER UNTUK SETIAP/PER GAMBAR PROJECT */}
                <div style={{backgroundImage: `url(${movieImg})`}} className='flex justify-center items-center mx-auto content-div shadow-lg shadow-[#040c16] group container rounded-md'>

                    {/* CONTAINER UNTUK MENGHOVER GAMBAR PROJECT */}
                    <div className='opacity-0 group-hover:opacity-100 duration-300'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Movies Project
                        </span>
                        <div className='pt-8'>
                            <a href="">
                                <button className='font-bold text-black px-4 mx-auto flex rounded-lg bg-white py-3 text-center m-2 text-lg'>Code</button>
                            </a>
                        </div>
                    </div>

                </div>

                <div style={{backgroundImage: `url(${quizApp})`}} className='flex justify-center items-center mx-auto content-div shadow-lg shadow-[#040c16] group container rounded-md'>

                    {/* CONTAINER UNTUK MENGHOVER GAMBAR PROJECT */}
                    <div className='opacity-0 group-hover:opacity-100 duration-300'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Quiz Application
                        </span>
                        <div className='pt-8'>
                            <a href="">
                                <button className='font-bold text-black px-4 mx-auto flex rounded-lg bg-white py-3 text-center m-2 text-lg'>Code</button>
                            </a>
                        </div>
                    </div>

                </div>

                <div style={{backgroundImage: `url(${weather})`}} className='flex justify-center items-center mx-auto content-div shadow-lg shadow-[#040c16] group container rounded-md'>

                    {/* CONTAINER UNTUK MENGHOVER GAMBAR PROJECT */}
                    <div className='opacity-0 group-hover:opacity-100 duration-300'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Weather App
                        </span>
                        <div className='pt-8'>
                            <a href="">
                                <button className='font-bold text-black px-4 mx-auto flex rounded-lg bg-white py-3 text-center m-2 text-lg'>Code</button>
                            </a>
                        </div>
                    </div>

                </div>

                <div style={{backgroundImage: `url(${breakingnews})`}} className='flex justify-center items-center mx-auto content-div shadow-lg shadow-[#040c16] group container rounded-md'>

                    {/* CONTAINER UNTUK MENGHOVER GAMBAR PROJECT */}
                    <div className='opacity-0 group-hover:opacity-100 duration-300'>
                        <span className='text-2xl font-bold flex justify-center text-white tracking-wider'>
                            News App
                        </span>
                        <div className='pt-8'>
                            <a href="">
                                <button className='font-bold text-black px-4 mx-auto flex rounded-lg bg-white py-3 text-center m-2 text-lg'>Code</button>
                            </a>
                        </div>
                    </div>

                </div>

                <div style={{backgroundImage: `url(${companyprofile})`}} className='flex justify-center items-center mx-auto content-div shadow-lg shadow-[#040c16] group container rounded-md'>

                    {/* CONTAINER UNTUK MENGHOVER GAMBAR PROJECT */}
                    <div className='opacity-0 group-hover:opacity-100 duration-300'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Company Profile
                        </span>
                        <div className='pt-8'>
                            <a href="">
                                <button className='font-bold text-black flex px-4 mx-auto rounded-lg bg-white py-3 text-center m-2 text-lg'>Code</button>
                            </a>
                        </div>
                    </div>

                </div>

                <div style={{backgroundImage: `url(${travel})`}} className='flex justify-center items-center mx-auto content-div shadow-lg shadow-[#040c16] group container rounded-md'>

                    {/* CONTAINER UNTUK MENGHOVER GAMBAR PROJECT */}
                    <div className='opacity-0 group-hover:opacity-100 duration-300'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                           Website Travel
                        </span>
                        <div className='pt-8'>
                            <a href="">
                                <button className='font-bold text-black flex px-4 mx-auto rounded-lg bg-white py-3 text-center m-2 text-lg'>Code</button>
                            </a>
                        </div>
                    </div>

                </div>

            </div>

            
        </div>

    </div>
  )
}

export default Portofolio