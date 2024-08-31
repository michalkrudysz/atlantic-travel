import { Router } from "express";
import { patchMainInfo } from "../controllers/updateMainInfoController";
import { getDashboardInfo } from "../controllers/dashboardController"; // Nowy kontroler do obsługi GET /dashboard

const dashboardRouter = Router();

dashboardRouter.get("/", getDashboardInfo);
dashboardRouter.patch("/updateMainInfo", patchMainInfo);

export default dashboardRouter;
