const mutationResolvers=require("./mutations/resolMutations")
const queryResolvers=require("./queries/resolQueries")

const rootResolvers={
    ...mutationResolvers,
    ...queryResolvers
}

module.exports=rootResolvers
