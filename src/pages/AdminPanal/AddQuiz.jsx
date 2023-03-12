import React, { useState } from 'react'
import LeftAdmin from './LeftAdmin'
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai';

const AddQuizComponent = () => {
    const [questionList, setQuestionList] = useState([]);
    const [questionText, setQuestionText] = useState("");
    const [animeName, setAnimeName] = useState("")
    const [season, setSeason] = useState("")
    const [file, setFile] = useState()
    const [optionA, setOptionA] = useState('')
    const [optionB, setOptionB] = useState('')
    const [optionC, setOptionC] = useState('')
    const [optionD, setOptionD] = useState('')
    const [answer, setAnswer] = useState('');
    const [count, setCount] = useState(0)
    const [enableSubmit, setEnableSubmit] = useState(false);

    console.log("hithit");
    const HandlePrevious = () => {
        if(count>0){
            const countBuffer = count - 1;
            setCount(countBuffer)
            const question = questionList[countBuffer];
            setQuestionText(question.question)
            setOptionA(question.optionA)
            setOptionB(question.optionB)
            setOptionC(question.optionC)
            setOptionD(question.optionD)
            setAnswer(question.answer)
        }
    }

    const HandleNext= () => {
        if(questionText && optionA && optionB && optionC && optionD && answer){
            const question = {
                question: questionText,
                optionA,
                optionB,
                optionC,
                optionD,
                answer
            };
            const countBuffer = count + 1;
            if(countBuffer <= 10){
                setQuestionList([...questionList, question]);
                if(countBuffer === 10){
                    console.log("done", questionList)
                    setEnableSubmit(true);
                }
                setCount(countBuffer)
                setQuestionText("");
                setOptionA("")
                setOptionB("")
                setOptionC("")
                setOptionD("")
                setAnswer("")
            }else {
                console.log("Exceeded")
            }
        }else{
            alert("Make sure All fields are selected")
        }
    }
    
    return (
        <div className='p-5 w-3/4'>


            <div className='mb-6'>
                <div>
                    <h1 className='text-2xl font-semibold'>Anime Details:</h1>
                </div>

                <div className='flex flex-col gap-5'>
                    <div className='flex  gap-5'>
                        <div >
                            <label htmlFor="question">Anime Name:</label>
                            <input type="text" className='border-2 ml-2 w-[400px] border-gray-500' id="question" value={animeName} onChange={(e)=>setAnimeName(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="Season">Season:</label>
                            <input type="text" className='border-2 ml-2 border-gray-500' id="question" value={season} onChange={(e)=>setSeason(e.target.value)} />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="image">Image:</label>
                        <input type="file"  id="image"  onChange={(e)=>setFile(e.target.value)} />
                    </div>
                </div>
                
           </div>



            <div>
                <div>
                    <h1>Question: {count+1}/10</h1>
                </div>
            
                <div className=' flex justify-between items-center'>
                    <div onClick={HandlePrevious} className=' cursor-pointer'>
                        <div>
                            <AiOutlineLeft size={40} />
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <div className=''>
                            <label htmlFor="question">Question:</label><br />
                            <input type="text" className='border-2 w-[60vw] border-gray-500' id="question" value={questionText} onChange={(e)=>setQuestionText(e.target.value)} />
                        </div>
                        <div className=''>
                            <label htmlFor="optionA">OptionA:</label><br />
                            <input type="text" id="optionA" value={optionA} className='border-2 w-[60vw] border-gray-500' onChange={(e)=>setOptionA(e.target.value)} />
                        </div>
                        <div className=''>
                            <label htmlFor="optionB">OptionB:</label><br />
                            <input type="text" id="optionB" value={optionB} className='border-2 w-[60vw] border-gray-500' onChange={(e)=>setOptionB(e.target.value)} />
                        </div>
                        <div className=''>
                            <label htmlFor="question">OptionC:</label><br />
                            <input type="text" id="optionC" value={optionC} className='border-2 w-[60vw] border-gray-500' onChange={(e)=>setOptionC(e.target.value)} />
                        </div>
                        <div className=''>
                            <label htmlFor="question">OptionD:</label><br />
                            <input type="text" value={optionD} className='border-2 w-[60vw] border-gray-500' onChange={(e)=>setOptionD(e.target.value)} />
                        </div>
                        <div className=''>
                            <label htmlFor="question">Answer:</label>
                            {/* <br /> */}
                            <select name="answer" id="answer" onChange={(e)=>setAnswer(e.target.value)}>
                                <option value="a">a</option>
                                <option value="b">b</option>
                                <option value="c">c</option>
                                <option value="d">d</option>
                            </select>
                        </div>
                    </div>
                    
                    <div onClick={HandleNext} className=' cursor-pointer'>
                        <div>
                            <AiOutlineRight size={40} />
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center'>
                <button className='px-2 py-1 bg-black text-white hover:text-red-500 text-xl'>Submit</button>
            </div>
        </div>
    )
}

const AddQuiz = () => {
  return (
    <div className='flex'>
        <LeftAdmin />
        <AddQuizComponent />
    </div>
  )
}

export default AddQuiz