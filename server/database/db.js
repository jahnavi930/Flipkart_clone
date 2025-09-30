import mongoose from 'mongoose';

const Connection = async (MONGO_URI) => {
    try {
        await mongoose.connect(MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        });
        console.log('✅ Database Connected Successfully');
    } catch (error) {
        console.log('❌ Error connecting to database:', error.message);
    }
};

export default Connection;
