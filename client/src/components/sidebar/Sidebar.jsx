import React from 'react'
import './sidebar.css'
import {RssFeed , Chat, PersonalVideo, Group,Bookmark ,Help ,Work ,Event ,School} from '@material-ui/icons'
import CloseFriends from '../closeFriends/CloseFriends'
import {users} from '../../dummyData'

export default function Sidebar() {
  return (
    <div className='sidebar'> 
        <div className='sidebarWrapper'>
            <ul className='sidebarList'>
                <li className='sidebarListItem'>
                    <RssFeed className="sidebarIcon"/>
                    <span className='sidebarListItemText'> Feed</span>
                </li>
                <li className='sidebarListItem'>
                    <Chat className="sidebarIcon"/>
                    <span className='sidebarListItemText'> Chats</span>
                </li>
                <li className='sidebarListItem'>
                    <PersonalVideo className="sidebarIcon"/>
                    <span className='sidebarListItemText'> Videos</span>
                </li>
                <li className='sidebarListItem'>
                    <Group className="sidebarIcon"/>
                    <span className='sidebarListItemText'> Groups</span>
                </li>
                <li className='sidebarListItem'>
                    <Bookmark className="sidebarIcon"/>
                    <span className='sidebarListItemText'> Bookmarks</span>
                </li>
                <li className='sidebarListItem'>
                    <Help className="sidebarIcon"/>
                    <span className='sidebarListItemText'> Questions</span>
                </li>
                <li className='sidebarListItem'>
                    <Work className="sidebarIcon"/>
                    <span className='sidebarListItemText'> Work</span>
                </li>
                <li className='sidebarListItem'>
                    <Event className="sidebarIcon"/>
                    <span className='sidebarListItemText'> Event</span>
                </li>
                <li className='sidebarListItem'>
                    <School className="sidebarIcon"/>
                    <span className='sidebarListItemText'> Courses</span>
                </li>
            </ul>
            <button className='sidebarButton'>Show More</button>
            <hr className='sidebarHr'/>
            <ul className='sidebarFriendList'>
            {
                users.map(u=>(
                    <CloseFriends key={u.id} user={u}/>
                ))
            }
            </ul>
        </div>
    </div>
  )
}
