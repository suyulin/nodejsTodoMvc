var express = require('express');
var router = express.Router();
const requestApi = require('../config/request');
const https = require('https');
/* GET home page. */
router.get('/', async(req, res, next) => {
  const path = 'https://cnodejs.org/api/v1/user/SevenSharp';
  let data;
  try {
    data = await requestApi(path, null, 'get');
  } catch (error) {
    data = "没有数据"
  }
  res.render('index', {
    title: 'hello world',
    content: JSON.stringify(data)
  });
});
module.exports = router;