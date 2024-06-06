import express from "express";
import { createJob, deleteJob, getAllJobs, getJob, updateJob } from "../controllers/job.controller.js";
import { authentication } from "../middlewares/user.middleware.js";

const jobRouter = express.Router();


jobRouter.get("/details", getAllJobs);
jobRouter.get("/:id", getJob);
jobRouter.post("/create", authentication, createJob);
jobRouter.patch("/:id", updateJob);
jobRouter.delete("/:id", deleteJob);

export default jobRouter;