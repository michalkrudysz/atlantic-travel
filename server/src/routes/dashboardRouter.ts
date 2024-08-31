import { Router } from "express";
import { patchMainInfo } from "../controllers/updateMainInfoController";
import { checkToken } from "../controllers/checkTokenController";

const dashboardRouter = Router();

dashboardRouter.get("/", checkToken);
dashboardRouter.patch("/updateMainInfo", patchMainInfo);

export default dashboardRouter;
