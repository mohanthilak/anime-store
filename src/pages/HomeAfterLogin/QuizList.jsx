import React from 'react'
// import DS from "./Demon Slayer.jpg"
import bgImage from "./tanjiro.webp"

const QuizList = () => {
  return (
    <div className='md:mt-16 mt-32 mb-4'>
        <div className=''>
        <h1 className='text-4xl font-bold'>Quizzes</h1>
        <hr className=' mt-2 w-48 h-1 border:none text-black bg-black' />
      </div>
        <div className='mt-8 flex justify-center'>
            <div 
        //     style={{backgroundImage:`url(${bgImage})`, backgroundSize: 'contain', backgroundPosition: 'center',
        // backgroundRepeat: 'no-repeat'}}
         className=" text-center text-3xl font-bold bg-tanjiro bg-contain bg-no-repeat bg-center w-1/2">
                <p className='bg-white bg-opacity-60'>How well do you know your anime? Test yourself in our very own quiz portal where we offer multiple-choice questions for 10 different types of anime. Each quiz will have 10 questions, so let’s see what you got! Oh, and don’t you worry, you can reattempt any quiz as many times as you’d like. Make sure you know your anime well before attempting it.</p>
            </div>
        </div>
    </div>
  )
}

export default QuizList