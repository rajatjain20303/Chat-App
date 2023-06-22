var express= require("express")
var {chats}=require("./data/data")
var app=express()
var dotenv=require("dotenv")
var connectDB=require("./CONFIG/db")
const{errorHandler,notFound}=require("./middleware/errormiddleware")
dotenv.config()
connectDB()
var userRoutes=require('./routes/userRoutes')
var chatRoutes=require('./routes/chatRoutes')
app.use(express.json());
app.get('/',(req,res)=>{
    res.send("api is running")
})

// app.get('/chats',(req,res)=>{
//     res.send(chats);
// })


// app.get('/chat/:id',(req,res)=>{
//     //console.log(req.params.id)
//     var single=chats.find(c=>c._id===req.params.id)
//     res.send(single)
//})

app.use('/user',userRoutes)
app.use('/chat',chatRoutes)
app.use(notFound)
app.use(errorHandler)
var PORT=process.env.PORT|| 5000
app.listen(PORT, console.log("Server started successfully"))