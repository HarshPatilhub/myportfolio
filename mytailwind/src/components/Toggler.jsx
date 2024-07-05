import React from 'react'

const Toggler = () => {
    const[toggle,setToggle] = useState(false)
    const[color,setcolor] = useState('')
  
    const handleClick = ()=>{
      setToggle(!toggle)
      console.log(toggle);
    }
   
    return (
      <div className={`flex justify-center items-center h-screen w-full text-white ${toggle ? 'bg-black' : ''}`}>
        <button onClick={handleClick} className='mx-5 p-4 bg-indigo-600 rounded-xl text-white shadow-2xl'>Switch</button>
      </div>
  )
}
export default Toggler
