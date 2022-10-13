'use strict';
const { Model } = require('sequelize');
const Help = require('../helpers')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasOne(models.Profile)
    }
  }
  User.init({
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull:{
          msg: 'username is required'
        },
        notEmpty:{
          msg: 'username is required'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull:{
          msg: 'Email is required'
        },
        isEmail: {
          msg:"Invalid Email Format!!"
        },
        notEmpty:{
          msg: 'Email is required'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull:{
          msg: 'Password is required'
        },
        notEmpty:{
          msg: 'Password is required'
        },
        len:{
          args:[8,20],
          msg:"Password min 8 character"
        }
      }
    },
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });

  User.beforeCreate((instance, option)=> {
    const hash = Help.bcrypt(instance.password)
    instance.password = hash
    instance.role = 'user'
  })
  return User;
};