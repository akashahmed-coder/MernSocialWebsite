import React from 'react'
import './post.css'
import { MoreVert } from '@material-ui/icons'
export default function Post() {
  return (
    <div className='post'>
        <div className='postWrapper'>
            <div className='postTop'>
                <div className='postTopRight'>

                <img src='assets/profile/2.webp' alt='' className='postProfileImg'/>
                   <span className='postUsername'>Akash Ahmed</span>
                   <span className='postDate'>5 min ago</span>
                </div>
                <div className='postTopLeft'>
                <MoreVert/>
                </div>
                
            </div>
            <div className='postCenter'>
                <span className='PostText'>Hey thi is my first post</span>
                <img src='assets/profile/5.webp' alt='' className='postImg'/>
            </div>
            <div className='postBottom'>
                <div className='postBottomLeft'>
                    <img className='likeIcon' src='assets/likes.png' alt=''/>
                    <img className='likeIcon' src='assets/heart.png' alt=''/>
                    <span className='postLikeCounter'>32 people like it</span>
                </div>
                <div className='PostBottomRight'>
                    <span className='postCommentText'>9 comments</span>
                </div>
            </div>        
        </div>
    </div>
  )
}
