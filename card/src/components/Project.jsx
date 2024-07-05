import React, { useState } from 'react'
import {Link} from "react-router-dom"
import useTheme from '../contexts/Theme'
import Cursor from './Cursor'
import { useCursor } from '../contexts/Cursor'
import { Tilt } from 'react-tilt'

const Contact = () => {
  const {themeMode} = useTheme()
  const {setShowCursor} = useCursor()

  const defaultOptions = {
    reverse:        false,  
    max:            35,     
    perspective:    1000,   
    scale:          1.1,    
    speed:          1000,   
    transition:     true,
    axis:           null,   
    reset:          true,    
    easing:         "cubic-bezier(.03,.98,.52,.99)",    
  }

  return (
    <div id='contact'>
       <div className='my-32 py-5'>
          <div className={`text-center text-4xl ${themeMode === "bg-black" ? "text-white" : "text-black"}`} onMouseEnter={()=> setShowCursor(true)} onMouseLeave={()=> setShowCursor(false)}>
            <Cursor/>PROJECT
          </div>
        </div>
        <div className='project-section flex justify-center items-center flex-wrap'>
              <Tilt option={defaultOptions}  >
              <div className={` mx-10 ${themeMode === "bg-black"  ?  "text-white " : "text-black" }  text-center overflow-hidden`}>
                <Link target='_blank' ><img src="/Authentication-and-Authorization.jpg" className=' duration-200  ' alt="" width={280} /></Link>
                <h1>User Authentication and Authorization.</h1>
                <p>MERN-STACK</p>
              </div>
              </Tilt>
              <Tilt option={defaultOptions}>
              <div className={`mx-10 ${themeMode === "bg-black"  ?  "text-white " : "text-black" }  text-center overflow-hidden`}>
                <Link to={'https://simple-movie-api-app.netlify.app/' } target='_blank' ><img src="/original-58ad216cfb113c64e72a24c79a45b547.png" alt="" className=' duration-200' width={280}  /></Link>
                <h1>Movie Searching App.</h1>
                <p>React.js</p>
              </div>
              </Tilt>
              <Tilt option={defaultOptions}>
              <div className={`mx-10 ${themeMode === "bg-black"  ?  "text-white " : "text-black" }  text-center overflow-hidden`}>
                <Link to={'https://github.com/HarshPatilhub/javascript-projects'} target='_blank' ><img src="/free-contact-forms-17.jpg" className=' duration-200' alt="" width={280} /></Link>
                <h1>Form Validation (using Yup)</h1>
                <p>React.js </p>
              </div>
              </Tilt>
        </div>
    </div>
  )
}

export default Contact
