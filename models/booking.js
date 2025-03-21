// user.js
'use strict';
import { Model } from 'sequelize';
import Constants from '../helpers/constants.js'
export default (sequelize, DataTypes) => {
    class Booking extends Model {
        static associate(models) {
            this.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
            this.belongsTo(models.Photographer, { foreignKey: 'photographerId', as: 'photographer' });
            this.hasOne(models.Review, { foreignKey: 'bookingId', as: 'review' });
            this.hasOne(models.Payment, { foreignKey: 'bookingId', as: 'payment' });
        }
    }

    Booking.init(
        {
            bookingId: {
                autoIncrement: true,
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                field: 'booking_id',
            },
            photographerId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                field: 'photographer_id',
            },
            userId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                field: 'user_id',
            },
            bookingDate:{
                type: DataTypes.DATE,
                allowNull: false,
                field: 'booking_date',
            },
            startTime: {
                type: DataTypes.TIME,
                allowNull: false,
                field: 'start_time',
            },
            endTime: {
                type: DataTypes.TIME,
                allowNull: false,
                field: 'end_time',
            },
            status: {
                type: DataTypes.STRING,
                allowNull: false,
                field: 'status',
                defaultValue:Constants.BOOKING_STATUS.PENDING
            }

        },
        {
            sequelize,
            timestamps: false,
            modelName: 'Booking',
            tableName: 'booking'
        }
    );

    return Booking;
};
