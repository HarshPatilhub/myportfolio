import React from 'react'
import { useCursor } from '../contexts/Cursor';
import { useRef, useEffect } from 'react';
import gsap from 'gsap/gsap-core';

const Cursor = () => {

    const { showCursor , setShowCursor} = useCursor();
    // const cursorRef = useRef();
    

    useEffect(() => {
        const cursor = document.querySelector(".ball")
    
        if (showCursor) {
          gsap.to(cursor, { duration: 0.2, scale: 4 });
        } else {
          gsap.to(cursor, { duration: 0.2, scale: 2 });
        }
      }, [showCursor]);
  return (
    <div>
    </div>
  )
}

export default Cursor
