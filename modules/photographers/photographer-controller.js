import ServerResponse from '../../helpers/server-response.js';
import PhotographerService from './photographer-service.js';
// import { SUCCESS } from '../../../initial-helpers/message';

class PhotographerController {
  async register (req, res, next) {
    try {
      const response = await PhotographerService.register(req, res, next);
      ServerResponse.sendOk(res, response);
    } catch (error) {
      next(error);
    }
  }

  async login (req, res, next) {
    try {
      const response = await PhotographerService.login(req, res, next);
      ServerResponse.sendOk(res, response);
    } catch (error) {
      next(error);
    }
  }

  async list (req, res, next) {
    try {
      const response = await PhotographerService.list(req, res, next);
      ServerResponse.sendOk(res, response);
    } catch (error) {
      next(error);
    }
  }

  async detail (req, res, next) {
    try {
      const response = await PhotographerService.detail(req, res, next);
      ServerResponse.sendOk(res, response);
    } catch (error) {
      next(error);
    }
  }
}

export default new PhotographerController();
