import React, {useEffect, useState} from 'react'
import LeftAdmin from './LeftAdmin'
import { AiOutlinePlus } from 'react-icons/ai'
import {Link} from "react-router-dom"
import useAxiosPrivate from '../../Hooks/useAxiosPrivate'

const QuizPanel = () => {
    const axiosPrivate = useAxiosPrivate();
    const [users, setUsers] = useState([]);

     useEffect(()=>{
      axiosPrivate.get("/user/quiz-performance").then(res=>{
        if(res.data.success){
            setUsers(res.data.users);
        }
      })
    },[])
    return (
        <div className='p-5 w-4/5'>
            <Link to="/admin-panel/add-quiz">
                <div className='flex items-center gap-2 w-44 bg-red-600 px-2 py-1 hover:border-2 border-black'>
                    <AiOutlinePlus size={20} />
                    <h1 className='text-xl font-semibold'>Add Anime</h1>
                </div>
            </Link>

            <div className="mt-2 flex justify-center">
                <table className='border-2 border-black table-auto text-center'>
                    <thead className='border-b-2 border-black'> 
                        <tr>
                            <th className='px-4'>Name</th>
                            <th className='px-4'>Anime</th>
                            <th className='px-4'>Score</th>
                            <th className='px-4'>Attemps</th>
                            <th className='px-4'>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users && users.map((el, i)=> (
                            <tr key={i} className="text-center">
                                <td>{el.username || "Saitama"}</td>
                                <td>{el.quizDetails[0].animeName}</td>
                                {/* <td>{el.attemptedQuiz.score}</td> */}
                                <td>{el.attemptedQuiz.score}</td>
                                <td>{el.attemptedQuiz.attempts || 1}</td>
                                <td>10</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}


const QuizDetails = () => {
  return (
    <div className='flex'>
        <LeftAdmin />
        <QuizPanel />
    </div>
  )
}



export default QuizDetails