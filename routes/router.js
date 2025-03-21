import express from 'express';
import UserRouter from '../modules/user/user-route.js';
import PhotographerRouter from '../modules/photographers/photographer-route.js';
import PortfolioRouter from '../modules/portfolio/portfolio-route.js';
import AvailabilityRouter from '../modules/availability/availability-route.js';
import ErrorHandler from '../middleware/error-handler.js';
const router = express.Router();


router.use('/user', UserRouter)
// global error handler;
router.use('/photographer', PhotographerRouter);
router.use('/portfolio', PortfolioRouter);
router.use('/availability', AvailabilityRouter);
router.use(ErrorHandler);

export default router
