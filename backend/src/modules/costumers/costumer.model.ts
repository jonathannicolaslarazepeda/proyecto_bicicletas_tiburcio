import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from "sequelize";

import { sequelize } from "../../config/database";

export class Costumer extends Model<
  InferAttributes<Costumer>,
  InferCreationAttributes<Costumer>
> {
  declare id: CreationOptional<number>;

  declare name: string;

  declare email: string;

  declare createdAt: CreationOptional<Date>;

  declare updatedAt: CreationOptional<Date>;
}

Costumer.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },

    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true
    },

    email: {
      type: DataTypes.STRING(160),
      allowNull: false,
      unique: true,
    },

    createdAt: DataTypes.DATE,

    updatedAt: DataTypes.DATE,
  },
  {
    sequelize,

    tableName: "costumers",
    modelName: "Costumer",
    timestamps: true,
  }
);