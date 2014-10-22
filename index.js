var matchAPI = "https://api.steampowered.com/IDOTA2Match_570/GetMatchDetails/V001/";
var key = "E2469B841908CBF830EC652B7BAB5D71";

var express = require('express');
var request = require('request');
var app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
 });

 app.get('/match/:matchID', function(req, res, next){
 	request(matchAPI + "?key=" + key + "&match_id=" + req.params.matchID,
 	function(error, response, body){
 		res.send(body);
 	})
 });

var port = process.env.PORT || 5000;
app.listen(port);