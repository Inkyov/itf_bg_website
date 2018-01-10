'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Clubs', [
      { name: 'Falcon' },
      { name: 'Levski Angeli' },
      { name: 'ASTK Trakia' },
      { name: 'ABC Sofia' },
      { name: 'Odin Optiks' }
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Clubs', null, {});
  }
};
