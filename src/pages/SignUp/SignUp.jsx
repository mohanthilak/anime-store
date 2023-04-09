import axios from 'axios';
import React, {useState, useEffect} from 'react'
import useAuth from '../../Hooks/useAuth';
import {useNavigate} from "react-router-dom"

const Signin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [responseMessage, setResponseMessage] = useState("")
    const {auth} = useAuth();
    const navigate = useNavigate()
    useEffect(()=>{
        if(auth?.uid){
            navigate(-1)
        }else{
            console.log("did not navigate back")
        }
    },[])

    const HandleSignUp = () =>{
        if(!email.includes('@')) return alert("Enter Proper Email")
        if(!email || !password || !username) return alert("Enter all fields")
        setResponseMessage('');
        axios.post("http://localhost:4000/user/signup", {
            email, password, username
        }).then(res=>{
            console.log("res.data:", res.data)
            if(res.data.success){
                console.log("success");
                setResponseMessage("success")
            }else setResponseMessage(res.data.message);
        })
    }
  return (
    <div className='h-[91vh] mx-6 flex justify-center items-center border-x-2 md:mx-12'>
        <form className=' md:w-96 bg-white text-black px-5 flex flex-col items-center'>
            <div className='text-center font-semibold mt-8 '>
                <h1 className='text-3xl mb-2'>Sign Up</h1>
                <p>{responseMessage?responseMessage:""}</p>
            </div>
            <div className=' mt-6'>
                {/* <label>Email</label> */}
                <input value={username} onChange={(e)=>{const value = e.target.value.replace(/[@]/g, "");setUsername(value)}} className='w-64 md:w-80 px-2 h-9  bg-gray-300' type="text" placeholder='Username' /> 
            </div>
            <div className=' mt-6'>
                {/* <label>Email</label> */}
                <input type='email' value={email} onChange={(e)=>{setEmail(e.target.value)}} className='w-64 md:w-80 px-2 h-9  bg-gray-300'  placeholder='Email' /> 
            </div>
            <div className=' mt-6'>
                {/* <label>Email</label> */}
                <input onChange={(e)=>setPassword(e.target.value)} className='w-64  md:w-80 px-2 h-9  bg-gray-300' type="password" placeholder='Password' /> 
            </div>
            <div className='my-6'>
                <button onClick={HandleSignUp} className='bg-[#902c34] text-white px-4 py-2 hover:bg-white hover:text-[#902c34] hover:font-medium hover:border-2 hover:border-[#902c34]'>Sign Up</button>
            </div>
        </form>

    </div>
  )
}

export default Signin