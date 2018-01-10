'use strict';
module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Tournament', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    name: DataTypes.STRING,
    city: DataTypes.STRING,
    year: DataTypes.INTEGER
  });
};