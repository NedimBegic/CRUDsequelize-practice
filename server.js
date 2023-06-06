const express = require("express");
// we must import the index and User model
const { sequelize } = require("./models");
// Routes
const bootcamp = require("./routes/bootcamp");
const errorHandler = require("./middleware/error");

const app = express();
// Body parser for access req.body
app.use(express.json());

app.use("/bootcamp", bootcamp);

app.use(errorHandler);

const PORT = 5000;
app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);
  await sequelize.sync();
  console.log("Database connected");
});
