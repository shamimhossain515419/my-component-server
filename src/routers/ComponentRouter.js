const express = require("express");
const {
  componentPost,
  getAllComponent,
  getComponentByCategory,
  updateComponent,
  deletebyComponent,
} = require("../controllers/componentController");

const ComponentsRouter = express.Router();

ComponentsRouter.post("/", componentPost);
ComponentsRouter.get("/", getAllComponent);
ComponentsRouter.get("/category", getComponentByCategory);
ComponentsRouter.patch("/", updateComponent);
ComponentsRouter.delete("/", deletebyComponent);

module.exports = ComponentsRouter;
