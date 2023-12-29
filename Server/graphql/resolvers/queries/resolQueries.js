
const LifeTest=require("../../../models/LifeTest")
const UserService =require("../../../services/user/user")
const LifeTestService=require("../../../services/lifeTest/lifeTest")
const resolQueies={
User:{
    lifeTests:async(user,__,context)=>{
      if(context.isValid){
    try {
      const lifeTests=await LifeTestService.getLifeTestsByUserId(context.userId)
      // console.log("kjhg");
      if(!lifeTests)
      throw new Error("life tests not found")
      return lifeTests
    } catch (error) {
      throw new Error("life tests not found")
    }
  }else{
    throw new Error ('You are not authorized to do this action');
  }
    },
  },
  
  Query:{
    getUser:async(_,__,context)=>{
      if(context.isValid){
      try {
        const user =await UserService.getUser(context.userId)
        if(!user){
          throw new Error ("User not found");
        }
        return user;
      } catch (error) {
        throw new Error ("getting user error");
      }
    }else{
      throw new Error ('You are not authorized to do this action');
    }
        
       
        
      },

      loginUser:async(_, payload)=>{
     
       const token=await UserService.loginUser(payload);
      return token
    }
    },
    
}

module.exports=resolQueies