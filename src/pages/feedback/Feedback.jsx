import React, {useState} from 'react'
import useAxiosPrivate from '../../Hooks/useAxiosPrivate'
import useAuth from "../../Hooks/useAuth"


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
    <div className='px-6 md:px-12 md:mt-4 mb-4'>
        <div className='border-2 border-black p-6'>

            <div className='mb-6'>
                <h1 className='text-2xl mb-1 font-semibold'>Feedback</h1>
                <hr className=' my-1  w-36 h-[3px] border:none text-black bg-black' />
            </div>

            <form className='flex flex-col items-center gap-3'>
                <div className=' flex gap-5'>
                    <label htmlFor="category">Category:</label>
                    <select name="category" id="category" onChange={(e)=>{setCategory(e.target.value)}} className=' border-2 border-black'>
                        <option value="quiz">Quiz</option>
                        <option value="merchStore">Merch Store</option>
                        <option value="chat">Chat</option>
                    </select>
                </div>
                <div className='flex  gap-4 mt-2'>
                    <label htmlFor="feedback">Feedback:</label>
                    <textarea name="feedback" onChange={(e)=>setFeedback(e.target.value)} maxLength={400} className='border-2 border-black resize-none p-1' placeholder='Enter your Feedback' id="feedback" cols="30" rows="10"></textarea>
                </div>
                <div className=''>
                    <button onClick={handleSubmit} className='bg-black text-white px-2 py-1'>Submit</button>
                </div>
            </form>
        </div>

    </div>
  )
}

export default Feedback