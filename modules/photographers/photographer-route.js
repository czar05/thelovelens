import express from 'express';
import PhotographerController from './photographer-controller.js';
import {multerUpload} from '../../helpers/multer.js';
import { upload } from '../../config/cloudinary.js'; // Import Cloudinary Multer Config
const router = express.Router();

router.post('/register',upload.single('profilePicture'), PhotographerController.register)
router.post('/login', PhotographerController.login)
router.get('/list', PhotographerController.list)
router.get('/detail', PhotographerController.detail)

export default router