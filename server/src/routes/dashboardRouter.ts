import { Router } from "express";
import { patchMainInfo } from "../controllers/updateMainInfoController";
import { checkToken } from "../controllers/checkTokenController";
import { patchDay } from "../controllers/updateDayController";
import { createDay } from "../controllers/createDayController";
import { modifyIncludedExcursionsTrip } from "../controllers/modifyIncludedExcursionsTripController";
import { modifyServicesTrip } from "../controllers/modifyServicesTripController";
import { modifyOptionalExcursionsTrip } from "../controllers/modifyOptionalExcursionsTripController";
import { modifyContactTrip } from "../controllers/modifyContactTripController";
import { upload } from "../middleware/uploadMiddleware";
import { updatePhotoTripController } from "../controllers/updatePhotoTripController";
import { deleteTripController } from "../controllers/deleteTripController";
import { addTripController } from "../controllers/addTripController";

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
dashboardRouter.post(
  "/modifyOptionalExcursionsTrip",
  modifyOptionalExcursionsTrip
);
dashboardRouter.post("/modifyContactTrip", modifyContactTrip);
dashboardRouter.post(
  "/updatePhotoTrip",
  upload.single("photo"),
  updatePhotoTripController
);
dashboardRouter.delete("/deleteTrip", deleteTripController);
dashboardRouter.post("/addTrip", addTripController);

export default dashboardRouter;
