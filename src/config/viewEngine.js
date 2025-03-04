import express from "express";

let configViewEngine = (app) => {
  app.set("views", "./src/views");
  app.use(express.static("./src/public"));
  app.set("view engine", "ejs");
};
module.exports = configViewEngine;
