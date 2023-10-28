const { Router } = require("express");
const { save } = require("../save_json");
const AWS = require("aws-sdk");
const s3 = new AWS.S3()

const router = new Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;




