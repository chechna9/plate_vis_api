import mongoose, { Schema, Document } from "mongoose";
import {  ICar } from "./car_model";

interface IPerson {
  firstName: string;
  lastName: string;
  email: string;
  cars: Schema.Types.ObjectId[];
}

interface IPersonModel extends IPerson, Document {}

const personSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  cars: [{ type: Schema.Types.ObjectId, ref: "Car" }],
});

const PersonModel = mongoose.model<IPersonModel>("Person", personSchema);

export { PersonModel, IPerson, IPersonModel };
