const Sequelize = require('sequelize');

module.exports = class Symptom extends Sequelize.Model{
    static init(sequelize){
        return super.init(
            {
                MKioskTy1:{
                    type: Sequelize.STRING(5)
                },
                MKioskTy2:{
                    type: Sequelize.STRING(5)
                },
                MKioskTy3:{
                    type: Sequelize.STRING(5)
                },
                MKioskTy4:{
                    type: Sequelize.STRING(5)
                },
                MKioskTy5:{
                    type: Sequelize.STRING(5)
                },
                MKioskTy6:{
                    type: Sequelize.STRING(5)
                },
                MKioskTy7:{
                    type: Sequelize.STRING(5)
                },
                MKioskTy8:{
                    type: Sequelize.STRING(5)
                },
                MKioskTy10:{
                    type: Sequelize.STRING(5)
                },
                MKioskTy11:{
                    type: Sequelize.STRING(5)
                }
		    }, 
            {
                sequelize,
                timestamps: false,
                modelName: 'Symptom',
                tableName: 'symptom',
                paranoid: false,
                charset: 'utf8mb4',
                collate: 'utf8mb4_general_ci',
            }
        );
    }
    static associate(db){
    }
};