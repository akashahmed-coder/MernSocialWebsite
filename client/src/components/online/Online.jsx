import './online.css'
import React from 'react'

export default function Online({user}) {
  const PF = "http://localhost:3000/assets/"
  return (
            <li className='rightbarFriend'>
                <div className='rightbarProfileImgContainer'>
                  <img src={PF+user.profilePicture} alt='' className='rightbarProfileImg'/>
                  <span className='rightbarOnline'></span>
                </div>
                <sapn className='rightbarUsername'>{user.username}</sapn>
            </li>
  )
}
