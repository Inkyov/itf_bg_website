'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Degrees', [
      { name: '1 Dan' },
      { name: '2 Dan' },
      { name: '3 Dan' },
      { name: '4 Dan' },
      { name: '5 Dan' }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Degrees', null, {});
  }
};
