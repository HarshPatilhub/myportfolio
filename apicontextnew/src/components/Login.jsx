import React from 'react'
import UserContext from '../context/UserContext'
import { useState } from 'react'
import { useContext } from 'react'

const Login = () => {

    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e)=> {
        e.preventDefault()
        setUser({username,password})
    }
  return (
    <div>
        <input type="text"
        placeholder='username'
        onChange={(e)=> setUsername(e.target.value)}
        value={username} />

        <input type="text"
        placeholder='password'
        onChange={(e)=> setPassword(e.target.value)}
        value={password} />

        <button type='submit' onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login
