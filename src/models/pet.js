'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Pet extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    Pet.init({
        // id: DataTypes.INTERGE,
        name: DataTypes.STRING,
        gender: DataTypes.BOOLEAN,
        old: DataTypes.STRING,
        vacxin: DataTypes.BOOLEAN,
        addressAcp: DataTypes.STRING,
        addressAcp: DataTypes.BOOLEAN,
        ownerID: DataTypes.INTEGER,
        image: DataTypes.STRING,

    }, {
        sequelize,
        modelName: 'Pet',
    });
    return Pet;
};