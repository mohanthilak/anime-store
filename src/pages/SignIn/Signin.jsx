import {useEffect, useState} from 'react';
import useAuth from '../../Hooks/useAuth';
import axios from '../../API/axios';
import {Link, useNavigate, useLocation} from "react-router-dom"

const Signin = () => {
const {auth, setAuth} = useAuth();
    // console.log("auth:", auth)
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/home";
    

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [responseMessage, setResponseMessage] = useState("")

    useEffect(()=>{
        if(auth?.uid){
            navigate(-1)
        }else{
            console.log("did not navigate back")
        }
    },[])
    
    const HandleSignIn = () =>{
        setResponseMessage("");
        axios.post("user/signin", {
            email, password
        },
        {
            withCredentials: true
        }
        ).then(res=>{
            if(res.data.success){
                console.log("successsss", res.data)
                setResponseMessage("success", res.data);
                setAuth({uid: res.data.user._id, roles: res.data.user.role, accessToken: res.data.accessToken})
                setPassword("");
                setEmail("");
                navigate(from, { replace: true })
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