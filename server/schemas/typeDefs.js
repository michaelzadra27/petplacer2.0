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
        findGroup(name: String!): Group
        getLikes(email: String!): [like]
        getMatches(groupName: String!): like
    }

    type Mutation {
        signUp(email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        createGroup(groupName: String!, email: String!): Group
        joinGroup(groupName: String!, email: String!): Group
<<<<<<< HEAD
        like(email: String!, groupName: String!, dog_ID: ID!, dogName: String!, contactCity: String!, contactEmail: String!, dogURL: String!, dogPhotoApi: String!): [like]
=======
        like(dogPhotoApi: String, email: String, groupName: String, dog_ID: ID, dogName: String, contactCity: String, contactEmail: String, dogURL: String): like
>>>>>>> master
    }
`

module.exports = typeDefs;