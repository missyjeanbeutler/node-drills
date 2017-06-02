const express = require('express'),
			bodyParser = require('body-parser'),
			port = 3000,
			data = require('./data')

const app = express()

app.use(bodyParser.json())

app.get('/api/data', function(req, res){
	let q = req.query;

	let filteredData = data.filter(function(obj) {
		for(var key in q) {
		  if(obj[key] !== q[key]) {
				return false;
			}
		}

		return true;
	});

	res.status(200).json(filteredData);
})

app.post('/api/data', function(req, res){
	var person = req.body
	data.push(person)
	res.status(200).send('ok')
})

app.get('/api/data/:id', function(req, res){
	let id = req.params.id;
	res.status(200).json(data[id])
})

app.delete('/api/data/:id', function(req, res) {
  var removed = data.splice(req.params.id, 1);
	res.status(200).send(removed[0]);
});

app.put('/api/data/:id', function(req, res) {
	var i = req.params.id;
	var q = req.query;

	for(var key in q) {
	  data[i][key] = q[key];
	}

	res.status(200).send(data[i]);
})


app.listen(port, function() {
	console.log('Listening on port',port);
})