const bcrypt = require('bcrypt');

module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
      firstName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Field 'name' is required"
          },
          notEmpty: {
            msg: 'Name cannot be empty'
          },
          len: {
            args: [2, 20],
            msg: "Name length must be between 2-20 characters"
          }
        }
      },

      lastName: {
        type: Sequelize.STRING,
        allowNull: true,
      },

      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
          // Custom validation to check if email already exists or not
          async isUnique(value, next) {
            email = await User.findOne({ where: { email: value } })
            if (email) {
              next("Email already in use!")
            }else {
              next();
            }
          },
          isEmail: {
            msg: 'Please provide a vaild email address',
          },
          notNull: {
            msg: "Field 'email' is required"
          },
          notEmpty: {
            msg: 'Email cannot be empty'
          },
          len: {
            args: [1, 50],
            msg: "Email length must be between 1-50 characters"
          }
        },
      },

      password: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Field 'password' is required"
          },
          notEmpty: {
            msg: 'Password cannot be empty'
          },
        }
      },

      image: {
        type: Sequelize.STRING
      }

    });

    
    // CLASS METHODS

    // They can be used after creating User class. 
    // For eg:
    // const hashPwd = await User.hashPassword(password)
    // which will return hashed password.

    User.hashPassword = function(password) {
      return bcrypt.hash(password, bcrypt.genSaltSync(10), null);
    }

    // This class method compares the hashed passwords 
    User.validPassword = function(payload_password, db_password) {
     return bcrypt.compare(payload_password, db_password)
    };


    // INSTANCE METHODS

    // They can be used after creating an instance of User class. 
    // This instance method overrides the toJSON(),
    // clones the values and removes the password
    // from the cloned values.
    // For eg:
    // const user = await User.create(payload)
    // console.log(await user.toJSON())
    // which will return data with no password included.

    User.prototype.toJSON = function() {
      const values = Object.assign({}, this.get());
      
      delete values.password;
      return values;
    };

    return User;
};


// {data: {message}}, {data: {token: null, message: "Account verified"}}
