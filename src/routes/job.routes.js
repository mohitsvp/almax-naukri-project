import express from "express";
import { getAllJobs } from "../controllers/job.controller.js";

const jobRouter = express.Router();


jobRouter.get("/details", getAllJobs);

export default jobRouter;