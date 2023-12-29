const queries=`
   type Query{
        getUser:User!
        loginUser(mail:String!,password:String!):String
    }
`

module.exports=queries

