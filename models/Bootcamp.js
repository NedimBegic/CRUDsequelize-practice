"use strict";
const { Model } = require("sequelize");
const curses = require("./curses");
module.exports = (sequelize, DataTypes) => {
  class Bootcamp extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Curses }) {
      // define association here
      this.hasMany(Curses, { foreignKey: "bootcampId" });
    }
  }
  Bootcamp.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      description: DataTypes.STRING,
      housing: DataTypes.BOOLEAN,
      averageCost: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Bootcamp",
    }
  );
  return Bootcamp;
};
