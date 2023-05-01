import React from 'react'
import Aanya from "./Aanya.jpg"
import deku from "./deku.jpg"
import naruto from "./naruto.jpg"
import { Link } from 'react-router-dom'

const AboutUs = ({aboutUsRef}) => {
  return (
    <div className=' h-screen flex flex-col justify-start'>
        <div >
            <h1 className='text-4xl font-bold mt-4'>About Us</h1>
            <hr className=' mt-2 w-48 h-1 border:none text-black bg-black' />
        </div>


        <div className='flex flex-col md:flex-row mt-16 '>
        
            <div className='md:w-1/3 my-2 md:my-0 md:justify-end px-5 flex flex-col items-center gap-4 '>
                <div>
                    <Link to="/quiz">
                        <button className='bg-gray-600 text-white hover:bg-black text-3xl w-32 py-1 rounded-3xl'>Quizzes</button>
                    </Link>
                </div>
                <div>
                    <h1 className='text-center text-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit  Maiores possimus provident repellat blanditiis facilis vel sequi unde? Accusantium, est natus.</h1>
                </div>
                <div className='h-96 w-96'>
                    <img src={naruto} alt="" />
                </div>
            </div>
            <div className='md:w-1/3  border-y-2 md:border-y-0 md:border-x-2 border-black my-2 md:my-0 md:justify-end px-5 flex flex-col items-center gap-4'>
                <div className=''>
                    <Link to="/store">
                        <button className='bg-gray-600 text-white hover:bg-black text-3xl w-32 py-1 rounded-3xl'>Merch</button>
                    </Link>
                </div>
                <div>
                    <h1 className='text-center text-2xl'> adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores possimus provident repellat blanditiis facilis vel sequi unde? Accusantium, est natus.</h1>
                </div>
                <div >
                    <img src={Aanya} className='h-96 w-96'  alt="" />
                </div>
            </div>
            <div className='flex md:w-1/3 my-2 md:my-0 md:justify-end px-5  flex-col items-center gap-4 '>
                <div className="">
                    <Link to="/chat">
                        <button className='bg-gray-600 text-white hover:bg-black text-3xl w-32 py-1 rounded-3xl'>Chat</button>
                    </Link>
                </div>
                <div className=''>
                    <h1 className='text-center text-2xl'>Lorem ipsum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores possimus provident repellat blanditiis facilis vel sequi unde? Accusantium, est natus.</h1>
                </div>
                <div ref={aboutUsRef}>
                    <img className='h-96 w-96' src={deku}  alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutUs