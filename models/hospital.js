import { Sequelize } from "sequelize";

module.exports = class Hospital extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        dutyName: {
          type: Sequelize.STRING(100),
        },
        dutyAddr: {
          type: Sequelize.STRING(100),
        },
        dutyTel3: {
          type: Sequelize.STRING(100),
        },
        wgs84Lat: {
          type: Sequelize.STRING(100),
        },
        wgs84Lon: {
          type: Sequelize.STRING(100),
        },
      },
      {
        sequelize,
        timestamps: false,
        modelName: "Hospital",
        tableName: "hospital",
        paranoid: false,
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
      }
    );
  }

  static associate(db) {}
};
