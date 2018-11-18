const express = require("express");
const router = express.Router();

// Item Model
const Item = require("../../models/Item");

// @route   get request api/items
// @desc    Get all items
// @access  Public
router.get("/", (req, res) => {
  Item.find() //Find all values in MongoDB
    .sort({ date: -1 }) //Sort By date in descending order
    .then(items => res.json(items)); //parse items into json format
});

// @route   post request api/items
// @desc    Create an item
// @access  Public
router.post("/", (req, res) => {
  const newItem = new Item({
    name: req.body.name,
    quantity: req.body.quantity,
    purchasePrice: req.body.purchasePrice,
    sellPrice: req.body.sellPrice,
    barcode: req.body.barcode,
  });

  newItem.save().then(item => res.json(item));
});

// @route GET api/product/search
// @desc Search for a product using the input string from search bar
// @access Public
// receive req to query from submitQuery at /actions/queryActions.js
//NOTE:
// search/?string <-we use-> req.query
// search/:string <-we use-> req.params
router.get("/search/", (req, res) => {
  if (req.query.name) {
    // find part of string which include lower and upper case
    const regex = new RegExp(req.query.name, "i");
    // find return [ ]
    Item.find({ name: regex })
      .then(item => {
        if (!item) {
          // if item not found
          errors = { query: "item not found" };
          return res.status(404).json(errors);
        }
        res.send(item);
      })
      .catch(err => {
        console.error(err);
      });
  } else if (req.query.barcode) {
    // find part of string which include lower and upper case
    const regex = new RegExp(req.query.barcode, "i");
    // find return [ ]
    Item.find({ barcode: regex })
      .then(item => {
        if (!item) {
          // if item not found
          errors = { query: "item not found" };
          return res.status(404).json(errors);
        }
        res.send(item);
      })
      .catch(err => {
        console.error(err);
      });
  }
});

// @route   delete request api/items/:id
// @desc    Delete an item
// @access  Public
router.delete("/:id", (req, res) => {
  Item.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
