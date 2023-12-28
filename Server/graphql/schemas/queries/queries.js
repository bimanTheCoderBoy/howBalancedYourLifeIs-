const queries=`
   type Query{
        getUser(id:ID!):User!
        loginUser(mail:String!,password:String!):String
    }
`

module.exports=queries

