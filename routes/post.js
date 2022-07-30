const router = require('express').Router()
const Post = require("../models/postModel")



// create a post
router.post("/",async(req,res)=>{
    const newPost = new Post(req.body)
    try {
      const savedPost =  await newPost.save()
      res.status(200).json(savedPost)
    } catch (err) {
        res.status(500).json(err.message)
    }
})

// update a post
router.put("/:id",async(req,res)=>{
   try {
      const post = await Post.findById(req.params.id)
      if(post.userId === req.body.userId){
        await post.updateOne({$set:req.body})
        res.status(200).json('the post has been update successfully')
      }else{
        res.status(400).json('you can update only your post')
      }
   } catch (err) {
    res.status(500).json(err.message)
   }
})

// delete a post
router.delete("/:id",async(req,res)=>{
    try {
       const post = await Post.findById(req.params.id)
       if(post.userId === req.body.userId){
         await post.deleteOne()
         res.status(200).json('the post has been delete successfully')
       }else{
         res.status(400).json('you can delete only your post')
       }
    } catch (err) {
     res.status(500).json(err.message)
    }
 })
//  like / dislike a post 
router.put("/:id/like",async (req,res)=>{
    try {
        const post = await Post.findById(req.params.id)
        if(!post.likes.includes(req.body.userId)){
           await post.updateOne({$push:{likes:req.body.userId}})
           res.status(200).json("the post has been liked")
        }else{
            await post.updateOne({$pull:{likes:req.body.userId}})
            res.status(200).json("the post has been disliked")
        }
    } catch (err) {
        res.status(500).json(err.msg)
    }
})

module.exports = router