import ServerResponse from '../../helpers/server-response.js';
import AvailabilityService from './availability-service.js';
// import { SUCCESS } from '../../../initial-helpers/message';

class AvailabilityController {
  async create (req, res, next) {
    try {
      const response = await AvailabilityService.create(req, res, next);
      ServerResponse.sendOk(res, response);
    } catch (error) {
      next(error);
    }
  }

  async get (req, res, next) {
    try {
      const response = await AvailabilityService.get(req, res, next);
      ServerResponse.sendOk(res, response);
    } catch (error) {
      next(error);
    }
  }
}

export default new AvailabilityController();
