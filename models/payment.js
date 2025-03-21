// user.js
'use strict';
import { Model } from 'sequelize';
import Constants from '../helpers/constants.js'
export default (sequelize, DataTypes) => {
    class Payment extends Model {
        static associate(models) {
            this.belongsTo(models.Booking, { foreignKey: 'bookingId', as: 'booking' });
        }
    }

    Payment.init(
        {
            paymentId: {
                autoIncrement: true,
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                field: 'payment_id',
            },
            bookingId: {
                type: DataTypes.INTEGER,
                allowNull: false,
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
            amount: {
                type: DataTypes.DECIMAL(10, 2),
                allowNull: false,
                field: 'amount',
            },
            paymentStatus: {
                type: DataTypes.STRING,
                allowNull: false,
                defaultValue: Constants.PAYMENT_STATUS.PENDING,
            },
        },
        {
            sequelize,
            timestamps: false,
            modelName: 'Payment',
            tableName: 'payment'
        }
    );

    return Payment;
};
