// personRoutes.ts
import express from 'express';
import personController from '../controllers/personController';

const personRouter = express.Router();

// POST /persons
personRouter.post('/', personController.createPerson);

// GET /persons/:personId
personRouter.get('/:personId', personController.getPersonById);

// Add other person routes as needed

export { personRouter};
