const {
  CategoryPost,
  CategoryDelete,
  CategoryGet,
} = require("../controllers/CategoryController");
const express = require("express");
const CategoryRouter = express.Router();

CategoryRouter.post("/", CategoryPost);
CategoryRouter.get("/", CategoryGet);
CategoryRouter.delete("/:id", CategoryDelete);

module.exports = CategoryRouter;
