// const db = require('../../userManagement/models/index.js');
// const User = db.user;

const controllers = require('../../userManagement/contollers.js');

const generateResponse = require('../../utils/generateResponse.js');


const userResolvers = {
    
  Query: {
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
    newUser: async ( _source, _args, { db }, info ) => {

      try {

        const payload = await controllers.createUser(db.user, _args.data);
        return generateResponse(payload);
        
      } catch (err) {
        throw err
      }
    },

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
