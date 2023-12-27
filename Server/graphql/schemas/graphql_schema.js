const inputs=require("./inputs/inputs")
const mutations=require("./mutations/mutations")
const queries=require("./queries/queries")
const types=require("./types/types")

const graphql_schema=`
    ${inputs}\n
    ${mutations}\n
    ${queries}\n
    ${types}\n
`

module.exports=graphql_schema