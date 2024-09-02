import { Router } from "express";
import { patchMainInfo } from "../controllers/updateMainInfoController";
import { checkToken } from "../controllers/checkTokenController";
import { patchDay } from "../controllers/updateDayController";

const dashboardRouter = Router();

dashboardRouter.get("/", checkToken);
dashboardRouter.patch("/updateMainInfo", patchMainInfo);
dashboardRouter.patch("/updateDay", patchDay);

export default dashboardRouter;
