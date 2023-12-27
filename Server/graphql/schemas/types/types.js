const types = `
type Work {
    money: Int
    mission: Int
    growth: Int
  }
  
type Health {
    body: Int
    mind: Int
    soul: Int
  }
  
type Relation {
    romance: Int
    family: Int
    friend: Int
  }
    type User{
        id:ID!
        mail:String!
        name:String!
        lifeTests:[LifeTest]
      }
    type LifeTest{
        id: ID!
        work: Work
        health: Health
        relation: Relation
        date: String
      }
    }
`