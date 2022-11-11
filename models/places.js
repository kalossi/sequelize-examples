const { Sequelize } = require("sequelize");

//A Model represents a table in the database. Instances of this class represent a database row.
module.exports = (sequelize) => {
  const Place = sequelize.define("Place", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING.BINARY
    },
    userId: {
      type: Sequelize.INTEGER
    },
    latitude: {
      type: Sequelize.FLOAT
    },
    longitude: Sequelize.FLOAT
  },
  {
    timestamps: false,
  });
  return Place;
};