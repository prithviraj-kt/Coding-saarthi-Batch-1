const express = require("express");
// const cors = require("cors");
// const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();

const URL = "mongodb://localhost:27017/CODINGSAARTHI";

const PORT = 8080;

app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use("/", require("./Routes/Registration"));

mongoose
  .connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server started at port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err.message);
  });
