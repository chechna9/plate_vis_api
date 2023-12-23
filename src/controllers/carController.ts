import { Request, Response } from 'express';
import carService from '../services/carService';

class CarController {
  async createCar(req: Request, res: Response): Promise<void> {
    try {
      const car = await carService.createCar(req.body);
      res.status(201).json(car);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  }

  // Other car-related controller methods
}

export default new CarController();