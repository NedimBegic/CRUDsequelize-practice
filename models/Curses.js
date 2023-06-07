"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Curses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Bootcamp }) {
      // define association here
      // we must define what property bootcamp the curse belings
      this.belongsTo(Bootcamp, { foreignKey: "bootcampId" });
    }
  }
  Curses.init(
    {
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      tuition: DataTypes.INTEGER,
      bootcampId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Curses",
    }
  );
  return Curses;
};
