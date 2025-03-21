/* eslint-disable prefer-promise-reject-errors */
import models, { sequelize, Sequelize } from "../../models/index.js";
import { Op } from "sequelize";
import Constants from "../../helpers/constants.js";
import logger from "../../helpers/logger.js";
import moment from 'moment'
class AvailabilityService {
  async create(req, res, next) {
    return new Promise(async (resolve, reject) => {
      try {
        const { photographerId, availabilityDate, startTime, endTime } =
          req.body;

        const existingAvailability = await models.Availability.findOne({
          where: {
            photographerId,
            availabilityDate:moment.parseZone(availabilityDate),
            [Op.or]: [
              { startTime: { [Op.between]: [startTime, endTime] } },
              { endTime: { [Op.between]: [startTime, endTime] } },
            ],
          },
        });

        if (existingAvailability) {
          return reject({ message: "Slot already exists or overlaps" });
        }

        const availability = await models.Availability.create({
          photographerId,
          availabilityDate:moment.parseZone(availabilityDate),
          startTime,
          endTime,
          status: Constants.AVAIALABLE_TIME.AVAIALABLE,
        });
        resolve({ message: "success", result: availability });
      } catch (error) {
        logger.error(`Error fetching photographers: ${error.message}`, {
          stack: error.stack,
        });
        reject({ error });
      }
    });
  }

  async get(req, res, next) {
    return new Promise(async (resolve, reject) => {
      try {
        const { availabilityDate, startTime, endTime } = req.query;

        const availablePhotographers = await models.Availability.findAll({
          where: {
            availabilityDate:moment.parseZone(availabilityDate),
            startTime: { [Op.lte]: startTime }, // Start time must be before requested start
            endTime: { [Op.gte]: endTime }, // End time must be after requested end
            status: Constants.AVAIALABLE_TIME.AVAIALABLE,
          },
          include: [{ model: models.Photographer, as: "photographer" }],
        });
        
        resolve({ message: "success", result: availablePhotographers });
      } catch (error) {
        reject({ error });
      }
    });
  }
}

export default new AvailabilityService();
