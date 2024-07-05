import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import useTheme from '../contexts/Theme';
import { useCursor } from '../contexts/Cursor';
import Cursor from './Cursor';

const Stack = () => {
    const [selectedLanguage, setSelectedLanguage] = useState('Frontend');
    const [isActive, setIsActive] = useState(true);
    const myimage = [
        { img: "/icons8-javascript-48.png", language: 'Frontend' },
        { img: "/icons8-bootstrap-48.png", language: 'Frontend' },
        { img: "/icons8-css-48.png", language: 'Frontend' },
        { img: "/icons8-react-48.png", language: 'Frontend' },
        { img: "/icons8-html-48.png", language: 'Frontend' },
        { img: "/icons8-tailwind-css-48.png", language: 'Frontend' },
        { img: "/icons8-express-js-64.png", language: 'Backend' },
        { img: "/icons8-mongodb-48.png", language: 'Backend' },
        { img: "/icons8-nodejs-48.png", language: 'Backend' },
        { img: "/icons8-github-50.png", language: 'Tools' }
    ];

    const handleClick = (language) => {
        setSelectedLanguage(language);
        setIsActive(language);
    };

    const { themeMode } = useTheme();
    const { setShowCursor } = useCursor();

    return (
        <div className='mt-18 py-28' id='stack'>
            <div className=''>
                <div className={`text-center text-4xl ${themeMode === "bg-black" ? "text-white" : "text-black"}`} onMouseEnter={() => setShowCursor(true)} onMouseLeave={() => setShowCursor(false)} ><Cursor />TECH STACK</div>
                <div className="text-center mt-6 text-white p-2">
                    <button className={`mx-2 px-9 py-2  text-black hover:text-white  rounded-md transition-all ease-linear duration-150  ${isActive == "Frontend" ? "bg-violet-700" : "bg-black"} text-white`} onClick={() => handleClick('Frontend')}>FrontEnd</button>
                    <button className={`mx-2 px-9 py-2  text-black hover:text-white  rounded-md transition-all ease-linear duration-150  ${isActive == "Backend" ? "bg-violet-700" : "bg-black"} text-white`} onClick={() => handleClick('Backend')}>Backend</button>
                    <button className={`mx-2 px-9 py-2  text-black hover:text-white  rounded-md transition-all ease-linear duration-150  ${isActive == "Tools" ? "bg-violet-700" : "bg-black"} text-white`} onClick={() => handleClick('Tools')}>Tools</button>
                </div>
                <div className="flex flex-wrap justify-center items-center gap-8 w-full md:w-3/4 mx-auto mt-8 p-5 md:p-20">
                    {myimage
                        .filter(item => item.language === selectedLanguage)
                        .map((e, index) => (
                            <img key={index} className='bg-gray-300 p-3 rounded-full w-12 md:w-auto' src={e.img} alt="" />
                        ))}
                </div>
            </div>
        </div>
    )
}

export default Stack;
