import { Sequelize } from "sequelize";

module.exports = class Department extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        // hospitalId: {
        //   type: Sequelize.STRING(100),
        // },
        departmentName: {
          type: Sequelize.STRING(100),
        },
      },
      {
        sequelize,
        timestamps: false,
        modelName: "Department",
        tableName: "department",
        paranoid: false,
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
      }
    );
  }

  static associate(db) {}
};
