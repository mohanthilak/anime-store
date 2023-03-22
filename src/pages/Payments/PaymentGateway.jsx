import React from 'react'

const PaymentGateway = () => {
  return (
    <div className='px-6 md:px-12 md:mt-4 mb-4 h-[70vh] flex justify-center items-center'>
        <div className='bg-pink w-[80vw] md:w-[70vw] lg:w-[60vw] xl:w-[40vw] p-2  border-4 border-black flex flex-col justify-center '>
            <div>
                <h1 className='font-semibold'>Payable Amount: $451</h1>
            </div>
            <div className='my-4'>
                <h1 className='font-medium'>Card Number</h1>
                <p className='text-xs'>Enter the 16-digit card number on the card</p>
                <input type="number" placeholder='1223122343159851'  className='mt-2 px-1 w-48 text-lg border-2 border-gray-500' />
            </div>
            <div className='my-4 flex items-end gap-4'>
                <div className=''>
                    <h1 className='font-medium'>Expiry Date</h1>
                    <p className='text-xs'>Enter the 3 or 4 digit number on the card</p>
                </div>
                <input type="number" placeholder='12' className='mt-2 w-12 px-1 text-lg border-2 border-gray-500' />
                <h1 className='text-lg'>/</h1>
                <input type="number" placeholder='26' className='mt-2 w-12 px-1 text-lg border-2 border-gray-500' />
            </div>
            <div className='my-4 flex items-end gap-4'>
                <div className=''>
                    <h1 className='font-medium'>CVV Number</h1>
                    <p className='text-xs'>Enter the 3 or 4 digit number on the card</p>
                </div>
                <input type="number" placeholder='122' className='mt-2 w-16 px-1 text-lg border-2 border-gray-500' />
            </div>
            <div className='flex justify-center mt-8'>
                <button className='px-10 py-1 border-2 border-black hover:bg-black hover:text-white'>Pay</button>
            </div>
        </div>
    </div>
  )
}

export default PaymentGateway