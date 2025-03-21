import ServerResponse from '../../helpers/server-response.js';
import UserService from './user-service.js';
// import { SUCCESS } from '../../../initial-helpers/message';

class UserController {
  async register (req, res, next) {
    try {
      const response = await UserService.register(req, res, next);
      ServerResponse.sendOk(res, response);
    } catch (error) {
      next(error);
    }
  }

  async login (req, res, next) {
    try {
      const response = await UserService.login(req, res, next);
      ServerResponse.sendOk(res, response);
    } catch (error) {
      next(error);
    }
  }
}

export default new UserController();
