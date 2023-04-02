import React from 'react'
import AboutUs from '../AboutUs/AboutUs'
import LandingPage from './LandingPage'
import QuizList from './QuizList'

const HomeAL = () => {
  return (
    <div className='px-2 md:px-2 lg:px-4 md:mx-10 absolute top-0 md:top-0 -z-10 '>
        <LandingPage />
        <AboutUs />
    </div>
  )
}

export default HomeAL