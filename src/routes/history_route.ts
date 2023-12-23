import express from 'express';
import historyController from '../controllers/historyController';

const historyRouter = express.Router();

// POST /history
historyRouter.post('/', historyController.createHistory);

// Other history routes...

export {historyRouter};
