const sequelize = require("../config")
const { Sequelize, DataTypes } = require("sequelize");

const Cars = sequelize.define("cars", {
    carName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    companyName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    color: {
      type: DataTypes.STRING,
      allowNull: false
    },
    model: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false
    }

 });


 module.exports = Cars