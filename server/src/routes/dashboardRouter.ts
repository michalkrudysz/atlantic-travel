import { Router } from "express";
import { patchMainInfo } from "../controllers/updateMainInfoController";
import { checkToken } from "../controllers/checkTokenController";
import { patchDay } from "../controllers/updateDayController";
import { createDay } from "../controllers/createDayController";
import { modifyIncludedExcursionsTrip } from "../controllers/modifyIncludedExcursionsTripController";
import { modifyServicesTrip } from "../controllers/modifyServicesTripController";

const dashboardRouter = Router();

dashboardRouter.get("/", checkToken);
dashboardRouter.patch("/updateMainInfo", patchMainInfo);
dashboardRouter.patch("/updateDay", patchDay);
dashboardRouter.post("/createDay", createDay);
dashboardRouter.post(
  "/modifyIncludedExcursionsTrip",
  modifyIncludedExcursionsTrip
);
dashboardRouter.post("/modifyServicesTrip", modifyServicesTrip);

export default dashboardRouter;
