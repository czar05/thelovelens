import express from 'express';
import AvailabilityController from './availability-controller.js';

const router = express.Router();

router.post('/create', AvailabilityController.create)
router.get('/get-avaialable-photographers', AvailabilityController.get)

export default router