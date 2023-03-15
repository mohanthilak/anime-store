import React, { useState } from 'react'
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai"
import { Link, useLocation } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Navbar = () => {
    const {auth} = useAuth()
    const location = useLocation();
  const path = location.pathname.split('/')[1];
  const [showNav, setShowNav] = useState(false);
  const handleNav = () =>{
    setShowNav(!showNav)
  }
  return (
    <nav className={`flex justify-between items-center px-6 md:px-12 h-[9vh] shadow-lg ${path === "admin-panel" ? "bg-black text-white":""}`}>
        <div>
          <Link to="/">
              <h1 className=' text-xl p-4 w-full md:text-3xl font-bold decoration-2'><span className='text-red-500'>ANIME</span>STORE</h1>
          </Link>
        </div>
        {auth?.accessToken ? <ul className='hidden md:flex md:text-lg md:font-light md:uppercase gap-8'>
            <li className='py-1 cursor-pointer hover:font-medium hover:border-b-2 hover:border-gray-600'><Link to="home">Home</Link></li>
            <li className='py-1 cursor-pointer hover:font-medium hover:border-b-2 hover:border-gray-600'><Link to="admin-panel">Admin</Link></li>
            <li className='py-1 cursor-pointer hover:font-medium hover:border-b-2 hover:border-gray-600'><Link to="quiz">Quiz</Link></li>
            <li className='py-1 cursor-pointer hover:font-medium hover:border-b-2 hover:border-gray-600'><Link to="store">Store</Link></li>
            <li className='py-1 cursor-pointer hover:font-medium hover:border-b-2 hover:border-gray-600'><Link to="#">Logout</Link></li>
        </ul> :
        <ul className='hidden md:flex md:text-lg md:font-light md:uppercase gap-8'>
            <li className='py-1 cursor-pointer hover:font-medium hover:border-b-2 hover:border-gray-600'><Link to="signin">SignIn</Link></li>
            <li className='py-1 cursor-pointer hover:font-medium hover:border-b-2 hover:border-gray-600'><Link to="signup">SignUp</Link></li>
        </ul>
        }
       
        <div onClick={handleNav} className=" md:hidden mr-4">
          {showNav ?  <AiOutlineClose size={20} />: <AiOutlineMenu size={20} />}
        </div>
        <div className={showNav ? ` fixed right-0  top-14 w-[60%] border-l-4 border-b-4 ${path === "admin-panel" ? "bg-black text-white":"bg-white"}  ease-in-out duration-500 block md:hidden` : 'fixed right-[-100%]'}>
            {auth?.accessToken ? <ul className='uppercase'>
            <Link to="home"><li className='p-4 hover:font-bold hover:border-b-2 hover:border-black'>Home</li></Link>
            <Link to="admin-panel"><li className='p-4 hover:font-bold hover:border-b-2 hover:border-black'>Admin</li></Link>
            <Link to="quiz"><li className='p-4 hover:font-bold hover:border-b-2 hover:border-black'>Quiz</li></Link>
            <Link to="store"><li className='p-4 hover:font-bold hover:border-b-2 hover:border-black'>Store</li></Link>
            <Link to="#"><li className='p-4 hover:font-bold hover:border-b-2 hover:border-black'>Logout</li></Link>
            </ul> : <ul className='uppercase'>
            <Link to="signin"><li className='p-4 hover:font-bold hover:border-b-2 hover:border-black'>SignIn</li></Link>
            <Link to="signup"><li className='p-4 hover:font-bold hover:border-b-2 hover:border-black'>SignUp</li></Link>
          </ul>}
          
          </div>
    </nav>
  )
}

export default Navbar