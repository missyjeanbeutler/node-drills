var express = require('express');
var bodyParser = require('body-parser');
var port = 3000;
var data = require('./data.js')

var app = express();

app.use(bodyParser.json());


app.get('/api/data', function(req, res) {
	let winners = data.filter(function(e, i, arr) {
		if(req.query)
	})
})

app.post('/api/data', function(req, res) {
	data.push(req.body)
	res.status(200).send('ok')
})

app.get('/api/data/:index', function(req, res) {
	res.status(200).send(data[req.params.index])
})




app.listen(port, function() {
	console.log('Listening on port',port);
})