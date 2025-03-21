// user.js
'use strict';
import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
  class Portfolio extends Model {
    static associate(models) {
      this.belongsTo(models.Photographer, { foreignKey: 'photographerId', as: 'photographer' });
    }
  }

  Portfolio.init(
    {
        portfolioId: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        field: 'portfolio_id',
      },
      photographerId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'photographer_id',
      },
      imageUrl: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'image_url',
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true,
        field: 'description',
      },
     
    },
    {
      sequelize,
      timestamps: false,
      modelName: 'Portfolio',
      tableName: 'portfolio'
    }
  );

  return Portfolio;
};
