// testDataGenerator.ts
import {  IPerson } from '../models/person_model';
import {  ICar } from '../models/car_model';
import {  IHistory } from '../models/history_model';
import carService from './carService';
import personService from './personService';

const generateTestData = async (): Promise<void> => {
  try {
  // Test data for History collection
  const historyTestData: IHistory[] = [
    { isCheckIn: true, checkInTime: new Date() },
    { isCheckIn: false, checkInTime: new Date() },
    // Add more test data as needed
  ];

    // Test data for Car collection
    const carTestData: ICar[] = [
      { brand: 'Toyota', car_model: 'Camry', color: 'Blue', plate: 'ABC123', history: historyTestData[0] },
      { brand: 'Honda', car_model: 'Accord', color: 'Red', plate: 'XYZ456', history: historyTestData[1] },
      // Add more test data as needed
    ];

   
    carTestData.map(async (carData) => {
        await carService.createCar(carData);
    });

    console.log('Test data created successfully for Car collection');

    
    // Test data for Person collection

    const personTestData: IPerson[] = [
        { firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com',cars: [carTestData[0]] } ,
        { firstName: 'Jane', lastName: 'Doe', email: 'jane.doe@example.com',cars: [carTestData[1]] },
        // Add more test data as needed
      ];
  
        personTestData.map(async (personData) => {
            await personService.createPerson(personData);
        });
  } catch (error) {
    console.error('Error creating test data:', error);
    throw error;
  }
};

export default generateTestData;
