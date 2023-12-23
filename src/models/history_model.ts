import mongoose, { Schema, Document } from "mongoose";

interface IHistory {
  isCheckIn: boolean;
  checkInTime: Date;
}

interface IHistoryModel extends IHistory, Document {}

const historySchema = new Schema({
  isCheckIn: { type: Boolean, required: true },
  checkInTime: { type: Date, required: true },
});

const HistoryModel = mongoose.model<IHistoryModel>("History", historySchema);

export { HistoryModel, IHistory };
