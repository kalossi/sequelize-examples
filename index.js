const { Sequelize } = require("sequelize");
require("dotenv").config();

let host = process.env.DB_HOSTNAME;
let user = process.env.DB_USER;
let password = process.env.DB_PASSWORD;
let dbName = process.env.DB_NAME;

//establishing connection - creating sequelize instance
const sequelize = new Sequelize(dbName, user, password, {
  host: host,
  dialect: "mysql" /* pick one dialect 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */,
});

// creates an instance of a Place - sequelize model
// in a different file
// __dirname returns absolute path where your file is
const PlaceInFile = require(`${__dirname}/models/places`)(sequelize);

/*testing the connection
try {
  sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}*/

// after findAll() you get an response like an GET method in http
// PlaceInFile.findAll().then((places) => {
//   console.log(places);
//   // closes the connection
//   sequelize.close();
// });

//creates a new row from model
//model is passed as javascript object
const place = PlaceInFile.create({
  name: "autoparkki",
  userId: 1,
  latitude: 5.435,
  longitude: 2.213,
});
console.log("PlaceInFile's auto-generated ID:", place.id);