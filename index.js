//required necessary modules
const express = require("express");
const mongoose = require("mongoose");
const taskRoute = require("./Routes/routes");

const app = express();
require("dotenv").config();

app.use(express.json());

//baseurl 
app.use("/api/tasks", taskRoute);

//setting up port and mongodb conncetion url
const port = process.env.PORT || 8050;
const url = process.env.COMPASS_URI;

//listening the backend app
app.listen(port, (req, res) => {
  console.log(`server is up and running at port: ${port}`);
});

//connection with the database
mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Successfully connected to MongoDB"))
  .catch((error) => console.log("MongoDB connection Failed: ", error.message));
