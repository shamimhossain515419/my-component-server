const { Schema, default: mongoose } = require("mongoose");

const commentModel = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    detail: {
      type: String,
    },
    html: {
      type: String,
    },
    react: {
      type: String,
    },
    vue: {
      type: String,
    },
    status: {
      type: Boolean,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
  },

  { timestamps: true }
);

module.exports = commentModel;
