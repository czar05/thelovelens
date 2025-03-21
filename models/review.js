// user.js
'use strict';
import { Model } from 'sequelize';
import Constants from '../helpers/constants.js'
export default (sequelize, DataTypes) => {
    class Review extends Model {
        static associate(models) {
            this.belongsTo(models.Booking, { foreignKey: 'bookingId', as: 'booking' });
        }
    }

    Review.init(
        {
            reviewId: {
                autoIncrement: true,
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                field: 'booking_id',
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
            review: {
                type: DataTypes.STRING,
                allowNull: true,
                field: 'review',
            },
            rating: {
                type: DataTypes.INTEGER,
                allowNull: false,
                field: 'rating',
                validate: {
                    min: 1,
                    max: 5
            },
        }

        },
        {
            sequelize,
            timestamps: false,
            modelName: 'Review',
            tableName: 'review'
        }
    );

    return Review;
};
