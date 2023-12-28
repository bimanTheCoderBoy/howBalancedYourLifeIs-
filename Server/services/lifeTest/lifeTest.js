const LifeTest=require("../../models/LifeTest")
class LifeTestService{
    static async getLifeTestsByUserId(userId){
        return await LifeTest.find({user: userId})
    }

    static async createLifeTestByUserId(userId, work, health, relation){
        const lifeTest = new LifeTest({
            user: userId,
            work,
            health,
            relation,
           
          });
          lifeTest.save()
          return lifeTest;
    }
}

module.exports=LifeTestService