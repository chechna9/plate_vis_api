// personService.ts
import { PersonModel, IPerson } from '../models/person_model';

class PersonService {
  async createPerson(personData: IPerson) {
    try {
      const person = new PersonModel(personData);
      return await person.save();
    } catch (error) {
      throw error;
    }
  }

  async getPersonById(personId: string) {
    try {
      return await PersonModel.findById(personId);
    } catch (error) {
      throw error;
    }
  }

  // Add other person-related service methods as needed
}

export default new PersonService();
