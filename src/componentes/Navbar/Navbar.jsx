import React, { useState } from 'react'
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai"
const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const handleNav = () =>{
    setShowNav(!showNav)
  }
  return (
    <nav className='flex justify-between items-center mx-12 h-[9vh] border-b-2 border-x-2'>
        <div>
            <h1 className=' text-xl p-4 w-full md:text-3xl font-bold decoration-2'>ANIMESTORE</h1>
        </div>
        <ul className='hidden md:flex md:text-lg md:font-light md:uppercase'>
            <li className='p-4 cursor-pointer hover:text-[#FF0000]'>SignIn</li>
            <li className='p-4 cursor-pointer hover:text-[#000000]'>SignUp</li>
        </ul>
        {/* <div onClick={handleNav} className=" md:hidden">
          {showNav ?  <AiOutlineClose size={20} />: <AiOutlineMenu size={20} />}
        </div>
        <div className={showNav ? 'bg-white fixed right-0 top-16 w-[60%] border-l-4 border-b-4 border-solid border-red-300 ease-in-out duration-500 block md:hidden' : 'fixed right-[-100%]'}>
          <ul className='uppercase'>
              <li className='p-4 hover:text-[#FF0000] hover:border-b-2 border-red-300'>About Us</li>
              <li className='p-4 hover:text-[#FF0000] hover:border-b-2 border-red-300'>Contacts</li>
              <li className='p-4 hover:text-[#FF0000] hover:border-b-2 border-red-300'>SignIn</li>
              <li className='p-4 hover:text-[#FF0000] hover:border-b-2 border-red-300'>SignUp</li>
          </ul>
        </div> */}
    </nav>
  )
}

export default Navbar