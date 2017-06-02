var express = require('express');
var bodyParser = require('body-parser');
var port = 3000;
var data = require('./data.js')

var app = express();

app.use(bodyParser.json());


app.get('/api/data', function(req, res) {
	// console.log(req.query)
	// let winners = data.filter(function(e, i, arr) {
	// 	let q = req.query
	// 	for(let key in q) {
	// 		if(e[key] != q[key]) {
	// 			return false
	// 		}
	// 	}
	// 	return true
	// })
	let q = req.query
	let arr = []
	for(let i = 0; i < data.length; i++) {
		let count = 0;
		for(let key in q) {
			if(data[i][key] != q[key]) {
				count++
			}
		}
		if(!count) arr.push(data[i])
	}
	res.status(200).send(arr)
})

app.post('/api/data', function(req, res) {
	data.push(req.body)
	res.status(200).send('ok')
})

app.get('/api/data/:index', function(req, res) {
	res.status(200).send(data[req.params.index])
})

app.delete('/api/data/:index', function(req, res) {
	let deleted = data.splice(req.params.index, 1)
	res.status(200).send(deleted)
})

app.put('/api/data/:index', function(req, res) {
	Object.assign(data[req.params.index], req.query)
	res.status(200).send(data[req.params.index])
})




app.listen(port, function() {
	console.log('Listening on port',port);
})