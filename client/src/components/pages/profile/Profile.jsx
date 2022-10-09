import React from 'react'
import Topber from '../../topbar/Topber'
import Feed from '../../feed/Feed'
import Sidebar from '../../sidebar/Sidebar'
import Rightbar from '../../rightbar/Rightbar'
import './profile.css'
import { users } from '../../../dummyData'

export default function Profile() {
  // const PF = process.env.REACT_APP_PUBLIC_FOLDER

  return (
    
   <div>
       <Topber/>
        <div className='profile'>
            <Sidebar/>
              <div className='profileRight'>
                <div className='profileRightTop'>
                     <div className='profileCover'>
                        <img src={users[3].profilePicture}className='profileCoverImg' alt=''/>
                        <img src={users[1].profilePicture}className='profileUserImg' alt=''/>
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
