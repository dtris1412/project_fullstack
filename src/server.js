import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initWebRoutes from "./routes/web";
import connectDB from "./config/connectdb";
require("dotenv").config();

let app = express();
//config app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

viewEngine(app);
initWebRoutes(app);

connectDB();
let port = process.env.PORT || 8081;
let hostname = process.env.HOST_NAME;
app.listen(port, hostname, () => {
  //callback function
  console.log("backend nodejs is running on the port", port);
});
