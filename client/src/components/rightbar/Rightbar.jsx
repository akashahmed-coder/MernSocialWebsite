import React from 'react'
import Online from '../online/Online'
import './rightbar.css'
import {users} from '../../dummyData'
export default function Rightbar() {
  return (
    <div className='rightbar'>
        <div className='rightbarWrapper'>
            <div className='birthdayContainer'>
              <img src='assets/gift.png' alt=''className='birthdayImg'/>
              <span className='birthdayText'>
                <b>Ahmed Xony</b> and <b>3 other friends</b> have birthday today.
              </span>
            </div>
            <img src='assets/earn.webp' alt='' className='rightbarAd'/>
            <h4 className='rightbarText'>Online Friends</h4>
            <ul className='rightbarFriendList'>
              {
                users.map(u=>(
                  <Online key={u.id} user={u}/>
                ))
              }
            </ul>
        </div>
    </div>
  )
}
