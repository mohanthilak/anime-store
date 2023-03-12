import React, { useState, useEffect } from 'react'
import useAxiosPrivate from '../../Hooks/useAxiosPrivate';
import { } from "react-icons"

const Quiz = ({ quiz_id }) => {
    const axiosPrivate = useAxiosPrivate()
    const [quiz, setQuiz] = useState([{ question: "who is the most strongest in Naruto?", optionA: "Naruto", optionB: "Susuke", optionC: "Hashirama", optionD: "Madara", answer: 'a' }, { question: "who is the most weakest in Naruto?", optionA: "Naruto", optionB: "Susuke", optionC: "Hashirama", optionD: "Madara", answer: 'd' }]);
    const [question, setQuestion] = useState({});
    const [count, setCount] = useState(0);
    const [score, setScore] = useState(0);
    const [showFinalScore, setShowFinalScore] = useState(false);
    const [option, setOption] = useState('')

    
    const HandlePreviousQuestion = () => {
        if (count > 0) {
            console.log("dsffdsfsfsdfsdfsdfsdfsdfsd", count)
            let buffer = count - 1;
            setCount(count - 1);
            console.log("dsffdsfsfsdfsdfsdfsdfsdfsd", count)
            setQuestion(quiz[buffer]);
        }
    }
    
    const optionClicked = async (ch) => {
        console.log(ch, question.answer)
        if (ch == question.answer){
            setScore(score + 1);
            console.log("match")
        } 
        console.log("count:", count, "len:", quiz.length)
        if (count+1 < quiz.length) {
            const buffer = count +1;
            setCount(count + 1);
            setQuestion(quiz[buffer]);
            setOption('')
        }else {
            console.log("else hit")
            setShowFinalScore(true);
        }
        console.log(score)
    }
    useEffect(()=>{
        // axiosPrivate.get(`/quiz/${quiz_id}`).then(res=>{
        //     if(res.data.success){
        //         setQuiz(res.data.quiz);
        //     }
        // })
        setQuestion(quiz[count])
        console.log(showFinalScore)
    }, [])

    return (
        <div className='px-6 md:px-12  md:mt-16 mt-10 mb-4'>
            {showFinalScore ? <>
                <div className='h-[80vh] flex justify-center items-center'>
                    <h1 className='text-3xl font-bold'>Score: {score}</h1>
                </div>
            </>: 
                <>
                    <div onClick={HandlePreviousQuestion} className='flex gap-4 cursor-pointer h-10 items-center'>
                        <svg
                            width="57"
                            height="24"
                            viewBox="0 0 57 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M0.93934 10.9393C0.353553 11.5251 0.353553 12.4749 0.93934 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97918 12.6066 1.3934C12.0208 0.807612 11.0711 0.807612 10.4853 1.3934L0.93934 10.9393ZM57 10.5L2 10.5V13.5L57 13.5V10.5Z"
                                fill="black"
                            />
                        </svg>
                        <h1 className='text-3xl font-bold'>Previous Question</h1>
                    </div>
                    <div className="mt-12 flex justify-center ">
                        <div className='text-3xl font-bold '>
                            {question ? <div>
                                <h1 className=''>Q{count+1}. {question?.question}</h1>
                                <div className='flex mt-2  flex-wrap justify-center w-[70vw]'>

                                    <div
                                        onClick={() => {
                                            optionClicked('a')
                                        }}
                                        className=' w-[400px] cursor-pointer lg:w-[300px] xl:w-[350px] md:m-5 m-2 h-16 border-2 border-black hover:bg-black hover:text-white flex justify-center items-center'>
                                        <p className='text-2xl '>{question.optionA}</p>
                                    </div>
                                    <div
                                        onClick={() => {
                                            // setOption('a')
                                            optionClicked('b')
                                        }}
                                        className=' w-[400px] cursor-pointer lg:w-[300px] xl:w-[350px] h-16 md:m-5 m-2 border-2 border-black hover:bg-black hover:text-white flex justify-center items-center'>
                                        <p className='text-2xl '>{question.optionB}</p>
                                    </div>
                                    <div
                                        onClick={() => {
                                            // setOption('a')
                                            optionClicked('c')
                                        }}
                                        className=' w-[400px] cursor-pointer lg:w-[300px] xl:w-[350px] h-16 md:m-5 m-2 border-2 border-black hover:bg-black hover:text-white flex justify-center items-center'>
                                        <p className='text-2xl '>{question.optionC}</p>
                                    </div>
                                    <div
                                        onClick={() => {
                                            // setOption('a')
                                            optionClicked('d')
                                        }}
                                        className=' w-[400px] cursor-pointer lg:w-[300px] xl:w-[350px] h-16 md:m-5 m-2 border-2 border-black hover:bg-black hover:text-white flex justify-center items-center'>
                                        <p className='text-2xl '>{question.optionD}</p>
                                    </div>
                                </div>
                            </div> : <></>}
                        </div>
                    </div>
                </>
            }  
        </div>
    )
}

export default Quiz