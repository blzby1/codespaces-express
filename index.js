const express = require('express');
const subdomain = require('express-subdomain');
const fs = require('fs');
const http = require('http')
const bodyParser = require('body-parser')

var app = express();
var router = express.Router();

const httpServer = http.createServer(app, router)



app.use("/", bodyParser.urlencoded({extended: false}));
app.use('/public', express.static(__dirname + '/public'));

router.get('/:taker', function(req, res) {
    res.json({
        message: "this is a test, nothing is here"
    });
});

app.use(subdomain('sv', router));

codes = ["demo", "69iscooll", "ronana", "password", "chickentender", "derekgaming", "wgeoiscool"]

app.route('/').get(function(req, res) {
    res.sendFile(__dirname + "/views/index.html")
})

app.get('/log', function(req, res) {
    var funnyip = req.ip
    res.json({
        ip: funnyip
    });
    console.log(req.method, funnyip);
});

const HTTP_PORT = 2453

httpServer.listen(HTTP_PORT, function() {
    console.log('HTTP server running on port ' + HTTP_PORT);
	console.log(codes);
});