import React from 'react'
import Online from '../online/Online'
import './rightbar.css'
import {users} from '../../dummyData'

export default function Rightbar({profile}) {
 
const HomeRigthBar = () => {
  return(
    <>
    <div className='birthdayContainer'>
              <img src='assets/gift.png' alt=''className='birthdayImg'/>
              <span className='birthdayText'>
                <b>Ahmed Xony</b> and <b>3 other friends</b> have birthday today.
              </span>
            </div>
            <img src='assets/earn.webp' alt='' className='rightbarAd'/>
            <h4 className='rightbarText'>Online Friends</h4>
            <ul className='rightbarFriendList'>
              {
                users.map(u=>(
                  <Online key={u.id} user={u}/>
                ))
              }
            </ul>
    </>
  )
}

const ProfileRightBar = () => {
  return(
    <>
       <h4 className='rightbarTitle'>User information</h4>
       <div className='rightbarInfo'>
           <div className='rightbarInfoItem'>
             <span className='rightbarInfoKey'>City: </span>
             <span className='rightbarInfoValue'>Dhaka </span>
           </div>
           <div className='rightbarInfoItem'>
             <span className='rightbarInfoKey'>Country: </span>
             <span className='rightbarInfoValue'>Bangladesh </span>
           </div>
           <div className='rightbarInfoItem'>
             <span className='rightbarInfoKey'>Relationship: </span>
             <span className='rightbarInfoValue'>Single </span>
           </div>
       </div>
       <h4 className='rightbarTitle'>User Friends</h4>
       <div className='rightbarFollowings'>
        <div className='rightbarFollowing'>
            <img className='rightbarFollowingImg' src='assets/profile/sobuj.jpg' alt=''/>
            <span className='rightBarFollowingName'>Ahmed Sobuj</span>
        </div>
        <div className='rightbarFollowing'>
            <img className='rightbarFollowingImg' src='assets/profile/xony.jpg' alt=''/>
            <span className='rightBarFollowingName'>Ahmed Sobuj</span>
        </div>
        <div className='rightbarFollowing'>
            <img className='rightbarFollowingImg' src='assets/profile/rizvi.jpg' alt=''/>
            <span className='rightBarFollowingName'>Ahmed Sobuj</span>
        </div>
        <div className='rightbarFollowing'>
            <img className='rightbarFollowingImg' src='assets/profile/sahalom.jpg' alt=''/>
            <span className='rightBarFollowingName'>Ahmed Sobuj</span>
        </div>
        <div className='rightbarFollowing'>
            <img className='rightbarFollowingImg' src='assets/profile/rasu.jpg' alt=''/>
            <span className='rightBarFollowingName'>Ahmed Sobuj</span>
        </div>
        <div className='rightbarFollowing'>
            <img className='rightbarFollowingImg' src='assets/profile/tawsif.jpg' alt=''/>
            <span className='rightBarFollowingName'>Ahmed Sobuj</span>
        </div>

       </div>

    </>
  )
}
  return (
    <div className='rightbar'>
        <div className='rightbarWrapper'>
            <ProfileRightBar/>
        </div>
    </div>
  )
}
