import React, { useState, useEffect } from 'react';
import About from './About';
import Stack from './Stack';
import Typed from 'typed.js'
import Experience from './Experience';
import Contact from './Contact';
import useTheme from '../contexts/Theme';
import { useGSAP } from '@gsap/react';
import gsap from "gsap"
import Marquee from 'react-fast-marquee';
import Project from "./Project"
import Resume from './Resume';
import { Link } from 'react-router-dom';

const Home = () => {
 
    const el = React.useRef(null);
    React.useEffect(() => {
        const typed = new Typed(el.current, {
          strings: ['Web Development', 'FrontEnd Development','Backend Development'],
          typeSpeed: 50,
          loop: true,
          backSpeed : 60,

        });

        return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.destroy();
          };
        }, []);

        const {themeMode} = useTheme()
    return (
        <>
            <div className='mx-4 sm:mx-8 md:mx-16 lg:mx-24 xl:mx-32 mt-10 py-5 sm:py-10 ' id='home'>
                {/* Home Section */}
                <div className={`w-full sm-w-1/2  ${themeMode === "bg-black"  ? "text-white" : "text-black"}`}>
                    <p className='text-sm sm:text-lg'>Hey</p>
                    <h1 className='text-2xl sm:text-4xl font-bold bigger'>I'm Harsh Patil</h1>
                    <p className='text-lg sm:text-xl'>I am Into <span ref={el} className='font-bold  text-violet-800'></span></p>
                    <p className='my-3 sm:my-5 sm:text-lg leading-6'>Are you looking for a dynamic full-stack engineer who can transform your website/applications into a seamless user experience? With over 5 years of hands-on expertise in HTML, CSS, React, JavaScript and more, I have developed 20+ websites and web apps from scratch that scale with ease. As a future full-stack developer, I am passionate about enhancing my skills in HTML5, CSS3, and JS to take on any challenge that comes my way. Let's build something amazing together!</p>
                    <Link to={'/about'}>
                    <button className='bg-violet-800 rounded-full px-4 sm:px-6 py-2 text-white font-bold '>About Me {">"} </button>
                    </Link>
                    <Resume/>
                </div>

                <div className='overflow-hidden'>
                    <Marquee speed={50}>
                    <div className='image flex mt-8 sm:mt-12 w-full'>
                        <img src="/icons8-bootstrap-48.png" className=" mx-3 sm:mx-4 md:mx-6 lg:mx-8 xl:mx-10" alt="" />
                        <img src="/icons8-css-48.png" className='mx-3 sm:mx-4 md:mx-6 lg:mx-8 xl:mx-10' alt="" />
                        <img src="/icons8-nodejs-48.png" className='mx-3 sm:mx-4 md:mx-6 lg:mx-8 xl:mx-10' alt="" />
                        <img src="/icons8-html-48.png" className='mx-3 sm:mx-4 md:mx-6 lg:mx-8 xl:mx-10' alt=""/>
                        <img src="/icons8-javascript-48.png" className='mx-3 sm:mx-4 md:mx-6 lg:mx-8 xl:mx-10' alt="" />
                        <img src="/icons8-mongodb-48.png" className=' mx-3 sm:mx-4 md:mx-6 lg:mx-8 xl:mx-10' alt="" />
                        <img src="/icons8-css-48.png" className='mx-3 sm:mx-4 md:mx-6 lg:mx-8 xl:mx-10' alt="" />
                        <img src="/icons8-javascript-48.png" className='mx-3 sm:mx-4 md:mx-6 lg:mx-8 xl:mx-10' alt="" />
                        <img src="/icons8-nodejs-48.png" className='mx-3 sm:mx-4 md:mx-6 lg:mx-8 xl:mx-10' alt="" />
                    </div>
                    </Marquee>
                </div>
            </div>
            {/* About Section */}
            <About   />
            {/* Tech Stack */}
            <Stack/>
            {/* Experience */}
            <Experience/>
            {/* Projects */}
            <Project/>
            {/* Contact us */}
            <Contact/>
            
        </>
    );
};

export default Home;
