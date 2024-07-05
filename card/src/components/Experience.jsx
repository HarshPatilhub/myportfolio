import React from 'react'
import { useState } from 'react';
import useTheme from '../contexts/Theme';
import Cursor from './Cursor';
import { useCursor } from '../contexts/Cursor';

const Experience = () => {

  const [experience,setexperience] = useState(true)
  const [display,setdisplay] = useState(false)
  const [isActive,setIsActive] = useState(false)

  const handleClick = (language) => {
    if (language === 'Experience') {
      setexperience(true);
      setIsActive(!isActive)
      setdisplay(false);

    } else if (language === 'Education') {
      setexperience(false);
      setIsActive(!isActive)
      setdisplay(true);
    }
  };
  const {themeMode} = useTheme()
  const {setShowCursor} = useCursor()
  return (
    <div className='my-28' id='experience'>
       <div className={`text-center text-4xl ${themeMode === "bg-black"  ? "text-white" :"text-black"}`} onMouseEnter={()=> setShowCursor(true)} onMouseLeave={()=> setShowCursor(false)}> <Cursor/>EXPERIENCE</div>
       <div className="text-center mt-6 text-white p-2">
                      <button className={`mx-2 px-9 py-2  text-black hover:text-white  rounded-md transition-all ease-linear duration-150  ${isActive ? "bg-black"  : "bg-violet-700" } text-white`} onClick={() => handleClick('Experience')}>Experience</button>
                      <button className= {`mx-2 px-9 py-2 rounded-md  text-black hover:text-white  transition-all ease-linear duration-150 ${isActive ? "bg-violet-700" : "bg-black"} text-white`} onClick={() => handleClick('Education')}>Education</button>
          </div>
          { experience && ( <div className='flex justify-start items-center w-[80%] mx-auto'>
            <div className={`box lg:w-[60%] p-4 mt-11 md:mt-6 ${themeMode === "bg-black"  ? "text-white bg-gray-800"  : "text-black bg-gray-200" }`}>
                <h1 className='text-2xl'>Worked as a Developer</h1>
                <p>FullStack Developer | 2024 - present</p>
                <ul className='mx-7 list-disc'>
                  <li>Working as a full-stack NodeJS and React developer (both frontend and backend)</li>
                  <li>Have developed single-page applications using a full stack ReactJS+NodeJS web development tool</li>
                  <li>Have designed and developed modular and reusable RESTful APIs and frontend components using react framework like MUI/Shopify Polars/React-Bootstrap</li>
                  <li>Have worked with a team, and managed work using a centralized set of project management tools</li>
                  <li>Web development using version control and code-base management tools</li>
                </ul>
            </div>
          </div>)}
          { display &&  (<div className= 'flex justify-start items-center w-[80%] mx-auto'>
          <div className={`box lg:w-[60%] p-4 mt-11 md:mt-6 ${themeMode === "bg-black"  ? "text-white bg-gray-800"  : "text-black bg-gray-200" }`}>
                <h1 className='text-2xl'>Suryodaya College of Engineering</h1>
                <p>MCA| 2024 -present</p>
                <ul className='mx-7 list-disc'>
                  <li>Pursuing MCA course from Suryodaya College of Engineering.</li>
                  <li>Have developed single-page applications using a full stack ReactJS+NodeJS web development tool</li>
                  <li>Have designed and developed modular and reusable RESTful APIs and frontend components using react framework like MUI/Shopify Polars/React-Bootstrap</li>
                  <li>Have worked with a team, and managed work using a centralized set of project management tools</li>
                  <li>Web development using version control and code-base management tools</li>
                </ul>
            </div>
          </div>) }
          { experience && (<div className='flex justify-end items-center w-[80%] mx-auto'>
          <div className={`box lg:w-[60%] p-4 mt-11 md:mt-6 ${themeMode === "bg-black"  ? "text-white bg-gray-800"  : "text-black bg-gray-200" }`}>
                <h1 className='text-2xl'>Iceico Technologies Pvt Ltd</h1>
                <p>Web Developer | 2024-present</p>
                <ul className='mx-7 list-disc'>
                  <li>Developed Full Fledged FrontEnd Website using html,css and javascript</li>
                  <li>Experience in ReactJs.</li>
                  <li>Have worked with a team, and managed work using a centralized set of project management tools</li>
                </ul>
            </div>
          </div>)}
          { display && ( <div className='flex justify-end items-center w-[80%] mx-auto'>
          <div className={` lg:w-[60%] p-4 mt-11 md:mt-6  ${themeMode === "bg-black"  ? "text-white bg-gray-800"  : "text-black bg-gray-200" }`}>
            <h1 className='text-2xl'>New Arts College Wardha</h1>
                <p>BCCA | 2023</p>
                <ul className='mx-7 list-disc'>
                  <li>Done Bachelor of Commmerce in Computer Application Degree.</li>
                  <li>Learn Different Languages through Bachelor's Degree</li>
                  <li>Also done work with team and make full stack project on E-commerece Website..</li>
                </ul>
            </div>
          </div>)}
    </div>
  )
}

export default Experience
