const { Profile, Group, Like } = require('../models')
const { AuthenticationError } = require('apollo-server-express')
const { signToken } = require('../utils/auth')

const resolvers = {
    Query: {
        profiles: async ()=> {
            return await Profile.find()
        },
        findGroup: async (parent, { groupName }) => {
            return await Group.findOne({groupName: groupName})
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
            console.log("getlikes")
            console.log(email)
            const likessssss = await Like.find({userEmail: email})
            return {...likessssss}
        },

        findLike: async (parent, args, context) => {
            console.log("findLike")
            console.log(context.user.email)
            // console.log(context)
            // console.log(context.user.email)
            const likes = await Like.find({email: context.user.email})
            console.log(likes)
            return likes
        },
        getMatches: async (parent, args, context) => {
            console.log("match resolver")
            console.log(context.user.groupName)
            const groupMembers = await Group.find({groupName: context.user.groupName}, {profiles: 1})
            

            let allLikes = [];
            for(i=0; i<groupMembers[0].profiles.length; i++){

                const likes = await Like.find({email: groupMembers[0].profiles[i].email})
                let sortedLikes = likes.sort(function(a, b) {
                    let keyA = a.dogName,
                        keyB = b.dogName;    
                    // Compare the 2 dates
                    if (keyA < keyB) return -1;
                    if (keyA > keyB) return 1;
                    return 0;
                  });
                    console.log("length"+likes.length)
                    if(likes.length>1){
                            for(k=0; k<likes.length; k++){
                                console.log(k)
                                if(sortedLikes[k].dogName === sortedLikes[k+1].dogName){
                                    dupe = true
                                    console.log("hit")
                                    sortedLikes.splice(k,1)
                                }
                            }
                        
                    }
                    
                    allLikes = [...allLikes, ...sortedLikes]
            }
            console.log("======================================")
            let allSortedLikes = allLikes.sort(function(a, b) {
                let keyA = a.dogName,
                    keyB = b.dogName;    
                // Compare the 2 dates
                if (keyA < keyB) return -1;
                if (keyA > keyB) return 1;
                return 0;
              });
            let matches = [];
            for(l=0; l<allSortedLikes.length; l++){
                if(!allSortedLikes[l+1]){break}
                if(allSortedLikes[l].dogName === allSortedLikes[l+1].dogName){
                    matches = [...matches, allSortedLikes[l]]
                }
            }
            console.log("hit")
            if(matches.length>1){
                for(g=0; g<matches.length; g++){
                    if(matches[g].dogName === matches[g+1].dogName){
                        matches.splice(g,1)
                    }
                }
            }
            
            console.log("+++++++++++++++++++++++")
            console.log(matches)
            console.log("////////////////////////////////////////////////////////////////////////////////////////////////")

            return matches
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
        joinGroup: async (parent, { groupName }, context) => {
            // if(context.user){
            const joinedUser = await Profile.findOneAndUpdate({email: context.user.email}, {groupName: groupName})
            const joinedGroup = await Group.findOneAndUpdate({ groupName: groupName }, {$push: {profiles: joinedUser}})
            return joinedGroup
            // } else {
            //     throw new AuthenticationError('You need to be logged in to join a group')
            // }
        },
        like: async (parent, {dogPhotoApi, email, groupName, dog_ID, dogName, contactCity, contactEmail, dogURL, description}, context) => {
            console.log(context.user)
            return await Like.create({dogPhotoApi: dogPhotoApi, email: context.user.email, groupName: context.user.groupName, dog_ID: dog_ID, dogName: dogName, contactCity: contactCity, contactEmail: contactEmail, dogURL: dogURL, description: description})
            // } else {
            //     throw new AuthenticationError('You need to be logged in to like a pet')
            // }
        },

    }
}

module.exports = resolvers;