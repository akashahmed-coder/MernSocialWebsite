import './online.css'
import React from 'react'

export default function Online({user}) {
  // const PF = process.env.REACT_APP_PUBLIC_FOLDER
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
