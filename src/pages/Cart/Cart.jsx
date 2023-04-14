import React, {useState} from 'react'
import CartBody from "./CartBody"
import {BiEdit} from "react-icons/bi"
import useAxiosPrivate from '../../Hooks/useAxiosPrivate'
import useAuth from '../../Hooks/useAuth'
import { Navigate } from "react-router-dom";
import useCart from '../../Hooks/useCart'

const Cart = () => {
    const {cartItems} = useCart();
    const [paymentOption, setPaymentOption] = useState(false);
    const axiosPrivate = useAxiosPrivate();
    const {auth} = useAuth();
    let total = 0
    
    cartItems?.forEach((e) => {
        total += e.quantity * e.price;
    });
    
    const handleSubmit = (e) =>{
        
        console.log(paymentOption)
        if(paymentOption === "cod"){
            axiosPrivate.post("/order/create", {
                custId: auth.uid,
                paymentType: paymentOption, 
            })
        }else if(paymentOption === "card"){
            <Navigate to="payment-gatway" />
        }  
    }

    return (
    <div className='px-6 md:px-12 md:mt-4 mb-4 bg-white'>
        <div className=''>
            <h1 className='text-2xl mb-1 font-semibold'>Cart</h1>
            <hr className=' my-1  w-36 h-[3px] border:none text-black bg-black' />
        </div>

        <div className='flex justify-center items-center flex-col md:flex-row gap-5 my-10'>
            <div className='border-2 border-black w-full md:w-1/2'>
                <div className='p-2'>
                    <h1 className=' text-lg font-semibold'>Bill Details</h1>
                    <hr className=' my-1   h-[3px] border:none text-black bg-black' />
                    <div className='m-4'>
                        <div className='flex justify-between'>
                            <h1>Cost of Products:</h1>
                            <h1>${total}</h1>
                        </div>
                        <div className='flex justify-between'>
                            <h1>Delivery:</h1>
                            <h1>$5</h1>
                        </div>
                        <div className='flex justify-between'>
                            <h1>Discount:</h1>
                            <h1>$10</h1>
                        </div>
                    <hr className=' my-1   h-[3px] border:none text-black bg-black' />
                        <div className='flex justify-between'>
                            <h1>Total:</h1>
                            <h1 >${total-5}</h1>
                        </div>
                    </div>
                    <div className=''>
                    <h1 className=' text-lg font-semibold'>Payment Options:</h1>
                    {/* <hr className=' my-1   h-[3px] border:none text-black bg-black' /> */}
                        <form  className='flex gap-5'>
                            <div className='flex gap-1'>
                                <input  onChange={(e)=>setPaymentOption(e.target.value)} type="radio" name="payment_option" id="payment" value="cod" />
                                <label htmlFor="payment">Cash on Delivery:</label>
                            </div>
                            <div className='flex gap-1'>
                                <input onChange={(e)=>setPaymentOption(e.target.value)} type="radio" name="payment_option" id="payment1" value="card" />
                                <label htmlFor="payment1">Card:</label>
                            </div>
                            <div className='flex gap-1'>
                                <input onChange={(e)=>setPaymentOption(e.target.value)} type="radio" name="payment_option" id="payment2" value="UPI" />
                                <label htmlFor="payment2">UPI</label>
                            </div>
                        </form>
                    </div>
                    <div className='flex justify-center mt-2'>
                        <button onClick={handleSubmit} className='border-2 border-black hover:bg-black hover:text-white px-2 py-1'>Place Order</button>
                    </div>
                </div>
            </div>
            <div className='w-full  md:w-1/2'>
                <div className='border-2 border-black'>
                    <div className='p-2'>
                        <div className='flex justify-between items-center'>
                            <h1 className=' text-lg font-semibold'>Delivery Details</h1>
                            <BiEdit size={22}/>
                        </div>
                        <hr className=' my-1   h-[3px] border:none text-black bg-black' />
                        <div className='text-sm'>
                            <h1 className=' text-base font-medium'>Address:</h1>
                            <h1>Mohan Thilak</h1>
                            <h1>#51, 3rd A Cross, Bhuvaneshwari Nagar, Sultanpalya Main Road, RT Nagar Post, Bangalore-560032</h1>
                            <h1>Bangalore, Karnataka</h1>
                            <h1>Pincode: 560032</h1>

                            <h1 className=' text-base font-medium mt-2'>Contact Details:</h1>
                            <h1>8321891409, 9954385712</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <CartBody />
        

    </div>
  )
}

export default Cart
