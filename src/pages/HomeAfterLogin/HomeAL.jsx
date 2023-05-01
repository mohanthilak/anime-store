import React, {useRef} from 'react'
import AboutUs from '../AboutUs/AboutUs'
import LandingPage from './LandingPage'

const HomeAL = () => {
  const aboutUsRef = useRef(null);
  const scrollToAboutUs = () => aboutUsRef.current.scrollIntoView()

  return (
    <div className='px-2 md:px-2 lg:px-4 md:mx-10 '>
        <LandingPage scrollToAboutUs={scrollToAboutUs} />
        <AboutUs aboutUsRef={aboutUsRef} />
    </div>
  )
}

export default HomeAL