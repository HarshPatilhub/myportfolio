import React from 'react'
import UserContext from '../contexts/UserContext'
import {useContext} from 'react'

function Profile() {
    const {user}= useContext(UserContext)

  return (
    
    
    <div>
      <h2>Profile: {user}  </h2>

    </div>
  )
}

export default Profile
