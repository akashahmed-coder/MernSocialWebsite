import React from 'react'
import './closefriends.css'

export default function CloseFriends({user}) {
  const PF = "http://localhost:3000/assets/"
  return (
<li className='sidebarFriend'>
    <img src={PF+user.profilePicture} alt='' className='sidebarFriendImg'/>
    <span className='sidebarFriendName'>{user.username}</span>
</li>
  )
}
