'use strict';
const fs = require('fs');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     const profil = JSON.parse(fs.readFileSync('./data/profiles.json', 'utf-8'))
     profil.forEach(el => {
      delete el.id
      el.createdAt = el.updatedAt = new Date()
     })
     return queryInterface.bulkInsert('Profiles', profil, {})
  },

  down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Profiles', null, {})
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
