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
    name: req.body.name
  });

  newItem.save().then(item => res.json(item));
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
