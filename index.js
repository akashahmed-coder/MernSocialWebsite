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


app.listen(5000,()=>{
    console.log('server is running successfull')
})