'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Participants', [
      { first_name: 'Nikolay', last_name: 'Tomanov', degree_id: 2, category_id: 3, age: 11, dob: '1995-01-16', club_id: 1},
      { first_name: 'John', last_name: 'Doe', degree_id: 3, category_id: 2, age: 12, dob: '1995-01-16', club_id: 2},
      { first_name: 'Josephina', last_name: 'Doe', degree_id: 2, category_id: 1, age: 13, dob: '1995-01-16', club_id: 2},
      { first_name: 'Kurtim', last_name: 'Mivki', degree_id: 2, category_id: 1, age: 14, dob: '1995-01-16', club_id: 3},
      { first_name: 'Kurtim', last_name: 'Zubi', degree_id: 3, category_id: 2, age: 15, dob: '1995-01-16', club_id: 3},
      { first_name: 'Mnogo', last_name: 'Yak', degree_id: 4, category_id: 3, age: 17, dob: '1995-01-16', club_id: 2},
      { first_name: 'Henry', last_name: 'Slabiya', degree_id: 1, category_id: 1, age: 16, dob: '1995-01-16', club_id: 3},
      { first_name: 'Chuchalo', last_name: 'Grozno', degree_id: 4, category_id: 2, age: 9, dob: '1995-01-16', club_id: 3},
      { first_name: 'Mishi', last_name: 'Trici', degree_id: 1, category_id: 3, age: 18, dob: '1995-01-16', club_id: 3}
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Participants', null, {});
  }
};
