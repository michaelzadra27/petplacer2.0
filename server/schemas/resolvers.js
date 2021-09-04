const { Profile, Group, Like } = require('../models')
const { AuthenticationError } = require('apollo-server-express')
const { signToken } = require('../utils/auth')

const resolvers = {
    Query: {
        profiles: async ()=> {
            return await Profile.find()
        },
        findGroup: async (parent, { name }) => {
            return await Group.findOne({groupName: name})
        }
    },

    Mutation: {
        signUp: async (parent, { email, password }) => {
            return await Profile.create({ email: email }, { password: password })
        },
        login: async (parent, { email, password }) => {
            const profile = await Profile.findOne({ email })

            if(!profile){
                throw new AuthenticationError('No user found with that email')
            }

            const checkPassword = await profile.isCorrectPassword(password)

            if(!checkPassword){
                throw new AuthenticationError('Incorrect password')
            }

            const token = signToken(profile)
            return { token, profile }
        },
        createGroup: async (parent, { name, email }) => {
            return await Group.create({ groupName: name }, { users: [email] })
        },
        joinGroup: async (parent, { name, email }) => {
            const joinedGroup = await Group.findOneAndUpdate({ groupName: name },{ users: [...users, email] })
            const joinedUser = await  Profile.findOneAndUpdate({ email: email }, { group: name })
        },
        like: async (parent, { email, group, dogId }) => {
            return await Like.create({userEmail: email}, { group: group }, { dog_ID: dogId })
        }

    }
}

module.exports = resolvers;