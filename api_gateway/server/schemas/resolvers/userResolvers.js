// Resolvers for user management are written here
const controllers = require('../../userManagement/contollers.js');

const generateResponse = require('../../utils/generateResponse.js');


const userResolvers = {
    
  Query: {
    // Fetches a single user from DB
    user: async ( _source, _args, { db }, info ) => {
      
      try {

        const payload = await controllers.findOneUser(db.user, _args.id);  
        return generateResponse(payload);

      } catch (err) {
          throw err
      }
    },
  },
  
  Mutation: {
    // Creates a new user in DB
    newUser: async ( _source, _args, { db }, info ) => {

      try {

        const payload = await controllers.createUser(db.user, _args.data);
        return generateResponse(payload);
        
      } catch (err) {
        throw err
      }
    },

    // Validates the existing user for login
    existingUser: async ( _source, _args, { db }, info ) => {

      try {
        const payload = await controllers.authenticateUser(db.user, _args.data);
        return generateResponse(payload);

      } catch (err) {
        throw err
      }
    }
  }
}

module.exports = userResolvers;
