const UserService=require("../../../services/user/user")
const LifeTestService = require("../../../services/lifeTest/lifeTest");

const resolMutations={

Mutation:{

    createUser: async (_,payload,context) => {
       try {
        const { name,password,mail }=payload
        console.log(payload);
        const token= await UserService.createUser(payload,context);
        return token;
       } catch (error) {
        throw new Error("Error creating user")
       }
      },


      createLifeTest: async (_,{ userId, work, health, relation }) => {
        try {
          const lifeTest = await LifeTestService.createLifeTestByUserId(userId, work, health, relation)
          return lifeTest;
        } catch (error) {
          console.error(error);
          throw new Error('Error creating life test');
        }
      },
    },
      
}

module.exports=resolMutations