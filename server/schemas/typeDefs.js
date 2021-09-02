const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Profile {
        _id: ID
        email: String
        password: String
    }

    type Query {
        profiles: [Profile]
    }
`

module.exports = typeDefs;