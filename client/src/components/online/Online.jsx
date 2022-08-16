import './online.css'
import React from 'react'

export default function Online({user}) {
  return (
            <li className='rightbarFriend'>
                <div className='rightbarProfileImgContainer'>
                  <img src={user.profilePicture} alt='' className='rightbarProfileImg'/>
                  <span className='rightbarOnline'></span>
                </div>
                <sapn className='rightbarUsername'>{user.username}</sapn>
            </li>
  )
}
