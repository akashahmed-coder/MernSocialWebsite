import React from 'react'
import Online from '../online/Online'
import './rightbar.css'
import {users} from '../../dummyData'

export default function Rightbar({profile}) {
//  const PF = process.env.REACT_APP_PUBLIC_FOLDER
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
            <img className='rightbarFollowingImg' src={`https://res.cloudinary.com/build-it/image/upload/v1656935164/ecommers/mfxjhvspuxgpmsxmtp8c.jpg`} alt=''/>
            <span className='rightBarFollowingName'>Ahmed Sobuj</span>
        </div>
        <div className='rightbarFollowing'>
            <img className='rightbarFollowingImg' src={`https://res.cloudinary.com/build-it/image/upload/v1656944567/ecommers/rcltvrsgsar5m3cy5c5g.jpg`} alt=''/>
            <span className='rightBarFollowingName'>Ahmed Sobuj</span>
        </div>
        <div className='rightbarFollowing'>
            <img className='rightbarFollowingImg' src={`https://res.cloudinary.com/build-it/image/upload/v1653891827/ecommers/ggqnqcarlcp18tgmbs8z.jpg`} alt=''/>
            <span className='rightBarFollowingName'>Ahmed Sobuj</span>
        </div>
        <div className='rightbarFollowing'>
            <img className='rightbarFollowingImg' src={`https://res.cloudinary.com/build-it/image/upload/v1643450078/ecommers/cprldpb9sdes92fovoei.jpg`} alt=''/>
            <span className='rightBarFollowingName'>Ahmed Sobuj</span>
        </div>
        <div className='rightbarFollowing'>
            <img className='rightbarFollowingImg' src={`https://res.cloudinary.com/build-it/image/upload/v1643449975/ecommers/tdrrtxtleqspyye46x0s.webp`} alt=''/>
            <span className='rightBarFollowingName'>Ahmed Sobuj</span>
        </div>
        <div className='rightbarFollowing'>
            <img className='rightbarFollowingImg' src={`https://res.cloudinary.com/build-it/image/upload/v1656934802/ecommers/tle8mhr7ow9vugfx72ia.webp`} alt=''/>
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
