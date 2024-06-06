import express from "express";
import { createSkills, deleteSkills, getAllSkills, getSkills, updateSkills } from "../controllers/skill.controller.js";

const skillRouter = express.Router();

skillRouter.get("/details", getAllSkills)
skillRouter.get("/:id", getSkills)
skillRouter.post("/create", createSkills)
skillRouter.patch("/:id", updateSkills)
skillRouter.delete("/:id", deleteSkills)

export default skillRouter;