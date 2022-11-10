const { Sequelize } = require("sequelize");

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