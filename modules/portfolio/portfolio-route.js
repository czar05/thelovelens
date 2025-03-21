import express from 'express';
import PortfolioController from './portfolio-controller.js';
import {multerUpload} from '../../helpers/multer.js';
import { upload } from '../../config/cloudinary.js'; // Import Cloudinary Multer Config
const router = express.Router();

router.post('/create',upload.array('images', 10), PortfolioController.create)
router.get('/get', PortfolioController.get)

export default router