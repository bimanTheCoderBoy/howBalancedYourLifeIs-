const User=require("../../../models/User")
const LifeTest=require("../../../models/LifeTest")

const resolMutations={

Mutation:{

    createUser: async (_,{ name,password,mail }) => {
        try {
          console.log(name,password,mail);
          const user = new User({name,mail,password });
          await user.save();
          return user;
        } catch (error) {
          console.error(error);
          throw new Error('Error creating user');
        }
      },


      createLifeTest: async (_,{ userId, work, health, relation }) => {
        try {
          const lifeTest = new LifeTest({
            user: userId,
            work,
            health,
            relation,
           
          });
          const addToUserArray=User.updateOne({_id:userId},{$push:{lifeTests:lifeTest._id}})
          await Promise.all([lifeTest.save(),addToUserArray])
          
          return lifeTest;
        } catch (error) {
          console.error(error);
          throw new Error('Error creating life test');
        }
      },
    },
      
}

module.exports=resolMutations