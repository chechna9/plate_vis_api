import { CarModel, ICar } from '../models/car_model';
import historyService from './historyService';

class CarService {
  async createCar(carData: ICar){
    try {
      // Create a new history document
      const history = await historyService.createHistory(carData.history);

      // Assign the history _id to the car

      carData.history = history._id;

      // Create a new car document
      const car = new CarModel(carData);
      return await car.save();
    } catch (error) {
      throw error;
    }
  }

  // Other car-related service methods
}

export default new CarService();
