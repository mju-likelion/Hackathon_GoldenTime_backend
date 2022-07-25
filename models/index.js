import { Sequelize } from "sequelize";
const Hospital = require("./hospital");
const Symptom = require("./symptom");

const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.json")[env];
const db = {};

const sequelize = new Sequelize( 
  config.database,
  config.username,
  config.password,
  config
);

db.sequelize = sequelize;

db.Hospital = Hospital; 
Hospital.init(sequelize);
Hospital.associate(db);

db.Symptom = Symptom; 
Symptom.init(sequelize);
Symptom.associate(db);

module.exports = db;