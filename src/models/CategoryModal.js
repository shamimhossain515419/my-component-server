const { Schema, default: mongoose } = require("mongoose");

const CategoryModel = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },

  { timestamps: true }
);

module.exports = CategoryModel;
