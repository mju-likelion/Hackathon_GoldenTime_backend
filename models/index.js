import { Sequelize } from "sequelize";
import Hospital from "./hospital";
import Department from "./department";
import Symptom from "./symptom";

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

db.Department = Department;
Department.init(sequelize);
Department.associate(db);

// 1 대 다
db.Hospital.hasMany(db.Department, { targetKey: "id" });
db.Department.belongsTo(db.Hospital);

module.exports = db;
