const app = require("./src/app");
const { PORT } = require("./src/secret");
const connectDB = require("./src/config/db");
connectDB();
// Running Server

app.get("/", (req, res) =>
  res.status(200).send(`Assalamualaikum. <br/> My Component Server Running`)
);
try {
  app.listen(PORT, async () => {
    console.log(`Server Running - http://localhost:${PORT}`);
  });
} catch (error) {
  console.log(error.message);
}
