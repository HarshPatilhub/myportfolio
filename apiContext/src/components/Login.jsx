import React, { useState} from 'react'
import UserContext from '../context/UserContext'
import { useContext } from 'react'

const Login = () => {
    const [username,setusername] = useState('')
    const [password,setpassword] = useState('')

    const {setuser} =useContext(UserContext)
    const handleClick = (e)=>{
        e.preventDefault()

        setuser({username,password})
    }
  return (
    <div>
      <input type="text" placeholder='username' value={username} onChange={(e)=> setusername(e.target.value)} />
      <input type="text" placeholder='password' value={password} onChange={(e)=> setpassword(e.target.value)} />
      <button type='submit' onClick={handleClick}>Submit</button>
    </div>
  )
}

export default Login
