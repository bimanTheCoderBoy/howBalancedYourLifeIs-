const jwt=require("jsonwebtoken")
module.exports=async(context)=>{
    const {req,res}=context
    const token=req.headers.authtoken
    // console.log(token);
    const sendContext={ req,
        res,}
    let isValid=true
    if(token){
       try {
        const user= jwt.verify(token,process.env.JWTSECRET)
        // console.log(user._id);
        sendContext.userId=user._id;
       } catch (error) {
            isValid=false
       } 
    }else{
        isValid=false
    }
    sendContext.isValid=isValid
    return sendContext

}