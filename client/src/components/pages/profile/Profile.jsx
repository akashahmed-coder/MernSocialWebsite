import React from 'react'
import Topber from '../../topbar/Topber'
import Feed from '../../feed/Feed'
import Sidebar from '../../sidebar/Sidebar'
import Rightbar from '../../rightbar/Rightbar'
import './profile.css'

export default function Profile() {
  return (
   <div>
       <Topber/>
        <div className='profile'>
            <Sidebar/>
              <div className='profileRight'>
                <div className='profileRightTop'>
                     <div className='profileCover'>
                        <img src='assets/profile/akashpost.jpg'className='profileCoverImg' alt=''/>
                        <img src='assets/profile/rizvi.jpg'className='profileUserImg' alt=''/>
                     </div>
                     <div className='profileInfo'>
                        <h4 className='profileInfoName'>Rizvi Ahmed</h4>
                        <span className='profileInfoDesc'>hi this is my profile</span>
                     </div>
                </div>
                <div className='profileRightBottom'>
                  <Feed/>
                  <Rightbar profile/>
                </div>

              </div>          
        </div>
    </div>
  )
}
