import React  from 'react'
import { useState, useContext } from 'react'
import UserContextProvider from '../contexts/UserContextProvider'
import UserContext from '../contexts/UserContext'

function Login() {
    const [usename,setUsename] = useState('')
    const [password,setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e)=>{
        e.preventDefault()
        setUser(usename,password)
    }
  return (
    <>
      <h1>Login</h1>
      <input
       type="text"
       value={usename}
       onChange={(e)=> setUsename(e.target.value)}
       placeholder='name'
        />
       <input 
       type="password"
       value={password}
       onChange={(e)=> setPassword(e.target.value)} 
       placeholder='password'
       />
       <button
       onClick={handleSubmit}>Submit</button>
    </>
  )
}

export default Login
