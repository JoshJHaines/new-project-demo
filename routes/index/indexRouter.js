var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({ 
    status:"success",
    message: "This will be the homepage for your application."
  });
});

module.exports = router;
