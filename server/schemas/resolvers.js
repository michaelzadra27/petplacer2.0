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
            console.log("sign up")
            console.log(args)
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
        createGroup: async (parent, { groupName, email }, context) => {
            // if(context.user){
                const userProfile = await Profile.findOne({email: email})
                return await Group.create({ groupName: groupName, profiles: [userProfile] })
            // } else {
            //     throw new AuthenticationError('You need to be logged in to create a group')
            // }
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
        like: async (parent, { email, groupName, dog_ID }, context) => {
            // if(context.user){
            return await Like.create({userEmail: email, groupName: groupName, dog_ID: dog_ID })
            // function toFindDuplicates(arry) {
            //     let sorted = arry.sort()
            //     for(i=0; i<arry.length; i++){
            //         if(arry[i] === arry[i+1]){
            //             sorted.splice(i,1)
            //         }
            //     }
            //     return sorted
            // }
        },

    }
}

module.exports = resolvers;