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
                     hey   
                </div>
                <div className='profileRightBottom'>
                  <Feed/>
                  <Rightbar/>
                </div>

              </div>          
        </div>
    </div>
  )
}
