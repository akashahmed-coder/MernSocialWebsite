import React from 'react'
import Topber from '../../topbar/Topber'
import Feed from '../../feed/Feed'
import Sidebar from '../../sidebar/Sidebar'
import Rightbar from '../../rightbar/Rightbar'
import './profile.css'

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
                        <img src={`https://res.cloudinary.com/build-it/image/upload/v1654066690/ecommers-2/r7sd47gimvarrgqe4rw4.jpg`}className='profileCoverImg' alt=''/>
                        <img src={`https://res.cloudinary.com/build-it/image/upload/v1654164538/ecommers-2/ezafrniz1tzmo0ijbb1p.jpg`}className='profileUserImg' alt=''/>
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
