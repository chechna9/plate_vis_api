// personController.ts
import { Request, Response } from 'express';
import personService from '../services/personService';

class PersonController {
  async createPerson(req: Request, res: Response) {
    try {
      const person = await personService.createPerson(req.body);
      res.status(201).json(person);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  }

  async getPersonById(req: Request, res: Response) {
    try {
      const personId = req.params.personId;
      const person = await personService.getPersonById(personId);

      if (person) {
        res.status(200).json(person);
      } else {
        res.status(404).send('Person not found');
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  }

  // Add other person-related controller methods as needed
}

export default new PersonController();
