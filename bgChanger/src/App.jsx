runimport { useState } from 'react'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 px-2 inset-x-4 '>
        <div className='flex flex-wrap bg-white p-2 rounded-full gap-3'>
          <button className='px-3 py-1 outline-none text-white rounded-xl' onClick={()=> setColor("red")} style={{backgroundColor: "red"}}>Red</button>
          <button className='px-3 py-1 outline-none text-white rounded-xl' onClick={()=> setColor("green")} style={{backgroundColor: "green"}}>Green</button>
          <button className='px-3 py-1 outline-none text-dark rounded-xl' onClick={()=> setColor("yellow")} style={{backgroundColor: "yellow"}}>Yellow</button>
          <button className='px-3 py-1 outline-none text-white rounded-xl' onClick={()=> setColor("purple")} style={{backgroundColor: "purple"}}>Purple</button>
          <button className='px-3 py-1 outline-none text-white rounded-xl' onClick={()=> setColor("black")} style={{backgroundColor: "black"}}>Black</button>
          <button className='px-3 py-1 outline-none text-white rounded-xl' onClick={()=> setColor("blue")} style={{backgroundColor: "blue"}}>Blue</button>
        </div>
      </div>
    </div>
  )
}

export default App
