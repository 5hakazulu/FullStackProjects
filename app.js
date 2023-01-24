const express = require("express");
const app = express();

// const pgp = require("pg-promise")();
// const db = pgp("postgres://postgres:password@localhost:5432/full_stack_development");



const port = 3000;

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.static("public"));

const { Sequelize, DataTypes } = require("sequelize");
// const { db } = require("./models");
const { Item, Consignor, Auction } = require("./models");
const sequelize = new Sequelize("postgres://postgres:password@localhost:5432/full_stack_development") // Example for postgres

app.get("/inventory", (req, res) => {
  res.render('pages/inventory');
});

app.get('/items', async (req, res) => {
  const items = await Item.findAll({ include: [Consignor, Auction] });
  res.json(items);
})

//add new person
app.post('/newPerson', async (req, res) => {
  console.log(req.body);
  const { firstName, lastName, username, email } = req.body;
  const newPerson = await Consignor.create({
    firstName,
    lastName,
    username,
    email
  });

  res.json({
    name: newPerson.firstName + newPerson.lastName
  });
})

// add new item
app.post('/newItem', async (req, res) => {
  console.log(req.body);
  const { itemName, itemPictures, itemDescription } = req.body
  const newAuctionItem = await Item.create({
    itemName,
    itemPictures,
    itemDescription
  })

  res.json({
    Item: newAuctionItem.itemName,

  })
  console.log(`${newAuctionItem.itemName} added.`);
})

//add new auction location
app.post('/newAuction', async (req, res) => {
  console.log(req.body);
  const { auctionName, auctionDate } = req.body
  const newAuctionLocation = await Auction.create({
    auctionName,
    auctionDate
  })

  res.json({
    Auction: newAuctionLocation.auctionName,

  })

})

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});