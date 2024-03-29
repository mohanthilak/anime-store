import React, {useEffect, useState} from "react";
// import DS from "./Demon Slayer.jpg"
import DS from "../../../public/Images/Demon Slayer.jpg"
import useAxiosPrivate from "../../Hooks/useAxiosPrivate";
import { Link } from "react-router-dom";

const ListQuiz = () => {
    const [quizList, setQuizList] = useState([]);
    const axiosPrivate = useAxiosPrivate()
    useEffect(()=>{
        axiosPrivate.get("/quiz/all-quiz").then((res)=>{
            if(res.data.success) setQuizList(res.data.quiz);
        })
    },[])
  return (
    <div className='px-6 md:px-12 md:mt-16 mt-32 mb-4'>
      <div className=''>
        <h1 className='text-4xl font-bold'>Quizzes</h1>
        <hr className=' mt-2 w-48 h-1 border:none text-black bg-black' />
      </div>
      <div className='flex mt-8 justify-around flex-wrap'>
      
        {quizList && quizList.map((item,i)=>(
            <Link to={`/quiz/${item._id}`}>
                <div key={i} className=' w-48 my-6 mx-10 cursor-pointer transition duration-700 hover:scale-125'>
                    <div >
                        <img style={{boxShadow: "0 2px 8px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%)"}} className=' h-72 w-44 rounded-2xl' src={DS} />
                    </div>
                    <div>
                        <h1>{item.animeName}</h1>
                        <div>
                            <p>Season: {item.season}</p>
                            <p>Episodes: 0-200</p>
                        </div>
                    </div>
                </div>
            </Link>
        ))}
      </div>
    </div>
  );
};

export default ListQuiz;
