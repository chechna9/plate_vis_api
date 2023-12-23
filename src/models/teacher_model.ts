import { PersonModel, IPerson,IPersonModel } from './person_model';
import  { Schema } from 'mongoose';

interface ITeacher extends IPerson {
  grade: string;
}

interface ITeacherModel extends ITeacher, IPersonModel {}

const teacherSchema = new Schema({
  grade: { type: String, required: true },
});

const TeacherModel = PersonModel.discriminator<ITeacherModel>('Teacher', teacherSchema);

export { TeacherModel, ITeacher };
