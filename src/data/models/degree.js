'use strict';
module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Degree', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    name: DataTypes.STRING
  });
};