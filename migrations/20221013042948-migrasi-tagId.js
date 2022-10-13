'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    return queryInterface.addColumn(`Posts`, 'TagId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Tags',
        key: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    })
  },

  down (queryInterface, Sequelize) {
    return queryInterface.removeColumn(`Posts`, 'TagId', {})
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
