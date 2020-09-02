const bcrypt = require('bcrypt');

module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
      name: {
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
          // len: {
          //   args: [8, 20],
          //   msg: "Password length must be between 8-20 characters"
          // }
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
      return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
    }
    
    // INSTANCE METHODS

    // They can be used after creating an instance of User class. 
    // For eg:
    // const user = await User.create(payload)
    // console.log(await user.validPassword(payload.password))
    // which will return true if passwords match.

    User.prototype.validPassword = function(password) {
      return bcrypt.compare(password, this.password)
    }

    return User;
};
