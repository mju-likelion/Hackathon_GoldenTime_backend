import { Sequelize } from "sequelize";
import Hospital from "./hospital";
import Intermediate from "./intermediate";
import Symptom from "./symptom";
import Department from "./department";

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

db.Intermediate = Intermediate;
Intermediate.init(sequelize);
Intermediate.associate(db);

db.Department = Department;
Department.init(sequelize);
Department.associate(db);

// 1 대 다
db.Hospital.hasMany(db.Intermediate, { targetKey: "id" });
db.Intermediate.belongsTo(db.Hospital);

db.Department.hasMany(db.Intermediate, { targetKey: "id" });
db.Intermediate.belongsTo(db.Department);

db.Department.hasMany(db.Symptom, { targetKey: "id" });
db.Symptom.belongsTo(db.Department);

module.exports = db;
