import React from 'react'
import './closefriends.css'

export default function CloseFriends({user}) {
  return (
<li className='sidebarFriend'>
    <img src={user.profilePicture} alt='' className='sidebarFriendImg'/>
    <span className='sidebarFriendName'>{user.username}</span>
</li>
  )
}
