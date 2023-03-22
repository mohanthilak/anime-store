import React from 'react'
import AboutUs from '../AboutUs/AboutUs'
import LandingPage from './LandingPage'
import QuizList from './QuizList'

const HomeAL = () => {
  return (
    <div className='h-full mx-12  px-4'>
        <LandingPage />
        <AboutUs />
    </div>
  )
}

export default HomeAL