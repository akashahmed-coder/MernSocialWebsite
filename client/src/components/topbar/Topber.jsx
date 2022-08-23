import React from 'react'
import {Person, Search, Chat , Notifications} from '@material-ui/icons'
import './topbar.css'

export default function Topber() {
  return (
    <div className='topbarContainer'>
        <div className='topbarLeft'>
            <span className='logo'>Lamasocia</span>
        </div>
        <div className='topbarCenter'>
            <div className='searchbar'>
               <Search className='searchIcon'/>
               <input placeholder='Search for friend, post, video'/>
            </div>
        </div>
        <div className='topbarRight'>

         <div className='topbarLinks'>
          <span className='topbarLink'>Homepage</span>
          <span className='topbarLink'>Timeline</span>
         </div>

         <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person/>
            <span className="topbarIconBadge">1</span>
          </div>

          <div className="topbarIconItem">
            <Chat/>
            <span className="topbarIconBadge">1</span>
          </div>

          <div className="topbarIconItem">
            <Notifications/>
            <span className="topbarIconBadge">1</span>
          </div>

         </div>
         <img src='http://localhost:3000/assets/profile/2.webp' alt='' className='topbarImg'/>
          </div>          
    </div>
  )
}
