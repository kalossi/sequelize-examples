const { Sequelize } = require("sequelize");
require("dotenv").config();

let host = process.env.DB_HOSTNAME;
let user = process.env.DB_USER;
let password = process.env.DB_PASSWORD;
let dbName = process.env.DB_NAME;
//establishing connection - creating sequelize instance
const sequelize = new Sequelize(dbName, user, password, {
  host: host,
  dialect:
    "mysql" /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */,
});

//creates an instance of a Place - sequelize model
const Place = require(`${__dirname}/models/places`)(sequelize);

/*testing the connection
try {
  sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}*/

Place.findAll().then((places) => {
  console.log(places);
  //closes the connection
  sequelize.close();
});
//creates a new row from model
const place = Place.create({id: 666, name: "autparkki", userId: 1, latitude: 5, longitude: 2 });
console.log("Jane's auto-generated ID:", place.id);
