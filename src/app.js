const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");

app.use(cors());

app.use(express.json());

app.use(express.json());
const ComponentsRouter = require("./routers/ComponentRouter");
const CategoryRouter = require("./routers/CategoryRoute");
app.use("/api/components", ComponentsRouter);
app.use("/api/category", CategoryRouter);

app.use((err, req, res, next) => {
  console.log(err);
  res.status(400).send(err);

  return res.status(err.status || 500).json({
    success: false,
    message: err.message,
    error: err,
  });
});

module.exports = app;
