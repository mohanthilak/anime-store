import axios from 'axios';
import React, {useState, useEffect} from 'react'
import useAuth from '../../Hooks/useAuth';
import {useNavigate, Link} from "react-router-dom"
import nk from "./narutokakashi.png";

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
    <div className='h-[91vh]  flex justify-center items-center  bg-gray-300'>

        <div className='h-[85%] w-[90%] bg-[#F4F4F4] flex rounded-2xl overflow-hidden'>
                <div className='w-1/3'>
                    <img src={nk} width={324} />
                </div>
                <div className='w-2/3  flex justify-center items-center bg-black'>
                    <div className='bg-white w-[80%] h-[80%] rounded-2xl p-5'>
                        <div className='text-center font-black text-3xl mb-8'>
                            <h1>CREATE ACCOUNT</h1>
                        </div>
                        <form className='text-xl flex flex-col gap-12'>
                            
                            <div className='flex flex-col gap-2 '>
                                <label>Enter your email:</label>
                                <input onChange={(e)=>setEmail(e.target.value)} type="text"  className='border-b-2 border-black'/>
                            </div>
                            
                            <div className='flex flex-col gap-2 '>
                                <label>Enter your email:</label>
                                <input type="password" onChange={(e)=>setPassword(e.target.value)} className='border-b-2 border-black'/>
                            </div>

                            <button onClick={HandleSignUp} className='bg-black rounded-2xl font-bold text-white px-4 py-2 hover:bg-white hover:text-black  hover:border-2 hover:border-black'>SIGN UP</button>
                        </form>
                        <div className='text-center mt-4 text-lg font-medium'>                           
                            <Link to="/signup" ><span className='text-xl font-bold'>Have an Account?</span> Log In</Link>
                        </div>
                    </div>
                </div>
        </div>

        {/* <div className=' md:w-96 bg-white text-black px-5 flex flex-col items-center'>
            <div className='text-center font-semibold mt-8'>
                <h1 className='text-3xl mb-2'>Sign In</h1>
                <p>{responseMessage?responseMessage:""}</p>
            </div>
            <div className=' mt-6'>
                <input onChange={(e)=>setEmail(e.target.value)} className='w-64 md:w-80 px-2 h-9  bg-gray-300' type="text" placeholder='Email' /> 
            </div>
            <div className=' mt-6'>
                <input onChange={(e)=>setPassword(e.target.value)} className='w-64  md:w-80 px-2 h-9  bg-gray-300' type="password" placeholder='Password' /> 
            </div>
            <div className='my-6'>
                <button onClick={HandleSignIn} className='bg-[#902c34] text-white px-4 py-2 hover:bg-white hover:text-[#902c34] hover:font-medium hover:border-2 hover:border-[#902c34]'>Sign In</button>
            </div>
        </div> */}

    </div>
    // <div className='h-[91vh] mx-6 flex justify-center items-center border-x-2 md:mx-12'>
    //     <form className=' md:w-96 bg-white text-black px-5 flex flex-col items-center'>
    //         <div className='text-center font-semibold mt-8 '>
    //             <h1 className='text-3xl mb-2'>Sign Up</h1>
    //             <p>{responseMessage?responseMessage:""}</p>
    //         </div>
    //         <div className=' mt-6'>
    //             <input value={username} onChange={(e)=>{const value = e.target.value.replace(/[@]/g, "");setUsername(value)}} className='w-64 md:w-80 px-2 h-9  bg-gray-300' type="text" placeholder='Username' /> 
    //         </div>
    //         <div className=' mt-6'>
    //             <input type='email' value={email} onChange={(e)=>{setEmail(e.target.value)}} className='w-64 md:w-80 px-2 h-9  bg-gray-300'  placeholder='Email' /> 
    //         </div>
    //         <div className=' mt-6'>
    //             <input onChange={(e)=>setPassword(e.target.value)} className='w-64  md:w-80 px-2 h-9  bg-gray-300' type="password" placeholder='Password' /> 
    //         </div>
    //         <div className='my-6'>
    //             <button onClick={HandleSignUp} className='bg-[#902c34] text-white px-4 py-2 hover:bg-white hover:text-[#902c34] hover:font-medium hover:border-2 hover:border-[#902c34]'>Sign Up</button>
    //         </div>
    //     </form>
    // </div>
  )
}

export default Signin