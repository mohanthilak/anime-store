import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import {AiOutlineDown} from "react-icons/ai"
import useAuth from '../../Hooks/useAuth'
import useAxiosPrivate from '../../Hooks/useAxiosPrivate'

const HomeBL = () => {
  const {auth} = useAuth();
  const axiosPrivate = useAxiosPrivate() 


  const [secretMessage, setSecretMessage] = useState('')
  useEffect(()=>{
    // axiosPrivate.get('/user/clear-cookies');
    let isMounted = true;
    const controller = new AbortController();
    const getSecretMessage = async () => {
      try{
        const response = await axiosPrivate.get('/user/protected', {
          signal: controller.signal
        })
        console.log(response);
        setSecretMessage(response.data.message)
        console.log("auth:",auth)

      }catch(e){
          console.error(e);
      }
    }
    getSecretMessage()
    return () =>{
         isMounted = false;
         controller.abort();
    }
  }, [])


  return (
    <div className='h-[91vh] mx-6 border-gray-600 border-x-2 flex justify-center  md:mx-12 p-4'>

        <div className='text-center  self-center text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl font-bold '>
            <h1 className=' leading-tight'>JOIN US AND <br/> EXPERIENCE AN <br/> ANIME FANTASY PARK</h1>
            <div className='flex justify-around font-semibold pt-6 text-lg '>
                <Link to="/signin" className=' border-2 border-black px-2 py-1 hover:bg-black hover:text-white'>Login</Link>
                <Link to="/signup" className=' border-2 border-black px-2 py-1 hover:bg-black hover:text-white'>Create Account</Link>
            </div>
        </div>

        
        {/* <div className='w-1/2 pt-4 px-10 hidden md:block md:flex flex-col justify-between'> */}

          {/* <div className='group bg-white text-black border-2  border-black w-56 '>
            <div className='flex h-12 justify-between items-center bg-pink-400 group-hover:border-b-2 border-black px-4 font-semibold'>
              <h1>Buy Merch</h1>
              <AiOutlineDown />
            </div>
            <div className=' hidden group-hover:block p-2'>
              <p>dsaf fasd afds  afda afda fa fdfaf daffa ff dafad afadafa fdsasdf  adssadfasfd afddasf asdfads asdfasd  adsfas  dsafaf adsfaf fadsa.</p>
            </div>
          </div> */}

          {/* <div className='group bg-white text-black border-2 border-black w-56 absolute right-20 top-[43%] '>
            <div className='flex h-12 justify-between items-center group-hover:border-b-2 bg-yellow-300 border-black px-4 font-semibold'>
              <h1>Take Anime Quiz</h1>
              <AiOutlineDown />
            </div>
            <div className=' hidden group-hover:block p-2'>
              <p>dsaf fasd afds  afda afda fa fdfaf daffa ff dafad afadafa fdsasdf  adssadfasfd afddasf asdfads asdfasd  adsfas  dsafaf adsfaf fadsa.</p>
            </div>
          </div> */}

          {/* <div className='group bg-white text-black border-2 border-black w-56 absolute top-[73%]'>

            <div className='flex h-12 justify-between items-center group-hover:border-b-2 bg-blue-400 border-black px-4 font-semibold'>
              <h1>Chat With Friends</h1>
              <AiOutlineDown />
            </div>
            <div className='hidden group-hover:block p-2'>
              <p>dsaf fasd afds  afda afda fa fdfaf afddasf asdfads asdfasd  adsfas  dsafaf adsfaf fadsa.</p>
            </div>
          </div> */}
        {/* </div> */}
    </div>
  )
}

export default HomeBL