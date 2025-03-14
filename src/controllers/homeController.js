import db from "../models";
import CRUDService from "../services/CRUDService";
let getHomePage = async (req, res) => {
  try {
    let data = await db.User.findAll();
    return res.render("homePage.ejs", { data: JSON.stringify(data) });
  } catch (e) {
    console.log(e);
  }
};
let getCRUD = (req, res) => {
  return res.render("CRUD.ejs");
};
let postCRUD = async (req, res) => {
  let message = await CRUDService.createNewUser(req.body);
  console.log(message);
  return res.send("post crud from server");
};
let displayGetCRUD = async (req, res) => {
  let data = await CRUDService.getAllUsers();
  console.log("---------------------------");
  console.log(data);
  console.log("---------------------------");
  return res.render("display-crud.ejs", { dataTable: data });
};
let getEditCRUD = async (req, res) => {
  let userId = req.query.id;
  if (userId) {
    let userData = await CRUDService.getUserInfoById(userId);
    //check user data not found

    return res.render("edit-crud.ejs", { user: userData });
  } else {
    return res.send("UsernotFond");
  }

  console.log(req.query.id);
};
let putCRUD = async (req, res) => {
  let data = req.body;
  let allUsers = await CRUDService.updateUserData(data);
  return res.render("display-crud.ejs", { dataTable: allUsers });
};
module.exports = {
  getHomePage: getHomePage,
  getCRUD: getCRUD,
  postCRUD: postCRUD,
  displayGetCRUD: displayGetCRUD,
  getEditCRUD: getEditCRUD,
  putCRUD: putCRUD,
};
