import { Router } from "express";

const dashboardRouter = Router();
dashboardRouter.get("/", (req, res) => {
  res.send("Jesteś w dashboardzie");
});

export default dashboardRouter;
