const express = require("express");
const app = express();

// const pgp = require("pg-promise")();
// const db = pgp("postgres://postgres:password@localhost:5432/full_stack_development");

const port = 3000;

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.static("public"));

const { Sequelize, DataTypes } = require("sequelize");
const { Item, User, Auction } = require("./models");

// app.get("/", (req, res) => {
//   res.render("index");
// });

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});