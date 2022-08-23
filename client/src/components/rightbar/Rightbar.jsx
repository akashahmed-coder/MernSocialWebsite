import React from 'react'
import Online from '../online/Online'
import './rightbar.css'
import {users} from '../../dummyData'

export default function Rightbar({profile}) {
 const PF = process.env.REACT_APP_PUBLIC_FOLDER
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
            <img className='rightbarFollowingImg' src={`${PF}profile/sobuj.jpg`} alt=''/>
            <span className='rightBarFollowingName'>Ahmed Sobuj</span>
        </div>
        <div className='rightbarFollowing'>
            <img className='rightbarFollowingImg' src={`${PF}profile/xony.jpg`} alt=''/>
            <span className='rightBarFollowingName'>Ahmed Sobuj</span>
        </div>
        <div className='rightbarFollowing'>
            <img className='rightbarFollowingImg' src={`${PF}profile/rizvi.jpg`} alt=''/>
            <span className='rightBarFollowingName'>Ahmed Sobuj</span>
        </div>
        <div className='rightbarFollowing'>
            <img className='rightbarFollowingImg' src={`${PF}profile/sahalom.jpg`} alt=''/>
            <span className='rightBarFollowingName'>Ahmed Sobuj</span>
        </div>
        <div className='rightbarFollowing'>
            <img className='rightbarFollowingImg' src={`${PF}profile/rasu.jpg`} alt=''/>
            <span className='rightBarFollowingName'>Ahmed Sobuj</span>
        </div>
        <div className='rightbarFollowing'>
            <img className='rightbarFollowingImg' src={`${PF}profile/tawsif.jpg`} alt=''/>
            <span className='rightBarFollowingName'>Ahmed Sobuj</span>
        </div>

       </div>

    </>
  )
}
  return (
    <div className='rightbar'>
        <div className='rightbarWrapper'>
            {profile?<ProfileRightBar/>:<HomeRigthBar/>}
        </div>
    </div>
  )
}
