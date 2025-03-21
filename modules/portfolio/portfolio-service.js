/* eslint-disable prefer-promise-reject-errors */
import models, { sequelize, Sequelize } from '../../models/index.js';
// import { getJwtToken, deepClone } from '../../helpers/utils.js'
// import Constants from '../../helpers/constants.js';
import { cloudinary } from '../../config/cloudinary.js'; 
class PortfolioService {
    async create(req, res, next) {
        return new Promise(async (resolve, reject) => {
            try {
                const { photographerId } = req.body;
                if (!req.files || req.files.length === 0) {
                    return reject({ error: 'No files uploaded' });
                }
                const uploadedImages = await Promise.all(
                    req.files.map(file =>
                      cloudinary.uploader.upload(file.path, {
                        folder: 'photographers/portfolio',
                        resource_type: 'image',
                      })
                    )
                  );
              
                  // Save image URLs in the Portfolio table
                  const portfolioEntries = uploadedImages.map(image => ({
                    photographerId,
                    imageUrl: image.secure_url,
                    description:'portfolio image'
                  }));
              

                await models.Portfolio.bulkCreate(portfolioEntries);

                resolve({ message: 'success', result: portfolioEntries });
            } catch (error) {
                reject({ error });
            }
        });
    }

    async get(req, res, next) {
        return new Promise(async (resolve, reject) => {
            try {
                const { photographerId } = req.query;
               const portfolios =  await models.Portfolio.findAll({
                    where: { photographerId }
                });

                resolve({ message: 'success', result: portfolios });
            } catch (error) {
                reject({ error });
            }
        });
    }
}

export default new PortfolioService();
