import React, { useState } from 'react'
import './post.css'
import { MoreVert } from '@material-ui/icons'
import { users } from '../../dummyData'
export default function Post({post}) {
    const [like,setLike] = useState(post.like)
    const [isliked,setIsLiked] = useState(false)

    const handleLike = () => {
        setLike(isliked?like-1:like+1)
        setIsLiked(!isliked)
    }
    const UF = users.filter(u =>u.id === post.id)[0].profilePicture
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
  return (
    <div className='post'>
        <div className='postWrapper'>
            <div className='postTop'>
                <div className='postTopRight'>

                <img src={PF+UF} alt='' className='postProfileImg'/>
                   <span className='postUsername'>{users.filter(u =>u.id === post.id)[0].username}</span>
                   <span className='postDate'>{post.date}</span>
                </div>
                <div className='postTopLeft'>
                <MoreVert/>
                </div>
                
            </div>
            <div className='postCenter'>
                <span className='PostText'>{post?.desc}</span>
                <img src={PF+post.photo} alt='' className='postImg'/>
            </div>
            <div className='postBottom'>
                <div className='postBottomLeft'>
                    <img className='likeIcon' onClick={handleLike} src='assets/likes.png' alt=''/>
                    <img className='likeIcon' onClick={handleLike} src='assets/heart.png' alt=''/>
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
