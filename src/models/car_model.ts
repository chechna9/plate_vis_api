import mongoose, { Schema, Document } from "mongoose";
import { IHistory } from "./history_model";

interface ICar {
  brand: string;
  car_model: string;
  color: string;
  plate: string;
  history:  IHistory;
}

interface ICarModel extends ICar, Document {}

const carSchema = new Schema({
  brand: { type: String, required: true },
  car_model: { type: String, required: true },
  color: { type: String, required: true },
  plate: { type: String, required: true },
  history: { type: Schema.Types.ObjectId, required: true, ref: "History" },
});

const CarModel = mongoose.model<ICarModel>("Car", carSchema);

export { CarModel, ICar };
