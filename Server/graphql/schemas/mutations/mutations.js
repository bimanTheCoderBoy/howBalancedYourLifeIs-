const mutations=`
type Mutation{
    createUser(name:String!,mail:String!,password:String!):String
    createLifeTest(work:WorkInput, health:HealthInput, relation:RelationInput):LifeTest
}
`
module.exports=mutations
