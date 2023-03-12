import React from 'react'
import LeftAdmin from './LeftAdmin'
import { AiOutlinePlus } from 'react-icons/ai'
import {Link} from "react-router-dom"

const QuizPanel = () => {
    return (
        <div className='p-5'>
            <Link to="/admin-panel/add-quiz">
                <div className='flex items-center gap-2 bg-red-600 px-2 py-1 hover:border-2 border-black'>
                    <AiOutlinePlus size={20} />
                    <h1 className='text-xl font-semibold'>Add Anime</h1>
                </div>
            </Link>
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