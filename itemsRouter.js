const express = require('express');

const db = require('./fakeDb');

const router = new express.Router();


/** Returns a list of shopping items */
router.get('/', function (req, res) {
  return res.send(db.items);
});

//post items

/** Accepts JSON format to add item and return it */
router.post('/', function (req, res) {
  // ... Do some database operation here...
  // ... then return something as JSON ...
  //    req.body{name:item_name, price:x}

  db.items.push(req.body);
  return res.json({
    added: {
      name: req.body.name,
      price: req.body.price
    }
  });
});

//get items/:name
router.get("/:name", function(req,res){
  const item = db.items.find(i =>
    i.name === req.params.name
  );

  return res.send({item});
})

//patch items/:name
router.patch("/:name", function(req, res){
  let item = db.items.find(i =>
    i.name === req.params.name
  );

  let index = db.items.indexOf(item);

  db.items[index] = req.body;
  // item = req.json();

  return res.json({
    updated:{
      name: req.body.name,
      price: req.body.price
    }
  })
})


//delete items/:name
router.delete("/:name", function(req, res){

})

module.exports = router;