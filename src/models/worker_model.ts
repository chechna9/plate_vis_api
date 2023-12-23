import { PersonModel, IPerson, IPersonModel} from './person_model';
import mongoose, { Schema, Document } from 'mongoose';

interface IWorker extends IPerson {
  matricule: string;
}

interface IWorkerModel extends IWorker, IPersonModel {}

const workerSchema = new Schema({
  matricule: { type: String, required: true },
});

const WorkerModel = PersonModel.discriminator<IWorkerModel>('Worker', workerSchema);

export { WorkerModel, IWorker };
