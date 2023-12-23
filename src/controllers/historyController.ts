import { Request, Response } from 'express';
import historyService from '../services/historyService';

class HistoryController {
  async createHistory(req: Request, res: Response): Promise<void> {
    try {
      const history = await historyService.createHistory(req.body);
      res.status(201).json(history);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  }

  // Other history-related controller methods
}

export default new HistoryController();
