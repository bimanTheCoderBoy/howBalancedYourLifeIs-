const User=require("../../../models/User")
const LifeTest=require("../../../models/LifeTest")
const resolQueies={
User:{
    lifeTests:async(user)=>{
      console.log(user);
     const lifeTests=LifeTest.find({user:user.id});
     console.log(lifeTests);
     
     return lifeTests
    },
  },
  
  Query:{
    getUser:async(_,{id})=>{
        try {
          const user= await User.findById(id)
          console.log(user);
          return user
        } catch (error) {
          console.error(error);
          throw new Error('Error creating user');
        }
       
      },
    },
    
}

module.exports=resolQueies