import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

export default function Topber() {
  return (
    <div className='topbarContainer'>
        <div className='topbarLeft'>
            <span className='logo'>Lamasocia</span>
        </div>
        <div className='topbarCenter'>
            <div className='searchInput'>
               <SearchIcon/>
               <input placeholder='Search for friend, post, video'/>
            </div>
        </div>
        <div className='topbarRight'></div>          
    </div>
  )
}
