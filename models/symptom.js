import Sequelize from "sequelize";

module.exports = class Symptom extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        deptEng: {
          type: Sequelize.STRING(100),
        },
        symptomName: {
          type: Sequelize.STRING(100),
        },
        firstAid: {
          type: Sequelize.STRING(500),
        },
        notice: {
          type: Sequelize.STRING(500),
        },
        firstImage: {
          type: Sequelize.STRING(100),
        },
        noticeImage: {
          type: Sequelize.STRING(100),
        },
      },
      {
        sequelize,
        timestamps: false,
        modelName: "Symptom",
        tableName: "symptom",
        //   freezeTableName: true,
        paranoid: false,
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
      }
    );
  }

  static associate(db) {}
};
