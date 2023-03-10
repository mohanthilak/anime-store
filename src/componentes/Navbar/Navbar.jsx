import React, { useState } from 'react'
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai"
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const handleNav = () =>{
    setShowNav(!showNav)
  }
  return (
    <nav className='flex justify-between items-center mx-6 md:mx-12 h-[9vh] border-b-2 border-x-2'>
        <div>
          <Link to="/">
              <h1 className=' text-xl p-4 w-full md:text-3xl font-bold decoration-2'><span>ANIME</span>STORE</h1>
          </Link>
        </div>
        <ul className='hidden md:flex md:text-lg md:font-light md:uppercase'>
            <li className='p-4 cursor-pointer hover:text-[#FF0000]'><Link to="signin">SignIn</Link></li>
            <li className='p-4 cursor-pointer hover:text-[#000000]'><Link to="signup">SignUp</Link></li>
        </ul>
        <div onClick={handleNav} className=" md:hidden mr-4">
          {showNav ?  <AiOutlineClose size={20} />: <AiOutlineMenu size={20} />}
        </div>
        <div className={showNav ? 'bg-white fixed right-0 top-16 w-[60%] border-l-4 border-b-4   ease-in-out duration-500 block md:hidden' : 'fixed right-[-100%]'}>
          <ul className='uppercase'>
              <li className='p-4 hover:text-[#FF0000] hover:border-b-2 hover:border-black'>About Us</li>
              <li className='p-4 hover:text-[#FF0000] hover:border-b-2 hover:border-black'>Contacts</li>
              <li className='p-4 hover:text-[#FF0000] hover:border-b-2 hover:border-black'><Link to="/signin">SignIn</Link></li>
              <li className='p-4 hover:text-[#FF0000] hover:border-b-2 hover:border-black'>SignUp</li>
          </ul>
        </div>
    </nav>
  )
}

export default Navbar