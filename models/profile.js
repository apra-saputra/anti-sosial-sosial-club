'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Profile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here 
      Profile.belongsTo(models.User)
      Profile.hasMany(models.Post)
      
    }

    isAge(dateOfBirth) {
      let age = new Date().getFullYear() - new Date(this.dateOfBirth).getFullYear()
      if( age > 17 ){
        return false
      }
      return true
    }

    get newAge() {
      let age = new Date().getFullYear() - new Date(this.dateOfBirth).getFullYear()
      return age
    }

    get formatDate() {
      return this.dateOfBirth.toISOString().split("T")[0]
    }
  }

  Profile.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    dateOfBirth: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        is17YearOld(value){
          if(this.isAge(value)){
            throw new Error(`Your age must be higher than 17th years old!`)
          }
        }
      }
    },
    gender: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    imageUrl: DataTypes.STRING,
    UserId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Profile',
  });
  return Profile;
};