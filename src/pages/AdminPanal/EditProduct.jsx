import React, { useEffect, useState } from 'react'
import LeftAdmin from './LeftAdmin'
import useAxiosPrivate from '../../Hooks/useAxiosPrivate'
import { useParams } from 'react-router-dom'

const EditProductComponent = ({}) => {
    const axiosPrivate = useAxiosPrivate();
    const {productId} = useParams()
    const [name, setName] = useState("");
    const [size, setSize] = useState([]);
    const [image, setImage] = useState("");
    const [price, setPrice] = useState(0);
    const [stock, setStock] = useState(0);
    const [description, setDescription] = useState("");
    const [material, setMaterial] = useState("");
    const [categories, setCategories] = useState([]);

    const HandleSizeSelect= (e)=>{
        if(e.target.checked){
            setSize([...size, e.target.value]);
        }else{
            const arr = size;
            const index = arr.indexOf(e.target.value);
            if(index !== -1){
                arr.splice(index, 1);
                setSize(arr);
                console.log("else part", arr, index, size)
            }
        }
    }

    useEffect(()=>{
        axiosPrivate.get(`/product/single/${productId}`).then(res=>{
            console.log(res);
            if(res.data.success){
                let product = res.data.data
                setName(product.name);
                setPrice(product.price);
                setStock(product.stock)
                setMaterial(product.material)
                setDescription(product.description)
                // setSize(product.sizes)
                setCategories(product.category)
            }
        }).catch(e=> {
            console.error(e);
        })
    }, [])

    const HandleCategorySelect= (e)=>{
        if(e.target.checked){
            setCategories([...categories, e.target.value]);
        }else{
            const arr = categories;
            const index = arr.indexOf(e.target.value);
            if(index !== -1){
                arr.splice(index, 1);
                setCategories(arr);
            }
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(name,image,price,size,categories,stock,material, description)
        // if(name && image && price && size && categories && stock && material && description){
            const formData = new FormData();
            formData.append('name', name)
            formData.append('price', price)
            formData.append('stock', stock)
            formData.append('material', material)
            formData.append('description', description)
            formData.append('image', image)
            size.forEach((s, i)=>{
                formData.append(`sizes${i}`, s)
            })
            categories.forEach((c, i)=>{
                formData.append(`category${i}`, c);
            })
            console.log(formData)
            axiosPrivate.post(`/product/edit-single/${productId}`, formData).then(res=>{
                if(res.data.success){
                    console.log(res.data);
                    setCategories([])
                    setSize([])
                }
            })
        // }
    }
    
    return (
        <div className='p-2 w-4/5'>
            <div className=''>
                <h1 className='text-xl font-semibold'>Edit Product</h1>
                <hr className='my-1 w-32 h-[3px] bg-black' />
            </div>
            <div className='border-2 border-black h-[82vh] overflow-y-scroll mt-4'>
                <form className='flex flex-col gap-3 p-2'>
                    <div className=''>
                        <label htmlFor="name">Product Name:</label>
                        <input type="text" id="name" value={name} onChange={(e)=>{setName(e.target.value)}} className='bg-gray-100 border-2 border-gray-400 w-full h-8 px-1' />
                    </div>
                    <hr className='h-[2px] bg-gray-400' />
                    <div className='flex gap-1 items center'>
                        <label htmlFor="image">Image</label>
                        <input type="file" onChange={(e) => setImage(e.target.files[0])} className='' />
                    </div>
                    <hr className='h-[2px] bg-gray-400' />
                    <div className=''>
                        <div>Size:</div>
                        <div className='flex gap-4'>
                            <div className='flex gap-1 items-center'>
                                <label htmlFor='S'>S</label>
                                <input type="checkbox" onChange={HandleSizeSelect} id="S" value="S" />
                            </div>
                            <div className='flex gap-1 items-center'>
                                <label htmlFor='M'>M</label>
                                <input type="checkbox" id="M" value="M" onChange={HandleSizeSelect} />
                            </div>
                            <div className='flex gap-1 items-center'>
                                <label htmlFor='L'>L</label>
                                <input type="checkbox" id="L" value="L" onChange={HandleSizeSelect}/>
                            </div>
                        </div>
                    </div>
                    <hr className='h-[2px] bg-gray-400' />
                    <div>
                        <label htmlFor="price">Price:</label>
                        <input type="number" id="price" value={price} onChange={(e)=>{setPrice(e.target.value)}} className='bg-gray-100 border-2 border-gray-400 ml-3 h-8 px-1' />
                    </div>
                    <hr className='h-[2px] bg-gray-400' />
                    <div>
                        <label htmlFor="stock">Stock:</label>
                        <input type="number" id="stock" value={stock} onChange={(e)=>{setStock(e.target.value)}} className='bg-gray-100 border-2 border-gray-400 ml-2 h-8 px-1' />
                    </div>
                    <hr className='h-[2px] bg-gray-400' />
                    <div>
                        <label htmlFor="description">Description</label>
                        <input type="text" id="description" value={description} onChange={(e)=>{setDescription(e.target.value)}} className='bg-gray-100 border-2 border-gray-400 w-full h-8 px-1' />
                    </div>
                    <hr className='h-[2px] bg-gray-400' />
                    <div>
                        <label htmlFor="material">Material</label>
                        <input type="text" id="material" value={material} onChange={(e)=>{setMaterial(e.target.value)}} className='bg-gray-100 border-2 border-gray-400 w-full h-8 px-1' />
                    </div>
                    <hr className='h-[2px] bg-gray-400' />
                    <div>
                        <div>Category:</div>
                        <div className='flex flex-wrap gap-4'>
                            <div className='flex gap-1 items-center'>
                                <input type="checkbox" onChange={HandleCategorySelect} id="naruto" value="naruto" />
                                <label htmlFor='naruto'>naruto</label>
                            </div>
                            <div className='flex gap-1 items-center'>
                                <input type="checkbox" onChange={HandleCategorySelect} id="demon-slayer" value="demon-slayer" />
                                <label htmlFor='demon-slayer'>demon-slayer</label>
                            </div>
                            <div className='flex gap-1 items-center'>
                                <input type="checkbox" onChange={HandleCategorySelect} id="Dragon Ball Z" value="Dragon Ball Z" />
                                <label htmlFor='Dragon Ball Z'>Dragon Ball Z</label>
                            </div>
                            <div className='flex gap-1 items-center'>
                                <input type="checkbox" onChange={HandleCategorySelect} id="Jujutsu Kaisen" value="Jujutsu Kaisen" />
                                <label htmlFor='Jujutsu Kaisen'>Jujutsu Kaisen</label>
                            </div>
                            <div className='flex gap-1 items-center'>
                                <input type="checkbox" onChange={HandleCategorySelect} id="One piece" value="One piece" />
                                <label htmlFor='One piece'>One piece</label>
                            </div>
                            <div className='flex gap-1 items-center'>
                                <input type="checkbox" onChange={HandleCategorySelect} id="Bungo Stray Dogs" value="Bungo Stray Dogs" />
                                <label htmlFor='Bungo Stray Dogs'>Bungo Stray Dogs</label>
                            </div>
                            <div className='flex gap-1 items-center'>
                                <input type="checkbox" onChange={HandleCategorySelect} id="Death note" value="Death note" />
                                <label htmlFor='Death note'>Death note</label>
                            </div>
                            <div className='flex gap-1 items-center'>
                                <input type="checkbox" onChange={HandleCategorySelect} id="My hero academia" value="My hero academia" />
                                <label htmlFor='My hero academia'>My hero academia</label>
                            </div>
                            <div className='flex gap-1 items-center'>
                                <input type="checkbox" onChange={HandleCategorySelect} id="HunterxHunter" value="HunterxHunter" />
                                <label htmlFor='HunterxHunter'>HunterxHunter</label>
                            </div>
                            
                            <div className='flex gap-1 items-center'>
                                <input type="checkbox" onChange={HandleCategorySelect} id="T-Shirt" value="T-Shirt" />
                                <label htmlFor='T-Shirt'>T-Shirt</label>
                            </div>
                            <div className='flex gap-1 items-center'>
                                <input type="checkbox" onChange={HandleCategorySelect} id="bracelet" value="bracelet" />
                                <label htmlFor='bracelet'>bracelet</label>
                            </div>
                            <div className='flex gap-1 items-center'>
                                <input type="checkbox" onChange={HandleCategorySelect} id="keychains" value="keychains" />
                                <label htmlFor='keychains'>keychains</label>
                            </div>
                            <div className='flex gap-1 items-center'>
                                <input type="checkbox" onChange={HandleCategorySelect} id="posters" value="posters" />
                                <label htmlFor='posters'>posters</label>
                            </div>
                            <div className='flex gap-1 items-center'>
                                <input type="checkbox" onChange={HandleCategorySelect} id="stickers" value="stickers" />
                                <label htmlFor='stickers'>stickers</label>
                            </div>
                            <div className='flex gap-1 items-center'>
                                <input type="checkbox" onChange={HandleCategorySelect} id="bobbles" value="bobbles" />
                                <label htmlFor='bobbles'>bobbles</label>
                            </div>
                        </div>
                        {/* <div>
                            <label htmlFor="Other">other</label>
                            <input type="text" onChange={(e)=>} className='bg-gray-100 border-2 border-gray-400 ml-2 h-8 px-1' />
                        </div> */}
                    </div>
                    <div className='flex justify-center'>
                        <button onClick={handleSubmit} className='px-2 py-1 border-2 border-black bg-white hover:bg-black hover:text-white'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

const EditProduct = () => {
  return (
    <div className='flex'>
        <LeftAdmin />
        <EditProductComponent />
    </div>
  )
}

export default EditProduct