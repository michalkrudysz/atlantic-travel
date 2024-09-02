import { Router } from "express";
import { patchMainInfo } from "../controllers/updateMainInfoController";
import { checkToken } from "../controllers/checkTokenController";
import { patchDay } from "../controllers/updateDayController";
import { createDay } from "../controllers/createDayController";

const dashboardRouter = Router();

dashboardRouter.get("/", checkToken);
dashboardRouter.patch("/updateMainInfo", patchMainInfo);
dashboardRouter.patch("/updateDay", patchDay);
dashboardRouter.post("/createDay", createDay);

export default dashboardRouter;
