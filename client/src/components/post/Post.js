import React, { useState } from 'react'
import './post.css'
import { MoreVert } from '@mui/icons-material'
import likes from '../img/likes.png'
import heart from '../img/heart.png'

import { users } from '../../dummyData'
export default function Post({post}) {
    const [like,setLike] = useState(post.like)
    const [isliked,setIsLiked] = useState(false)

    const handleLike = () => {
        setLike(isliked?like-1:like+1)
        setIsLiked(!isliked)
    }
    const UF = users.filter(u =>u.id === post.id)[0].profilePicture
    // const PF = "http://localhost:3000/assets/"
  return (
    <div className='post'>
        <div className='postWrapper'>
            <div className='postTop'>
                <div className='postTopRight'>

                <img src={UF} alt='' className='postProfileImg'/>
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
                    <img className='likeIcon' onClick={handleLike} src={likes} alt=''/>
                    <img className='likeIcon' onClick={handleLike} src={heart} alt=''/>
                    <span className='postLikeCounter'>{like} people like it</span>
                </div>
                <div className='PostBottomRight'>
                    <span className='postCommentText'>{post.comment} comments</span>
                </div>
            </div>        
        </div>
    </div>
  )
}
