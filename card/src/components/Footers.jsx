import React from 'react'
import * as emoji from 'node-emoji'
import useTheme from '../contexts/Theme.js'

const Footers = () => {
  const {themeMode} = useTheme('')
  return (
    <div className=''>
     <h1 className={`p-4 mt-14 ${themeMode === "bg-black" ? "bg-gray-800 text-white" : "bg-white text-black"} text-2xl w-full flex justify-center`}>
      {emoji.emojify(`Made with :heart: by  Harsh Patil`)}</h1>
    </div>
  )
}

export default Footers
