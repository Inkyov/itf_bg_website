'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Participants', {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      first_name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      last_name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      dob: {
        allowNull: false,
        type: Sequelize.DATE
      },
      degree_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Degrees', key: 'id'}
      },
      category_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Categories', key: 'id'}
      },
      club_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Clubs', key: 'id'}
      },
      age: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW')
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Participants');
  }
};