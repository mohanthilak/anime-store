import React, {useState} from 'react'
import useAxiosPrivate from '../../Hooks/useAxiosPrivate'
import useAuth from "../../Hooks/useAuth"
import bg from "./bg.png"


const Feedback = () => {
    const axiosPrivate = useAxiosPrivate();
    const {auth} = useAuth()
    const [category, setCategory] = useState("")
    const [feedback, setFeedback] = useState("")
    const handleSubmit = () => {
        if(feedback && category){
            axiosPrivate.post("/feedback/create", {
                uid: auth.uid,
                category,
                feedback
            })
        }
    }
  return (
    <div className='h-[100vh] w-[100vw] -z-10 absolute top-0'>
        <div  className='h-[100vh] pt-16  flex'> 
            <div className='px-4 bg w-1/2'>
                <div >
                    <h1 className='text-2xl mb-1 font-semibold'>Feedback</h1>
                    <hr className=' my-1  w-36 h-[3px] border:none text-black bg-black' />
                </div>
                <form className='flex flex-col gap-5 mt-5' action="">
                    <div>
                        <label htmlFor="category" className='mr-10  text-2xl font-semibold '>Category:</label>
                        <select name="category" className='text-xl font-md p-2 border-2 border-black'  id="category">
                            <option value="quiz">Quiz</option>
                            <option value="chat">Chat</option>
                            <option value="merchStore">Merch Store</option>
                        </select>
                    </div>
                    <div className='flex items-start'>
                        <label htmlFor="category" className='mr-9  text-2xl font-semibold '>Feedback:</label>
                        <textarea className="text-xl font-md p-4 resize-none border-2 border-black" name="category" id="category" maxLength={450} cols="40"  rows="15"></textarea>
                    </div>
                </form>
            </div>
            <div className=' w-1/2 flex justify-end items-end'>
                <img src={bg} className="h-96 w-96" alt="" />
            </div>

            
        </div>
    </div>
  )
}

export default Feedback