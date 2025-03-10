import express from "express";
import homeController from "../controllers/homeController";
let router = express.Router();

let initWebRoutes = (app) => {
  router.get("/", homeController.getHomePage);
  router.get("/abc", (req, res) => {
    return res.send("the fuck");
  });
  router.get("/crud", homeController.getCRUD);
  router.post("/post-crud", homeController.postCRUD);
  //rest API
  return app.use("/", router);
};
module.exports = initWebRoutes;
