import React, { useEffect, useState } from 'react'
import Gojo  from './userhome.png'
import useAuth from '../../Hooks/useAuth'
import useAxiosPrivate from '../../Hooks/useAxiosPrivate'

const LandingPage = () => {
    const axiosPrivate = useAxiosPrivate() 
    const [secretMessage, setSecretMessage] = useState('')
    const {auth} = useAuth();

    // useEffect(()=>{
    //     let isMounted = true;
    //     const controller = new AbortController();
    //     const getSecretMessage = async () => {
    //         try{
    //             const response = await axiosPrivate.get('/user/protected', {
    //                 signal: controller.signal
    //             })
    //             console.log(response);
    //             setSecretMessage(response.data.message)

    //         }catch(e){
    //             console.error(e);
    //         }
    //     }
    //     getSecretMessage()
    //     return () =>{
    //          isMounted = false;
    //          controller.abort();
    //     }
    // }, [])

  return (
    <div className='h-[82vh] lg:h-[60] xl:h-[70vh] flex flex-col md:flex-row items-center '>
        {/* Left side */}
        <div className='self-center md:self-end md:w-1/2'>
            <div className='text-5xl text-center md:text-left md:text-6xl lg:text-7xl 2xl:text-8xl font-bold'>
                <h1>BUY MERCH,</h1>
                <h1>ATTEMPT QUIZ,</h1>
                <h1>& CHAT WITH FRIENDS</h1>
            </div>
            <div className='flex lg:w-2/3 justify-between mt-2 text-xl'>
                <div className='hover:bg-black hover:text-white px-4 py-2 cursor-pointer'>
                    <button>ABOUT US</button>
                </div>
                <div className='hover:bg-black hover:text-white px-4 py-2 cursor-pointer'>
                    <button>TERMS & CONDITIONS</button>
                </div>
            </div>
        </div>
        {/* Right Side */}
        <div className='self-center relative left-20 md:self-end md:w-1/2 md:flex md:justify-end'>
            <img src={Gojo} />
        </div>
    </div>
  )
}

export default LandingPage