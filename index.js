import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./src/config/db.js";
import userRouter from "./src/routes/user.routes.js";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use(cookieParser());

// Routes
app.use("/api/user", userRouter);

app.get("/", (req, res) => {
    res.status(200).send("Welcome to the Job Portal")
})

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    connectDB();
    console.log(`Server is listening on port ${PORT}`);
})