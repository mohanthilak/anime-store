import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import Akame from "./Akame.jpg"
import useAuth from '../../Hooks/useAuth'
import useAxiosPrivate from '../../Hooks/useAxiosPrivate'

const LeftAdmin = () => {
    const axiosPrivate = useAxiosPrivate();
    const navigate = useNavigate();
    const {auth, setAuth} = useAuth();

    const HandleLogout = () => {
        axiosPrivate.post(`/user/logout/${auth.uid}`).then(res=>{
            console.log(res.data)
            if(res.data.success){
                console.log("sda")
                setAuth({});
                navigate("/")
            }
        })
    }

  return (
    <div className='bg-black text-white w-1/4 h-[91vh] flex flex-col justify-end'>
        <div>
            <Link to="/admin-panel/customers">
                <div className='border-t-2 border-red-500 h-10 flex justify-center items-center cursor-pointer hover:border-x-2'>
                    <h1 className='text-2xl font-semibold  '>Customer</h1>
                </div>
            </Link>
            <div className='border-t-2 border-red-500 h-10 flex justify-center items-center cursor-pointer hover:border-x-2'>
                <h1 className='text-2xl font-semibold  '>Orders</h1>
            </div>
            <Link to="/admin-panel/store-inventory">
                <div className='border-t-2 border-red-500 h-10 flex justify-center items-center cursor-pointer hover:border-x-2'>
                    <h1 className='text-2xl font-semibold  '>Products</h1>
                </div>
            </Link>
            <Link to="/admin-panel/quiz">
                <div className='border-t-2 border-red-500 h-10 flex justify-center items-center cursor-pointer hover:border-x-2'>
                    <h1 className='text-2xl font-semibold  '>Quiz</h1>
                </div>
            </Link>
            <Link to="/admin-panel/feedback-list">
                <div className='border-t-2 border-red-500 h-10 flex justify-center items-center cursor-pointer hover:border-x-2'>
                    <h1 className='text-2xl font-semibold  '>Feedback</h1>
                </div>
            </Link>
            <a href="http://localhost:8080/dashboard.php">
                <div className='border-t-2 border-red-500 h-10 flex justify-center items-center cursor-pointer hover:border-x-2'>
                    <h1 className='text-2xl font-semibold  '>Report</h1>
                </div>
            </a>
            <div>
                <img src={Akame} alt="" />
            </div>
            <div onClick={(e)=>HandleLogout()} className='border-t-2 border-red-500 h-10 flex justify-center items-center cursor-pointer hover:border-x-2'>
                <h1 className='text-2xl font-semibold  '>LogOut</h1>
            </div>
        </div>
    </div>
  )
}

export default LeftAdmin
