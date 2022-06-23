const express = require("express");
const router = express.Router();
const fs = require('fs');
const cardInfo = require('../models/cardInfo.json');
const constCardInfo = require('../models/constCardInfo.json');
let path = require('path');

let filePathCardInfo = path.join(__dirname, '../models/cardInfo.json');
let filePathConstCardInfo = path.join(__dirname, '../models/constCardInfo.json');

router.get('/', function (req, res, next) {
  let rawdata = fs.readFileSync(filePathCardInfo);
  res.json(JSON.parse(rawdata));
});

router.get('/constCard', function (req, res, next) {
  let rawdata = fs.readFileSync(filePathConstCardInfo);
  res.json(JSON.parse(rawdata));
});

router.get('/delete', function (req, res, next) {
  let rawdata = JSON.parse(fs.readFileSync(filePathCardInfo));
  let key = JSON.parse(req.query.idArr);
  console.log(key);
  let result = rawdata;
  key.forEach((id)=>{
    result = result.filter(n => Number(n.id) !== id);
  });

  console.log(result);
  fs.writeFileSync(filePathCardInfo, JSON.stringify(result));
  res.json(result);
});

router.post('/return', function (req, res, next) {
  fs.writeFileSync(filePathCardInfo, fs.readFileSync(filePathConstCardInfo));
  res.send("The database returns to the initial state!");
});

router.post('/updateDb', function(req, res, next){
  fs.writeFileSync(filePathCardInfo, req.body.data);
  res.send("Db isUpdated!");
});

module.exports = router;