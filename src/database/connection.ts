import mongoose from 'mongoose';

const MONGODB_URI = 'mongodb://localhost:27017';

const connectToDatabase = async () => {
    try {
        await mongoose.connect(MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        } as mongoose.ConnectOptions);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
};

export { connectToDatabase };
