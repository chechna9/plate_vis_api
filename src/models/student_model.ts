import { PersonModel, IPerson,IPersonModel } from './person_model';
import mongoose, { Schema, Document } from 'mongoose';

interface IStudent extends IPerson {
  matricule: string;
}

interface IStudentModel extends IStudent, IPersonModel {}

const studentSchema = new Schema({
  matricule: { type: String, required: true },
});

const StudentModel = PersonModel.discriminator<IStudentModel>('Student', studentSchema);

export { StudentModel, IStudent };
