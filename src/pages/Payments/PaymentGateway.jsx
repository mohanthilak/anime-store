import React, { useEffect } from 'react'
import bg from "./bg.jpg"
import cc2 from "./cc2.png"
import cc3 from "./cc3.png"
import useCart from '../../Hooks/useCart'

const PaymentGateway = () => {
    const {cartItems} = useCart();
    
    let total = 0
    
    useEffect(()=>{
        console.log(cartItems)
    }, [cartItems])

  return (
    <div style={{backgroundImage: `url(${bg})`}} className='bg-cover px-6 md:px-12  h-[91vh] flex justify-center items-center'>
        <div className='bg-gray-100 bg-opacity-80 w-[80vw] lg:w-[70vw]  p-5 rounded-3xl  border-4 border-black flex items-center  '>
            <div className='w-1/2'>
                <div>
                    <h1 className='font-bold text-4xl'>Payable Amount: Rs. {total}</h1>
                </div>
                <div className='my-5'>
                    <h1 className=' font-bold text-2xl'>Card Number</h1>
                    <p className='text-sm'>Enter the 16-digit card number on the card</p>
                    <input type="text" maxLength={16} minLength={16} placeholder='1223122343159851'  className='rounded-lg mt-2 px-1 w-[100%] tracking-wider  text-2xl border-2 border-gray-500' />
                </div>
                <div className='my-5 flex items-end gap-4'>
                    <div className=''>
                        <h1 className='font-bold text-2xl'>Expiry Date</h1>
                        <p className='text-sm'>Enter the 3 or 4 digit number on the card</p>
                    </div>
                    <input type="text" placeholder='12' maxLength={2} minLength={2} className='mt-2 w-32 px-1 tracking-wider rounded-lg text-2xl border-2 border-gray-500' />
                    <h1 className='text-4xl'>/</h1>
                    <input type="text" placeholder='26' maxLength={2} minLength={2} className='mt-2 w-32 px-1 tracking-wider rounded-lg text-2xl border-2 border-gray-500' />
                </div>
                <div className='my-5 flex items-end gap-4'>
                    <div className=''>
                        <h1 className='font-bold text-2xl'>CVV Number</h1>
                        <p className='text-sm'>Enter the 3 or 4 digit number on the card</p>
                    </div>
                    <input type="text" placeholder='122' maxLength={3} minLength={3} className='mt-2 w-[250px] px-1 tracking-wider rounded-lg text-2xl border-2 border-gray-500' />
                </div>
                <div className='flex justify-center mt-8  '>
                    <button className='px-20 w-[100%] py-1 rounded-lg border-2 text-xl font-semibold border-black bg-black text-white'>Pay</button>
                </div>
            </div>
            <div className='w-1/2 flex flex-col items-center gap-2'>
                <img className='w-80' src={cc3} />
                <img className='w-80' src={cc2} />
            </div>
        </div>
    </div>
  )
}

export default PaymentGateway