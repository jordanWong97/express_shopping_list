const express = require('express');

const db = require('./fakeDb');

const router = new express.Router();


/** Returns a list of shopping items */
router.get('/items', function (req, res) {
  return res.send(db.items);
});

//post items

/** Accepts JSON format to add item and return it */
router.post('/items', function (req, res) {
  // ... Do some database operation here...
  // ... then return something as JSON ...
  //    req.body{name:item_name, price:x}
  const newItem = req.body;
  debugger;
  db.items.push(newItem);
  return res.statusCode.json({
    added: {
      name: req.body.name,
      price: req.body.price
    }
  });
});

//get items/:name
//patch items/:name
//delete items/:name


module.exports = router;