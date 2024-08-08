import React from 'react'
import { useRouteError } from 'react-router-dom'

const Error = () => {
  

  return (
    <div className='bg-[#0a192f] font-bold w-full h-screen'>

      <div className='max-w-screen-lg w-full h-full flex flex-col items-center justify-center mx-auto text-[#ccd6f6] text-5xl'>
        <h1>Sorry</h1>
        <p className='my-6'>The page you are looking for is doesn't exist</p>
        <p className='mb-6'>Please input the path URL correctly!</p>
        <h2>404 Page not found!</h2>
      </div>

    </div>
  )
}

export default Error