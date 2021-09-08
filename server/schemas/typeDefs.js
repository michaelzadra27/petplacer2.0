const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Profile {
        _id: ID
        email: String
        password: String
    }

    type Group {
        _id: ID
        groupName: String
        profile: [Profile]
    }

    type like {
        _id: ID
        email: String
        group: String
        dog_ID: Int
    }

    type Auth {
        token: ID!
        profile: Profile
    }

    type Query {
        me: Profile
        profiles: [Profile]
        findGroup(name: String!): Group
    }

    type Mutation {
        signUp(email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        createGroup(groupName: String!, email: String!): Group
        joinGroup(groupName: String!, email: String!): Group
        like(email: String!, group: String!, dog_ID: Int!): like
    }
`

module.exports = typeDefs;