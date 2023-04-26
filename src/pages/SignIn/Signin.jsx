import {useEffect, useState} from 'react';
import useAuth from '../../Hooks/useAuth';
import axios from '../../API/axios';
import {Link, useNavigate, useLocation} from "react-router-dom"
import nk from "./narutokakashi.png";

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
            authText:email, password
        },
        {
            withCredentials: true
        }
        ).then(res=>{
            if(res.data.success){
                console.log("successsss", res.data)
                setResponseMessage("success", res.data);
                setAuth({uid: res.data.user._id, role: res.data.user.role, accessToken: res.data.accessToken})
                setPassword("");
                setEmail("");
                if(res.data.user.role === "admin"){
                    console.log("ewwewew")
                    navigate("/admin-panel")
                } else if(res.data.user.role === "user"){
                    navigate("/home")
                }
            }else setResponseMessage(res.data.message)
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
                            <h1>LOG IN</h1>
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

                            <button onClick={HandleSignIn} className='bg-black rounded-2xl text-white px-4 py-2 hover:bg-white hover:text-[#902c34] hover:font-medium hover:border-2 hover:border-[#902c34]'>SIGN IN</button>
                        </form>
                        <div className='text-center mt-4 text-lg font-medium'>                           
                            <Link to="/signup" ><span className='text-xl font-bold'>New User?</span> Create an Account</Link>
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
  )
}

export default Signin