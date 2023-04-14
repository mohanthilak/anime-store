import React from 'react'
import bg from "./bg.jpg"
import cc1 from "./cc1.png"
import cc2 from "./cc2.png"

const PaymentGateway = () => {
  return (
    <div style={{backgroundImage: `url(${bg})`}} className='bg-cover px-6 md:px-12  h-[91vh] flex justify-center items-center'>
        <div className='bg-gray-100 bg-opacity-80 w-[80vw] lg:w-[70vw]  p-5  border-4 border-black flex items-center  '>
            <div className='w-1/2'>
                <div>
                    <h1 className='font-bold text-4xl'>Payable Amount: $451</h1>
                </div>
                <div className='my-5'>
                    <h1 className=' font-bold text-2xl'>Card Number</h1>
                    <p className='text-sm'>Enter the 16-digit card number on the card</p>
                    <input type="number" placeholder='1223122343159851'  className='mt-2 px-1 w-[100%] tracking-wider  text-2xl border-2 border-gray-500' />
                </div>
                <div className='my-5 flex items-end gap-4'>
                    <div className=''>
                        <h1 className='font-medium text-2xl'>Expiry Date</h1>
                        <p className='text-sm'>Enter the 3 or 4 digit number on the card</p>
                    </div>
                    <input type="number" placeholder='12' className='mt-2 w-16 px-1 tracking-wider  text-2xl border-2 border-gray-500' />
                    <h1 className='text-lg'>/</h1>
                    <input type="number" placeholder='26' className='mt-2 w-16 px-1 tracking-wider  text-2xl border-2 border-gray-500' />
                </div>
                <div className='my-5 flex items-end gap-4'>
                    <div className=''>
                        <h1 className='font-medium text-2xl'>CVV Number</h1>
                        <p className='text-sm'>Enter the 3 or 4 digit number on the card</p>
                    </div>
                    <input type="number" placeholder='122' className='mt-2 w-20 px-1 tracking-wider  text-2xl border-2 border-gray-500' />
                </div>
                <div className='flex justify-center mt-8'>
                    <button className='px-10 py-1 border-2 text-xl font-semibold border-black hover:bg-black hover:text-white'>Pay</button>
                </div>
            </div>
            <div className='w-1/2 flex flex-col items-center gap-2'>
                <img className='w-80' src={cc1} />
                <img className='w-80' src={cc2} />
            </div>
        </div>
    </div>
  )
}

export default PaymentGateway