const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const corsConfig = {
  origin: "#",
  credential: true,
  mathods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
};
app.use(cors(corsConfig));
app.options("", cors(corsConfig));

app.use(express.json());
const ComponentsRouter = require("./routers/ComponentRouter");
app.use("/api/components", ComponentsRouter);

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
