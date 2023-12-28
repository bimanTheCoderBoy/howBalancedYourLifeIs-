
const LifeTest=require("../../../models/LifeTest")
const UserService =require("../../../services/user/user")
const LifeTestService=require("../../../services/lifeTest/lifeTest")
const resolQueies={
User:{
    lifeTests:async(user)=>{
    try {
      const lifeTests=await LifeTestService.getLifeTestsByUserId(user.id)
      if(!lifeTests)
      throw new Error("life tests not found")
      return lifeTests
    } catch (error) {
      throw new Error("life tests not found")
    }
    
    },
  },
  
  Query:{
    getUser:async(_,{id},context)=>{
      if(context.isValid){
      try {
        const user =await UserService.getUser(id)
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