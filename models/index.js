/* eslint-disable new-cap */
// eslint-disable-next-line no-unused-vars
import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
// import Logger from '../helpers/logger';

// Initialize dotenv to read .env file
dotenv.config();

// Initialize Sequelize instance
const sequelize = new Sequelize(
  process.env.DB_NAME,     // Database name
  process.env.DB_USER,     // Database username
  process.env.DB_PASSWORD, // Database password
  {
    host: process.env.DB_HOST, // Database host
    dialect: 'mysql',
    logging: console.log
  }
);

// Import models using ES6 import syntax
// import SchoolModel from './school.js';
// import AdminModel from './admin.js';
// import StudentModel from './student.js';
// import FeeModel from './fee.js';
// import PaymentsModel from './payment.js';
import UserModel from './user.js';
import PhtographerModel from './photographer.js';
import PortfolioModel from './portfolio.js';
import AvailabilityModel from './availability.js';
import BookingModel from './booking.js';
import ReviewModel from './review.js';
import PaymentModel from './payment.js';
// Add additional model imports as needed

// Initialize models with the Sequelize instance
const models = {
    User: UserModel(sequelize, Sequelize.DataTypes),
    Photographer: PhtographerModel(sequelize, Sequelize.DataTypes),
    Portfolio: PortfolioModel(sequelize, Sequelize.DataTypes),
    Availability: AvailabilityModel(sequelize, Sequelize.DataTypes),
    Booking: BookingModel(sequelize, Sequelize.DataTypes),
    Review: ReviewModel(sequelize, Sequelize.DataTypes),
    Payment: PaymentModel(sequelize, Sequelize.DataTypes),
  // Additional models can be added here
};

// Define associations between models if they exist
Object.values(models).forEach((model) => {
  if (model.associate) {
    model.associate(models);
  }
});

// Sync database and log success or error
sequelize.sync({ alter:true,force: false, logging: false })
  .then(() => {
    // Logger.info({ message: 'Database & tables created!' });
    // Logger.info({ message: 'Database & tables created!' });
    console.log('Database & tables created!')
  })
  .catch((error) => {
    console.log('error?>?>>>>>>>>>>>>>>>>>>',error)
    // Logger.error('Error while syncing database');
    // Logger.error(error);
    throw new Error('Error while syncing database');
  });

// Export sequelize instance and models
export { sequelize, Sequelize };
export default models;
