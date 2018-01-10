'use strict';
module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Club', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    name: DataTypes.STRING
  });
};