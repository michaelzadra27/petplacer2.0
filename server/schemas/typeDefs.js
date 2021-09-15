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
        userEmail: String
        groupName: String
        dog_ID: Int
        dogName: String
        contactCity: String
        contactEmail: String
        dogURL: String
        dogPhotoApi: String
    }

    type Auth {
        token: ID!
        profile: Profile
    }

    type Query {
        me: Profile
        profiles: [Profile]
        findGroup(groupName: String!): Group
        getLikes(email: String!): [like]
        getMatches(groupName: String!): like
    }

    type Mutation {
        signUp(email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        createGroup(groupName: String!): Auth
        joinGroup(groupName: String!): Group
        like(dogPhotoApi: String, email: String, groupName: String, dog_ID: ID, dogName: String, contactCity: String, contactEmail: String, dogURL: String): like
    }
`

module.exports = typeDefs;