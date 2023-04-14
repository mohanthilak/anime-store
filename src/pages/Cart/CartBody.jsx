import {useEffect, useState} from "react"
import {VscDiffAdded, VscDiffRemoved} from "react-icons/vsc"
import { Link } from "react-router-dom"
import useCart from '../../Hooks/useCart'
import useAuth from "../../Hooks/useAuth"
import useAxiosPrivate from "../../Hooks/useAxiosPrivate"


const CartBody = ({compo}) =>{
    const {cartItems,setCartItems} = useCart();
    const {auth} = useAuth()
    const axiosPrivate = useAxiosPrivate()
    const [cartId, setCartId] = useState("")
    const HandleQuantityUpdate = (type, id, quantity) => {
        if(type === "reduce" && quantity === 1){
            axiosPrivate.post("/cart/remove-product", {
                cartId, productId: id
            }).then(res=>{
                console.log(res.data)
                if(res.data.success)
                setCartItems(res.data.data.products)
            })
        }else{
            console.log(type)
            if(type === "reduce")  quantity -= 1;
            else quantity += 1;

            console.log(quantity)
            axiosPrivate.post("/cart/edit-product", {
                uid:auth?.uid, productElementId: id, quantity
            }).then(res=>{
                console.log(res.data)
                if(res.data.success){
                    setCartItems(res.data.data.products)
                }
            })
        }
    }

    useEffect(()=>{
        axiosPrivate.get(`/cart/current-cart/${auth.uid}`).then(res=>{
            console.log(res.data)
            if(res.data.success && res.data.data){
                console.log("$#$#$#$#$#$#$#$#$", res.data.data.products)
            setCartItems(res.data.data.products)
            setCartId(res.data.data._id)
        }else{
            setCartItems(null);
        }}).catch(e=>{
            console.log("Error while fetching current cart", e)
        })
    }, [])

    return (
        <div className='border-2 border-black'>
            <div className='p-2'>
                <h1 className=' text-lg font-semibold'>Cart Items</h1>
                <hr className='my-1   h-[3px] border:none text-black bg-black' />
                <div className='p-2 overflow-hidden'>
                    {cartItems ?.length >0 ? cartItems.map((el, i)=>(
                        <span key={i}>
                        <div className={`flex ${compo?"flex-col items-center gap-2": ""} w-[100%] justify-between my-4`}>
                                <div className='flex items-center gap-2'>
                                    <img className='h-28 w-28' src={el.image} alt="" />
                                    <div className=' text-sm'>
                                        <h1>{el.name}</h1>
                                        <h1>Size: {el.size}</h1>
                                        <h1>Quantity: {el.quantity}</h1>
                                        <h1>Price for 1: {el.price}</h1>
                                    </div>
                                </div>
                                <div className={`flex items-center gap-2 md:${compo?"gap-2":"gap-10"}`}>
                                    <div className='flex items-center gap-1'>
                                        <VscDiffRemoved onClick={(e)=>{
                                            e.preventDefault();
                                            HandleQuantityUpdate("reduce", el._id, el.quantity)
                                        }} size={20} />
                                        <h1>{el.quantity}</h1>
                                        <VscDiffAdded onClick={(e)=>{
                                            e.preventDefault();
                                            HandleQuantityUpdate("increase", el._id, el.quantity)
                                        }} size={20} />
                                    </div>
                                    <div>
                                        <h1>{el.quantity * el.price}</h1>
                                    </div>
                                </div>
                            </div>
                            <hr className='my-1 h-[3px] border:none text-black bg-gray-300'/>
                            </span>
                    )):(<div className="bg-red-600"></div>) }
                </div>
                {compo ? <div className='flex justify-center'>
                    <Link to="/cart">
                        <button className='border-2 border-black hover:bg-black hover:text-white px-2 py-1'>Place Order</button>
                    </Link>
                </div> : ""}
                
            </div>
        </div>
    )
}

export default CartBody