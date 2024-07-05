import React, { useEffect, useRef } from 'react';
import useTheme from '../contexts/Theme';
import { useCursor } from '../contexts/Cursor';
import Cursor from './Cursor';


const About = () => {
  const { themeMode } = useTheme();
  const {setShowCursor} = useCursor();
 

  const handleMouseEnter = () => {
    setShowCursor(true);
  };

  const handleMouseLeave = () => {
    setShowCursor(false);
  };


  return (
    <div className={` my-24 transition-all mb-48 ${themeMode === "bg-black" ? "text-white" : "text-black"}  `} id='about'>
      {/* About-Section */}
      <div className='mx-5 md:mx-10 lg:mx-20 mt-5 md-mt-10'>
        <h1 className='text-3xl md:text-4xl text-center py-6 md:py-12 myabout' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}> ABOUT ME</h1>
        <div className='flex flex-col md:flex-row justify-between mt-5 md:mt-10 items-center'>
          <div className=' overflow-hidden w-full md:w-5/12 lg:w-4/12 mx-auto md:mx-0'>
            <img src="/harsh.jpeg" alt="" className='w-full md:w-64 hover:scale-95  transition-all' />
          </div>
          <div className='p-5 md:p-10 '>
            <h1 className='text-3xl md:text-4xl  font-bold '>Harsh Patil</h1>
            <button className='capitalize  bg-violet-100 my-3 md:my-5 text-[14px] text-purple-600 px-4'>full stack developer</button>
            <p className='text-[16px] md:text-[19px] font-light'>Passionate full-stack engineer with 5+ years of hands-on experience in developing scalable websites/applications using a wide range of front-end and back-end skills like HTML, CSS,React, JavaScript etc.Developed 20+ websites from scratch at Iceico Technologies. Looking to further enhance HTML5, CSS3, JS skills as a future full stack developer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
