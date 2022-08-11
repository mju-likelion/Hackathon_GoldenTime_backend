import { Sequelize } from "sequelize";

module.exports = class intermediate extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        deptEng: {
          type: Sequelize.STRING(100),
        },
      },
      {
        sequelize,
        timestamps: false,
        modelName: "Intermediate",
        tableName: "intermediate",
        freezeTableName: true,
        paranoid: false,
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
      }
    );
  }

  static associate(db) {}
};
