const jwt= require("jsonwebtoken")

const generatetoken=(id)=>{
    return jwt.sign({id},process.env.jwt_secret,{expiresIn:"30d",});
    
};
module.exports=generatetoken