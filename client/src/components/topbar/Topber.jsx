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
            <div className='searchInput'>
               <Search/>
               <input placeholder='Search for friend, post, video'/>
            </div>
        </div>
        <div className='topbarRight'>

         <div className='topbarLinks'>
          <span className='topbarLink'>Home Page</span>
          <span className='topbarLink'>timeline</span>
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
          </div>          
    </div>
  )
}
