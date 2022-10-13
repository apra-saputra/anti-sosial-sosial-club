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
     const tag = JSON.parse(fs.readFileSync('./data/tags.json', 'utf-8'))
     tag.forEach(el => {
      delete el.id
      el.createdAt = el.updatedAt = new Date()
     })
     return queryInterface.bulkInsert('Tags', tag, {})
  },

  down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Tags', null, {})
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
