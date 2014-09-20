var express = require('express');
var request = require('request');
var app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
 });

 app.get('/image/:item', function(req, res, next){
 	var item = req.params.item.replace(' ', '+');
 	request('http://api.duckduckgo.com/?q=' + item + '&format=json&pretty=1', function(error, response, body){
 		res.send(body);
 	})
 });

var port = process.env.PORT || 5000;
app.listen(port);