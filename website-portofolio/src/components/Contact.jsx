import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='bg-[#0a192f] w-full h-screen flex justify-center items-center p-4'>

        <form method="POST" action="https://getform.io/f/aolgkwmb" className='flex flex-col w-full max-w-[600px]'>
            <div className='pb-8'>
                <h2 className='border-b-4 text-4xl font-bold text-[#ccd6f6] inline'>Contact</h2>
                <p className='text-xl font-bold text-slate-400 py-6'>// Submit the form bellow to get in touch with me</p>
            </div>

            <div className='flex flex-col gap-8 max-w-screen-lg mx-auto w-full'>
                <input className='h-12 p-4 border rounded-md bg-[#ccd6f6] font-bold' type="text" placeholder='Name' name='name'/>
                <input className='h-12 p-4 border rounded-md bg-[#ccd6f6] font-bold' type="text" placeholder='Email' name='email'/>
                <textarea name="message" rows='10' className='h-72 p-4 border rounded-md font-bold bg-[#ccd6f6]' placeholder='Message' ></textarea>
            </div>

            <div className='my-9 text-center text-black bg-blue-200 border-black font-bold py-3 border rounded-md mx-48 hover:bg-transparent hover:border-white hover:text-white duration-300 cursor-pointer'>
                <button>Submit</button>
            </div>
        </form>      

    </div>
  )
}

export default Contact