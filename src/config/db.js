import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONOGDB_URI)
        console.log("Connected to DB")
    } catch (error) {
        console.log("Error connecting to DB", error)
    }
}

export default connectDB;