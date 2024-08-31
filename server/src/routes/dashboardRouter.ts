import { Router } from "express";
import { patchMainInfo } from "../controllers/updateMainInfoController";

const dashboardRouter = Router();
dashboardRouter.patch("/updateMainInfo", patchMainInfo);

export default dashboardRouter;
