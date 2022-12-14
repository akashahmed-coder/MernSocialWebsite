import React from 'react'
import Online from '../online/Online'
import './rightbar.css'
import gift from '../img/gift.png'
import {users} from '../../dummyData'

export default function Rightbar({profile}) {
//  const PF = process.env.REACT_APP_PUBLIC_FOLDER
const HomeRigthBar = () => {
  return(
    <>
    <div className='birthdayContainer'>
              <img src={gift} alt=''className='birthdayImg'/>
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
          {
            users.map(user=>{
              return(
              <div className='rightbarFollowing'>
                <img className='rightbarFollowingImg' src={user.profilePicture} alt=''/>
                <span className='rightBarFollowingName'>{user.username}</span>
            </div>
              )
            })
          }

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
