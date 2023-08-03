const express = require('express');
const DBconnect = require('../middlewares/DBconnect');
const errorMessages = require('../functions/errorMesages');
const router = express.Router();

/* GET users listing. */
router.get('/', DBconnect, function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
