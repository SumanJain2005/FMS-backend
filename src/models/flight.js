'use strict';
import { Model } from "sequelize";

export default (sequelize, DataTypes) => {
  class Flight extends Model {
    static associate(models) {
      // define association here
    }
  }

  Flight.init({
    modelNumber: {
      type: DataTypes.STRING,
      allowNull: false
    },
    capacity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    modelName: 'Flight',
  });

  return Flight;
};