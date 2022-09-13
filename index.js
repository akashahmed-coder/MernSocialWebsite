require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const helmet = require('helmet')
const morgan = require('morgan')

const userRouters = require('./routes/users')
const authRouters = require('./routes/auth')
const postRouters = require('./routes/post')


// mongoose connection
const URL = process.env.MONGOOSE_URL
mongoose.connect(URL,{useNewUrlParser:true},).then(()=>{
console.log("database connection success")
}).catch((err)=>{
    console.log(err)
})

// middleware
app.use(express.json())
app.use(morgan("common"))
app.use(helmet())

// routes
app.use("/api/users",userRouters)
app.use("/api/auth",authRouters)
app.use("/api/posts",postRouters)

const PORT = process.env.PORT || 5000
if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'))
    app.get("*",(req,res)=>{
        res.sendFile(path.join(__dirname,'client','build','index.html'))
    })
}
app.listen(PORT,()=>{
    console.log('server is running successfull')
})