import React from 'react'
import './post.css'
import { MoreVert } from '@material-ui/icons'
import { users } from '../../dummyData'
export default function Post({post}) {
   const user = users.filter(u => u.id === 1)
   console.log(user)
  return (
    <div className='post'>
        <div className='postWrapper'>
            <div className='postTop'>
                <div className='postTopRight'>

                <img src={users.filter(u =>u.id === post.id)[0].profilePicture} alt='' className='postProfileImg'/>
                   <span className='postUsername'>{users.filter(u =>u.id === post.id)[0].username}</span>
                   <span className='postDate'>{post.date}</span>
                </div>
                <div className='postTopLeft'>
                <MoreVert/>
                </div>
                
            </div>
            <div className='postCenter'>
                <span className='PostText'>{post?.desc}</span>
                <img src={post.photo} alt='' className='postImg'/>
            </div>
            <div className='postBottom'>
                <div className='postBottomLeft'>
                    <img className='likeIcon' src='assets/likes.png' alt=''/>
                    <img className='likeIcon' src='assets/heart.png' alt=''/>
                    <span className='postLikeCounter'>{post.like} people like it</span>
                </div>
                <div className='PostBottomRight'>
                    <span className='postCommentText'>{post.comment} comments</span>
                </div>
            </div>        
        </div>
    </div>
  )
}
