const { default: mongoose } = require("mongoose");
const commentModel = require("../models/componentModal");

const ComponentsCollection = new mongoose.model("components", commentModel);

module.exports = {
  ComponentsCollection,
};
