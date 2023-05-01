import React, {useState, useEffect} from 'react'
import DS from "../tshirt.jpg"
import { Rating } from 'react-simple-star-rating'
import {FaRupeeSign} from "react-icons/fa"
import CartBody from '../../Cart/CartBody'
import {Link, useParams} from "react-router-dom"
import useCart from '../../../Hooks/useCart'
import useAxiosPrivate from '../../../Hooks/useAxiosPrivate'
import useAuth from '../../../Hooks/useAuth'


const ViewProduct = () => {
    const axiosPrivate = useAxiosPrivate();
    const {auth} = useAuth()
    
    const [rating, setRating] = useState(4);
    const [sizes, setSizes] = useState([])
    const [product, setProduct] = useState({});
    const [recommendations, setRecommendation] = useState([])
    const {cartItems, setCartItems} = useCart();
    const [sizeS, setSizeS] = useState(false)
    const [sizeM, setSizeM] = useState(false)
    const [sizeL, setSizeL] = useState(false)

    const handleRating = (rate) => {
        setRating(rate)
    }

    const HandleAddToCart = () =>{
        console.log(sizes)
        for (let i = 0; i < sizes.length; i++) {
            updateCartInBackend(sizes[i]);
        }
        setSizes([])
        setSizeS(false)
        setSizeM(false)
        setSizeL(false)
    }


    const updateCartInBackend = async (size) =>{
        const buf =cartItems;
        const payload = {name: product.name, quantity:1,image: product.image,size, price: product.price, productId: product._id, totalAmount:product.price};
        console.log("Payload", payload)
        if(!buf){
            axiosPrivate.post("/cart/create", {
                products: [payload],
                uid: auth.uid,
                amount: payload.totalAmount
            }).then(res=>{
                console.log(res.data)
                if(res.data.success){
                    setCartItems([...cartItems, res.data.data.products]);
                }
            }).catch(e=>{
                console.log("Error while creating a cart", e);
            })
        }else{
            console.log("Inside else")
            let sameProductWithSameSizeAvailable = false;
            let sameProductAvailable = false;
            let index = 0;
            const bufArr= cartItems;
            for(let i=0; i<cartItems.length; i++){
                if(cartItems[i].productId === payload.productId){
                    if(cartItems[i].size === payload.size){
                        sameProductWithSameSizeAvailable = true;
                        const quantity = cartItems[i].quantity+1
                        axiosPrivate.post("/cart/edit-product",{
                            uid: auth.uid,
                            productElementId: cartItems[i]._id, quantity: quantity
                        }).then(res=>{
                            console.log("response", res);
                            if(res.data.success){
                                bufArr[i].quantity = quantity;
                                console.log("after updating", bufArr);
                                setCartItems([...bufArr]);
                            }
                        })
                        break;
                    }else{
                        sameProductAvailable = true;
                        index = i;
                    }
                }
            }
            if(!sameProductWithSameSizeAvailable){
                console.log("Executedddddddddddd")
                axiosPrivate.post("/cart/add-product", {
                    id: auth.uid,
                    ...payload
                }).then(res=>{
                    if(res.data.success){
                        setCartItems([...res.data.data.products])
                    }
                })
            }
            // axiosPrivate.post("/cart/add-product", {
            //     id: auth.uid,
            //     ...payload
            // }).then(res=>{
            //     if(res.data.success){

            //         setCartItems([...cartItems, payload]);
            //     }
            // })
        }
        console.log("cart items before",cartItems);
        
    }
    const {id} = useParams()
    useEffect(()=>{
        axiosPrivate.get(`/product/single/${id}`).then(res=>{
            if(res.data.success){
                console.log(res.data)
                setProduct(res.data.data);
                axiosPrivate.post("/product/display/products-category", {categories: res.data.data.category}).then(res=>{
                    console.log(res.data)
                    if(res.data.success){
                        setRecommendation([...res.data.data])
                    }
                }).catch(e=>{
                    console.log("Error while getting recommendation")
                })
            }
        }).catch(e=>{
            console.log(e)
        })

    }, [])

    const toggleSizeSmall = (e)=> {
        if(!sizeS) {
            if(!sizes.includes('S')){
                setSizes([...sizes, "S"])
            }
        }else{
            if(sizes.includes('S')){
                const arr = sizes;
                console.log(arr)
                arr.splice(arr.indexOf("S"),1)
                console.log(arr)
                setSizes([...arr])   
            }
        }
        setSizeS(!sizeS)
        e.preventDefault()
    }
    const toggleSizeMedium = (e)=> {
        if(!sizeM) {
            if(!sizes.includes('M')){
                setSizes([...sizes, "M"])
            }
        }else{
            if(sizes.includes('M')){
                const arr = sizes;
                console.log(arr)
                arr.splice(arr.indexOf("M"),1)
                console.log(arr)
                setSizes([...arr])            
            }
        }
        setSizeM(!sizeM)
        e.preventDefault()
    }
    const toggleSizeLarge = (e)=> {
        if(!sizeL) {
            if(!sizes.includes('L')){
                setSizes([...sizes, "L"])
            }
        }else{
            if(sizes.includes('L')){
                const arr = sizes;
                const index = arr.indexOf("L")
                console.log(arr, index)
                arr.splice(index, 1)
                console.log(arr)
                setSizes([...arr])
            }   
        }
        setSizeL(!sizeL)
        e.preventDefault()
    }

  return (
    <div className='px-6  md:px-8 mt-5'>
        <div className='flex gap-4 py-2 border-b-2  border-black'>
            {product &&  
            <div className='flex w-2/3'>
                <div className='px-2 border-r-2 border-black flex items-center max-h-[400px] '>
                    <img src={product.image} className=" max-w-[400px] max-h-[400px]" alt="" />
                </div>
                <div className='w-[55%]  h-[100%] p-5 flex flex-col max-h-[400px]'>
                    <div className=' flex gap-2'>
                        {product.category && product.category.map((el, i)=>(
                            <h1 key={i} className=' bg-slate-500 text-white px-2 py-1'>{el}</h1>

                        ))}
                        <h1 className=' bg-slate-500 text-white px-2 py-1'>Demon Slayer</h1>
                    </div>
                    
                    <div>
                        <h1 className='font-bold text-4xl'>{product.name}</h1>
                    </div>
                    <div className='my-7 flex items-center gap-5 font-semibold'>
                        <h1 className='text-2xl  flex items-center'>Price: <FaRupeeSign size={17} />{product.price} </h1>
                        <p className='text-xl cursor-pointer hover:underline font-normal'>Reviews: <Rating onClick={handleRating} emptyStyle={{ display: "flex" }} fillStyle={{ display: "-webkit-inline-box" }} size={20} allowHover={false} initialValue={rating}// Will remove the inline style if applied 
                        /> </p>
                    </div>
                    <div className='flex items-center'>
                        <h1>Sizes:</h1>
                        {product.sizes && (
                         <>
                            <button onClick={toggleSizeSmall}  className={`${product.sizes.includes('S')?"block":"hidden"} border-2 border-black w-10 py-1 mx-2 ${sizeS? "bg-black text-white": ""}  hover:bg-black hover:text-white`}>{'S'}</button>
                            <button onClick={toggleSizeMedium}  className={`${product.sizes.includes('M')?"block":"hidden"} border-2 border-black w-10 py-1 mx-2 ${sizeM? "bg-black text-white": ""} hover:bg-black hover:text-white`}>{"M"}</button>
                            <button onClick={toggleSizeLarge}  className={`${product.sizes.includes('L')?"block":"hidden"} border-2 border-black w-10 py-1 mx-2 ${sizeL? "bg-black text-white": ""} hover:bg-black hover:text-white`}>{"L"}</button>
                         </>
                        )}
                    </div>
                    <div className='flex gap-4 my-7'>
                        <Link to="/cart">
                            <button onClick={HandleAddToCart} className='bg-black text-white px-2 py-1'>Buy Now</button>
                        </Link>
                        <button onClick={HandleAddToCart} className='bg-black text-white px-2 py-1'>Add to Cart</button>
                    </div>
                    <div>
                        <h1><span className='text-lg '>Description:</span> {product.description}</h1>
                    </div>
                </div>
            </div>}
            <div className='sm:w-1/3  sm:flex sm:justify-end hidden sm:h-full'>
                <CartBody compo={true} />
            </div>
            
        </div>

        <div>
            <div className=''>
                <h1 className='text-2xl mb-1 font-semibold'>Recommendation</h1>
                <hr className=' my-1  w-56 h-[3px] border:none text-black bg-black' />
            </div>
            <div >
                <div className='flex w-[100%] flex-wrap'>
                    {recommendations && recommendations.map((item, i)=>(
                        <div key={i}  className=' w-56 my-6   p-5 border-b-2 border-black '>
                            {/* <h1>{item._id}</h1> */}
                            <div >
                                <img style={{boxShadow: "0 2px 8px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%)"}} className=' h-72 w-48' src={item.image} />
                            </div>
                            <div className='mt-2'>
                                <h1>{item.name}</h1>
                                <div className='flex text-xs gap-2 '>
                                    <p>Price: {item.price}</p>
                                    <p>Sizes: {item.sizes.map((el,j)=>(<span key={j}>{el} {j ==item.sizes.length-1 ? "": "|"}</span>))}</p>
                                </div>
                                <div className='flex justify-between mt-2 '>
                                    <Link to={`/product/${item._id}`}>
                                    <div className='px-4 py-1 cursor-pointer border-2 border-black'>
                                        <h1>view</h1>
                                    </div>
                                    </Link>
                                    <div className='px-2 py-1 bg-blue-500 cursor-pointer'>
                                        <h1>Add to Cart</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    {/* <div c */}
                </div>
            </div>
        </div>
    </div>
  )
}

export default ViewProduct