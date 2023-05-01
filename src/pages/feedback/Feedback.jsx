import React, {useState} from 'react'
import useAxiosPrivate from '../../Hooks/useAxiosPrivate'
import useAuth from "../../Hooks/useAuth"
import bg from "./bg.png"
import {AiFillTwitterSquare, AiFillFacebook, AiFillLinkedin, AiFillInstagram} from "react-icons/ai"

const Feedback = () => {
    const axiosPrivate = useAxiosPrivate();
    const {auth} = useAuth()
    const [category, setCategory] = useState("quiz")
    const [feedback, setFeedback] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        if(feedback && category){
            axiosPrivate.post("/feedback/create", {
                uid: auth.uid,
                category,
                feedback
            })
        }else{
            alert("fill all fields")
        }
    }
  return (
    <div className=' h-[91vh] w-[100vw] flex justify-center items-center'>
        <div  className='h-[87vh] w-[95vw] p-2 flex border-4     border-black'> 
            <div className='w-1/2  h-[85vh] '>
                <div >
                    <h1 className='text-2xl mb-1 font-semibold'>Feedback</h1>
                    <hr className=' my-1  w-36 h-[3px] border:none text-black bg-black' />
                </div>
                <form className='flex flex-col gap-5 mt-5' action="">
                    <div>
                        <label htmlFor="category" className='mr-10  text-2xl font-semibold '>Category:</label>
                        <select name="category" onChange={(e)=>setCategory(e.target.value)} className='text-xl font-md p-2 border-2 border-black'  id="category">
                            <option value="quiz">Quiz</option>
                            <option value="chat">Chat</option>
                            <option value="merchStore">Merch Store</option>
                        </select>
                    </div>
                    <div className='flex items-start'>
                        <label htmlFor="category" className='mr-9  text-2xl font-semibold '>Feedback:</label>
                        <textarea onChange={(e)=>setFeedback(e.target.value)} className="text-lg w-[60%] font-md p-4 resize-none border-2 border-black" name="category" id="category" maxLength={520} cols="40"  rows="11"></textarea>
                    </div>
                    <div className='w-[100%] flex justify-center'>
                        <button className='border-2 border-black text-xl px-2 py-1 hover:bg-white hover:text-black bg-black text-white' onClick={handleSubmit}>Submit</button>
                    </div>
                </form>
                <div className='mt-[48px]'>
                    <div className=''>
                        <h1 className='text-xl font-semibold'>Contact: 9901766302</h1>
                    </div>
                    <div className='flex gap-2 '>
                        <AiFillFacebook className='hover:bg-black hover:text-white cursor-pointer' size={30} />
                        <AiFillTwitterSquare size={30} className='cursor-pointer hover:bg-black hover:text-white' />
                        <AiFillLinkedin size={30} className='cursor-pointer hover:bg-black hover:text-white' />
                        <AiFillInstagram size={30} className='cursor-pointer hover:bg-black hover:text-white' />
                    </div>
                </div>
            </div>


            <div className=' w-1/2 flex justify-end items-end'>
                <img src={bg} className="h-96 w-96" alt="" />
            </div>

            
        </div>
    </div>
  )
}

export default Feedback