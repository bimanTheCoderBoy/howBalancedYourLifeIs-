const express=require("express")
const cors=require("cors")
const bodyParser=require("body-parser")

//graphql
const {ApolloServer}=require("@apollo/server")
const {expressMiddleware}=require("@apollo/server/express4")
const rootResolvers=require("./graphql/resolvers/root_resolver")
const graphqlSchema=require("./graphql/schemas/graphql_schema")


//getting DB
const dbConnect=require("./utils/database/dbConnect")
//env configuration
const dotenv=require("dotenv")
dotenv.config()




const runServer=async()=>{
    //dbconnect
    await dbConnect();

    const app=express();
    //middleware
    app.use(bodyParser.json())
    app.use(cors())
    const server=new ApolloServer({
       typeDefs:graphqlSchema,
       resolvers:rootResolvers
    })

    


    
   
    await server.start()
    app.use("/graphql",expressMiddleware(server))


    //Listen Server
    const PORT = process.env.PORT || 5000;
    try {
        app.listen(PORT,()=>{
            console.log(`server is listening on http://localhost:${PORT}/graphql/`);
            
        })
    } catch (error) {
        //pore dekhchi
    }
   
   
}


runServer();
