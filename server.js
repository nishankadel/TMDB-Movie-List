const express = require("express");
require("dotenv").config();
const router = require("./router");
const ejs = require("ejs");

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set("view engine", "ejs");

app.use(router);

app.listen(port, () => {
  console.log(`go to port ${port}`);
});
