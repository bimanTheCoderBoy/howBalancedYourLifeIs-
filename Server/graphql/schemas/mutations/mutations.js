const mutations=`
type Mutation{
    createUser(name:String!,mail:String!,password:String!):User
    createLifeTest( userId:ID!, work:WorkInput, health:HealthInput, relation:RelationInput):LifeTest
}
`
module.exports=mutations
