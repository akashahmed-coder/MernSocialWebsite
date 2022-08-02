import React from 'react'
import Topber from '../../topbar/Topber'
import Feed from '../../feed/Feed'
import Sidebar from '../../sidebar/Sidebar'
import Rightbar from '../../rightbar/Rightbar'
import './home.css'
export default function Home() {
  return (
    <div>
       <Topber/>
       <div className='homeContainer'>
          <Sidebar/>
          <Feed/>
          <Rightbar/>
       </div>
    </div>
  )
}
