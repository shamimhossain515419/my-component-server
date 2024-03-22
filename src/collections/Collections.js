const { default: mongoose } = require("mongoose");
const commentModel = require("../models/componentModal");
const CategoryModel = require("../models/CategoryModal");

const ComponentsCollection = new mongoose.model("components", commentModel);
const CategoryCollection = new mongoose.model("category", CategoryModel);

module.exports = {
  ComponentsCollection,
  CategoryCollection,
};
