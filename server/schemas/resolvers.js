const { Profile } = require('../models')

const resolvers = {
    Query: {
        profiles: async ()=> {
            return Profile.find()
        }
    }
}

module.exports = resolvers;