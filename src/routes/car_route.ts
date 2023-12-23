import express from 'express';
import carController from '../controllers/carController';

const carRouter = express.Router();

// POST /cars
carRouter.post('/', carController.createCar);

// Other car routes...

export { carRouter};
