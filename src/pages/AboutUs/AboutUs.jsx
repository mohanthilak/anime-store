import React from 'react'
import Aanya from "./Aanya.jpg"
import deku from "./deku.jpg"
import naruto from "./naruto.jpg"

const AboutUs = () => {
  return (
    <div className=' my-10 flex flex-col justify-start'>
        <div >
            <h1 className='text-4xl font-bold'>About Us</h1>
            <hr className=' mt-2 w-48 h-1 border:none text-black bg-black' />
        </div>


        <div className='flex flex-col md:flex-row mt-4 mb-10'>
        
            <div className='md:w-1/3 my-2 p-5 flex flex-col items-center gap-4 '>
                <div>
                    <button className='bg-gray-600 text-white hover:bg-black text-2xl w-32 py-1 rounded-3xl'>Quizzes</button>
                </div>
                <div>
                    <h1 className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores possimus provident repellat blanditiis facilis vel sequi unde? Accusantium, est natus.</h1>
                </div>
                <div className='h-96 w-96'>
                    <img src={naruto} alt="" />
                </div>
            </div>
            <div className='md:w-1/3 h-[600px]  border-y-2 md:border-y-0 md:border-x-2 border-black my-2  p-5 flex flex-col items-center gap-4'>
                <div>
                    <button className='bg-gray-600 text-white hover:bg-black text-2xl w-32 py-1 rounded-3xl'>Merch</button>
                </div>
                <div>
                    <h1 className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores possimus provident repellat blanditiis facilis vel sequi unde? Accusantium, est natus.</h1>
                </div>
                <div className='h-96 w-96 '>
                    <img src={Aanya} className="" alt="" />
                </div>
            </div>
            <div className='flex md:w-1/3 my-2 p-5  flex-col items-center gap-4 '>
                <div className="">
                    <button className='bg-gray-600 text-white hover:bg-black text-2xl w-32 py-1 rounded-3xl'>Chat</button>
                </div>
                <div className=''>
                    <h1 className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores possimus provident repellat blanditiis facilis vel sequi unde? Accusantium, est natus.</h1>
                </div>
                <div>
                    <img className='h-96 w-96' src={deku}  alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutUs