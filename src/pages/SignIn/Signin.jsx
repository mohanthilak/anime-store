import React, {useState} from 'react'
import axios from 'axios';
const Signin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [responseMessage, setResponseMessage] = useState("")

    const HandleSignIn = () =>{
        setResponseMessage("");
        axios.post("http://localhost:4000/user/signin", {
            email, password
        }).then(res=>{
            if(res.data.success){
                console.log("successsss")
                setResponseMessage("success", res.data);
            }else setResponseMessage(res.data.message)
        })
    }
  return (
    <div className='h-[91vh] mx-6 flex justify-center items-center border-x-2 md:mx-12'>
        <div className=' md:w-96 bg-white text-black px-5 flex flex-col items-center'>
            <div className='text-center font-semibold mt-8'>
                <h1 className='text-3xl mb-2'>Sign In</h1>
                <p>{responseMessage?responseMessage:""}</p>
            </div>
            <div className=' mt-6'>
                <input onChange={(e)=>setEmail(e.target.value)} className='w-64 md:w-80 px-2 h-9  bg-gray-300' type="email" placeholder='Email' /> 
            </div>
            <div className=' mt-6'>
                {/* <label>Email</label> */}
                <input onChange={(e)=>setPassword(e.target.value)} className='w-64  md:w-80 px-2 h-9  bg-gray-300' type="password" placeholder='Password' /> 
            </div>
            <div className='my-6'>
                <button onClick={HandleSignIn} className='bg-[#902c34] text-white px-4 py-2 hover:bg-white hover:text-[#902c34] hover:font-medium hover:border-2 hover:border-[#902c34]'>Sign In</button>
            </div>
        </div>

    </div>
  )
}

export default Signin