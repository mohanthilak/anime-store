import React, { useEffect, useState } from 'react'
import naruto  from './naruto.jpg'
import useAuth from '../../Hooks/useAuth'
import useAxiosPrivate from '../../Hooks/useAxiosPrivate'
import {Link} from "react-router-dom"

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
    <div className='flex flex-col md:flex-row items-center  md:mt-0 h-[91vh]'>
        {/* Left side */}
        <div className=' md:w-1/2 h-1/3 md:h-fit   mt-5 md:mt-0 '>
            <div className='text-5xl text-center md:text-left md:text-6xl lg:text-7xl 2xl:text-8xl font-bold'>
                <h1>BUY MERCH,</h1>
                <h1>ATTEMPT QUIZ,</h1>
                <h1>& CHAT WITH FRIENDS</h1>
            </div>
            <div className='flex lg:w-2/3 justify-between mt-2 text-xl'>
                <Link to="/aboutus">
                    <div className='hover:bg-black hover:text-white px-4 py-2 cursor-pointer'>
                        <button>ABOUT US</button>
                    </div>
                </Link>
                <Link to="/tandc">
                    <div className='hover:bg-black hover:text-white px-4 py-2 cursor-pointer'>
                        <button>TERMS & CONDITIONS</button>
                    </div>
                </Link>
                <Link to="/faq">
                    <div className='hover:bg-black hover:text-white px-4 py-2 cursor-pointer'>
                        <button>FAQ</button>
                    </div>
                </Link>
            </div>
        </div>
        {/* Right Side */}
        <div className='self-center md:self-end h-2/3 flex items-end md:justify-end md:w-1/2 '>
            <img className="h-[42vh] md:h-[80vh]" src={naruto} />
        </div>
    </div>
  )
}

export default LandingPage