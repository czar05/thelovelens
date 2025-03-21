import ServerResponse from '../../helpers/server-response.js';
import PortfolioService from './portfolio-service.js';
// import { SUCCESS } from '../../../initial-helpers/message';

class PhotographerController {
  async create (req, res, next) {
    try {
      const response = await PortfolioService.create(req, res, next);
      ServerResponse.sendOk(res, response);
    } catch (error) {
      next(error);
    }
  }

  async get (req, res, next) {
    try {
      const response = await PortfolioService.get(req, res, next);
      ServerResponse.sendOk(res, response);
    } catch (error) {
      next(error);
    }
  }
}

export default new PhotographerController();
