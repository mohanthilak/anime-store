import {useState} from 'react'
import {useParams} from "react-router-dom"
import axios from "axios"

const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const {type} = useParams();

    const handleClick = () => {
        axios.post(`http://localhost:4000/auth/${type}`,{
            data: {
                email, password
            }
        }).then(res=>{
            console.log(res)
        })
    }


 return (
    <div className="rounded-lg border-2 mx-16 " >
        <div className=" flex-col justify-center">
            <label htmlFor="email">Email:</label>
            <input type="email" className='rounded-lg px-1 border-4' onChange={(e)=>{setEmail(e.target.value)}} />
        </div>
        <div className="flex">
            <label htmlFor="email">Password</label>
            <input type="password" onChange={(e)=>{setPassword(e.target.value)}} />
        </div>
        <div className="">
            <button onClick={handleClick}>Submit</button>
        </div>
    </div>
  )
}

export default Auth