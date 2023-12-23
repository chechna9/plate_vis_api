// connection.ts
import mongoose from 'mongoose';

const connectToDatabase = async () => {
  try {
    const connection = await mongoose.connect('mongodb://localhost:27017/scrum_project', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as mongoose.ConnectOptions);
    console.log('Connected to local MongoDB');
    return connection;
  } catch (error) {
    console.error('Error connecting to local MongoDB:', error);
    throw error;
  }
};

export  {connectToDatabase};
