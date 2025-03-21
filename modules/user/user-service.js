/* eslint-disable prefer-promise-reject-errors */
import models, { sequelize, Sequelize } from '../../models/index.js';
import {getJwtToken,deepClone} from '../../helpers/utils.js'
class UserService {
  async register (req, res, next) {
    return new Promise(async (resolve, reject) => {
      try {
        const { name,email,password,phone,city,state } = req.body;
        const user = await models.User.create({
          name,
          email,
          password,
          phone,
          city,
          state
        });
        resolve({ message: 'success', result:user });
      } catch (error) {
        reject({  error });
      }
    });
  }


  async login (req, res, next) {
    return new Promise(async (resolve, reject) => {
      try {
        let { email, password } = req.body;
        email = email.toLowerCase();
        const user = await models.User.findOne({
          where: { email: Sequelize.where(Sequelize.fn('lower', Sequelize.col('email')), email) }
        })
        if(!user){
          reject({ message: 'user does not exist' });
            return;
        };
        let userObj = deepClone(user);
        if(userObj.password !== password){
          reject({ message: 'invalid password' });
          return;
        };
   
        delete user.password;
        const token = getJwtToken(userObj,'1h');
         userObj = { ...userObj, token };
        resolve({ message: 'success',result:userObj });
      } catch (error) {
        reject({  error });
      }
    });
  }
}

export default new UserService();
