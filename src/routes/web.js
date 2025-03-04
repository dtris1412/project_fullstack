import express from "express";
import homeController from "../controllers/homeController";
let router = express.Router();

let initWebRoutes = (app) => {
  router.get("/", homeController.getHomePage);
  router.get("/abc", (req, res) => {
    return res.send("the fuck");
  });
  //rest API
  return app.use("/", router);
};
module.exports = initWebRoutes;
