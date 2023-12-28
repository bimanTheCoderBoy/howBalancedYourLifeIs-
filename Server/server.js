const express=require("express")
const cors=require("cors")
const bodyParser=require("body-parser")
const cookieParser=require("cookie-parser")
const context=require("./utils/context")
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
    app.use(cors({
        origin: 'http://localhost:8001/graphql/',
        credentials: true,
    }))
    app.use(cookieParser())
    app.use(bodyParser.json())
    
 
    const server=new ApolloServer({
       typeDefs:graphqlSchema,
       resolvers:rootResolvers,
       includeStacktraceInErrorResponses:false,
       formatError:(error)=>{
            paths=error.path.reduce((ele)=>ele+", ")
            return{
                message: error.message || "An internal error occurred",
                code:error.extensions.code|| "INTERNAL_SERVER_ERROR",
                paths
            }
       }

    })

    

    


    await server.start()
    app.use("/graphql",expressMiddleware(server,{context:context}))
    
    // console.log(check);
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

