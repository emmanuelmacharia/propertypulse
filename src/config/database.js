import mongoose from 'mongoose';

let connected = false;

const connectDb = async () => {
    mongoose.set('strictQuery', true)

    // if the database is already connected, then dont create a new connection
    if (connected) {
        console.log('mongo is already connected')
        return;
    }

    try {
        await mongoose.connect(process.env.MONGO_URI);
        connected = true;
    } catch(error) {
        console.error(error)
    }
}

export default connectDb;