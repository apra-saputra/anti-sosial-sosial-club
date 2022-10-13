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
     const post = JSON.parse(fs.readFileSync('./data/posts.json', 'utf-8'))
     post.forEach(el => {
      el.createdAt = el.updatedAt = new Date()
     })
     return queryInterface.bulkInsert('Posts', post, {})
  },

  down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Posts', null, {})
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
