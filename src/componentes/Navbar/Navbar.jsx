import React, { useState } from 'react'
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai"
import { Link, useLocation } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import useAxiosPrivate  from "../../Hooks/useAxiosPrivate"

const Navbar = () => {
    const axiosPrivate = useAxiosPrivate()
    const {auth, setAuth} = useAuth()
    const location = useLocation();
  const path = location.pathname.split('/')[1];
  const [showNav, setShowNav] = useState(false);
  const handleNav = () =>{
    setShowNav(!showNav)
  }
  if(path === "/admin-panel/report" || path === "/admin-panel/%3CEmbed%20Url%3E" ||  location.pathname === "/"){
    return;
  } 
  const HandleLogout = () => {
    axiosPrivate.post(`/user/logout/${auth.uid}`).then(res=>{
        console.log(res.data)
        if(res.data.success){
            console.log("sda")
            setAuth({});
        }
    })
  }
  return (
    <nav className={`z-50 flex justify-between bg-black text-white items-center px-6 md:px-12 h-[9vh] shadow-lg ${path === "admin-panel" ? "bg-black text-white":""}`}>
        <div>
          <Link to={auth?.accessToken ? "/home": "/"}>
              <h1 className=' text-xl p-4 w-full md:text-3xl font-bold decoration-2'><span className='text-red-500'>ANIME</span>STORE</h1>
          </Link>
        </div>
        {auth?.accessToken ? <ul className={`${path === "admin-panel" ? "hidden":"hidden  md:flex md:text-lg md:font-light md:uppercase gap-8"}`}>
            {/* <li className='py-1 cursor-pointer hover:font-medium hover:border-b-2 hover:border-gray-600'><Link to="home">Home</Link></li> */}
            {auth.role === 'user'? <>
              <li className='py-1 cursor-pointer hover:font-medium hover:border-b-2 hover:border-gray-600'><Link to="feedback">Feedback</Link></li>
              <li className='py-1 cursor-pointer hover:font-medium hover:border-b-2 hover:border-gray-600'><Link to="quiz">Quiz</Link></li>
              <li className='py-1 cursor-pointer hover:font-medium hover:border-b-2 hover:border-gray-600'><Link to="chat">Chat</Link></li>
              <li className='py-1 cursor-pointer hover:font-medium hover:border-b-2 hover:border-gray-600'><Link to="store">Store</Link></li>
              <li className='py-1 cursor-pointer hover:font-medium hover:border-b-2 hover:border-gray-600' onClick={HandleLogout}>Logout </li>
            </> :<>
                <li className='py-1 cursor-pointer hover:font-medium hover:border-b-2 hover:border-gray-600'><Link to="/admin-panel">Admin</Link></li>
                <li className='py-1 cursor-pointer hover:font-medium hover:border-b-2 hover:border-gray-600' onClick={HandleLogout}>Logout </li>
            </>
            }
        </ul> :
        <ul className='hidden md:flex md:text-lg md:font-light md:uppercase gap-8'>
            <li className='py-1 cursor-pointer hover:font-medium hover:border-b-2 hover:border-gray-600'><Link to="signin">Login</Link></li>
            <li className='py-1 cursor-pointer hover:font-medium hover:border-b-2 hover:border-gray-600'><Link to="signup">Create Account</Link></li>
        </ul>
        }
       
        <div onClick={handleNav} className=" md:hidden mr-4">
          {showNav ?  <AiOutlineClose size={20} />: <AiOutlineMenu size={20} />}
        </div>
        <div className={showNav ? ` fixed right-0  top-14 w-[60%] border-l-4 border-b-4 ${path === "admin-panel" ? "hidden bg-black text-white":"block bg-white text-black"}  ease-in-out duration-500  md:hidden` : 'fixed right-[-100%]'}>
            {auth?.accessToken ? <ul className='uppercase'>
            <Link to="feedback"><li className='p-4 hover:font-bold hover:border-b-2 hover:border-black'>Feedback</li></Link>
            <Link to="chat"><li className='p-4 hover:font-bold hover:border-b-2 hover:border-black'>Chat</li></Link>
            <Link to="quiz"><li className='p-4 hover:font-bold hover:border-b-2 hover:border-black'>Quiz</li></Link>
            <Link to="store"><li className='p-4 hover:font-bold hover:border-b-2 hover:border-black'>Store</li></Link>
            <li className='p-4 hover:font-bold hover:border-b-2 hover:border-black cursor-pointer' onClick={HandleLogout}>Logout</li>
            </ul> : <ul className='uppercase'>
            <Link to="signin"><li className='p-4 hover:font-bold hover:border-b-2 hover:border-black'>Login</li></Link>
            <Link to="signup"><li className='p-4 hover:font-bold hover:border-b-2 hover:border-black'>Create Account</li></Link>
          </ul>}
          
          </div>
    </nav>
  )
}

export default Navbar