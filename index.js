const { PORT } = require("./src/secret");
const connectDB = require("./src/config/db");
connectDB();
// Running Server
const app = require("./src/app");
app.get("/", (req, res) =>
  res.status(200).send(`Assalamualaikum. <br/> My Component Server Running`)
);
app.get("/data", (req, res) =>
  res.status(200).send(`Assalamualaikum. <br/> My Component Server Running`)
);

try {
  app.listen(PORT, async () => {
    console.log(`Server Running - http://localhost:${PORT}`);
  });
} catch (error) {
  console.log(error.message);
}
