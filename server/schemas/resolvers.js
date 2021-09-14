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
        },
        me: async (parent, args, context) => {
            console.log(context.user)
            console.log(context.profile)
            if(context.user) {
                return Profile.findOne({_id: context.user._id})
            } else {
                throw new AuthenticationError('You need to be logged in')
            }
        },
        getLikes: async (parent, { email }) => {
            console.log(email)
            const likes = await Like.find({userEmail: email})
            return likes
        },
        getMatches: async (parent, { groupName }) => {
            console.log(groupName)
            const groupLikes = await Like.find({groupName: groupName}, {userEmail: 0, groupName: 0, _id: 0, __v: 0})
            console.log(groupLikes)
        }
    },

    Mutation: {
        signUp: async (parent, args) => {
            const profile = await Profile.create(args)
            const token = signToken(profile)
            return { token, profile }
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
        createGroup: async (parent, { groupName }, context) => {
            // if(context.user){
                
                const userProfile = await Profile.findOneAndUpdate({email: context.user.email}, {groupName: groupName})
                
                const updated = await Profile.findOne({email: context.user.email})
                const token = signToken(updated)
                
                const newGroup = await Group.create({ groupName: groupName, profiles: [updated] })
                console.log(token)
                return { token }
        },
        joinGroup: async (parent, { groupName, email }, context) => {
            // if(context.user){
                const joinedUser = await  Profile.findOneAndUpdate({ email: email }, { group: groupName })
                const joinedGroup = await Group.findOneAndUpdate({ groupName: groupName }, {$push: {profiles: joinedUser}})
            return joinedGroup
            // } else {
            //     throw new AuthenticationError('You need to be logged in to join a group')
            // }
        },
        like: async (parent, {dogPhotoApi, email, groupName, dog_ID, dogName, contactCity, contactEmail, dogURL }, context) => {
            console.log(context.user)
            return await Like.create({dogPhotoApi: dogPhotoApi, email: context.user.email, groupName: context.user.groupName, dog_ID: dog_ID, dogName: dogName, contactCity: contactCity, contactEmail: contactEmail, dogURL: dogURL})
            // } else {
            //     throw new AuthenticationError('You need to be logged in to like a pet')
            // }
        },

    }
}

module.exports = resolvers;