const mongoose = require("mongoose");
const { mongodbURL } = require("../secret");

const connectDB = async () => {
  mongoose.set("strictQuery", false);
  try {
    await mongoose
      .connect(
        "mongodb+srv://my-component:my-component@cluster0.lbqcdjx.mongodb.net/",
        {
          useNewUrlParser: true,
          useUnifiedTopology: true,
          dbName: "my-components",
        }
      )
      .then(() => console.log("Database connection successful"))
      .catch((err) => console.log(err));
  } catch (error) {
    console.error("Could not connect to DB: ", error.toString());
  }
};

module.exports = connectDB;
