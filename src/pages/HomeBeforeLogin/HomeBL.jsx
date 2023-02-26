import React from 'react'
import { Link } from 'react-router-dom'
import {AiOutlineDown} from "react-icons/ai"

const HomeBL = () => {
  return (
    <div className='h-[91vh] border-x-2 flex justify-center md:justify-between mx-12 p-4'>

        <div className='text-center md:text-left w-1/2 self-center text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl font-bold '>
            <h1 className=' leading-tight'>JOIN US AND <br/> EXPERIENCE AN <br/> ANIME FANTASY PARK</h1>
            <div className='flex justify-around font-semibold pt-6 text-lg md:w-2/3 lg:w-1/3'>
                <Link to="/auth" className=' border-2 border-white px-2 py-1 hover:bg-black'>SIGNIN</Link>
                <Link to="/auth" className=' border-2 border-white px-2 py-1 hover:bg-black'>SIGNUP</Link>
            </div>
        </div>

        
        <div className='w-1/2 pt-4 px-10 hidden md:block md:flex flex-col justify-between'>

          <div className='group bg-white text-black border-2 border-black w-56 '>
            <div className='flex h-12 justify-between items-center border-b-2 group-hover:bg-pink-400 border-black px-4 font-semibold'>
              <h1>Merch</h1>
              <AiOutlineDown />
            </div>
            <div className=' hidden group-hover:block p-2'>
              <p>dsaf fasd afds  afda afda fa fdfaf daffa ff dafad afadafa fdsasdf  adssadfasfd afddasf asdfads asdfasd  adsfas  dsafaf adsfaf fadsa.</p>
            </div>
          </div>

          <div className='group bg-white text-black border-2 border-black w-56 absolute right-20 top-[40%] '>
          {/* <div className='group bg-white text-black border-2 border-black w-56 '> */}
            <div className='flex h-12 justify-between items-center border-b-2 group-hover:bg-yellow-300 border-black px-4 font-semibold'>
              <h1>Merch</h1>
              <AiOutlineDown />
            </div>
            <div className=' hidden group-hover:block p-2'>
              <p>dsaf fasd afds  afda afda fa fdfaf daffa ff dafad afadafa fdsasdf  adssadfasfd afddasf asdfads asdfasd  adsfas  dsafaf adsfaf fadsa.</p>
            </div>
          </div>

          <div className='group bg-white text-black border-2 border-black w-56 absolute top-[70%]'>
          {/* <div className='group bg-white text-black border-2 border-black w-56'> */}
            <div className='flex h-12 justify-between items-center border-b-2 group-hover:bg-blue-400 border-black px-4 font-semibold'>
              <h1>Merch</h1>
              <AiOutlineDown />
            </div>
            <div className='hidden group-hover:block p-2'>
              <p>dsaf fasd afds  afda afda fa fdfaf afddasf asdfads asdfasd  adsfas  dsafaf adsfaf fadsa.</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default HomeBL