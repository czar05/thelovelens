import jwt from 'jsonwebtoken';
import Message from '../helpers/message.js';
import { deepClone } from '../helpers/utils.js';
// import Logger from '../helpers/logger';
import ServerResponse from '../helpers/server-response.js';
import models, { sequelize, Sequelize } from '../models/index.js';
// import { contains } from 'underscore';

function authorize (req, res, next) {
  let token = req.headers.authorization;
  if (!token || token == null) return res.status(401).json({ message: Message.UNAUTHORIZED_USER });
  token = token.split(' ')[1];
  jwt.verify(token, process.env.JWT_SECRET, (err, admin) => {
    console.log(err);
    if (err) return res.status(401).json({ message: Message.UNAUTHORIZED_USER });
    if (!admin || !admin.AdminId) return res.status(403).json({ message: Message.UNAUTHORIZED_USER });
    // checking for valid accountId here
    models.Admin.findOne({
      where: { AdminId: admin.AdminId }
    }).then(response => {
      response = deepClone(response);
      if (response) {
        req.admin = admin;
        next();
      } else {
        Logger.error({ message: Message.NO_RECORD_FOUND });
        return res.status(401).json({ message: Message.UNAUTHORIZED_USER });
      }
    }, error => {
      console.log(error);
      return res.status(401).json({ message: Message.UNAUTHORIZED_USER });
    });
  });
}


const authorizeRole = (acceptableRoles) => {
  return (req, res, next) => {
    if (contains(acceptableRoles, req.user.role.slug)) {
      next();
    } else {
      Logger.error({ message: Message.UNAUTHORIZED_ACCESS });
      ServerResponse.sendInvalidUserCredentials(res, { message: Message.UNAUTHORIZED_ACCESS });
    }
  };
};



export default { authorize, authorizeRole };
