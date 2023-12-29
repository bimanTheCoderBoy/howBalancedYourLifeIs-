const UserService=require("../../../services/user/user")
const LifeTestService = require("../../../services/lifeTest/lifeTest");

const resolMutations={

Mutation:{

    createUser: async (_,payload,context) => {
       try {
        const { name,password,mail }=payload
        const token= await UserService.createUser(payload,context);
        return token;
       } catch (error) {
        throw new Error("Error creating user")
       }
      },


      createLifeTest: async (_,{ work, health, relation },context) => {
        if(context.isValid){
        try {
          const lifeTest = await LifeTestService.createLifeTestByUserId(context.userId, work, health, relation)
          return lifeTest;
        } catch (error) {
          console.error(error);
          throw new Error('Error creating life test');
        }
      }else{
        throw new Error('You are not authorized to do this action')
      }
      },
    },
      
}

module.exports=resolMutations