/* eslint-disable prefer-promise-reject-errors */
import models, { sequelize, Sequelize } from '../../models/index.js';
import { getJwtToken, deepClone } from '../../helpers/utils.js'
import Constants from '../../helpers/constants.js';
import { parse } from 'dotenv';
class PhotographerService {
    async register(req, res, next) {
        return new Promise(async (resolve, reject) => {
            try {
                const { name, email, password, phone, bio,
                    location,
                    hourlyRate,
                    experience } = req.body;
                    const profilePicture = req.file ? req.file.path : null;
                   
                const photographer = await models.Photographer.create({
                    name,
                    email,
                    password,
                    phone,
                    bio,
                    location,
                    hourlyRate,
                    experience,
                    profilePicture
                });
                resolve({ message: 'success', result: photographer });
            } catch (error) {
                reject({ error });
            }
        });
    }


    async login(req, res, next) {
        return new Promise(async (resolve, reject) => {
            try {
                let { email, password } = req.body;
                email = email.toLowerCase();
                const photographer = await models.Photographer.findOne({
                    where: { email: Sequelize.where(Sequelize.fn('lower', Sequelize.col('email')), email) }
                })
               
                if (!photographer) {
                    reject({ message: 'photographer does not exist' });
                    return;
                };
                let photographerObj = deepClone(photographer);
                console.log(photographerObj);
                if (photographerObj.password !== password) {
                    reject({ message: 'invalid password' });
                    return;
                };
                delete photographer.password;
                const token = getJwtToken(photographerObj, '1h');
                photographerObj = { ...photographerObj, token };
                resolve({ message: 'success', result: photographerObj });
            } catch (error) {
                reject({ error });
            }
        });
    }

    async list(req, res, next) {
        return new Promise(async (resolve, reject) => {
            try {
                const {  offset = Constants.DEFAULT_OFFSET, limit = Constants.DEFAULT_LIMIT } = req.query;
                const photographers = await models.Photographer.findAll({
                    limit:parseInt(limit),
                    offset:parseInt(offset)
                })
               
                resolve({ message: 'success', result: photographers });
            } catch (error) {
                reject({ error });
            }
        });
    }

    async detail(req, res, next) {
        return new Promise(async (resolve, reject) => {
            try {
                const photographerId = req.query.photographerId;
                const photographer = await models.Photographer.findOne({
                    where: { photographerId }
                })
               
                resolve({ message: 'success', result: photographer });
            } catch (error) {
                reject({ error });
            }
        });
    }
}

export default new PhotographerService();
