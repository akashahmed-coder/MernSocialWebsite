import React from 'react'
import {Person, Search, Chat , Notifications} from '@mui/icons-material'
import './topbar.css'
import { Link } from 'react-router-dom'

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
          <Link to="/"><span className='topbarLink'>Homepage</span></Link>
          <Link to="/profile/akashahmed"><span className='topbarLink'>Timeline</span></Link>
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
         <Link to="/login"><img src='https://res.cloudinary.com/build-it/image/upload/v1656935164/ecommers/mfxjhvspuxgpmsxmtp8c.jpg' alt='' className='topbarImg'/></Link>
          </div>          
    </div>
  )
}
