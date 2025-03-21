// user.js
'use strict';
import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // this.hasOne(models.Photographer, {
      //   foreignKey: 'userId',
      //   sourceKey: 'userId',
      //   as: 'photographer'
      // });
      this.hasMany(models.Booking,{ 
        foreignKey: 'userId',
         sourceKey: 'userId', 
         as: 'bookings' });
    }
  }

  User.init(
    {
      userId: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        field: 'user_id',
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
      phone: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'phone',
      },
      city: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'city',
      },
      state: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'state',
      },
    },
    {
      sequelize,
      timestamps: false,
      modelName: 'User',
      tableName: 'user'
    }
  );

  return User;
};
