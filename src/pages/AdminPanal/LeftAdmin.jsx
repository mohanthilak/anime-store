import React from 'react'
import { Link } from 'react-router-dom'
import Akame from "./Akame.jpg"

const LeftAdmin = () => {
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
            <Link to="/admin-panel/add-product">
                <div className='border-t-2 border-red-500 h-10 flex justify-center items-center cursor-pointer hover:border-x-2'>
                    <h1 className='text-2xl font-semibold  '>Products</h1>
                </div>
            </Link>
            <Link to="/admin-panel/quiz">
                <div className='border-t-2 border-red-500 h-10 flex justify-center items-center cursor-pointer hover:border-x-2'>
                    <h1 className='text-2xl font-semibold  '>Quiz</h1>
                </div>
            </Link>
            <Link to="/feedback">
                <div className='border-t-2 border-red-500 h-10 flex justify-center items-center cursor-pointer hover:border-x-2'>
                    <h1 className='text-2xl font-semibold  '>Feedback</h1>
                </div>
            </Link>
            <Link to="/admin-panel">
                <div className='border-t-2 border-red-500 h-10 flex justify-center items-center cursor-pointer hover:border-x-2'>
                    <h1 className='text-2xl font-semibold  '>Report</h1>
                </div>
            </Link>
            <div>
                <img src={Akame} alt="" />
            </div>
            <div className='border-t-2 border-red-500 h-10 flex justify-center items-center cursor-pointer hover:border-x-2'>
                <h1 className='text-2xl font-semibold  '>LogOut</h1>
            </div>
        </div>
    </div>
  )
}

export default LeftAdmin