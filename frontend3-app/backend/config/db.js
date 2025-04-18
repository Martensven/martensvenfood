import mongoose from "mongoose";

export const connectDB = async () => {
    const MONGODB_URI = 'mongodb+srv://martenexpress:backend@expresscluster.zyqin.mongodb.net/martensvenfood'

    await mongoose.connect(MONGODB_URI).then(() => {
        console.log('Database connected');
    })
}

export { mongoose };