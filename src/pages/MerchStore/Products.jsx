import React, {useState, useEffect} from 'react'
import DS from "./tshirt.jpg"
import {Link} from "react-router-dom"
import useAxiosPrivate from '../../Hooks/useAxiosPrivate'

const Products = () => {
    const axiosPrivate = useAxiosPrivate()
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        axiosPrivate.get('/product/display/all-products').then(res=>{
            if(res.data.success){
                console.log(res.data)
                setProducts(res.data.data);
            } 
        }).catch(e=>{
            console.log(e);
        })
    },[])

  return (
    <div className='px-6 md:px-12 md:mt-8 mb-4 bg-white '>
        <div className=''>
            <h1 className='text-2xl font-semibold'>Products</h1>
            <hr className=' mt-1 w-36 h-[3px] border:none text-black bg-black' />
      </div>

      <div className='flex flex-wrap justify-center gap-4 '>
        {products && products.map((item, i)=>(
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
        <div className=' w-56 my-6   p-5 border-b-2 border-black '>
            <div >
                <img style={{boxShadow: "0 2px 8px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%)"}} className=' h-72 w-48' src={DS} />
            </div>
            <div className='mt-2'>
                <h1>TShirt</h1>
                <div className='flex text-xs gap-2 '>
                    <p>Price: 400</p>
                    <p>Sizes: M|L|XL</p>
                </div>
                <div className='flex justify-between mt-2 '>
                <Link to={`/product/${1}`}>
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
        
      </div>
      
    </div>
  )
}

export default Products