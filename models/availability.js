// user.js
'use strict';
import { Model } from 'sequelize';
import Constants from '../helpers/constants.js'
export default (sequelize, DataTypes) => {
    class Availability extends Model {
        static associate(models) {
            this.belongsTo(models.Photographer, { foreignKey: 'photographerId', as: 'photographer' });
        }
    }

    Availability.init(
        {
            availabilityId: {
                autoIncrement: true,
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                field: 'availability_id',
            },
            photographerId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                field: 'photographer_id',
            },
            availabilityDate: {
                type: DataTypes.DATE,
                allowNull: false,
                field: 'availability_date',
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
                defaultValue:Constants.AVAIALABLE_TIME.AVAIALABLE
            },
        },
        {
            sequelize,
            timestamps: false,
            modelName: 'Availability',
            tableName: 'availability'
        }
    );

    return Availability;
};
