var express = require('express');
var router = express.Router();

//bring in user controller
const userController = require("./controller/userController");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({
    status:"success",
    message: "This will be the users for your application." 
  });
});

// router.get('/get-all-users', function(req, res, next) {
//   res.json({
//     status:"success",
//     message: "You have gotten all users." 
//   });
// });

router.get('/get-all-users', function(req, res){
  userController.getAllUsers(function (err, payload){
    if (err){
      res.status(500).json({
        message: "Error",
        error: "shucks " + err
      });
    } else {
      res.json({
        status: "Success",
        message: "You did it!",
        data: payload
      });
    }
  });
});

module.exports = router;