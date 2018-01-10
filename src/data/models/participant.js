'use strict';
module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Participant', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    dob: DataTypes.DATE,
    degree_id: DataTypes.INTEGER,
    category_id: DataTypes.INTEGER,
    club_id: DataTypes.INTEGER,
    age: DataTypes.INTEGER
  });
};