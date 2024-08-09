import express from "express";
import * as testimonialsController from "../controllers/testimonialsController";

const testimonialsRouter = express.Router();

testimonialsRouter.get("/", testimonialsController.getAllTestimonials);

export default testimonialsRouter;
