// user.js
'use strict';
import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
  class Photographer extends Model {
    static associate(models) {
      // this.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
      this.hasMany(models.Portfolio, { foreignKey: 'photographerId', as: 'portfolio' });
      this.hasMany(models.Availability, { foreignKey: 'photographerId', as: 'availability' });
      this.hasMany(models.Booking, { foreignKey: 'photographerId', as: 'bookings' });
    }
  }

  Photographer.init(
    {
        photographerId: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        field: 'photographer_id',
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'name',
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        // unique: true,
        field: 'email',
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'password',
      },
      bio: {
        type: DataTypes.STRING,
        allowNull: true,
        field: 'bio',
      },
      location: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'location',
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'phone',
      },
      hourlyRate: {
        type: DataTypes.DECIMAL,
        allowNull: false,
        field: 'hourly_rate',
      },
      experience: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: 'experience',
      },
      profilePicture: {
        type: DataTypes.STRING,
        allowNull: true,
        field: 'profile_picture',
      },
    },
    {
      sequelize,
      timestamps: false,
      modelName: 'Photographer',
      tableName: 'photographer'
    }
  );

  return Photographer;
};
