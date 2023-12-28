const jwt=require("jsonwebtoken")
module.exports=async(context)=>{
    const {req,res}=context
    const token=req.headers.authtoken
    // console.log(token);
    let isValid=true
    if(token){
       try {
        const isverified= jwt.verify(token,process.env.JWTSECRET)
       } catch (error) {
            isValid=false
       } 
    }else{
        isValid=false
    }
    return{
        req,
        res,
        isValid
    }

}