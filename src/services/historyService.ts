import { HistoryModel, IHistory } from '../models/history_model';

class HistoryService {
  async createHistory(historyData: IHistory) {
    try {
      const history = new HistoryModel(historyData);
      return await history.save();
    } catch (error) {
      throw error;
    }
  }

  // Other history-related service methods
}

export default new HistoryService();
