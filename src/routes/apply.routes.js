import express from 'express';
import { createApply, deleteApply, getAllApplies, getApplies, updateApply } from '../controllers/apply.controller.js';
import { authentication } from '../middlewares/user.middleware.js';

const applyRouter = express.Router();

applyRouter.post('/:id',authentication, createApply);
applyRouter.get("/details", authentication, getAllApplies);
applyRouter.get("/:id", getApplies);
applyRouter.patch("/:id", updateApply);
applyRouter.delete("/:id", deleteApply);

export default applyRouter;