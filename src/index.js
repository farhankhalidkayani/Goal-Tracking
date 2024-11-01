const express = require("express");
const dotenv = require("dotenv");
const connect = require("./Db/connectDb.js");
const goalRoutes = require("./routes/goal.routes.js");

dotenv.config();
const app = express();
connect();

try {
  app.listen(process.env.PORT);
  console.log(`Listening at PORT ${process.env.PORT}`);
} catch (err) {
  console.log(`Error : ${err}`);
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/goals", goalRoutes);
