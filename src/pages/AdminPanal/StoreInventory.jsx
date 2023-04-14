import React, { useEffect, useState } from 'react'
import LeftAdmin from './LeftAdmin'
import useAxiosPrivate from '../../Hooks/useAxiosPrivate';
import {AiOutlinePlus} from "react-icons/ai"
import {Link} from "react-router-dom"
import {FaRegEdit} from "react-icons/fa"
const StoreInventoryComponent = () => {
    const [products, setProducts] = useState();
    const axiosPrivate = useAxiosPrivate();

    useEffect(()=>{
        axiosPrivate.get("/product/internal/all-products").then(res=>{
            console.log(res);
            if(res.data.success){
                setProducts(res.data.data)
            }
        }).catch(e=>{
            console.error(e)
        })
    },[])
    
    return (
        <div className='p-5 w-4/5'>
            <Link to="/admin-panel/add-product">
                <div className='flex items-center gap-2 w-44 bg-red-600 px-2 py-1 hover:border-2 border-black'>
                    <AiOutlinePlus size={20} />
                    <h1 className='text-xl font-semibold'>Add Products</h1>
                </div>
            </Link>

            <StoreTable products={products} />
        </div>
    )
}


const StoreTable = ({products}) => {
    return (
        <div className="mt-8 flex justify-center">
                <table className='border-2 border-black table-auto text-center'>
                    <thead className='border-b-2 border-black'> 
                        <tr>
                            <th className='px-4'>Image</th>
                            <th className='px-4 border-x-2 border-black'>Name</th>
                            <th className='px-4'>Sizes</th>
                            <th className='px-4 border-x-2 border-black'>Price</th>
                            <th className='px-4'>Stock</th>
                            <th className='px-4 border-x-2 border-black'>Display</th>
                            <th className='px-4'>Orders</th>
                            <th className='px-4 border-x-2 border-black'>Description</th>
                            <th className='px-4'>material</th>
                            <th className='px-4 border-x-2 border-black'>Categories</th>
                            <th className='px-4'>Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products && products.map((el, i)=> (
                            <tr key={i} className="text-center border-b-2 border-black text-sm">
                                <td className='px-4' > <img className='w-32 h-32' src={el.image}/> </td>
                                <td className='px-4 border-x-2 border-black' >{el.name}</td>
                                <td className='px-4' >{el.sizes.toString()}</td>
                                <td className='px-4 border-x-2 border-black' >{el.price}</td>
                                <td className='px-4' >{el.stock}</td>
                                <td className='px-4 border-x-2 border-black' >{el.display.toString()}</td>
                                <td className='px-4' >{el.orders}</td>
                                <td className='px-4 max-w-[290px]  border-x-2 border-black' >asfdihaihfaiu uhfadsiuhiaudshf i aiufdhiuhdfsi  aisfduhaifduh  ifauh dsihuaidush a iufhdi ha iadufhiah jadfjljkiartkjklj  oijdafoijoiertoij adskjlafdkjaljf ajfo iasjdoj odkfsa ljlfdj lksajf lajsf lkjlfs adfjl aksj</td>
                                <td className='px-4' >{el.material}</td>
                                <td className='px-4 border-x-2 border-black' >{el.category?.toString()}</td>
                                <td className='px-4' > <Link to={`/admin-panel/edit-product/${el._id}`}> <FaRegEdit /></Link></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
    )
}

const StoreInventory = () => {
  return (
    <div className='flex'>
        <LeftAdmin />
        <StoreInventoryComponent />
    </div>
  )
}

export default StoreInventory