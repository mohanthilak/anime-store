import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import useAuth from '../../Hooks/useAuth'
import sus from "./sus.png"

const HomeBL = () => {
  const {auth} = useAuth();


  return (
    <div className='h-[100vh] '>

      <div className='h-[65vh] flex flex-col justify-between items-center bg-black text-white w-full pt-10'>
          <div className='text-center'>
              <h1 className='font-bold text-3xl'>Welcome to <span className='text-red-500'>Anime</span>STORE</h1>
              <p className='p-5 text-lg text-red-300'>Purchase your favourite Merchandise, Chat with your friends and<br /> try out our Quiz portal!</p>
          </div>
          <div className=' overflow-hidden'>
            <img width={280}  src={sus} />
          </div>
      </div>
      <div className='h-[35vh]  w-full'>
          <div className='flex flex-col items-center justify-center h-[100%] gap-10 '>
            <div className='bg-red-500 rounded-full w-56 text-xl font-bold px-4 py-2 border-4 border-black text-center'>
                <Link to="/signup">CREATE ACCOUNT</Link>
            </div>
            <div className='bg-red-500 rounded-full w-56 text-xl font-bold px-4 py-2 border-4 border-black text-center'>
                <Link to="/signin">LOG IN</Link>
            </div>
          </div>
      </div>

        {/* <div className='text-center  self-center text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl font-bold '>
            <h1 className=' leading-tight'>JOIN US AND <br/> EXPERIENCE AN <br/> ANIME FANTASY PARK</h1>
            <div className='flex justify-around font-semibold pt-6 text-lg '>
                <Link to="/signin" className=' border-2 border-black px-2 py-1 hover:bg-black hover:text-white'>Login</Link>
                <Link to="/signup" className=' border-2 border-black px-2 py-1 hover:bg-black hover:text-white'>Create Account</Link>
            </div>
        </div> */}
    </div>
  )
}

export default HomeBL