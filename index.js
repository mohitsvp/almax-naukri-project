import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./src/config/db.js";
import userRouter from "./src/routes/user.routes.js";
import cookieParser from "cookie-parser";
import jobRouter from "./src/routes/job.routes.js";
import companyRouter from "./src/routes/company.routes.js";
import skillRouter from "./src/routes/skills.routes.js";
import categoryRouter from "./src/routes/category.routes.js";
import applyRouter from "./src/routes/apply.routes.js";

dotenv.config();

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use(cookieParser());

// Routes
app.use("/api/user", userRouter);
app.use("/api/job", jobRouter);
app.use("/api/company", companyRouter);
app.use("/api/skills", skillRouter);
app.use("/api/category", categoryRouter);
app.use("/api/apply", applyRouter);

app.get("/", (req, res) => {
    res.status(200).send("Welcome to the Job Portal")
})

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    connectDB();
    console.log(`Server is listening on port ${PORT}`);
})